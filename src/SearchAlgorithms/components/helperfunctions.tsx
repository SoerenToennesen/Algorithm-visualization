


export function alreadyDiscovered(discovered: number[][], nodeToCheck: number[]): boolean {
    for (var i = 0; i < discovered.length; i++) {
        if (discovered[i].toString() === nodeToCheck.toString()) return true;
    }
    return false;
}

export function getFullDataSearch(fullSearchData: number[][][], goal: number[]) : number[][] {
    var pathTemp: number[][] = [];
    var pathFound: boolean = false;
    var findNext = goal;
    for (var i = fullSearchData.length - 1; i >= 0; i--) {
        if (i === fullSearchData.length - 1) pathTemp.push(goal);
        if (pathFound) break;
        for (var j = 0; j < fullSearchData[i].length; j++) {
          if (fullSearchData[i][j][0] === findNext[0] && fullSearchData[i][j][1] === findNext[1]) {
            if (fullSearchData[i][j][2] === Number.MIN_SAFE_INTEGER) {
              pathFound = true;
              break;
            }
            pathTemp.push([fullSearchData[i][j][2], fullSearchData[i][j][3]])
            findNext = [fullSearchData[i][j][2], fullSearchData[i][j][3]];
            break;
          }
        }
    }
    return pathTemp;
}