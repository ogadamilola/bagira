import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemas } from "./sanity/shemas";

const config = defineConfig({
  projectId: "wupfgjk5",
  dataset: "production",
  title: "BAGI Creatives",
  apiVersion: "2024-09-08",
  useCdn: true,
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],

  schema: { types: schemas },
});

export default config;
