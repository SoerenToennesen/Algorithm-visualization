import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'typescript';
import './index.css';


function checkIfExists(graph: number[][][], val: number[]) {
  var found = false;
  graph.map(entry => (
    entry.map(item => {
      if (found) return;
      if (item.toString() === val.toString()) found = true;
    })
  ))
  return found;
}

const [graphTest, setGraphTest] = useState<number[][][]>([]);

function BFS(graph: number[][][], currentNode: number[], targetNode: number[], depth: number) {
  if (checkIfExists(graphTest, targetNode)) return;
  
  setGraphTest(graph => [...graph, [currentNode]]);
  
  return new Map([])

}



function App() {

  //Variables
  var pos: number[][][] = [];
  var data = [
    [[0,0]],
    [[0,1],[1,0],[1,1]],
    [[0,2],[2,0],[1,2],[2,1],[2,2]],
  ];

  //Multiply each node by 20 to position it correctly
  data = data.map(entry => (
    entry.map(elem => (
      elem.map(e => e*20)
    ))
  ))
  const [positions, setPositions] = useState<number[][][]>([]);
  const [state, setState] = useState(false);

  //Nodes component
  const Node = () => {
    return (
      <div>
          {state === true ? (positions.map(entry => (
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
          ))) : null}
      </div>
    )
  }

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