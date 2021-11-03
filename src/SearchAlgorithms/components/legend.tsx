
export function legend(dropdownPicked: boolean, startSelected: boolean, goalSelected: boolean, colorOfRange: number, goalColor: number, algoSelectedOption: string, walls: number[][], weights: number[][]) {
  return (
    <div className="legend-container">
      <div className="legend-title">
        Legend
      </div>
      {dropdownPicked && algoSelectedOption === "Add walls" ? 
      <div className="legend-info">
        <div className="legend-colorm1"><i className='fas fa-square'/></div>
          &nbsp;Add walls
      </div>
      : null}
      {walls.toString() !== [].toString() ? 
      <div className="legend-info">
        <div className="legend-colorm2"><i className='fas fa-square'/></div>
          &nbsp;Wall nodes
      </div>
      : null}
      {dropdownPicked && algoSelectedOption === "Add weights" ? 
      <div className="legend-info">
        <div className="legend-color0"><i className='fas fa-square'/></div>
          &nbsp;Add weights
      </div>
      : null}
      {weights.toString() !== [].toString() ? 
      <div className="legend-info">
        <div className="legend-colorm3"><i className='fas fa-square'/></div>
          &nbsp;Weight nodes
      </div>
      : null}
      {dropdownPicked && algoSelectedOption === "Select nodes" && !startSelected ? 
      <div className="legend-info">
        <div className="legend-color1"><i className='fas fa-square'/></div>
          &nbsp;Select start node
      </div>
      : null}
      {startSelected ? 
      <div className="legend-info">
        <div className="legend-color1"><i className='fas fa-square'/></div>
          &nbsp;Start node
      </div>
      : null}
      {startSelected && algoSelectedOption === "Select nodes" && !goalSelected ? 
      (colorOfRange === 0 ? 
      <div className="legend-info">
        <div className="legend-color2"><i className='fas fa-square'/></div>
          &nbsp;Select goal node (green light)
      </div> 
      : (colorOfRange === 1 ? 
      <div className="legend-info">
        <div className="legend-color3"><i className='fas fa-square'/></div>
          &nbsp;Select goal node (computationally hard)
      </div> 
      : 
      <div className="legend-info">
        <div className="legend-color4"><i className='fas fa-square'/></div>
          &nbsp;Select goal node (restricted)
      </div>))
      : null}
      {goalSelected ? 
      <div className="legend-info">
        <div className={goalColor === 0 ? "legend-color2" : (goalColor === 1 ? "legend-color3" : "legend-color4")}><i className='fas fa-square'/></div>
          &nbsp;Goal node
      </div>
      : null}
      {goalSelected ? 
      <div className="legend-info">
        <div className="legend-color5"><i className='fas fa-square'/></div>
          &nbsp;Search
      </div>
      : null}
      {goalSelected ? 
      <div className="legend-info">
        <div className="legend-color6"><i className='fas fa-square'/></div>
          &nbsp;Path found
      </div>
      : null}
    </div>
  )
}
