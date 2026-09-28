import { redirect } from "next/navigation";

interface PlanPageProps {
  params: Promise<{ organizationId: string }>;
}

const Page = async (props: PlanPageProps) => {
  const params = await props.params;
  return redirect(`/organizations/${params.organizationId}/workspaces/new/survey`);
};

export default Page;
