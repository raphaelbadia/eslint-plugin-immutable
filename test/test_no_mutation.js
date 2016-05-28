"use strict";

var RuleTester = require("eslint").RuleTester;

var rule = require("../index.js").rules['no-mutation'];
var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});


ruleTester.run("no-mutation", rule, {
  valid: [
    "const x = obj.y;",
    "const { x, y } = obj;",
    "export const x = 4;",
    "export const { x, y } = obj;",
    "x = 4;",
  ],
  invalid: [{
    code: "obj.x = 4;",
    errors: [{
      message: "No object mutation allowed.",
    }],
  }],
});
