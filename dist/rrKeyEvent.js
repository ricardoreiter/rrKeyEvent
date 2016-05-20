(function () { 
"use strict";

var module = angular.module('rrKeyEvent', []);
var ENTER_KEY_CODE = 13;

module.directive('rrEnterKeyPress', function() {
    return {
    		restrict: 'A',
    		link: function($scope, $element, $attrs) {
		        bindKeyPressEvent($scope, $element, $attrs.rrEnterKeyPress, ENTER_KEY_CODE);
	    	}
	};
});

module.directive('rrKeyPress', function() {
    return {
    		restrict: 'A',
    		link: function($scope, $element, $attrs) {
    			bindKeyPressEvent($scope, $element, $attrs.rrKeyPress, $attrs.rrKeyCode);
    		}
	};
});

function bindKeyPressEvent(scope, element, keyEvent, keyCode) {
    element.bind("keypress keyup", function(event) {
        var typedKeyCode = event.which || event.keyCode;

        if (typedKeyCode == keyCode) {
            scope.$apply(function() {
                scope.$eval(keyEvent);
            });
        }
    });
}

}());
//# sourceMappingURL=rrKeyEvent.js.map