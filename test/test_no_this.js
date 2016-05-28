"use strict";

var RuleTester = require("eslint").RuleTester;

var rule = require("../index.js").rules['no-this'];
var ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});


ruleTester.run("no-this", rule, {
  valid: [
    "function set() { obj.x = 4; }",
    "() => obj.x;",
  ],
  invalid: [{
    code: "function set() { this.x = 4; }",
    errors: [{
      message: "Unexpected this, use functions not classes.",
    }],
  }, {
    code: "function get() { return this.x; }",
    errors: [{
      message: "Unexpected this, use functions not classes.",
    }],
  }],
});
