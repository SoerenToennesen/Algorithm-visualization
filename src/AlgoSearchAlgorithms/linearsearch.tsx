
export function linearSearch(searchData: number[], target: number, iteration: number, searchDataBuilder: number[][]): number[][] {
    var searchDataBuilderInstance: number[] = [];
    for (var i = 0; i < iteration; i++) {
        searchDataBuilderInstance.push(searchData[i]);
        if (searchData[i] === target) {
            return searchDataBuilder;
        }
    }
    searchDataBuilder.push(searchDataBuilderInstance);
    return linearSearch(searchData, target, iteration + 1, searchDataBuilder);
}

