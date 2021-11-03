import {alreadyDiscovered} from './helperfunctions';

export function GBFS(graph: number[][][], currentNodes: number[][], targetNode: number[], waitingNodes: number[][],
            discovered: number[][], found: boolean, walls: number[][], weights: number[][], view: number[]): number[][][] {
    if (found) return graph;
    const directions: number[][] = [[1,0],[0,1],[-1,0],[0,-1]];
    var nextNodes: number[][] = [];
    var nextWaitingNodes: number[][] = [];
    var finishedWaiting: number[][] = [];
    var i: number;
    for (i = 0; i < waitingNodes.length; i++) {
        if (waitingNodes[i][3] >= waitingNodes[i][4]) {
            finishedWaiting.push([waitingNodes[i][0] + directions[waitingNodes[i][2]][0], waitingNodes[i][1] + directions[waitingNodes[i][2]][1], waitingNodes[i][0], waitingNodes[i][1], graph.length - 1]);
        } else {
            nextWaitingNodes.push([waitingNodes[i][0], waitingNodes[i][1], waitingNodes[i][2], Math.round((waitingNodes[i][3] + 0.2) * 10) / 10, waitingNodes[i][4]]);
        }
    }
    graph.push([[]]);
    var depth = graph.length - 1;
    for (i = 0; i < currentNodes.length; i++) {
        if (alreadyDiscovered(discovered, [currentNodes[i][0], currentNodes[i][1]])) continue;
        if (i === 0) graph[depth][0] = currentNodes[i];
        else graph[depth].push(currentNodes[i]);
        discovered.push([currentNodes[i][0], currentNodes[i][1]]);
        var bestDirection: number[] = [Number.MAX_SAFE_INTEGER, -1];
        var bestFinishedWaiting: number[] = [];
        var j: number;
        var k: number;
        var h: number;
        var add: boolean;
        for (j = 0; j < finishedWaiting.length; j++) {
            h = Math.abs(finishedWaiting[j][0] - targetNode[0]) + 
                            Math.abs(finishedWaiting[j][1] - targetNode[1]);
            if (h <= bestDirection[0]) {
                bestDirection = [h, j, 1];
                bestFinishedWaiting = [finishedWaiting[j][0], finishedWaiting[j][1], finishedWaiting[j][2], finishedWaiting[j][3]];
            };
        }
        for (j = 0; j < directions.length; j++) {
            if ((alreadyDiscovered(discovered, [currentNodes[i][0] + directions[j][0], currentNodes[i][1] + directions[j][1]])) ||
                ((currentNodes[i][0] + directions[j][0] <= view[0] || currentNodes[i][0] + directions[j][0] >= view[1]) || 
                (currentNodes[i][1] + directions[j][1] <= view[2] || currentNodes[i][1] + directions[j][1] >= view[3]))) { // out of bounds, think of it as walls
                continue;
            }
            add = true;
            for (k = 0; k < walls.length; k++) {
                if ([currentNodes[i][0] + directions[j][0], currentNodes[i][1] + directions[j][1]].toString() === walls[k].toString()) {
                    add = false;
                    break;
                }
            }
            if (add) {
                for (k = 0; k < weights.length; k++) {
                    if ([currentNodes[i][0] + directions[j][0], currentNodes[i][1] + directions[j][1]].toString() === [weights[k][0], weights[k][1]].toString()) {
                        nextWaitingNodes.push([currentNodes[i][0], currentNodes[i][1], j, 0.2, weights[k][2]]);
                        add = false;
                        break;
                    }
                }
            }
            if (!add) continue;
            h = Math.abs(currentNodes[i][0] + directions[j][0] - targetNode[0]) + 
                            Math.abs(currentNodes[i][1] + directions[j][1] - targetNode[1]);
            if (h <= bestDirection[0]) bestDirection = [h, j, 0];
        }
        if (bestDirection[2] === 0) {
            nextNodes.push([currentNodes[i][0] + directions[bestDirection[1]][0], currentNodes[i][1] + directions[bestDirection[1]][1], currentNodes[i][0], currentNodes[i][1]]);
        } else if (bestDirection[2] === 1) {
            nextNodes.push(bestFinishedWaiting);
        } else {
            var secondaryBestDirection: number[] = [Number.MAX_SAFE_INTEGER, -1];
            var nothingLeft: boolean = true;
            var backtrackDirection: number[] = [];
            for (j = graph.length - 1; j >= 0; j--) {
                for (k = 0; k < directions.length; k++) {
                    if ((alreadyDiscovered(discovered, [graph[j][0][0] + directions[k][0], graph[j][0][1] + directions[k][1]])) ||
                        ((graph[j][0][0] + directions[k][0] <= view[0] || graph[j][0][0] + directions[k][0] >= view[1]) || 
                        (graph[j][0][1] + directions[k][1] <= view[2] || graph[j][0][1] + directions[k][1] >= view[3]))) { // out of bounds, think of it as walls
                        continue;
                    } else {
                        add = true;
                        var l: number;
                        for (l = 0; l < walls.length; l++) {
                            if ([graph[j][0][0] + directions[k][0], graph[j][0][1] + directions[k][1]].toString() === walls[l].toString()) {
                                add = false;
                                break;
                            }
                        }
                        if (add) {
                            for (l = 0; l < weights.length; l++) {
                                if ([graph[j][0][0] + directions[k][0], graph[j][0][1] + directions[k][1]].toString() === [weights[l][0], weights[l][1]].toString()) {
                                    nextWaitingNodes.push([graph[j][0][0], graph[j][0][1], k, 0.2, weights[l][2]]);
                                    add = false;
                                    break;
                                }
                            }
                        }
                        if (!add) continue;
                        h = Math.abs(graph[j][0][0] + directions[k][0] - targetNode[0]) + 
                                        Math.abs(graph[j][0][1] + directions[k][1] - targetNode[1]);
                        if (h <= secondaryBestDirection[0]) {
                            secondaryBestDirection = [h, k];
                            backtrackDirection = [graph[j][0][0], graph[j][0][1]];
                        }
                        nothingLeft = false;
                    }
                }
            }
            if (nothingLeft) {
                return graph;
            } else {
                nextNodes.push([backtrackDirection[0] + directions[secondaryBestDirection[1]][0], backtrackDirection[1] + directions[secondaryBestDirection[1]][1], backtrackDirection[0], backtrackDirection[1]]);
            }
        }
        if (!found && (currentNodes[i][0] === targetNode[0] && currentNodes[i][1] === targetNode[1])) found = true;
    }
    return GBFS(graph, nextNodes, targetNode, nextWaitingNodes, discovered, found, walls, weights, view);
}
