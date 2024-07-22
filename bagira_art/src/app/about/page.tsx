import Page from "@/components/layout/page";
import Body from "@/components/pages/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Bagira | @bagira_art",
  description: "Photography | Videography",
};

export default function Home() {

  return (
    <Page>
      <Body />
    </Page>
  );
}
