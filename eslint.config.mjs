// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import css from "@eslint/css";

export default withNuxt(
  [
    {
      // Your custom configs here
      files: ["**/*.css"],
      plugins: {
        css,
      },
      language: "css/css",
      languageOptions: {
        customSyntax: {
          atrules: {
            "my-at-rule": {
              prelude: "<string>",
            },
          },
        },
      },
      rules: {
        // CSS
        "css/no-empty-blocks": "error",
        "css/no-duplicate-imports": "error",
        "no-irregular-whitespace": "off",
      },
    },
  ],
  [
    {
      files: ["**/*.vue"],
      rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "no-unused-vars": [
          "error",
          {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: true,
          },
        ],
        "no-console": [
          "warn",
          {
            allow: ["warn", "error"],
          },
        ],
        "vue/no-v-html": "error",
        "vue/no-dupe-keys": "error",
        "vue/html-self-closing": [
          "error",
          {
            html: {
              void: "never",
              normal: "never",
              component: "always",
            },
            svg: "always",
            math: "always",
          },
        ],
        "vue/no-textarea-mustache": "error",
        "vue/no-unused-components": "error",
        "vue/require-v-for-key": "error",
        "vue/html-end-tags": "error",
        "vue/mustache-interpolation-spacing": "error",
        "vue/no-multi-spaces": "error",
        "vue/singleline-html-element-content-newline": [
          "warn",
          {
            ignoreWhenNoAttributes: true,
            ignoreWhenEmpty: true,
            ignores: ["pre", "textarea"],
            externalIgnores: [],
          },
        ],
        "no-irregular-whitespace": "off",
      },
    },
  ]
);
