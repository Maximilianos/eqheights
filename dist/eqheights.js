(function (global, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'module'], factory);
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod);
		global.eqheights = mod.exports;
	}
})(this, function (exports, module) {
	/**
  * Get the maximum natural
  * height of a group of
  * elements
  *
  * @param nodeArray array
  * @returns number
  */
	'use strict';

	module.exports = eqheights;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	function getMaxHeight(nodeArray) {
		return nodeArray.reduce(function (maxHeight, _ref) {
			var offsetHeight = _ref.offsetHeight;
			return maxHeight < offsetHeight ? offsetHeight : maxHeight;
		}, 0);
	}

	/**
  * Set the minHeight of each
  * node in an array of nodes
  *
  * @param nodeArray array
  * @param height number|string
  */
	function setMinHeight(nodeArray, height) {
		nodeArray.forEach(function (node) {
			node.style.minHeight = height;
		});
	}

	/**
  * Equalize the Heights of
  * a group of elements in
  * a nodeArray
  *
  * @param nodeArray
  */
	function equalizeHeights(nodeArray) {
		var maxHeight = getMaxHeight(nodeArray) + 'px';
		setMinHeight(nodeArray, maxHeight);
	}

	/**
  * Equalize the Heights of
  * a group of elements
  *
  * @param nodes NodeList|string
  * @param autorun bool
  * @returns {{clear}}
  */

	function eqheights(nodes) {
		var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		var _ref2$autorun = _ref2.autorun;
		var autorun = _ref2$autorun === undefined ? true : _ref2$autorun;

		if ('string' !== typeof nodes && !(nodes instanceof NodeList && nodes.constructor === NodeList)) {
			throw new TypeError('eqheights expects either a selector string or a NodeList as input.');
		}

		var nodeList = 'string' === typeof nodes ? document.querySelectorAll(nodes) : nodes;

		var nodeArray = [].concat(_toConsumableArray(nodeList));

		if (autorun) {
			equalizeHeights(nodeArray);
		}

		/**
   * Clear all min-heights
   * set on element's style
   * tag
   *
   */
		function clear() {
			setMinHeight(nodeArray, '');
		}

		return {
			clear: clear,

			/**
    * Reset all min-heights
    * and re-equalize the
    * elements
    *
    */
			recalc: function recalc() {
				clear();
				equalizeHeights(nodeArray);
			}
		};
	}
});