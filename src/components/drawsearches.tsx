
export function pickTargets(hoverBox: number[], startSelected: boolean, colorOfRange: number, algoSelectedOption: string) {
  return (
    <div
      style={{
        position: "absolute",
        height: "15px",
        width: "15px",
        marginTop: `${hoverBox[0]}px`,
        marginLeft: `${hoverBox[1]}px`,
        top: "3px",
        left: "3px",
        backgroundColor: algoSelectedOption === "Select nodes" ? (startSelected ? (colorOfRange === 0 ? "rgb(49, 158, 63, 0.5)" : ( colorOfRange === 1 ? "rgb(211, 221, 63, 0.5)" : "rgb(221, 63, 63, 0.5)" ) ) : "rgb(65,126,238, 0.5)") : (algoSelectedOption === "Add walls" ? "rgb(146, 95, 0, 0.5)" : "rgb(68, 0, 179, 0.5)"),
        borderRadius: "35%",
        display: "inline-block",
        zIndex: -1,
      }}
    />
  )
}
  
export function drawStartAndGoal(startOrGoal: number[], isGoal: boolean, colorOfRange: number) {
  return (
        <div style={{
          position: "absolute",
          height: "15px",
          width: "15px",
          marginLeft: `${startOrGoal[0] * 20}px`,
          marginTop: `${startOrGoal[1] * 20}px`,
          top: "3px",
          left: "3px",
          backgroundColor: isGoal ? (colorOfRange === 0 ? "rgb(49, 158, 63)" : ( colorOfRange === 1 ? "rgb(211, 221, 63)" : "rgb(221, 63, 63)" ) ) : "rgb(65,126,238)",
          borderRadius: "35%",
          display: "inline-block",
          animation: "fadeMe .2s",
          zIndex: -0.9,
        }}/>
  );
}
  
export function drawSearch(positions: number[][][], isFade: boolean) {
  return (
    positions.map(entry => (
      entry.map(elem => (
        <div style={{
          position: "absolute",
          height: "15px",
          width: "15px",
          marginLeft: `${elem[0] * 20}px`,
          marginTop: `${elem[1] * 20}px`,
          top: "3px",
          left: "3px",
          backgroundColor: "rgb(90, 90, 90)",
          borderRadius: "35%",
          display: "inline-block",
          animation: isFade ? "fadeMe .2s" : "",
          zIndex: -1,
        }}/>
      ))
    ))
  );
}
  
export function drawPath(positions: number[][], isFade: boolean) {
  return (
    positions.map(entry => (
      <div style={{
        position: "absolute",
        height: "7.5px",
        width: "7.5px",
        marginLeft: `${entry[0] * 20}px`,
        marginTop: `${entry[1] * 20}px`,
        top: "6.85px",
        left: "6.85px",
        backgroundColor: "rgb(240,149,55)",
        borderRadius: "35%",
        display: "inline-block",
        animation: isFade ? "fadeMe .2s" : "",
        zIndex: -0.8,
      }}/>
    ))
  );
}
  
export function drawWalls(walls: number[][], isFade: boolean) {
  return (
    walls.map(entry => (
      <div style={{
        position: "absolute",
        height: "20px",
        width: "20px",
        marginLeft: `${entry[0] * 20}px`,
        marginTop: `${entry[1] * 20}px`,
        top: "0px",
        left: "0px",
        backgroundColor: "rgb(146, 95, 0)",
        display: "inline-block",
        animation: isFade ? "fadeMe 1s" : "",
        zIndex: -0.8,
      }}/>
    ))
  );
}

export function drawWeights(weights: number[][], isFade: boolean) {
  return (
    weights.map(entry => (
      <div style={{
        position: "absolute",
        height: "20px",
        width: "20px",
        marginLeft: `${entry[0] * 20}px`,
        marginTop: `${entry[1] * 20}px`,
        top: "0px",
        left: "0px",
        backgroundColor: `rgb(68, 0, 179, ${entry[2]})`,
        display: "inline-block",
        animation: isFade ? "fadeMe 1s" : "",
        zIndex: -0.8,
      }}/>
    ))
  );
}

export function drawSortData(data: number[][]) {
  return (
    data.map(entry => (
      <div style={{
        position: "absolute",
        height: `${entry[1] * 20}px`,
        width: "15px",
        marginLeft: `${entry[0] * 20 + 2.5}px`,
        bottom: "0px",
        left: "0px",
        borderRadius: "5px",
        backgroundColor: "rgb(65,126,238,0.7)",
        display: "inline-block",
        zIndex: -2,
      }}/>
    ))
  );
}