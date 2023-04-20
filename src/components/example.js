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
    <div className='background'>
      <h1>Simulation</h1>
      <hr />

      <br />
      <NavLink to='/CYK-Algorithm-Simulation'><Button variant='primary' size='lg' className='button-text'>&nbsp;&nbsp;Back to home&nbsp;&nbsp;</Button></NavLink>
      <br />
      <br/>

      <Input dataHandler={dataHandler}/> 
      <Output table={component_state.table} target={component_state.target} ></Output>
    </div>
  );
}

export default Example;
