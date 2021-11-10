
function partition(array: number[], startIndex: number, endIndex: number) : [number, number[]] {
    var pivot: number = array[endIndex];
    for (var i = startIndex; i < endIndex; i++) {
        if (array[i] <= pivot) {
            var swapTemp = array[i];
            array[i] = array[startIndex];
            array[startIndex] = swapTemp;
            startIndex++;
        }
    }
    var swapTempLast = array[endIndex];
    array[endIndex] = array[startIndex];
    array[startIndex] = swapTempLast;
    return [startIndex, array];
}

export function quickSort(dataBuilder: number[][], array: number[], startIndex: number, endIndex: number) : number[][] {
    if (startIndex >= endIndex) return dataBuilder;
    dataBuilder.push(array.slice());
    var pivotIndexAndArray: [number, number[]] = partition(array, startIndex, endIndex);
    quickSort(dataBuilder, pivotIndexAndArray[1], startIndex, pivotIndexAndArray[0] - 1);
    quickSort(dataBuilder, pivotIndexAndArray[1], pivotIndexAndArray[0] + 1, endIndex);
    return dataBuilder;
}
