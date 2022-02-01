
// You should implement your task here.

module.exports = function towelSort(matrix) {
	let sortArr = []
	if (matrix) {

		for (let i = 0; i < matrix.length; i++) {
			//console.log(`В строке ${i} ${matrix[i].length} элементов`);
			for (let j = 0; j < matrix[i].length; j++) {
				if (i % 2 == 0) {
					sortArr.push(matrix[i][j])
				} else {
					sortArr.push(matrix[i][matrix[i].length - j - 1])
				}
			}
		}
		return sortArr
	} else { return sortArr }

}
