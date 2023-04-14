import './App.css';
import { useState } from 'react';
import Input from './components/input';
import isMember from './components/cyk';
import Output from './components/output';


function App() {
  // const [all_substr, setAll_substr] = useState(new Set())
  const [table, setTable] = useState([[]])
  var [target, setTarget] = useState('')
  // var target = '';
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
    const t = 'baaba'
    const p={

    }
    
    p['S']=new Set()
    p['S'].add('AB')
    p['S'].add('BC')
    p['A']=new Set()
    p['A'].add('BA')
    p['A'].add('a')
    p['B']=new Set()
    p['B'].add('CC')
    p['B'].add('b')
    p['C']=new Set()
    p['C'].add('AB')
    p['C'].add('a')
    setTarget(t)
    setTable(isMember(t, p))
  };
  return (
    <div>
      <Input dataHandler={dataHandler}/>
      <Output table={table} target={target} ></Output>
    </div>
  );
}

export default App;
