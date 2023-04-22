import React, { useState } from "react";
import DetailedOutput from "./detailed_output";
import Button from 'react-bootstrap/Button';

export default function Output({table, target, substr, cname} ) {
    const [k,setK] = useState('');
    
    const preprocess = (str_set) => {
        console.log(str_set)
        var str = ''
        if(str_set === undefined)
        return str;
        str_set.forEach(s => {
            str+=s+'|'
        });
        return str.substring(0, str.length-1)
    }
    const handleClick = (e) => {
        setK(e.target.id)
    }
    const printCell = (item, index) => {
        var str = preprocess(item.final_product);
        if(str === '')
            str='-'
        // return (<td key={index}>{str}</td>);
        return (<td key={index}><Button variant='outline-primary' onClick={handleClick} size='lg' className='trnsp-btn' id={item.id}>{str}</Button></td>);
    }
    const printRow = (item,index) => {
        
        return (
            <tr key = {index}>
                {item.map((cell, index) => (
                    printCell(cell, index)
                    ))}
            </tr>
        )
    }
    // setTable(props.table);
    return (
        // <></>
        <div className='output'>
            <h2 className={cname}>Output</h2>
            <p className={cname}>CYK Table</p>
            <table className='cyk-table'>
                <thead>
                    <tr>
                        {
                            target.map((item, index) => {
                                return <th key={index}>{item}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {table.map((item,index)=>(
                        printRow(item,index)
                        
                    ))}
                </tbody>
            </table>
            <p className={cname}>Cross Product Calculations</p>
            <DetailedOutput table = {table} k= {k}></DetailedOutput>
            <p className={cname}>Accepted substrings</p>
            <ol>
                {
                    substr.map((item, index) => 
                        <li key={index}>{item}</li>
                    )
                }
            </ol>
        </div>
    )
}