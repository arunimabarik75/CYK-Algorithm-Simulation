import './App.css';
import { useState } from 'react';
import Input from './components/input';
import isMember from './components/cyk';
import Output from './components/output';


function App() {
  const [table, setTable] = useState([[]])
  var [target, setTarget] = useState('')
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
    setTable(isMember(target, productions))
    setTarget(tgt)
  };
  return (
    <div>
      {target}
      <Input dataHandler={dataHandler}/>
      <Output table={table} target={target} ></Output>
    </div>
  );
}

export default App;
