
export function drawAlgoSearchNumbers(numbers: number[], screenWidth: number) {
    return (
        numbers.map(entry => (
            <div style={{
                position: "absolute",
                height: "15px",
                width: "15px",
                fontSize: entry >= 1000 ? "8px" : entry >= 100 ? "10px" : "12px",
                marginLeft: `${(entry % screenWidth) * 20 - (entry >= 100 ? 1 : entry >= 100 ? 1 : entry >= 10 ? 0 : -4)}px`,
                marginTop: `${(Math.floor(entry / screenWidth) * 20) + (4 * 20) - (entry >= 1000 ? -2 : entry >= 100 ? -1 : 0)}px`,
                top: "3px",
                left: "3px",
                borderRadius: "35%",
                display: "inline-block",
                animation: true ? "fadeMe .2s" : "",
                zIndex: -1,
            }}>
                {entry}
            </div>
        ))
    );
}

export function drawAlgoSearch(numbers: number[], screenWidth: number) {
    return (
        numbers.map(entry => (
            <div style={{
                position: "absolute",
                height: "20px",
                width: "20px",
                marginLeft: `${(entry % screenWidth) * 20}px`,
                marginTop: `${(Math.floor(entry / screenWidth) * 20)}px`,
                backgroundColor: "rgb(30,30,30,0.8)",
                display: "inline-block",
                animation: true ? "fadeMe .2s" : "",
                zIndex: -1,
            }}/>
        ))
    );
}

