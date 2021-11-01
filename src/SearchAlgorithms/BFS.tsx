import {alreadyDiscovered} from './components/helperfunctions';

//BFS building the lookup matrix
//currentNodes stores both the current node and it's parent node (first 2 index = current, last 2 index = parent)
export function BFS(graph: number[][][], currentNodes: number[][], targetNode: number[],
            discovered: number[][], found: boolean, walls: number[][], view: number[]): number[][][] {
    if (found) return graph;
    const directions: number[][] = [[1,0],[0,1],[-1,0],[0,-1]];
    var nextNodes: number[][] = [];
    graph.push([[]]);
    var depth = graph.length - 1;
    for (var i = 0; i < currentNodes.length; i++) {
        if (alreadyDiscovered(discovered, [currentNodes[i][0], currentNodes[i][1]])) continue;
        if (i === 0) graph[depth][0] = currentNodes[i];
        else graph[depth].push(currentNodes[i]);
        discovered.push([currentNodes[i][0], currentNodes[i][1]]);
        for (var j = 0; j < directions.length; j++) {
            if ((alreadyDiscovered(discovered, [currentNodes[i][0] + directions[j][0], currentNodes[i][1] + directions[j][1]])) ||
                ((currentNodes[i][0] + directions[j][0] <= view[0] || currentNodes[i][0] + directions[j][0] >= view[1]) || 
                (currentNodes[i][1] + directions[j][1] <= view[2] || currentNodes[i][1] + directions[j][1] >= view[3]))) { // out of bounds, think of it as walls
                continue;
            }
            var add: boolean = true;
            for (var k = 0; k < walls.length; k++) {
                if ([currentNodes[i][0] + directions[j][0], currentNodes[i][1] + directions[j][1]].toString() === walls[k].toString()) {
                    add = false;
                    break;
                }
            }
            if (add) {
                nextNodes.push([currentNodes[i][0] + directions[j][0], currentNodes[i][1] + directions[j][1], currentNodes[i][0], currentNodes[i][1]]);
            }
        }
        if (!found && (currentNodes[i][0] === targetNode[0] && currentNodes[i][1] === targetNode[1])) found = true;
    }
    return BFS(graph, nextNodes, targetNode, discovered, found, walls, view);
}