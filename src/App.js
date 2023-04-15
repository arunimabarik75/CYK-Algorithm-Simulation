import './App.css';
import { useState } from 'react';
import Input from './components/input';
import isMember from './algorithms/cyk';
import Output from './components/output';


function App() {
  const [component_state, setComponent_State] = useState({
    table: [],
    target: ''
  })
  const productions = {}

  const dataHandler = (tgt, prods) => {
    prods.forEach(e => {
      
      const key = e.key.charAt(e.key.length-1).toUpperCase()
      if(key !== ''){
        if(productions[key] === undefined){
          productions[key] = new Set();
        }
        const symb_arr = e.value.split(/[\s,|]+/);
        symb_arr.forEach(symbol => {
          productions[key].add(symbol)
        })
      }
    });
    setComponent_State(prev_state => ({...prev_state, target: tgt}))
    setComponent_State(prev_state => ({...prev_state, table: isMember(tgt, productions)}))
  };
  return (
    <div>
      <Input dataHandler={dataHandler}/>
      <Output table={component_state.table} target={component_state.target} ></Output>
    </div>
  );
}

export default App;
