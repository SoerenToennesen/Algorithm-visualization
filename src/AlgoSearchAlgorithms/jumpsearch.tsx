
export function jumpSearch(searchData: number[], target: number, iteration: number, jump: number, intervalFound: boolean, iterationAtInterval: number, iteration2: number, searchDataBuilder: number[][]): number[][] {
    var searchDataBuilderInstance: number[] = [];
    if (intervalFound) {
        for (var i = 0; i < iterationAtInterval*jump; i+=jump) {
            searchDataBuilderInstance.push(searchData[i]);
        }
        for (var j = iterationAtInterval*jump - jump + 1; j < (iterationAtInterval - 1)*jump + 1 + iteration2; j++) {
            searchDataBuilderInstance.push(searchData[j]);
            if (searchData[j] === target) {
                return searchDataBuilder;
            }
        }
        iteration2++;
    } else {
        for (var k = 0; k < iteration*jump; k+=jump) {
            searchDataBuilderInstance.push(searchData[k]);
            if (searchData[k] === target) {
                return searchDataBuilder;
            }
        }
    }
    searchDataBuilder.push(searchDataBuilderInstance);
    if (target < (iteration)*jump) {
        intervalFound = true;
        iterationAtInterval = iteration;
    }
    return jumpSearch(searchData, target, intervalFound ? iteration : iteration + 1, jump, intervalFound, iterationAtInterval, iteration2, searchDataBuilder);
}

