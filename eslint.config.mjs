import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: {
        node: true, // <-- Migrated env to languageOptions.globals
      },
    },
    plugins: {
      js,
      prettier: eslintPluginPrettier,
    },
    extends: [
      "js/recommended",
      ...tseslint.configs.recommended,
      prettier, // disables formatting rules that conflict with Prettier
    ],
    rules: {
      "prettier/prettier": "error", // shows Prettier formatting issues as lint errors
    },
  },
]);
