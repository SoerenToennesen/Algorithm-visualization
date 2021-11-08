
export function mergeSort(sortData: number[][], sortDataBuilder: number[][]): number[][][] {
    if (sortData.length === 1) {
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
    var sortDataTemp: number[][] = [];
    for (var i = 0; i < sortData.length; i+=2) {
        if (i === sortData.length - 1) {
            sortDataTemp.push(sortData[i]);
        } else {
            var j: number = 0;
            var k: number = 0;
            var intermediateSort: number[] = [];
            while (j <= sortData[i].length && k <= sortData[i+1].length) {
                if (j === sortData[i].length) {
                    intermediateSort.push(sortData[i+1][k]);
                    k++;
                } else if (k === sortData[i+1].length) {
                    intermediateSort.push(sortData[i][j]);
                    j++;
                } else if (sortData[i][j] > sortData[i+1][k]) {
                    intermediateSort.push(sortData[i+1][k]);
                    k++;
                } else {
                    intermediateSort.push(sortData[i][j]);
                    j++;
                }
            }
            intermediateSort.pop();
            sortDataTemp.push(intermediateSort);
        }
    }
    var sortDataBuilderTemp: number[][] = sortDataBuilder;
    var toBuild: number[] = [];
    for (var l = 0; l < sortDataTemp.length; l++) {
        for (var m = 0; m < sortDataTemp[l].length; m++) {
            toBuild.push(sortDataTemp[l][m]);
        }
    }
    sortDataBuilderTemp.push(toBuild);
    return mergeSort(sortDataTemp, sortDataBuilderTemp);
}

