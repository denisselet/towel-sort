
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        return [];
    }
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            matrix[i].forEach(function(item) {
                arr.push(item);
            });
        } else {
            matrix[i].reverse().forEach(function(item) {
                arr.push(item);
            })
        }
    }
    return arr;
  }
