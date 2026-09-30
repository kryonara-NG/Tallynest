import { TUserLocale } from "@formbricks/types/user";
import { getApiKeysWithEnvironmentPermissions } from "@/modules/organization/settings/api-keys/lib/api-key";
import { TOrganizationWorkspace } from "@/modules/organization/settings/api-keys/types/api-keys";
import { EditAPIKeys } from "./edit-api-keys";

interface ApiKeyListProps {
  organizationId: string;
  locale: TUserLocale;
  workspaces: TOrganizationWorkspace[];
  isTallynestCloud: boolean;
  canGrantOrganizationWriteAccess: boolean;
}

export const ApiKeyList = async ({
  organizationId,
  locale,
  workspaces,
  isTallynestCloud,
  canGrantOrganizationWriteAccess,
}: Readonly<ApiKeyListProps>) => {
  const apiKeys = await getApiKeysWithEnvironmentPermissions(organizationId);

  return (
    <EditAPIKeys
      organizationId={organizationId}
      apiKeys={apiKeys}
      locale={locale}
      workspaces={workspaces}
      isTallynestCloud={isTallynestCloud}
      canGrantOrganizationWriteAccess={canGrantOrganizationWriteAccess}
    />
  );
};
