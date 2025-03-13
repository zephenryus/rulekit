import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import eslintParserTs from "@typescript-eslint/parser";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: eslintParserTs,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      "@typescript-eslint": eslintPluginTs,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginTs.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
      "no-console": "warn",
    },
  },
];
