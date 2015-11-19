/**
 * Get the maximum natural
 * height of a group of
 * elements
 *
 * @param nodeArray array
 * @returns number
 */
function getMaxHeight(nodeArray) {
	return nodeArray.reduce((maxHeight, {offsetHeight}) =>
		maxHeight < offsetHeight ? offsetHeight : maxHeight, 0
	);
}


/**
 * Set the minHeight of each
 * node in an array of nodes
 *
 * @param nodeArray array
 * @param height number|string
 */
function setMinHeight(nodeArray, height) {
	nodeArray.forEach(node => {
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
	const maxHeight = getMaxHeight(nodeArray) + 'px';
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
export default function eqheights(nodes, {autorun = true} = {}) {
	if ('string' !== typeof nodes && !(nodes instanceof NodeList && nodes.constructor === NodeList)) {
		throw new TypeError('eqheights expects either a selector string or a NodeList as input.');
	}

	const nodeList = 'string' === typeof nodes
		? document.querySelectorAll(nodes)
		: nodes;

	const nodeArray = [...nodeList];

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
		clear,

		/**
		 * Reset all min-heights
		 * and re-equalize the
		 * elements
		 *
		 */
		recalc() {
			clear();
			equalizeHeights(nodeArray);
		}
	};
}
