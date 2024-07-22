import Page from "@/components/layout/page";
import Body from "@/components/pages/Home";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "BAGIRA - BAGIRA artist and muralist of Curacao",
  description: "BAGIRA artist and muralist of Curacao",
};

export default function Home() {
  return (
      <Page>
        <Body />
      </Page>
  );
}
