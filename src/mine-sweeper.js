const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const field = [];
  for (let i = 0; i < matrix.length; i += 1){
    const matrixRow = matrix[i];
    let fieldRow = [];
    
    for (let j = 0; j < matrixRow.length; j += 1) {
      let mineCounter = 0;
      try {
        if (matrix[i-1][j]) {
          mineCounter += 1;
        }
      } catch (error){
        
      }
      try {
        if (matrix[i+1][j]) {
          mineCounter += 1;
        }
      } catch (error){
        
      }
      try {
        if (matrix[i][j+1]) {
          mineCounter += 1;
        }
      } catch (error){
        
      }
      try {
        if (matrix[i][j-1]) {
          mineCounter += 1;
        }
      } catch (error){
        
      }
      try {
        if (matrix[i-1][j-1]) {
          mineCounter += 1;
        }
      } catch (error){
        
      }
      try {
        if (matrix[i+1][j+1]) {
          mineCounter += 1;
        }
      } catch (error){
        
      }
      try {
        if (matrix[i+1][j-1]) {
          mineCounter += 1;
        }
      } catch (error){
        
      }
      try {
        if (matrix[i-1][j+1]) {
          mineCounter += 1;
        }
      } catch (error){
        
      }
      fieldRow.push(mineCounter);
    }
    field.push(fieldRow);
  }
  return field;
}
// remove line with error and write your code here


module.exports = {
  minesweeper
};
