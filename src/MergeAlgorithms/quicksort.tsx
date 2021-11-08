


export function quickSort(sortData: number[], startIndex: number, pivotIndex: number, initialPivotIndex: number, isLeft: boolean): number[] {
    if (pivotIndex === initialPivotIndex + 1 || pivotIndex === -1) {
        return sortData;
    }
    if (pivotIndex === 0) {
        return quickSort(sortData, initialPivotIndex + 1, sortData.length - 1, initialPivotIndex, false);
    }
    var i: number = isLeft ? -1 : initialPivotIndex;
    for (var j = startIndex; j < pivotIndex; j++) {
        if (sortData[j] <= sortData[pivotIndex]) {
            i++;
            var swapTemp: number = sortData[j];
            sortData[j] = sortData[i];
            sortData[i] = swapTemp;
        }
    }
    var swapTemp2: number = sortData[i+1];
    sortData[i+1] = sortData[pivotIndex];
    sortData[pivotIndex] = swapTemp2;
    if (i === initialPivotIndex) return sortData;
    if (initialPivotIndex === -1) initialPivotIndex = i + 1;
    return quickSort(sortData, isLeft ? 0 : initialPivotIndex + 1, i, initialPivotIndex, isLeft);
}


