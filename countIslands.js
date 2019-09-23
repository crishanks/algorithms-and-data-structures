/*
 * Complete the function below.
 [
    ['A', 'B', 'C']
    ['D', 'E', 'F']
    ['']
 ]
    {1, 1, 0, 0, 0},
    {0, 1, 0, 0, 1},
    {1, 0, 0, 1, 1},
    {0, 0, 0, 0, 0},
    {1, 0, 1, 0, 1}
    
    [1, 1, 0, 0, 0],
    {0, 1, 0, 0, 6},
    {2, 0, 0, 6, 6},
    {0, 0, 0, 0, 0},
    {3, 0, 4, 0, 5}  -> 6
    
    
    [1, 1, 1, 1, 1],
    {0, 0, 0, 0, 1},
    {1, 1, 1, 0, 1},
    {1, 0, 0, 0, 1},
    {1, 1, 1, 1, 1}
    * communication
    
    
    * problem solving
    * decide what the fastest you could do the problem in is
    * fill in parts of the problem from that template
    
    * programming
    * verification
    
   
   * anticipate one variable for every parameter than can vary 
   * N = number of rows
   * M = number of cells
   * O(N * M) Time
   * O(1) Space if not slicing to create a mutation visited array. If mutating, O(N * M)
   * The recursion takes up much more space (how much at any given time, not where you end up)
   
   * find island with largest surface area
   * try a leetcode easy question, complete it within 20 minutes, without thinking too much, possibly while articulating edge cases.
   
   * for leetcode medium and hard -- timebox to about an hour, then look up the solution, then take whatever time you need to reintegrate the solution with your code.
   
   * 
 */
function countIslands(mat) { // N
    //let visited = mat.slice();  // N * M
    let islands = 0;
    
    for (let i = 0; i < mat.length; i++) {  // N
        const currentRow = mat[i];
        for (let j = 1; j < currentRow.length; j++) {  // M
            const currentArea = currentRow[j];
            if (currentArea === 1 && !visited[i][j]) {
                floodIsland(mat, i, j, visited);  // N
                islands++;
            }
        }
    }

    return islands;
}

const ADJACENCY = [[-1, 0], [1, 0], [0, 1], [0, -1]];

// DFS: uses stack, can use function stack with recursion
// use a visited set
// can also use visited matrix

// 

function floodIsland(mat, x, y, visited) {
    const island = [];
    // stopping condtion
    // have we already been here?
    // is this out of bounds?
    
    // want to check y
    
    // x < 0, y < 0
    // y >= mat.length
    // x >= mat[y].length
    
    if (x < 0 || x >= mat[x].length || y < 0 || x > mat[y] || y>= math.length || x >= mat[y].length || mat[x][y] !== 1 || visited[x][y] !== 1) return;
    
    visited[x][y] = 0;
    
    for(let i = 0; i < ADJACENCY.length; i++) {
        
        const dx = ADJACENCY[i][0];
        const dy = ADJACENCY[j][1];
        
        
        findIsland(mat, x + dx, y + dy)
        
    }
    
    // maybe a return value
    console.log(i, j)  // [0, 0], [1, 0], [1, 1]
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const matRows = parseInt(readLine(), 10);
//     const matCols = parseInt(readLine(), 10);

//     let mat = Array(matRows);

//     for (let matItr = 0; matItr < matRows; matItr++) {
//         mat[matItr] = readLine().split(' ').map(str => parseInt(str, 10));
//     }

//     let res = countIslands(mat);

//     ws.write(res + "\n");

//     ws.end();
// }
