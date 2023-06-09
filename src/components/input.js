import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            if(keyorvalue === 'key'){
                productions[valuetoupdate][keyorvalue] = productions[valuetoupdate][keyorvalue].charAt(0).toUpperCase();
                console.log(productions[valuetoupdate][keyorvalue])
            }
            return [...productions];
        })
    }
    const handleTgtChange = e => {
        setTarget(s=>{
            return e.target.value;
        })
    }
    return (
        <div className='background'>
            <h2>Input</h2>
            <p>Enter CFG (in CNF)</p>
            <Button variant='outline-success' className='button-text2' size='lg' onClick={addProduction}>&nbsp;&nbsp;Add&nbsp;&nbsp;</Button>
            <br />
            <br />            
            {
                productions.map((item) => {
                    return (<div key={item.id}>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Control type='text' id={'1' + item.id}placeholder='Non Terminal Symbol' onChange={handleChange}className='first' value={(item.key).charAt(item.key.length - 1).toUpperCase()} required></Form.Control></Col>
                                
                                <Col>
                                    <Form.Control id={'2' + item.id}type='text' placeholder='Terminal/ Non Terminal Symbol' onChange={handleChange} className='second' value={item.value} required></Form.Control></Col>
                                
                                <Col>
                                <Button id={item.id} variant='outline-danger' className='button-text2' onClick={removeProduction}size = 'lg'>&nbsp;&nbsp;Remove&nbsp;&nbsp;</Button></Col>
                            </Row>
                            <br />
                        </Container>

                    </div>)
                })
            }
            <p>Enter target string</p>
            <Form.Control placeholder='Target string' className='string' id='target' onChange={handleTgtChange} value={target}></Form.Control>
            <br />
            <br />
            <Button variant='outline-dark' size='lg' className='button-text2' onClick={() => dataHandler(target, productions)}>&nbsp;&nbsp;Submit&nbsp;&nbsp;</Button>
        </div>
    )
}
export default Input;
