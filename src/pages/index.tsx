import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect } from "react";

export default function Home() {
  return <div></div>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
