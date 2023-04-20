export default function DetailedOutput(props){
    const key = props.k;
    const table = props.table;
    if(key === '')
    return <div></div>
    function checker(item){
        return item.id === key;
    }
    function cell_to_display() {
        for(var i = 0; i < table.length; i++){
            const j = table[i].findIndex(checker);
            if(j !== -1){
                return {i,j}
            }
        }
    }
    const t = cell_to_display();
    const preprocess = (str_set) => {
        var str = ''
        if(str_set === undefined)
            return str;
        str_set.forEach(s => {
            str+=s+'|'
        });
        return str.substring(0, str.length-1)
    }

    const printCell = (item, index) => {
        var p1 = preprocess(item.productOf[0])
        if(p1 === '')
            p1='-'
        var p2 = preprocess(item.productOf[1])
        if(p2 === '')
            p2='-'
        var prod = preprocess(item.dot_product)
        if(prod === '')
            prod='-'
        var contri = preprocess(item.contribution)
        if(contri === '')
            contri='-'
        return (
            <td key={index}>
            <table className='operation-table'>
                <tbody>
                <tr>
                    <td>{p1}</td>
                    <td>{p2}</td>
                </tr>
                <tr>
                    <td colSpan="2">{prod}</td>
                </tr>
                <tr>
                    <td colSpan='2'>{contri}</td>
                </tr>
                </tbody>
            </table>
            </td>
        )
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
    return (<table>
        <tbody>
            {printRow(table[t.i][t.j].possibilities)}
        </tbody>
    </table>)
}