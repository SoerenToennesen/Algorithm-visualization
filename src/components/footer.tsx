
export function footer(sortFound: boolean, searchAlgoFound: boolean, algoOrDataStruct: string, dropdownPickedSearch: boolean, dropdownPickedSort: boolean, dropdownPicked: boolean, startSelected: boolean, goalSelected: boolean, start: number[], goal: number[]) {
  return (
    <footer className="footer-container">
      {!dropdownPicked && !dropdownPickedSort && !dropdownPickedSearch &&
      <div className="footer-info">
        Select an algorithm or datastructure
      </div>}
      {dropdownPickedSort && !sortFound &&
      <div className="footer-in-small">
        Shuffle and choose the amount of entries with the slider
      </div>}
      {dropdownPickedSearch && algoOrDataStruct !== "Jump search selected" && !searchAlgoFound &&
      <div className="footer-in-small">
        Shuffle and choose the amount of entries with the slider
      </div>}
      {dropdownPickedSearch && algoOrDataStruct === "Jump search selected" && !searchAlgoFound &&
      <div className="footer-in-smaller">
        Shuffle and choose the amount of entries with the entries slider and choose your jump step count with the jump slider
      </div>}
      {searchAlgoFound &&
      <div className="footer-inf-nowiggle">
        Enjoy the show!
      </div>}
      {sortFound &&
      <div className="footer-inf-nowiggle">
        Enjoy the show!
      </div>}
      {!startSelected && dropdownPicked &&
      <div className="footer-info">
        Select your start node
      </div>}
      {startSelected && !goalSelected &&
      <div className="footer-info">
        Select your goal node
      </div>}
      {startSelected && goalSelected &&
      <div className="footer-inf-nowiggle">
        Enjoy the show!
      </div>}
    </footer>
  )
}
