import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

import {BFS, getFullDataSearch} from './SearchAlgorithms/BFS';



function legend(dropdownPicked: boolean, startSelected: boolean, goalSelected: boolean, colorOfRange: number, goalColor: number) {
  return (
      <div className="legend-container">
        <div className="legend-title">
          Legend
        </div>
        {dropdownPicked && !startSelected ? 
        <div className="legend-info">
          <div className="legend-color1"><i className='fas fa-square'/></div>
             Select start node
        </div>
        : null}
        {startSelected ? 
        <div className="legend-info">
          <div className="legend-color1"><i className='fas fa-square'/></div>
            Start node
        </div>
        : null}
        {startSelected && !goalSelected ? 
        (colorOfRange === 0 ? 
        <div className="legend-info">
          <div className="legend-color2"><i className='fas fa-square'/></div>
          Select goal node (green light)
        </div> 
        : (colorOfRange === 1 ? 
        <div className="legend-info">
          <div className="legend-color3"><i className='fas fa-square'/></div>
            Select goal node (computationally hard)
        </div> 
        : 
        <div className="legend-info">
          <div className="legend-color4"><i className='fas fa-square'/></div>
            Select goal node (restricted)
        </div>))
        : null}
        {goalSelected ? 
        <div className="legend-info">
          <div className={goalColor === 0 ? "legend-color2" : (goalColor === 1 ? "legend-color3" : "legend-color4")}><i className='fas fa-square'/></div>
            Goal node
        </div>
        : null}
        {goalSelected ? 
        <div className="legend-info">
          <div className="legend-color5"><i className='fas fa-square'/></div>
            Search
        </div>
        : null}
        {goalSelected ? 
        <div className="legend-info">
          <div className="legend-color6"><i className='fas fa-square'/></div>
            Path found
        </div>
        : null}
      </div>
  )
}

function footer(dropdownPicked: boolean, startSelected: boolean, goalSelected: boolean, start: number[], goal: number[]) {
  return (
      <footer className="footer-container">
        {!dropdownPicked ?
        <div className="footer-info">
          Select an algorithm or datastructure
        </div> : null}
        {!startSelected && dropdownPicked?
        <div className="footer-info">
          Select your start node
        </div> : null}
        {startSelected && !goalSelected ?
        <div className="footer-info">
          Select your goal node
        </div> : null}
        {startSelected && goalSelected ?
        <div className="footer-inf-nowiggle">
          Enjoy the show!
        </div> : null}
      </footer>
  )
}


function pickTargets(hoverBox: number[], startSelected: boolean, colorOfRange: number) {
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
        backgroundColor: startSelected ? (colorOfRange === 0 ? "rgb(49, 158, 63, 0.5)" : ( colorOfRange === 1 ? "rgb(211, 221, 63, 0.5)" : "rgb(221, 63, 63, 0.5)" ) ) : "rgb(65,126,238, 0.5)",
        borderRadius: "35%",
        display: "inline-block",
        zIndex: -1,
      }}
    />
  )
}

function drawStartAndGoal(startOrGoal: number[], isGoal: boolean, colorOfRange: number) {
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

function drawSearch(positions: number[][][], isFade: boolean) {
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

function drawPath(positions: number[][], isFade: boolean) {
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


function App() {

  const [phase, setPhase] = useState(-1);
  const [dropdownPicked, setDropdownPicked] = useState(false);
  const [startSelected, setStartSelected] = useState(false);
  const [goalSelected, setGoalSelected] = useState(false);
  const [hoverBox, setHoverBox] = useState<number[]>([]);
  const [start, setStart] = useState<number []>([]);
  const [goal, setGoal] = useState<number []>([]);
  const [fullSearchData, setFullSearchData] = useState<number[][][]>([]);
  const [positions, setPositions] = useState<number[][][]>([]);
  const [positionsPath, setPositionsPath] = useState<number[][]>([]);
  const [alreadyDrawn, setAlreadyDrawn] = useState<number[][][]>([]);
  const [alreadyDrawnPath, setAlreadyDrawnPath] = useState<number[][]>([]);
  const [path, setPath] = useState<number[][]>([]);
  const [pathFound, setPathFound] = useState(false);
  const [drawn, setDrawn] = useState(false);
  const [colorOfRange, setColorOfRange] = useState(0);
  const [goalColor, setGoalColor] = useState(0);

  const [click, setClick] = useState(false);
  const [dropdownAlgorithms, setDropdownAlgorithms] = useState(false);
  const [dropdownDatastructures, setDropdownDatastructures] = useState(false);
  const handleClick = () => setClick(!click);
  const [clickAlgo, setClickAlgo] = useState(false);
  const [clickDatastruct, setClickDatastruct] = useState(false);
  const [algoOrDatastruct, setAlgoOrDatastruct] = useState<string>("Nothing selected");

  const onMouseEnterDropdownAlgorithms = () => {
      if (window.innerWidth < 960) {
          setDropdownAlgorithms(false);
      } else {
          setDropdownAlgorithms(true);
      }
  };
  const onMouseLeaveDropdownAlgorithms = () => {
      if (window.innerWidth < 960) {
          setDropdownAlgorithms(false);
      } else {
          setDropdownAlgorithms(false);
      }
  };
  const onMouseEnterDropdownDatastructures = () => {
      if (window.innerWidth < 960) {
          setDropdownDatastructures(false);
      } else {
          setDropdownDatastructures(true);
      }
  };
  const onMouseLeaveDropdownDatastructures = () => {
      if (window.innerWidth < 960) {
          setDropdownDatastructures(false);
      } else {
          setDropdownDatastructures(false);
      }
  };

  //The mouse event listeners are actually still running, causing a lot of rerenders... Figure out a way to turn this off
  if (dropdownPicked) {
    if (!startSelected || !goalSelected) {
      onmouseup = function(e) {
        if (!startSelected && start.length === 0) {
          if (e.clientY >= 80) {
            setStart([Math.floor(e.clientX / 20), Math.floor(e.clientY / 20)])
            setStartSelected(true);
          }
        }
        else if (!goalSelected && goal.length === 0) {
          if (e.clientY >= 80) {
            if (colorOfRange !== 2) {
              var goalColorTemp = colorOfRange;
              setGoalColor(goalColorTemp);
              setGoal([Math.floor(e.clientX / 20), Math.floor(e.clientY / 20)])
              setGoalSelected(true);
            }
          }
        }
      }
    }
  }
  if (!goalSelected && dropdownPicked) {
    onmousemove = function(e) {
      var range: number = Math.abs(Math.floor(e.clientX / 20) - start[0]) + 
                          Math.abs(Math.floor(e.clientY / 20) - start[1]);
      if (e.clientY >= 80) {
        if (range < 10) setColorOfRange(0);
        if (range >= 10 && range < 18) setColorOfRange(1);
        if (range >= 18) setColorOfRange(2);
        setHoverBox([Math.floor(e.clientY / 20) * 20, Math.floor(e.clientX / 20) * 20])
      };
    }
  }

  //Phase controller
  if (!dropdownPicked) {
    if (phase !== 0) {
      setPhase(0);
    }
  } else if (!goalSelected && dropdownPicked) {
    if (phase !== 1) {
      setPhase(1);
    }
  } else if (goalSelected && !pathFound) {
    if (phase !== 2) {
      if (fullSearchData.length === 0 || path.length === 0) {
        var fullDataSearchTemp: number[][][] = BFS([], [[start[0], start[1], Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]], goal, [], false);
        setFullSearchData(fullDataSearchTemp);
        var pathTemp: number[][] = getFullDataSearch(fullDataSearchTemp, goal);
        pathTemp = pathTemp.reverse();
        setPath(pathTemp);
        setPathFound(true);
        setPhase(3);
      }
      setPhase(2);
    }
  } else if (pathFound && !drawn) {
    if (phase !== 3) {

      setPhase(3);
    }
  } else if (drawn) {
    if (phase !== 4) {
      //reset to normal
      setPhase(4);
    }
  } else {
    if (phase !== 0) {
      setPhase(0);
    }
  }

  var i = 0;
  var k = 0;
  useEffect(() => {
    if (pathFound) {
      const interval = setInterval(() => {
        if (i === fullSearchData.length) {
          if (k === path.length) {
            //setDrawn(true);
            clearInterval(interval);
            return;
          } else {
            if (k > 0) {
              var alreadyDrawnTempPath: number[][] = [];
              for (var l = 0; l < k; l++) {
                alreadyDrawnTempPath[l] = path[l]
              }
              setAlreadyDrawnPath(alreadyDrawnTempPath);
            }
            var posPath: number[][] = [];
            posPath[k] = path[k];
            setPositionsPath(posPath);
            k++;
          }
        } else {
          if (i > 0) {
            var alreadyDrawnTemp: number[][][] = [];
            for (var j = 0; j < i; j++) {
              alreadyDrawnTemp[j] = fullSearchData[j]
            }
            setAlreadyDrawn(alreadyDrawnTemp);
          }
          var pos: number[][][] = [];
          pos[i] = fullSearchData[i];
          setPositions(pos);
          i++;
        }
      }, 100);
    }
  }, [pathFound]);

  function reset() {
    setPhase(-1);
    setDropdownPicked(false);
    setAlgoOrDatastruct("Nothing selected");
    setStartSelected(false);
    setGoalSelected(false);
    setStart([]);
    setGoal([]);
    setFullSearchData([]);
    setPositions([]);
    setPositionsPath([]);
    setAlreadyDrawn([]);
    setAlreadyDrawnPath([]);
    setPath([]);
    setPathFound(false);
    setDrawn(false);
    setColorOfRange(0);
  }

  //Main render
  return (
    <div className="body">
      <nav className="navbar">
          <a className='navbar-logo'>
              DSA visuals <i className='fas fa-project-diagram'/>
          </a>
          <a className='navbar-selected'>
              {algoOrDatastruct}
          </a>
          <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item' onMouseEnter={onMouseEnterDropdownAlgorithms} onMouseLeave={onMouseLeaveDropdownAlgorithms}>
                  <a className='nav-links' onClick={() => setClick(false)}>
                      Algorithms <i className='fas fa-caret-down' />
                  </a>
                  {dropdownAlgorithms && 
                  <ul className={clickAlgo ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                      <li>
                          <a className="dropdown-link" onClick={function() {setAlgoOrDatastruct("BFS algorithm selected"); setDropdownPicked(true);}}>
                              Breadth-First Search
                          </a>
                      </li>
                  </ul>
                  }
              </li>
              <li className='nav-item' onMouseEnter={onMouseEnterDropdownDatastructures} onMouseLeave={onMouseLeaveDropdownDatastructures}>
                  <a className='nav-links' onClick={() => setClick(false)}>
                      Data Structures <i className='fas fa-caret-down' />
                  </a>
                  {dropdownDatastructures && 
                  <ul className={clickDatastruct ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                      <li>
                          <a className="dropdown-link">
                              Nothing implemented yet
                          </a>
                      </li>
                  </ul>
                  }
              </li>
              <li className='nav-item'>
                  <a className='nav-links-mobile' onClick={() => setClick(false)}>
                      Dropdowns here not yet implemented
                  </a>
              </li>
          </ul>
          <a>
              <button className='btn' onClick={function() {setClick(false); reset(); }}>
                  Reset
              </button>
           </a>
      </nav>
      {footer(dropdownPicked, startSelected, goalSelected, start, goal)}
      {legend(dropdownPicked, startSelected, goalSelected, colorOfRange, goalColor)}
      {phase === 1 ? pickTargets(hoverBox, startSelected, colorOfRange) : null}
      {startSelected ? drawStartAndGoal(start, false, 0) : null}
      {goalSelected ? drawStartAndGoal(goal, true, goalColor) : null}
      {phase === 3 ? drawSearch(positions, true) : null}
      {phase === 3 ? drawSearch(alreadyDrawn, false) : null}
      {phase === 3 ? drawPath(positionsPath, true) : null}
      {phase === 3 ? drawPath(alreadyDrawnPath, false) : null}   
    </div>
  );
}

//TODO:
// - make a legend displaying the meaning of different nodes and whatnot
// - make it so you cant select a goal too far from start node, by rendering green/red/orange on the hoverbox
// - make startNode and goalNode stick with different colour

//Boilerplate react render code
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);