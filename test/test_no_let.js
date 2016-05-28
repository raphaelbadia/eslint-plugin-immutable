"use strict";

var RuleTester = require("eslint").RuleTester;

var rule = require("../index.js").rules['no-let'];
var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});


ruleTester.run("no-let", rule, {
  valid: [
    "const x = 4;",
    "const { x, y } = obj;",
    "export const x = 4;",
    "export const { x, y } = obj;",
  ],
  invalid: [{
    code: "let x = 4;",
    errors: [{
      message: "Unexpected let, use const.",
    }],
  }, {
    code: "export let x = 4;",
    errors: [{
      message: "Unexpected let, use const.",
    }],
  }, {
    code: "export let { x, y } = obj;",
    errors: [{
      message: "Unexpected let, use const.",
    }],
  }],
});
