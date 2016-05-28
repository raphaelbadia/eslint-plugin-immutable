"use strict";

var checkExceptions = require('./check_exceptions');

module.exports = {
    rules: {
        "no-let": function(context) {
		    return {
		        "VariableDeclaration": function(node) {
		            if (node.kind === "let") {
		                context.report(node, "Unexpected let, use const.");
		            }
		        }
		    };
		},
		"no-this": function(context) {
			return {
				"ThisExpression": function(node) {
					context.report(node, "Unexpected this, use functions not classes.");
				}
			}
		},
		"no-mutation": function(context) {
			return {
				"AssignmentExpression": function(node) {
					var options = context.options[0] || {};
					var exceptions = options.exceptions || [];

					if (checkExceptions(node, exceptions)) {
						return;
					}

					if (node.left.type === "MemberExpression") {
						context.report(node, "No object mutation allowed.");
					}
				}
			}
		}		
    },
	configs: {
		recommended: {
	    	rules: {
	        	'redux/no-let': 2,
	        	'redux/no-this': 2,
	        	'redux/no-mutation': 2
	      	}
	    }
	}    
};


//no-undef
