import { PricingPage } from "@/modules/tallynest-core/compat/billing/page";

const Page = (props: Readonly<{ params: Promise<{ organizationId: string }> }>) => {
  return PricingPage(props);
};

export default Page;
