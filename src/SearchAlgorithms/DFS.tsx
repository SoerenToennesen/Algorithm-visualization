import {alreadyDiscovered} from './components/helperfunctions';

export function DFS(graph: number[][][], currentNodes: number[][], targetNode: number[], waitingNodes: number[][],
            discovered: number[][], found: boolean, walls: number[][], weights: number[][], view: number[]): number[][][] {
    if (found) return graph;
    const directions: number[][] = [[1,0],[0,1],[-1,0],[0,-1]];
    var nextNodes: number[][] = [];
    var nextWaitingNodes: number[][] = [];
    for (var i = 0; i < waitingNodes.length; i++) {
        if (waitingNodes[i][3] >= waitingNodes[i][4]) {
            nextNodes.push([waitingNodes[i][0] + directions[waitingNodes[i][2]][0], waitingNodes[i][1] + directions[waitingNodes[i][2]][1], waitingNodes[i][0], waitingNodes[i][1]]);
        } else {
            nextWaitingNodes.push([waitingNodes[i][0], waitingNodes[i][1], waitingNodes[i][2], Math.round((waitingNodes[i][3] + 0.2) * 10) / 10, waitingNodes[i][4]]);
        }
    }
    graph.push([[]]);
    var depth = graph.length - 1;
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
                if (add) {
                for (var k = 0; k < weights.length; k++) {
                    if ([currentNodes[i][0] + directions[j][0], currentNodes[i][1] + directions[j][1]].toString() === [weights[k][0], weights[k][1]].toString()) {
                        nextWaitingNodes.push([currentNodes[i][0], currentNodes[i][1], j, 0.2, weights[k][2]]);
                        add = false;
                        break;
                    }
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
    return DFS(graph, nextNodes, targetNode, nextWaitingNodes, discovered, found, walls, weights, view);
}
