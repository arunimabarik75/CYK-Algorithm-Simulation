import {useState} from 'react';
function Input(){
    const production_type =[
        {
            type: 'text',
            id: 1,
            value: ''
        }
    ]
    const [productions, setProductions] = useState(production_type);
    const addProduction = () => {
        setProductions(s => {
            return [...s, {value: '', type: 'text'}]
        })
    }
    const handleChange = e => {
        setProductions( s => {
            const newProds = productions;
            
            newProds[e.target.id].id = e.target.id;
            newProds[e.target.id].value = e.target.value;
            return setProductions
        })
    }
    return (
        <div>
            <button onClick={addProduction}>+</button>
            {
                productions.map((item, id) => {
                    return <div key={id}><input  onChange={handleChange} id={id} value={item.value} type={item.type}></input></div>
                })
            }
        </div>
    )
}

export default Input

// function Input() {
//     const inputArr = [
//       {
//         type: "text",
//         id: 1,
//         value: ""
//       }
//     ];
  
//     const [arr, setArr] = useState(inputArr);
  
//     const addInput = () => {
//       setArr(s => {
//         return [
//           ...s,
//           {
//             type: "text",
//             value: ""
//           }
//         ];
//       });
//     };
  
//     const handleChange = e => {
//       e.preventDefault();
  
//       const index = e.target.id;
//       setArr(s => {
//         const newArr = s.slice();
//         newArr[index].value = e.target.value;
  
//         return newArr;
//       });
//     };
  
//     return (
//       <div>
//         <button onClick={addInput}>+</button>
//         {arr.map((item, i) => {
//           return (
//             <input
//               onChange={handleChange}
//               value={item.value}
//               id={i}
//               type={item.type}
//               size="40"
//             />
//           );
//         })}
//       </div>
//     );
//   }
//   export default Input;