import React, { useState } from "react";
import DetailedOutput from "./detailed_output";

export default function Output(props) {
    const [k,setK] = useState('');
    const tgt = [];
    for(var i = 0; i < props.target.length; i++){
        tgt.push(props.target.charAt(i))
    }
    const table = props.table;
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
        return (<td key={index}><button onClick={handleClick} className='trnsp-btn' id={item.id}>{str}</button></td>);
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
        <div>
            <p></p>
            <table>
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
                <p></p>
            <DetailedOutput table = {table} k= {k}></DetailedOutput>
        </div>
    )
}