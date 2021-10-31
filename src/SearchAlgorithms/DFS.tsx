import {alreadyDiscovered} from './components/helperfunctions';

export function DFS(graph: number[][][], currentNodes: number[][], targetNode: number[],
            discovered: number[][], found: boolean, walls: number[][], view: number[]): number[][][] {
    if (found) return graph;
    const directions: number[][] = [[1,0],[0,1],[-1,0],[0,-1]];
    var nextNodes: number[][] = [];
    graph.push([[]]);
    var depth = graph.length - 1;
    /*if (depth > 5000) { // currently a safety measure to not search too deep
        return graph;
    }*/
    for (var i = 0; i < currentNodes.length; i++) {
        if (alreadyDiscovered(discovered, [currentNodes[i][0], currentNodes[i][1]])) continue;
        if (i === 0) graph[depth][0] = currentNodes[i];
        else graph[depth].push(currentNodes[i]);
        discovered.push([currentNodes[i][0], currentNodes[i][1]]);
        var chosenDirection: number = -1;
        for (var j = 0; j < directions.length; j++) {
            if ((alreadyDiscovered(discovered, [currentNodes[i][0] + directions[j][0], currentNodes[i][1] + directions[j][1]])) ||
                ((currentNodes[i][0] + directions[j][0] <= view[0] || currentNodes[i][0] + directions[j][0] >= view[1]) || 
                (currentNodes[i][1] + directions[j][1] <= view[2] || currentNodes[i][1] + directions[j][1] >= view[3]))) { // out of bounds, think of it as walls
                continue;
            } else {
                var add: boolean = true;
                for (var k = 0; k < walls.length; k++) {
                    if ([currentNodes[i][0] + directions[j][0], currentNodes[i][1] + directions[j][1]].toString() === walls[k].toString()) {
                        add = false;
                        break;
                    }
                }
                if (!add) continue;
                chosenDirection = j;
                break;
            }
        }
        if (chosenDirection === -1) {
            //depth is exhausted, try a different depth. Current just return this as a dead end
            return graph;
        }
        nextNodes.push([currentNodes[i][0] + directions[chosenDirection][0], currentNodes[i][1] + directions[chosenDirection][1], currentNodes[i][0], currentNodes[i][1]]);
        if (!found && (currentNodes[i][0] === targetNode[0] && currentNodes[i][1] === targetNode[1])) found = true;
    }
    return DFS(graph, nextNodes, targetNode, discovered, found, walls, view);
}
