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
            table[i][j] = new Set()
        }
    }
    for(var i = 0; i < len; i++){
        if(dict[target[i]] === undefined)
            continue;
        dict[target[i]].forEach(e => {
            table[0][i].add(e)
        })
    }
    for(var i = 1; i < len; i++){
        for(var j = 0; j < len-i; j++){
            for(var index = 0; index < i; index++){
                var temp_prod = crossProduct(table[index][j], table[i-index-1][j+index+1])
                temp_prod.forEach(e => {
                    if(dict[e] !== undefined){
                        dict[e].forEach(ee =>{
                            table[i][j].add(ee)
                        })
                    }
                })
            }
        }
    }
    return table
}

function _isMember(target, dict){
    var table = cykAlgorithm(target, dict)
    var substrings = new Set()
    for(var i = 0; i < target.length; i++){
        for(var j = 0; j < target.length; j++){
            if(table[i][j].has('S')){
                substrings.add(target.substring(j,j+i+1))
            }
        }
    }
    return substrings
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
    const inv_prod = convertor(prods);
    return _isMember(target, inv_prod)
}