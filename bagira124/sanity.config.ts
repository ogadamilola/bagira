import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemas } from "./sanity/shemas";

const config = defineConfig({
  projectId: "lxmw6n4d",
  dataset: "production",
  title: "Bagira Art",
  apiVersion: "2024-08-20",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {types: schemas}
});

export default config;
