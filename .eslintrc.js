module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaVersion: 2018,
    errorOnUnknownASTType: true,
    errorOnTypeScriptSyntacticAndSemanticIssues: true,
    project: "tsconfig.json",
    sourceType: "module"
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "class-methods-use-this": "off",
    "dot-notation": ["error", { "allowPattern": "^(code)$" }],
    "function-paren-newline": [
      "error",
      "consistent",
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "error",
    "max-len": [
      "error",
      {
        code: 124,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "no-underscore-dangle": ["error", { "allow": ["_id", "_headers"] }],
    "object-curly-spacing": ["error", "always"],
    "prettier/prettier": ["error", { printWidth: 124 }],
    "react/react-in-jsx-scope" : 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error']
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    beforeEach: true,
    afterEach: true,
    describe: true,
    it: true,
    expect: true,
  },
  plugins: [
    "@typescript-eslint",
    "json",
    "prettier",
    "react",
    "import"
  ],
  settings: {
    "react": {
      pragma: "h",
      version: "detect",
    },
    "import/extensions": [".js",".jsx",".ts",".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts",".tsx"]
    },
    "import/resolver": {
      "typescript": {}
    }
  },
  root: true,
  ignorePatterns: ["/node_modules/*", "/public/*", "/build/*", ".eslintrc.js"],
};
