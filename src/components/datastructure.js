const possibility = function(){
    this.productOf = [new Set(), new Set()];
    this.dot_product = new Set();
    this.contribution = new Set();
};
const structure = function(){
    this.id = null;
    this.possibilities = []
    this.final_product = new Set()
}

export {possibility, structure};