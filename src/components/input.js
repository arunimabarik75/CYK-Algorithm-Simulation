import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
function Input({dataHandler}){
    const production_type =[
        {
            key:'',
            value:'',
            id: uuidv4()
        }
    ]
    const [productions, setProductions] = useState(production_type);
    const [target, setTarget] = useState('');
    const addProduction = () => {
        setProductions(s => {
            return [...s, {key:'',value: '',  id: uuidv4()}]
        })
    }
    const removeProduction = (e) => {
        setProductions(s => {
            function func(ee){
                return ee.id !== e.target.id;
            }
            return s.filter(func)
        })
    }
    const handleChange = e => {
        setProductions(s => {
            const id = e.target.id;
            const uuid = id.substring(1);
            const keyorvalue = id[0] === '1' ? 'key' : 'value';
    
            function filter(ee) {
                return ee.id === uuid;
            }
            const valuetoupdate = productions.findIndex(filter);
            productions[valuetoupdate][keyorvalue] = e.target.value;
            return [...productions];
        })
    }
    const handleTgtChange = e => {
        setTarget(s=>{
            return e.target.value;
        })
    }
    return (
        <div>
            {
                productions.map((item) => {
                    return (<div key={item.id}>
                        <input id={'1'+item.id} placeholder='Nonterminal symbol' onChange={handleChange} style = {{height: '20px', width:'120px', padding: '5px', margin: '5px'}}  value={(item.key).charAt(item.key.length-1).toUpperCase()} type='text' required></input>
                        <input id={'2'+item.id} placeholder='Terminal/Nonterminal symbol' onChange={handleChange}  value={item.value} style = {{height: '20px', width:'190px', padding: '5px', margin: '5px'}} type='text' required></input>
                        <button id={item.id} style = {{height: '30px', width: '30px',  padding: '5px', margin: '5px'}} onClick={removeProduction}> - </button>
                    </div>)
                })
            }
            <button onClick={addProduction}>Add one</button>
            <div></div>
            <input type='text' placeholder='target string' id='target' onChange={handleTgtChange} value={target}></input>
            <button onClick={() => dataHandler(target, productions)}>Submit</button>
        </div>
    )
}

export default Input
