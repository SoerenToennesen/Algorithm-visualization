
export function bubbleSort(sortData: number[], sortDataBuilder: number[][], indexTo: number): number[][][] {
    sortDataBuilder.push(sortData.slice());
    if (indexTo === 0) {
        var finalBuiltData: number[][][] = [];
        for (var n = 0; n < sortDataBuilder.length; n++) {
            var finalBuiltDataTemp: number[][] = [];
            for (var p = 0; p < sortDataBuilder[n].length; p++) {
                finalBuiltDataTemp.push([p, sortDataBuilder[n][p]]);
            }
            finalBuiltData.push(finalBuiltDataTemp);
        }
        return finalBuiltData;
    }
    for (var i = 0; i < indexTo; i++) {
        if (sortData[i] > sortData[i+1]) {
            var swap = sortData[i];
            sortData[i] = sortData[i+1];
            sortData[i+1] = swap;
        }
    }
    return bubbleSort(sortData, sortDataBuilder, indexTo - 1);
}

