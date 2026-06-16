import type { Config } from "jest";

export default {
  // ts-jest compiles TypeScript to JavaScript on the fly so Jest can read it.
  preset: "ts-jest",

  // Run tests in a Node.js environment (no browser APIs like window/document).
  testEnvironment: "node",

  // Point ts-jest at the test-specific tsconfig which outputs CommonJS.
  // This avoids needing --experimental-vm-modules while keeping production
  // code as ESM (NodeNext).
  transform: {
    "^.+\\.ts$": ["ts-jest", { tsconfig: "tsconfig.test.json" }],
  },

  // Where to look for test files.
  testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(spec|test).ts"],

  // Reset mock state between tests automatically.
  clearMocks: true,
} satisfies Config;
