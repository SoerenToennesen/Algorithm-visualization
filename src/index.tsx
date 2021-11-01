import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

import {BFS} from './SearchAlgorithms/BFS';
import {DFS} from './SearchAlgorithms/DFS';
import {GBFS} from './SearchAlgorithms/GBFS';
import {AStar} from './SearchAlgorithms/AStar';
import {getFullDataSearch} from './SearchAlgorithms/components/helperfunctions';



function legend(dropdownPicked: boolean, startSelected: boolean, goalSelected: boolean, colorOfRange: number, goalColor: number, algoSelectedOption: string) {
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
        {dropdownPicked && algoSelectedOption === "Add weights" ? 
        <div className="legend-info">
          <div className="legend-color0"><i className='fas fa-square'/></div>
            &nbsp;Add weights
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

function todo() {
  return (
      <div className="todo-container">
        <div className="todo-title">
          Todo list
        </div>
        <div className="todo-info">
          <i className='fas fa-check'/>
            &nbsp;Implement swarm algorithm
        </div>
        <div className="todo-info">
          <i className='fas fa-check'/>
            &nbsp;Implement data structures
        </div>
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


function pickTargets(hoverBox: number[], startSelected: boolean, colorOfRange: number, algoSelectedOption: string) {
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

function drawWalls(walls: number[][], isFade: boolean) {
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

function drawWeights(weights: number[][], isFade: boolean) {
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
  const [drawingDone, setDrawingDone] = useState(true);
  const [walls, setWalls] = useState<number[][]>([]);
  const [weights, setWeights] = useState<number[][]>([]);
  const [algoSelected, setAlgoSelected] = useState(false);
  const [algoSelectedOption, setAlgoSelectedOption] = useState("Select nodes");


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


  if (algoSelectedOption === "Add walls") {
    onmousedown = function(e) {}
    onmouseup = function(e) {}
    onmousemove = function(e) {}

    onmousemove = function(e) {
      if (e.clientY >= 80) {
        setHoverBox([Math.floor(e.clientY / 20) * 20, Math.floor(e.clientX / 20) * 20])
        onmousedown = function(e2) {
          if (e2.clientY >= 80) {
            var add: boolean = true;
            var walls_temp = walls;
            for (var i = 0; i < walls_temp.length; i++) {
              if (walls_temp[i].toString() === [Math.floor(e.clientX / 20), Math.floor(e.clientY / 20)].toString()) {
                add = false;
                break;
              }
            }
            if (add) {
              var weights_temp: number[][] = [];
              for (var i = 0; i < weights.length; i++) {
                if ([weights[i][0], weights[i][1]].toString() !== [Math.floor(e.clientX / 20), Math.floor(e.clientY / 20)].toString()) {
                  weights_temp.push(weights[i]);
                }
              }
              setWeights(weights_temp);
            }
            if (add) {
              walls_temp.push([Math.floor(e.clientX / 20), Math.floor(e.clientY / 20)]);
              setWalls(walls_temp);
            }
          }
        }
      };
    }
  }

  if (algoSelectedOption === "Add weights") {
    onmousedown = function(e) {}
    onmouseup = function(e) {}
    onmousemove = function(e) {}

    onmousemove = function(e) {
      if (e.clientY >= 80) {
        setHoverBox([Math.floor(e.clientY / 20) * 20, Math.floor(e.clientX / 20) * 20])
        onmousedown = function(e2) {
          if (e2.clientY >= 80) {
            var add: boolean = true;
            var weights_temp = weights;
            for (var i = 0; i < weights_temp.length; i++) {
              if ([weights[i][0], weights[i][1]].toString() === [Math.floor(e.clientX / 20), Math.floor(e.clientY / 20)].toString()) {
                add = false;
                weights_temp[i][2] = weights_temp[i][2] === 1 ? 0.2 : weights_temp[i][2] + 0.2;
                break;
              }
            }
            if (add) {
              for (var i = 0; i < walls.length; i++) {
                if (walls[i].toString() === [Math.floor(e.clientX / 20), Math.floor(e.clientY / 20)].toString()) {
                  add = false;
                  break;
                }
              }
            }
            if (add) {
              weights_temp.push([Math.floor(e.clientX / 20), Math.floor(e.clientY / 20), 0.2]);
              setWeights(weights_temp);
            }
          }
        }
      };
    }
  }

  //The mouse event listeners are actually still running, causing a lot of rerenders... Figure out a way to turn this off
  if (dropdownPicked && algoSelectedOption === "Select nodes") {
    if (!startSelected || !goalSelected) {
      onmousedown = function(e) {}
      onmouseup = function(e) {}
      onmousemove = function(e) {}
      onmouseup = function(e) {
        if (algoSelectedOption !== "Select nodes") return;
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

  

  if (!goalSelected && dropdownPicked && algoSelectedOption === "Select nodes") {
    onmousemove = function(e) {
      var range: number = Math.abs(Math.floor(e.clientX / 20) - start[0]) + 
                          Math.abs(Math.floor(e.clientY / 20) - start[1]);
      if (e.clientY >= 80) {
        if (algoOrDatastruct === "BFS algorithm selected") {
          if (range < 10) setColorOfRange(0);
          if (range >= 10 && range < 18) setColorOfRange(1);
          if (range >= 18) setColorOfRange(2);
        } else if (algoOrDatastruct === "DFS algorithm selected") {
          setColorOfRange(0);
        } else if (algoOrDatastruct === "GBFS algorithm selected") {
          setColorOfRange(0);
        } else if (algoOrDatastruct === "A* algorithm selected") {
          setColorOfRange(0);
        }
        
        setHoverBox([Math.floor(e.clientY / 20) * 20, Math.floor(e.clientX / 20) * 20]);
      };
    }
  }

  //Phase controller
    /*if (walls.toString() === [].toString()) {
      var walls_temp: number[][] = [[50,45],[50,46],[50,47],[50,48],[50,49],[50,50],[50,51]];
      setWalls(walls_temp);
    }*/
  if (!dropdownPicked) {
    if (phase !== 0) {
      setPhase(0);
    }
  } else if (!goalSelected && dropdownPicked) {
    if (phase !== 1) {
      setPhase(1);
    }
  } else if (goalSelected && !pathFound) {
    onmousedown = function(e) {}
    onmouseup = function(e) {}
    onmousemove = function(e) {}
    if (phase !== 2) {
      if (fullSearchData.length === 0 || path.length === 0) {
        const minWidth: number = -1;
        const maxWidth: number = Math.floor((Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 19.99) / 20) + 1;
        const minHeight: number = Math.floor(80 / 20) - 1;
        const maxHeight: number = Math.floor((Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 19.99) / 20) + 1;
        if (algoOrDatastruct === "BFS algorithm selected") {
          var fullDataSearchTemp: number[][][] = BFS([], [[start[0], start[1], Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]], goal, [], false, walls, [minWidth, maxWidth, minHeight, maxHeight]);
          setFullSearchData(fullDataSearchTemp);
          var pathTemp: number[][] = getFullDataSearch(fullDataSearchTemp, goal);
          pathTemp = pathTemp.reverse();
          setPath(pathTemp);
          setPathFound(true);
          setPhase(3);
        } else if (algoOrDatastruct === "DFS algorithm selected") {
          var fullDataSearchTemp: number[][][] = DFS([], [[start[0], start[1], Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]], goal, [], false, walls, [minWidth, maxWidth, minHeight, maxHeight]);
          setFullSearchData(fullDataSearchTemp);
          var pathTemp: number[][] = getFullDataSearch(fullDataSearchTemp, goal);
          pathTemp = pathTemp.reverse();
          setPath(pathTemp);
          setPathFound(true);
          setPhase(3);
        } else if (algoOrDatastruct === "GBFS algorithm selected") {
          var fullDataSearchTemp: number[][][] = GBFS([], [[start[0], start[1], Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]], goal, [], false, walls, [minWidth, maxWidth, minHeight, maxHeight]);
          setFullSearchData(fullDataSearchTemp);
          var pathTemp: number[][] = getFullDataSearch(fullDataSearchTemp, goal);
          pathTemp = pathTemp.reverse();
          setPath(pathTemp);
          setPathFound(true);
          setPhase(3);
        } else if (algoOrDatastruct === "A* algorithm selected") {
          var fullDataSearchTemp: number[][][] = AStar([], [[start[0], start[1], Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]], goal, [], false, walls, [minWidth, maxWidth, minHeight, maxHeight]);
          setFullSearchData(fullDataSearchTemp);
          var pathTemp: number[][] = getFullDataSearch(fullDataSearchTemp, goal);
          pathTemp = pathTemp.reverse();
          setPath(pathTemp);
          setPathFound(true);
          setPhase(3);
        }
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
      setDrawingDone(false);
      const interval = setInterval(() => {
        if (i === fullSearchData.length) {
          if (k === path.length) {
            setDrawingDone(true);
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
      }, 2000 / fullSearchData.length);
    }
  }, [pathFound]);

  function reset() {
    setPhase(-1);
    setDropdownPicked(false);
    setAlgoOrDatastruct("Nothing selected");
    setAlgoSelected(false);
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
    setAlgoSelectedOption("Select nodes");
    setWalls([]);
    setWeights([]);
  }

  function partialReset() {
    setPhase(1);
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
      <div className="walls"></div>
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
              {algoSelected ?
              <li className='nav-item'>
                      <a className={drawingDone ? (algoSelectedOption !== "Select nodes" ? 'nav-links' : 'nav-li-unclickable') : "nav-li-unclick-2"} onClick={drawingDone ? function() {setClick(false); setAlgoSelectedOption("Select nodes"); } : function() {}}>
                          Select nodes
                      </a>
                      <a className={drawingDone ? (algoSelectedOption !== "Add walls" ? 'nav-links' : 'nav-li-unclickable') : "nav-li-unclick-2"} onClick={drawingDone ? function() {setClick(false); setAlgoSelectedOption("Add walls"); } : function() {}}>
                          Add walls
                      </a>
                      <a className={drawingDone ? (algoSelectedOption !== "Add weights" ? 'nav-links' : 'nav-li-unclickable') : "nav-li-unclick-2"} onClick={drawingDone ? function() {setClick(false); setAlgoSelectedOption("Add weights"); } : function() {}}>
                          Add weights
                      </a>
              </li>
              : null}
              <li className='nav-item' onMouseEnter={onMouseEnterDropdownAlgorithms} onMouseLeave={onMouseLeaveDropdownAlgorithms}>
                  <a className='nav-links' onClick={() => setClick(false)}>
                      Algorithms <i className='fas fa-caret-down' />
                  </a>
                  {dropdownAlgorithms && 
                  <ul className={clickAlgo ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                      <li>
                          <a className="dropdown-link" onClick={function() {setAlgoOrDatastruct("BFS algorithm selected"); setDropdownPicked(true); setAlgoSelected(true); setAlgoSelectedOption("Select nodes"); partialReset(); }}>
                              Breadth-First Search
                          </a>
                      </li>
                      <li>
                          <a className="dropdown-link" onClick={function() {setAlgoOrDatastruct("DFS algorithm selected"); setDropdownPicked(true); setAlgoSelected(true); setAlgoSelectedOption("Select nodes"); partialReset(); }}>
                              Depth-First Search
                          </a>
                      </li>
                      <li>
                          <a className="dropdown-link" onClick={function() {setAlgoOrDatastruct("GBFS algorithm selected"); setDropdownPicked(true); setAlgoSelected(true); setAlgoSelectedOption("Select nodes"); partialReset(); }}>
                              Greedy Best-First Search
                          </a>
                      </li>
                      <li>
                          <a className="dropdown-link" onClick={function() {setAlgoOrDatastruct("A* algorithm selected"); setDropdownPicked(true); setAlgoSelected(true); setAlgoSelectedOption("Select nodes"); partialReset(); }}>
                              A* Search
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
              <button className={drawingDone ? 'btn' : 'bt-done'} onClick={drawingDone ? function() {setClick(false); reset(); } : function() {}}>
                  Reset
              </button>
           </a>
      </nav>
      {footer(dropdownPicked, startSelected, goalSelected, start, goal)}
      {/*{todo()}*/}
      {legend(dropdownPicked, startSelected, goalSelected, colorOfRange, goalColor, algoSelectedOption)}
      {drawWalls(walls, true)}
      {drawWeights(weights, true)}
      {phase === 1 ? pickTargets(hoverBox, startSelected, colorOfRange, algoSelectedOption) : null}
      {startSelected ? drawStartAndGoal(start, false, 0) : null}
      {goalSelected ? drawStartAndGoal(goal, true, goalColor) : null}
      {phase === 3 ? drawSearch(positions, true) : null}
      {phase === 3 ? drawSearch(alreadyDrawn, false) : null}
      {phase === 3 ? drawPath(positionsPath, true) : null}
      {phase === 3 ? drawPath(alreadyDrawnPath, false) : null}   
    </div>
  );
}

//Boilerplate react render code
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);