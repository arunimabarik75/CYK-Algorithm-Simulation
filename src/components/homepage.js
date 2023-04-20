import React from 'react'
import './style.css'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

export default function homepage() {
  return (
    <div className='outer'>
      <img className='left' src={require('../assets/background.png')} alt='asdasdkj' />
          <div className='right'>
                  <table className='topic-name'>
                  <tr>
                      <th>C</th>
                      <th>Y</th>
                      <th>K</th>
                  </tr>
                  <tr>
                      <td>Cocke</td>
                      <td>Younger</td>
                      <td>Kasami</td>
                  </tr>
                  <tr>
                      <th colSpan='3'>Algorithm</th>
                  </tr>
                  <tr><br /><br /></tr>
                  <tr><td colSpan='3'>
                  <NavLink to='/information'><Button variant='outline-danger' className='button-text' id='intro_page_know' size='lg'><span>&nbsp;&nbsp;Know More about the algorithm&nbsp;&nbsp;</span></Button></NavLink></td></tr>
                  <tr><br /></tr>
          
                  <tr><td colSpan='3'>
                  <NavLink to='/example'><Button variant='outline-success' className='button-text' id='intro_page_try' size='lg'><span>&nbsp;&nbsp;Try an example&nbsp;&nbsp;</span></Button></NavLink></td></tr>
                  <tr><br /></tr>
                </table>
        </div>
    </div>
  )
}

