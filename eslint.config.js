    module.exports = [
      {
        files: ["public/js/**/*.js"],
        languageOptions: {
          sourceType: "script",
          globals: { document: "readonly", window: "readonly", XMLHttpRequest: "readonly", md5: "readonly" }
        },
        rules: {
          semi: ["error", "always"],
          "no-undef": "error",
          eqeqeq: "warn"
        }
      }
    ];
