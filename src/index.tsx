import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function alreadyDiscovered(discovered: number[][], nodeToCheck: number[]): boolean {
  for (var i = 0; i < discovered.length; i++) {
    if (discovered[i].toString() === nodeToCheck.toString()) return true;
  }
  return false;
}

//Graph should initially start with first selected node
function BFS(graph: number[][][], currentNodes: number[][], targetNode: number[],
             discovered: number[][], found: boolean): number[][][] {    
  if (found) return graph;
  const directions: number[][] = [[1,0],[0,1],[-1,0],[0,-1]];
  var nextNodes: number[][] = [];
  graph.push([[]]);
  var depth = graph.length - 1;
  for (var i = 0; i < currentNodes.length; i++) { // something wrong with i < currentNodes.length
    if (alreadyDiscovered(discovered, currentNodes[i])) continue;
    if (i === 0) {
      graph[depth][0] = currentNodes[i];
    } else {
      graph[depth].push(currentNodes[i]);
    }
    discovered.push(currentNodes[i]);
    for (var j = 0; j < directions.length; j++) {
      nextNodes.push([currentNodes[i][0] + directions[j][0], currentNodes[i][1] + directions[j][1]]);
    }
    if (!found && currentNodes[i].toString() === targetNode.toString()) found = true;
  }
  return BFS(graph, nextNodes, targetNode, discovered, found);
}

function App() {

  //Variables
  var pos: number[][][] = [];

  const [positions, setPositions] = useState<number[][][]>([]);
  const [state, setState] = useState(false);

  //Nodes component
  const Node = () => {
    return (
      <div>
          {positions.map(entry => (
            entry.map(elem => (
              <div style={{
                position: "absolute",
                height: "15px",
                width: "15px",
                marginTop: `${elem[0]}px`,
                marginLeft: `${elem[1]}px`,
                top: "3px",
                left: "3px",
                backgroundColor: "rgb(0, 0, 0)",
                borderRadius: "35%",
                display: "inline-block",
              }}/>
            ))
          ))}
      </div>
    )
  }
  
  var data: number[][][] = BFS([], [[3,3]], [5,5], [], false);

  //Multiply each node by 20 to position it correctly
  data = data.map(entry => (
    entry.map(elem => (
      elem.map(e => e*20)
    ))
  ))

  //Delaying render of nodes
  useEffect(() => {
    var i = 0;
    const interval = setInterval(() => {

    //Exit condition
    if (i > data.length) {
      clearInterval(interval);
      return;
    }

    //Force re-render
    setState(false);
    if (i > 0) {
      setState(true);
    }

    //Fill data to render
    pos[i] = data[i];
    setPositions(pos);
    i++;
    }, 1000);
  }, []);

  //Main render
  return (
    <div className="body">
      <div>
          <Node />
      </div>
      <div className="drawer" />
      
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