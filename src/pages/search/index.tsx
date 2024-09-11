import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

export default function Page() {
  return <div></div>;
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
