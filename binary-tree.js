/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}

	/** minDepth(): return the minimum depth of the tree -- that is,
	 * the length of the shortest path from the root to a leaf. */

	minDepth() {
		if (!this.root) return 0;

		function findMinDepth(node, depth=1) {
			if (node.left === null && node.right === null) return depth;

			return Math.min(findMinDepth(node.left, depth+1), findMinDepth(node.right, depth+1))
		}

		return findMinDepth(this.root);
	}

	/** maxDepth(): return the maximum depth of the tree -- that is,
	 * the length of the longest path from the root to a leaf. */

	maxDepth() {
		if (!this.root) return 0;

		function findMaxDepth(node, depth=1) {
			if (node.left === null && node.right === null) return depth;

			return Math.max(findMaxDepth(node.left, depth+1), findMaxDepth(node.right, depth+1))
		}

		return findMaxDepth(this.root);
	}

	/** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
	 * The path doesn't need to start at the root, but you can't visit a node more than once. */

	maxSum() {
		// if (!this.root) return 0;

		// function findSum(node, sum=0) {
		// 	if (!node) return sum;

		// 	sum = Math.max(sum, );

		// 	if (node.left === null && node.right === null) return sum;

		// 	return Math.max(findSum(node.left, sum), 
		// 					findSum(node.right, sum))
		// }

		// return findSum(this.root);

		let result = 0;

		function maxSumHelper(node) {
		  if (node === null) return 0;
		  const leftSum = maxSumHelper(node.left);
		  const rightSum = maxSumHelper(node.right);
		  result = Math.max(result, node.val + leftSum + rightSum);
		  return Math.max(0, leftSum + node.val, rightSum + node.val);
		}
	
		maxSumHelper(this.root);
		return result;


		// 1 result 0 -- node6 -- A(5) -- B(10) -- result 21 => 16
		// A result 0 -- node5 -- 0 -- 0 -- result 5 => 5
		// B result 0 -- node5 -- C(5) -- D(1) -- result 11 => 10
		// C result 0 -- node3 -- E(2) -- F(1) -- result 6 => 5
		// D result 0 -- node1 -- 0 -- 0 -- result 1 => 1
		// E result 0 -- node2 -- 0 -- 0 -- result 2 => 2
		// F result 0 -- node1 -- 0 -- 0 -- result 1 => 1
	}

	/** nextLarger(lowerBound): return the smallest value in the tree
	 * which is larger than lowerBound. Return null if no such value exists. */

	nextLarger(lowerBound, lowest=null) {
		let toVisitStack = this.root === null ? [] : [this.root];

		while (toVisitStack.length) {
			let current = toVisitStack.pop();

			if (current.val > lowerBound && (current.val < lowest || lowest === null)) lowest = current.val
			
			if (current.left) toVisitStack.push(current.left);
			if (current.right) toVisitStack.push(current.right);
		}

		return lowest;
	}

	/** Further study!
	 * areCousins(node1, node2): determine whether two nodes are cousins
	 * (i.e. are at the same level but have different parents. ) */

	areCousins(node1, node2) {

	}

	/** Further study!
	 * serialize(tree): serialize the BinaryTree object tree into a string. */

	static serialize() {

	}

	/** Further study!
	 * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

	static deserialize() {

	}

	/** Further study!
	 * lowestCommonAncestor(node1, node2): find the lowest common ancestor
	 * of two nodes in a binary tree. */

	lowestCommonAncestor(node1, node2) {
		
	}
}

module.exports = { BinaryTree, BinaryTreeNode };
