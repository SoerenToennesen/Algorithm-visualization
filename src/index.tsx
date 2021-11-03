import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';

import {BFS} from './SearchAlgorithms/BFS';
import {DFS} from './SearchAlgorithms/DFS';
import {GBFS} from './SearchAlgorithms/GBFS';
import {AStar} from './SearchAlgorithms/AStar';
import {getFullDataSearch} from './SearchAlgorithms/helperfunctions';
import {legend} from './components/legend';
import {footer} from './components/footer';
import {pickTargets, drawStartAndGoal, drawSearch, drawPath, drawWalls, drawWeights} from './components/drawsearches';

interface props {
  opacity: number;
  color: string;
}

const Styles = styled.div<props>`
  display: flex;
  position: fixed;
  align-items: center;
  color: rgb(125,194,175);
  margin-top: 50px;
  right: 30px;

  .value {
    flex: 1;
    margin-right: 15px;
    font-size: 30px;
  }
  
  .slider {
    flex: 100;
    -webkit-appearance: none;
    height: 10px;
    width: 300px;
    border-radius: 5px;
    background: rgb(226,125,95,0.8);
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 5px;
      background: ${(props) => props.color};
      opacity: ${(props) => props.opacity};
      cursor: pointer;
      outline: 3px solid rgb(65,126,238);
    }
  }
`;

function App() {
  const [dropdownPicked, setDropdownPicked] = useState(false);
  const [dropdownPickedSearch, setDropdownPickedSearch] = useState(false);
  const [dropdownPickedSort, setDropdownPickedSort] = useState(false);
  const [dropdownPickedDatastructures, setDropdownPickedDatastructures] = useState(false);
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
  const [colorOfRange, setColorOfRange] = useState(0);
  const [goalColor, setGoalColor] = useState(0);
  const [drawingDone, setDrawingDone] = useState(true);
  const [walls, setWalls] = useState<number[][]>([]);
  const [weights, setWeights] = useState<number[][]>([]);
  const [algoSelected, setAlgoSelected] = useState(false);
  const [algoSearchSelected, setAlgoSearchSelected] = useState(false);
  const [algoSortSelected, setAlgoSortSelected] = useState(false);
  const [datastructureSelected, setDatastructureSelected] = useState(false);
  const [algoSelectedOption, setAlgoSelectedOption] = useState("Select nodes");
  const [click, setClick] = useState(false);
  const [dropdownAlgorithms, setDropdownAlgorithms] = useState(false);
  const [dropdownDatastructures, setDropdownDatastructures] = useState(false);
  const [dropdownSearchAlgorithms, setDropdownSearchAlgorithms] = useState(false);
  const [algoOrDatastruct, setAlgoOrDatastruct] = useState<string>("Nothing selected");
  const [sliderValue, setSliderValue] = useState<number>(50);

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
  const onMouseEnterDropdownSearchAlgorithms = () => {
    if (window.innerWidth < 960) {
        setDropdownSearchAlgorithms(false);
    } else {
        setDropdownSearchAlgorithms(true);
    }
  };
  const onMouseLeaveDropdownSearchAlgorithms = () => {
    if (window.innerWidth < 960) {
        setDropdownSearchAlgorithms(false);
    } else {
        setDropdownSearchAlgorithms(false);
    }
  };

  if (dropdownPickedSort) {
    
  }

  if (algoSelectedOption === "Add walls") {
    onmousedown = function() {return;}
    onmouseup = function() {return;}
    onmousemove = function() {return;}
    onmousemove = function(e) {
      if (e.clientY >= 80) {
        setHoverBox([Math.floor(e.clientY / 20) * 20, Math.floor(e.clientX / 20) * 20])
        onmousedown = function(e2) {
          if (e2.clientY >= 80) {
            var add: boolean = true;
            var walls_temp = walls;
            var i: number;
            for (i = 0; i < walls_temp.length; i++) {
              if (walls_temp[i].toString() === [Math.floor(e.clientX / 20), Math.floor(e.clientY / 20)].toString()) {
                add = false;
                break;
              }
            }
            if (add) {
              var weights_temp: number[][] = [];
              for (i = 0; i < weights.length; i++) {
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
    onmousedown = function() {return;}
    onmouseup = function() {return;}
    onmousemove = function() {return;}
    onmousemove = function(e) {
      if (e.clientY >= 80) {
        setHoverBox([Math.floor(e.clientY / 20) * 20, Math.floor(e.clientX / 20) * 20])
        onmousedown = function(e2) {
          if (e2.clientY >= 80) {
            var add: boolean = true;
            var weights_temp = weights;
            var i: number;
            for (i = 0; i < weights_temp.length; i++) {
              if ([weights[i][0], weights[i][1]].toString() === [Math.floor(e.clientX / 20), Math.floor(e.clientY / 20)].toString()) {
                add = false;
                weights_temp[i][2] = weights_temp[i][2] === 1 ? 0.2 : Math.round((weights_temp[i][2] + 0.2) * 10) / 10;
                break;
              }
            }
            if (add) {
              for (i = 0; i < walls.length; i++) {
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

  if (dropdownPicked && algoSelectedOption === "Select nodes") {
    if (!startSelected || !goalSelected) {
      onmousedown = function() {return;}
      onmouseup = function() {return;}
      onmousemove = function() {return;}
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
          if (range < 20) setColorOfRange(0);
          if (range >= 20 && range < 40) setColorOfRange(1);
          if (range >= 40) setColorOfRange(2);
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
  
  if (goalSelected && !pathFound) {
    onmousedown = function(e) {return;}
    onmouseup = function(e) {return;}
    onmousemove = function(e) {return;}
    if (fullSearchData.length === 0 || path.length === 0) {
      const minWidth: number = -1;
      const maxWidth: number = Math.floor((Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 19.99) / 20) + 1;
      const minHeight: number = Math.floor(80 / 20) - 1;
      const maxHeight: number = Math.floor((Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 19.99) / 20) + 1;
      var fullDataSearchTemp: number[][][];
      var pathTemp: number[][];
      if (algoOrDatastruct === "BFS algorithm selected") {
        fullDataSearchTemp = BFS([], [[start[0], start[1], Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]], goal, [], [], false, walls, weights, [minWidth, maxWidth, minHeight, maxHeight]);
        setFullSearchData(fullDataSearchTemp);
        pathTemp = getFullDataSearch(fullDataSearchTemp, goal);
        pathTemp = pathTemp.reverse();
        setPath(pathTemp);
        setPathFound(true);
      } else if (algoOrDatastruct === "DFS algorithm selected") {
        fullDataSearchTemp = DFS([], [[start[0], start[1], Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]], goal, [], [], false, walls, weights, [minWidth, maxWidth, minHeight, maxHeight], []);
        setFullSearchData(fullDataSearchTemp);
        pathTemp = getFullDataSearch(fullDataSearchTemp, goal);
        pathTemp = pathTemp.reverse();
        setPath(pathTemp);
        setPathFound(true);
      } else if (algoOrDatastruct === "GBFS algorithm selected") {
        fullDataSearchTemp = GBFS([], [[start[0], start[1], Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]], goal, [], [], false, walls, weights, [minWidth, maxWidth, minHeight, maxHeight]);
        setFullSearchData(fullDataSearchTemp);
        pathTemp = getFullDataSearch(fullDataSearchTemp, goal);
        pathTemp = pathTemp.reverse();
        setPath(pathTemp);
        setPathFound(true);
      } else if (algoOrDatastruct === "A* algorithm selected") {
        fullDataSearchTemp = AStar([], [[start[0], start[1], Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]], goal, [], [], false, walls, weights, [minWidth, maxWidth, minHeight, maxHeight]);
        setFullSearchData(fullDataSearchTemp);
        pathTemp = getFullDataSearch(fullDataSearchTemp, goal);
        pathTemp = pathTemp.reverse();
        setPath(pathTemp);
        setPathFound(true);
      }
    }
  }
  
  useEffect(() => {
    var i = 0;
    var k = 0;
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
  }, [pathFound, fullSearchData, path]);

  function sortComponents() {
    return (
      <>
        <div className="slider-text">Amount of entries</div>
        <Styles opacity={0.8} color={`rgb(${sliderValue*1.5},${201-sliderValue*1.5},0)`}>
          <div className="value">{sliderValue}</div>
          <input type="range" min={1} max={100} value={sliderValue} className="slider" onChange={(e: any) => setSliderValue(e.target.value)} />
        </Styles>
      </>
    );
  }

  function reset() {
    setDropdownPicked(false);
    setDropdownPickedSort(false);
    setDropdownPickedSearch(false);
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
    setColorOfRange(0);
    setAlgoSelectedOption("Select nodes");
    setWalls([]);
    setWeights([]);
  }

  function partialReset() {
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
    setColorOfRange(0);
  }

  function partialSearchReset() {
    //TODO
  }

  function partialSortReset() {
    //TODO
  }

  // Refactoring navbar into a separate component is more difficult, as it has a bunch of setstates
  return (
    <div className="body">
      <nav className="navbar">
          <div className='navbar-logo'>
              DSA visuals <i className='fas fa-project-diagram'/>
          </div>
          <div className='navbar-selected'>
              {algoOrDatastruct}
          </div>
          <div className='menu-icon' onClick={() => setClick(!click)}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              {algoSelected &&
              <li className='nav-item'>
                      <div className={drawingDone ? (algoSelectedOption !== "Select nodes" ? 'nav-links' : 'nav-li-unclickable') : "nav-li-unclick-2"} onClick={drawingDone ? function() {setClick(false); setAlgoSelectedOption("Select nodes"); } : function() {}}>
                          Select nodes
                      </div>
                      <div className={drawingDone ? (algoSelectedOption !== "Add walls" ? 'nav-links' : 'nav-li-unclickable') : "nav-li-unclick-2"} onClick={drawingDone ? function() {setClick(false); setAlgoSelectedOption("Add walls"); } : function() {}}>
                          Add walls
                      </div>
                      <div className={drawingDone ? (algoSelectedOption !== "Add weights" ? 'nav-links' : 'nav-li-unclickable') : "nav-li-unclick-2"} onClick={drawingDone ? function() {setClick(false); setAlgoSelectedOption("Add weights"); } : function() {}}>
                          Add weights
                      </div>
              </li>}
              <li className='nav-item' onMouseEnter={onMouseEnterDropdownAlgorithms} onMouseLeave={onMouseLeaveDropdownAlgorithms}>
                  <div className='nav-links' onClick={() => setClick(false)}>
                      Pathfinder Algorithms <i className='fas fa-caret-down' />
                  </div>
                  {dropdownAlgorithms && 
                  <ul className='dropdown-menu'>
                      <li>
                          <div className="dropdown-link" onClick={function() {setAlgoOrDatastruct("BFS algorithm selected"); setDropdownPickedSort(false); setDropdownPickedSearch(false); setDropdownPicked(true); setAlgoSelected(true); setAlgoSelectedOption("Select nodes"); partialReset(); }}>
                              Breadth-First Search
                          </div>
                      </li>
                      <li>
                          <div className="dropdown-link" onClick={function() {setAlgoOrDatastruct("DFS algorithm selected"); setDropdownPickedSort(false); setDropdownPickedSearch(false); setDropdownPicked(true); setAlgoSelected(true); setAlgoSelectedOption("Select nodes"); partialReset(); }}>
                              Depth-First Search
                          </div>
                      </li>
                      <li>
                          <div className="dropdown-link" onClick={function() {setAlgoOrDatastruct("GBFS algorithm selected"); setDropdownPickedSort(false); setDropdownPickedSearch(false); setDropdownPicked(true); setAlgoSelected(true); setAlgoSelectedOption("Select nodes"); partialReset(); }}>
                              Greedy Best-First Search
                          </div>
                      </li>
                      <li>
                          <div className="dropdown-link" onClick={function() {setAlgoOrDatastruct("A* algorithm selected"); setDropdownPickedSort(false); setDropdownPickedSearch(false); setDropdownPicked(true); setAlgoSelected(true); setAlgoSelectedOption("Select nodes"); partialReset(); }}>
                              A* Search
                          </div>
                      </li>
                  </ul>
                  }
              </li>
              <li className='nav-item' onMouseEnter={onMouseEnterDropdownSearchAlgorithms} onMouseLeave={onMouseLeaveDropdownSearchAlgorithms}>
                  <div className='nav-links' onClick={() => setClick(false)}>
                      Search &amp; Sort Algorithms <i className='fas fa-caret-down' />
                  </div>
                  {dropdownSearchAlgorithms && 
                  <ul className='dropdown-menu'>
                      <li>
                          <div className="dropdown-link" onClick={function() {setAlgoOrDatastruct("Linear search selected"); setDropdownPickedSort(false); setDropdownPicked(false); setDropdownPickedSearch(true); setAlgoSearchSelected(true); partialSearchReset(); }}>
                              Linear search
                          </div>
                      </li>
                      <li>
                          <div className="dropdown-link" onClick={function() {setAlgoOrDatastruct("Binary search selected"); setDropdownPickedSort(false); setDropdownPicked(false); setDropdownPickedSearch(true); setAlgoSearchSelected(true); partialSearchReset(); }}>
                              Binary search
                          </div>
                      </li>
                      <li>
                          <div className="dropdown-link" onClick={function() {setAlgoOrDatastruct("Jump search selected"); setDropdownPickedSort(false); setDropdownPicked(false); setDropdownPickedSearch(true); setAlgoSearchSelected(true); partialSearchReset(); }}>
                              Jump search
                          </div>
                      </li>
                      <div className="divider"/>
                      <li>
                          <div className="dropdown-link" onClick={function() {setAlgoOrDatastruct("Quick sort selected"); setDropdownPicked(false); setDropdownPickedSearch(false); setDropdownPickedSort(true); setAlgoSortSelected(true); partialSortReset(); }}>
                              Quick sort
                          </div>
                      </li>
                      <li>
                          <div className="dropdown-link" onClick={function() {setAlgoOrDatastruct("Merge sort selected"); setDropdownPicked(false); setDropdownPickedSearch(false); setDropdownPickedSort(true); setAlgoSortSelected(true); partialSortReset(); }}>
                              Merge sort
                          </div>
                      </li>
                      <li>
                          <div className="dropdown-link" onClick={function() {setAlgoOrDatastruct("Bubble sort selected"); setDropdownPicked(false); setDropdownPickedSearch(false); setDropdownPickedSort(true); setAlgoSortSelected(true); partialSortReset(); }}>
                              Bubble sort
                          </div>
                      </li>
                  </ul>
                  }
              </li>
              <li className='nav-item' onMouseEnter={onMouseEnterDropdownDatastructures} onMouseLeave={onMouseLeaveDropdownDatastructures}>
                  <div className='nav-links' onClick={() => setClick(false)}>
                      Data Structures <i className='fas fa-caret-down' />
                  </div>
                  {dropdownDatastructures && 
                  <ul className='dropdown-menu'>
                      <li>
                          <div className="dropdown-link">
                              Nothing implemented yet
                          </div>
                      </li>
                  </ul>
                  }
              </li>
              <li className='nav-item'>
                  <div className='nav-links-mobile' onClick={() => setClick(false)}>
                      Dropdowns and buttons not yet implemented
                  </div>
              </li>
          </ul>
          <div>
              <button className={drawingDone ? 'btn' : 'bt-done'} onClick={drawingDone ? function() {setClick(false); reset(); } : function() {}}>
                  Reset
              </button>
          </div>
      </nav>
      {footer(dropdownPicked, startSelected, goalSelected, start, goal)}
      {legend(dropdownPicked, startSelected, goalSelected, colorOfRange, goalColor, algoSelectedOption, walls, weights)}
      {drawWalls(walls, true)}
      {drawWeights(weights, true)}
      {(dropdownPickedSort || dropdownPickedSearch) && sortComponents()}
      {!goalSelected && dropdownPicked && pickTargets(hoverBox, startSelected, colorOfRange, algoSelectedOption)}
      {startSelected && drawStartAndGoal(start, false, 0)}
      {goalSelected && drawStartAndGoal(goal, true, goalColor)}
      {pathFound && drawSearch(positions, true)}
      {pathFound && drawSearch(alreadyDrawn, false)}
      {pathFound && drawPath(positionsPath, true)}
      {pathFound && drawPath(alreadyDrawnPath, false)}   
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);