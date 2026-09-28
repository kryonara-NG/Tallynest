"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { ZWorkspace } from "@formbricks/types/workspace";
import { createWorkspaceAction } from "@/app/(app)/workspaces/[workspaceId]/actions";
import { getFormattedErrorMessage } from "@/lib/utils/helper";
import { Button } from "@/modules/ui/components/button";
import {
  Dialog, DialogBody, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
} from "@/modules/ui/components/dialog";
import { FormControl, FormError, FormField, FormItem, FormLabel, FormProvider } from "@/modules/ui/components/form";
import { Input } from "@/modules/ui/components/input";

const ZCreateWorkspaceForm = z.object({ name: ZWorkspace.shape.name });
type TCreateWorkspaceForm = z.infer<typeof ZCreateWorkspaceForm>;

interface CreateWorkspaceModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  organizationId: string;
  isAccessControlAllowed: boolean;
}

export const CreateWorkspaceModal = ({ open, setOpen, organizationId }: CreateWorkspaceModalProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const form = useForm<TCreateWorkspaceForm>({
    resolver: zodResolver(ZCreateWorkspaceForm),
    defaultValues: { name: "" },
  });

  const onSubmit = async (data: TCreateWorkspaceForm) => {
    const result = await createWorkspaceAction({ organizationId, data: { name: data.name, teamIds: [] } });
    if (result?.data) {
      toast.success(t("common.workspace_created_successfully"));
      setOpen(false);
      form.reset();
      router.push(`/workspaces/${result.data.id}/surveys`);
    } else {
      toast.error(getFormattedErrorMessage(result));
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent unconstrained>
        <DialogHeader>
          <DialogTitle>{t("common.create_workspace")}</DialogTitle>
          <DialogDescription>{t("common.workspace_creation_description")}</DialogDescription>
        </DialogHeader>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogBody>
              <FormField
                control={form.control}
                name="name"
                render={({ field, fieldState: { error } }) => (
                  <FormItem>
                    <FormLabel>{t("common.workspace_name")}</FormLabel>
                    <FormControl><Input {...field} autoFocus /></FormControl>
                    {error?.message && <FormError>{error.message}</FormError>}
                  </FormItem>
                )}
              />
            </DialogBody>
            <DialogFooter>
              <Button type="button" variant="secondary" onClick={() => setOpen(false)}>{t("common.cancel")}</Button>
              <Button type="submit" loading={form.formState.isSubmitting}>{t("common.create_workspace")}</Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
