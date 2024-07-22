import Page from "@/components/layout/page";
import Body from "@/components/pages/BAGI";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Work | Bagira | @bagira_art",
  description: "Photography | Videography",
};

export default function Home() {

  return (
    <Page>
      <Body />
    </Page>
  );
}
