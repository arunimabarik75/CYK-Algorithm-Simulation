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
    substr: new Set()
  })
  const productions = {}

  const dataHandler = (tgt, prods) => {
    let window = document.getElementsByClassName('output');

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
    findSubstring();
  };
  
  function findSubstring(){
    var lst = new Set();
    for(var i = 0; i < component_state.target.length; i++){
      for(var j = 0; j < component_state.target.length-i; j++){
        if(component_state.table[i][j].final_product.has('S')){
          console.log(i,j,component_state.target.substring(j, j+i+1));
          lst.add(component_state.target.substring(j, j+i+1));
        }
      }
    }
    console.log(lst);
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
