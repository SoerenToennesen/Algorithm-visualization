



  
//BFS building the lookup matrix
//currentNodes stores both the current node and it's parent node (first 2 index = current, last 2 index = parent)
export function BFS(graph: number[][][], currentNodes: number[][], targetNode: number[],
            discovered: number[][], found: boolean): number[][][] {   
                
    function alreadyDiscovered(discovered: number[][], nodeToCheck: number[]): boolean {
        for (var i = 0; i < discovered.length; i++) {
        if (discovered[i].toString() === nodeToCheck.toString()) return true;
        }
        return false;
    }



    if (found) return graph;
    const directions: number[][] = [[1,0],[0,1],[-1,0],[0,-1]];
    var nextNodes: number[][] = [];
    graph.push([[]]);
    var depth = graph.length - 1;
    for (var i = 0; i < currentNodes.length; i++) { // something wrong with i < currentNodes.length
    if (alreadyDiscovered(discovered, currentNodes[i])) continue;
    if (i === 0) {
        graph[depth][0] = currentNodes[i];
    } else {
        graph[depth].push(currentNodes[i]);
    }
    discovered.push(currentNodes[i]);
    for (var j = 0; j < directions.length; j++) {
        nextNodes.push([currentNodes[i][0] + directions[j][0], currentNodes[i][1] + directions[j][1], currentNodes[i][0], currentNodes[i][1]]);
    }
    if (!found && (currentNodes[i][0] === targetNode[0] && currentNodes[i][1] === targetNode[1])) found = true;
    }
    return BFS(graph, nextNodes, targetNode, discovered, found);
}


export function getFullDataSearch(fullSearchData: number[][][], goal: number[]) : number[][] {
    var pathTemp: number[][] = [];
    var pathFound: boolean = false;
    var findNext = goal;
    for (var i = fullSearchData.length - 1; i >= 0; i--) {
        if (i === fullSearchData.length - 1) pathTemp.push(goal);
        if (pathFound) break;
        for (var j = 0; j < fullSearchData[i].length; j++) {
          if (fullSearchData[i][j][0] === findNext[0] && fullSearchData[i][j][1] === findNext[1]) {
            if (fullSearchData[i][j][2] === Number.MIN_SAFE_INTEGER) {
              pathFound = true;
              break;
            }
            pathTemp.push([fullSearchData[i][j][2], fullSearchData[i][j][3]])
            findNext = [fullSearchData[i][j][2], fullSearchData[i][j][3]];
            break;
          }
        }
    }
    return pathTemp;
}