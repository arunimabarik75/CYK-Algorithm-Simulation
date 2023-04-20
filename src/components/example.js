import React from 'react'
import './style.css'
import { useState } from 'react';
import Input from './input';
import isMember from '../algorithms/cyk';
import Output from './output';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Example() {
  const [component_state, setComponent_State] = useState({
    table: [],
    target: '',
    substr: new Set(),
    cname: 'show'
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
    findSubstring(tgt,productions);
  };
  // table, tgt, 
  function findSubstring(tgt,productions){
    console.log(component_state.table);
    var lst = new Set();
    const tbl = isMember(tgt,productions);
    for(var i = 0; i < tgt.length; i++){
      for(var j = 0; j < tgt.length-i; j++){
        if(tbl[i][j].final_product.has('S') || tbl[i][j].final_product.has('s')){
          console.log(i,j,tgt.substring(j, j+i+1));
          lst.add(tgt.substring(j, j+i+1));
        }
      }
    }
    setComponent_State(prev_state => ({...prev_state, target: tgt}))
    setComponent_State(prev_state => ({...prev_state, table: isMember(tgt,productions)}))
    setComponent_State(prev_state => ({...prev_state, substr: lst}))
  }
  return (
    <div className='background'>
      <h1>Simulation</h1>
      <hr />

      <br />
      <NavLink to='/CYK-Algorithm-Simulation'><Button variant='primary' size='lg' className='button-text'>&nbsp;&nbsp;Back to home&nbsp;&nbsp;</Button></NavLink>
      <br />

      <Input dataHandler={dataHandler}/> 
      <Output table={component_state.table} target={component_state.target} substr={component_state.substr} ></Output>
    </div>
  );
}

export default Example;
