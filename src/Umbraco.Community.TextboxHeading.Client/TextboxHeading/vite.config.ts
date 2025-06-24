import { defineConfig } from "vite";

export default defineConfig({
  build: {    
    lib: {
      entry: "src/bundle.manifests.ts",
      formats: ["es"],
       fileName: "umbraco-community-textbox-heading",
    },
    outDir: "../../Umbraco.Community.TextboxHeading.Assets/wwwroot/TextboxHeading",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [/^@umbraco/],
    }
  },
  base: "/App_Plugins/TextboxHeading/",
});