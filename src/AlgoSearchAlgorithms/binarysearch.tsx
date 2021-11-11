
export function binarySearch(searchData: number[], target: number, from: number, to: number, searchDataBuilder: number[][]): number[][] {
    var halfIndex: number = Math.floor((from + to) / 2);
    if (searchData[halfIndex] === target) {
        return searchDataBuilder;
    }
    if (target < searchData[halfIndex]) {
        to = halfIndex;
    } else {
        from = halfIndex;
    }
    var searchDataBuilderTemp: number[] = [];
    if (searchDataBuilder.length !== 0) {
        for (var i = 0; i < searchDataBuilder[searchDataBuilder.length - 1].length; i++) {
            searchDataBuilderTemp.push(searchDataBuilder[searchDataBuilder.length - 1][i]);
        }
    }
    searchDataBuilderTemp.push(searchData[halfIndex]);
    searchDataBuilder.push(searchDataBuilderTemp);
    return binarySearch(searchData, target, from, to, searchDataBuilder);
}

