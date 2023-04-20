import { v4 as uuidv4 } from "uuid";
import possibility from '../structures/possibility';
import structure from '../structures/structure'


function crossProduct(st1, st2){
    const product = new Set()
    st1.forEach(e1 => {
        st2.forEach(e2 => {
            product.add(e1+e2)
        })
    });
    return product
}

function cykAlgorithm(target, dict){
    var len = target.length
    var table = []
    
    for(var i = 0; i < len; i++){
        table[i]=[]
        for(var j = 0; j < len; j++)
        {
            table[i][j] = new structure()
            table[i][j].id = uuidv4()
        }
    }
    for(i = 0; i < len; i++){
        if(dict[target[i]] === undefined)
            continue;
        table[0][i].final_product = new Set()
        dict[target[i]].forEach(e => {
            table[0][i].final_product.add(e);
        })
        if(table[0][i].final_product.size === 0){
            table[0][i].final_product.add('-');
        }
    }
    for(i = 1; i < len; i++){
        for(j = 0; j < len; j++){
            if(j < len-i){
                for(var index = 0; index < i; index++){
                    const psblt = new possibility();
                    psblt.productOf = [table[index][j].final_product,table[i-index-1][j+index+1].final_product];
                    const temp_prod = crossProduct(table[index][j].final_product, table[i-index-1][j+index+1].final_product);
                    psblt.dot_product = temp_prod;
                    temp_prod.forEach(e => {
                        if(dict[e] !== undefined){
                            dict[e].forEach(ee =>{
                                psblt.contribution.add(ee);
                                table[i][j].final_product.add(ee);
                            })
                        }
                    })
                    table[i][j].possibilities.push(psblt)
                }
                if(table[i][j].final_product.size === 0){
                    table[i][j].final_product.add('-');
                }
            }
            else{
                table[i][j].final_product.add('X');
            }
        }
    }
    return table
}

function _isMember(target, dict){
    return cykAlgorithm(target,dict)
}

function convertor(prod){
    const inverse_production = {}
    for (const key in prod){
        prod[key].forEach((val) => {
            if(inverse_production[val] === undefined){
                inverse_production[val] = new Set()
            }
            inverse_production[val].add(key)
        })
    }
    return inverse_production
}

export default function isMember(target, prods){
// function isMember(target, prods){
    const inv_prod = convertor(prods);
    return _isMember(target, inv_prod)
}