
export function footer(dropdownPicked: boolean, startSelected: boolean, goalSelected: boolean, start: number[], goal: number[]) {
  return (
    <footer className="footer-container">
      {!dropdownPicked &&
      <div className="footer-info">
        Select an algorithm or datastructure
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
