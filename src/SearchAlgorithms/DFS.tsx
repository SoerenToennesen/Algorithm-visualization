import {alreadyDiscovered} from './components/helperfunctions';

export function DFS(graph: number[][][], currentNodes: number[][], targetNode: number[], waitingNodes: number[][],
            discovered: number[][], found: boolean, walls: number[][], weights: number[][], view: number[], finishedWaiting: number[][]): number[][][] {
    if (found) return graph;
    const directions: number[][] = [[1,0],[0,1],[-1,0],[0,-1]];
    var nextNodes: number[][] = [];
    var nextWaitingNodes: number[][] = [];
    //var finishedWaiting: number[][] = [];
    var nextFinishedWaiting: number[][] = [];
    for (var i = 0; i < waitingNodes.length; i++) {
        if (waitingNodes[i][3] >= waitingNodes[i][4]) {
            finishedWaiting.push([waitingNodes[i][0] + directions[waitingNodes[i][2]][0], waitingNodes[i][1] + directions[waitingNodes[i][2]][1], waitingNodes[i][0], waitingNodes[i][1], graph.length - 1]);
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
        var chosenWaiting: number = -1;
        for (var j = 0; j < directions.length + 1; j++) {
            if (j === directions.length) { // check nextWaitingNodes
                for (var k = 0; k < finishedWaiting.length; k++) {
                    chosenDirection = j;
                    chosenWaiting = k;
                    nextFinishedWaiting.push(finishedWaiting[k]);
                }
            } else {
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
        }
        if (chosenDirection === -1) {
            //depth is exhausted, try a different depth. Current just return this as a dead end
            var nothingLeft: boolean = true;
            for (var j = graph.length - 1; j >= 0; j--) {
                var breakme: boolean = false;
                for (var k = 0; k < directions.length; k++) {
                    if ((alreadyDiscovered(discovered, [graph[j][0][0] + directions[k][0], graph[j][0][1] + directions[k][1]])) ||
                        ((graph[j][0][0] + directions[k][0] <= view[0] || graph[j][0][0] + directions[k][0] >= view[1]) || 
                        (graph[j][0][1] + directions[k][1] <= view[2] || graph[j][0][1] + directions[k][1] >= view[3]))) { // out of bounds, think of it as walls
                        continue;
                    } else {
                        var add: boolean = true;
                        for (var l = 0; l < walls.length; l++) {
                            if ([graph[j][0][0] + directions[k][0], graph[j][0][1] + directions[k][1]].toString() === walls[l].toString()) {
                                add = false;
                                break;
                            }
                        }
                        if (add) {
                            for (var l = 0; l < weights.length; l++) {
                                if ([graph[j][0][0] + directions[k][0], graph[j][0][1] + directions[k][1]].toString() === [weights[l][0], weights[l][1]].toString()) {
                                    nextWaitingNodes.push([graph[j][0][0], graph[j][0][1], k, 0.2, weights[l][2]]);
                                    add = false;
                                    break;
                                }
                            }
                        }
                        if (!add) continue;
                        nextNodes.push([graph[j][0][0] + directions[k][0], graph[j][0][1] + directions[k][1], graph[j][0][0], graph[j][0][1]]);
                        nothingLeft = false;
                        breakme = true;
                        break;
                    }
                }
                if (breakme) break;
            }
            if (nothingLeft) return graph;
        } else if (chosenDirection === 4) {
            nextNodes.push([finishedWaiting[chosenWaiting][0], finishedWaiting[chosenWaiting][1], finishedWaiting[chosenWaiting][2], finishedWaiting[chosenWaiting][3]]);
        } else {
            nextNodes.push([currentNodes[i][0] + directions[chosenDirection][0], currentNodes[i][1] + directions[chosenDirection][1], currentNodes[i][0], currentNodes[i][1]]);
        }
        if (!found && (currentNodes[i][0] === targetNode[0] && currentNodes[i][1] === targetNode[1])) found = true;
    }
    var nextFinishedwaitingOrNot: boolean = true;
    if (nextFinishedWaiting.toString() === [].toString()) nextFinishedwaitingOrNot = false;
    return DFS(graph, nextNodes, targetNode, nextWaitingNodes, discovered, found, walls, weights, view, nextFinishedwaitingOrNot ? nextFinishedWaiting : finishedWaiting);
}
