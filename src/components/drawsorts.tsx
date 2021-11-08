


export function drawSortData(data: number[][], sortFinished: boolean) {
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
          backgroundColor: sortFinished ? "rgb(125,194,175,0.7)" : "rgb(65,126,238,0.7)",
          display: "inline-block",
          zIndex: -2,
        }}/>
      ))
    );
}