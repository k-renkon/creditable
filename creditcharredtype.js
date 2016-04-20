// Input a credit card number string, returns a key signifying the type of credit card it is
(function( w ) {
	"use strict";

	var types = {
		MASTERCARD: /^5[1-5]/,
		VISA: /^4/,
		DISCOVER: /^6(011|5)/,
		AMEX: /^3[47]/
	};

	function CreditCharredType( val ) {
		for( var j in types ) {
			if( !!val.match( types[ j ] ) ) {
				return j;
			}
		}

		return -1;
	}

	CreditCharredType.TYPES = types;

	if( typeof module !== "undefined" ) {
		module.exports = CreditCharredType;
	} else {
		w.CreditCharredType = CreditCharredType;
	}

}( typeof global !== "undefined" ? global : this ));
