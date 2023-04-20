import React, { useState } from "react";
import DetailedOutput from "./detailed_output";
import Button from 'react-bootstrap/Button';

export default function Output(props) {
    const [k,setK] = useState('');
    const tgt = [];
    for(var i = 0; i < props.target.length; i++){
        tgt.push(props.target.charAt(i))
    }
    const table = props.table;
    // console.log(table)
    const substr = [...props.substr];
    const cname = props.cname;
    console.log(cname);
    const preprocess = (str_set) => {
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
        // return (<td key={index}><button onClick={handleClick} className='trnsp-btn' id={item.id}>{str}</button></td>);

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
    return (
        <div className='output'>
            <h2 className={cname}>Output</h2>
            <p className={cname}>CYK Table</p>
            <table className='cyk-table'>
                <thead>
                    <tr>
                        {
                            tgt.map((item, index) => {
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