import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import configPrettier from "eslint-config-prettier";
import jest from "eslint-plugin-jest";

const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  configPrettier,
  {
    files: ["**/*.test.js", "**/*.test.mjs", "**/*.spec.js", "**/*.spec.mjs"],
    plugins: { jest: jest },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...jest.configs.recommended.rules,
      "jest/no-disabled-tests": "warn",
    },
  },
]);

export default eslintConfig;
