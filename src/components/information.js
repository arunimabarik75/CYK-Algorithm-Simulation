import React from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export default function information() {
  return (
    <div className='background'>
      <h1>About the algorithm</h1>
      <hr />

      <br />
      <NavLink to='/CYK-Algorithm-Simulation'><Button variant='primary' size='lg' className='button-text'>&nbsp;&nbsp;Back to home&nbsp;&nbsp;</Button></NavLink>
      <br />
      <br/>
      <p>The CYK algorithm is a parsing algorithm for context-free grammar. It is used to check if a particular string can be derived from the language generated by a given grammar. </p>
      <p>It is also called the membership algorithm as it tells whether the given string is a member of the given grammar or not.</p>

      <h2>Basics</h2>
      <p>In a CYK algorithm, the structure of grammar should be in Chomsky normal form.</p>
      <p>In addition, the CYK algorithm uses the dynamic programming or table filling algorithm.</p>
      
      <h2>Algorithm</h2>
      <div className='algo-image'></div>

      <h2>Example</h2>
      <p>The given CFG is</p>
      <div className='cfg'></div><br/>
      <p>The string to be checked is w =ababa</p>
      <p>The length of string |w| = 5</p>
      <div className='table-image'></div>
      <br />
      <p>S is present in the last cell so the string is valid.</p>
    </div>
  )
}
