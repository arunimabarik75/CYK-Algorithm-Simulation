import './App.css';
import { useState } from 'react';
import Input from './components/input';
import isMember from './components/cyk';
import Output from './components/output';


function App() {
  const [all_substr, setAll_substr] = useState(new Set())
  var target = '';
  const productions = {}

  const dataHandler = (tgt, prods) => {
    prods.forEach(e => {
      target = tgt
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
    setAll_substr(isMember(target,productions));
  };
  return (
    <div>
      <Input dataHandler={dataHandler}/>
      <Output all_substr = {all_substr}></Output>
    </div>
  );
}

export default App;
