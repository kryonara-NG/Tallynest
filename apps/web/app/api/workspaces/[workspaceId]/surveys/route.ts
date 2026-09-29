import { NextResponse } from "next/server";
import { enforceWorkspaceAccess } from "@/lib/workspace";
import { prisma } from "@tallynest/database";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ workspaceId: string }> }
) {
  const { workspaceId } = await params;

  try {
    const { workspace } = await enforceWorkspaceAccess(workspaceId);
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "Survey name is required" }, { status: 400 });
    }

    const survey = await prisma.survey.create({
      data: {
        name,
        status: "DRAFT",
        workspaceId: workspace.id,
        questions: {
          create: [
            {
              type: "OPEN_TEXT",
              headline: "How can we improve our product?",
              subheader: "Please share any feedback or thoughts you have.",
              required: true,
              order: 0,
            },
          ],
        },
      },
      include: {
        questions: true,
      },
    });

    return NextResponse.json({ survey });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to create survey";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
