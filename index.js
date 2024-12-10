const sum = (a, b) => { 
    return a + b; 
}; 

exports.sum = sum;

const abs = (a, b) => { 
    if(a<0) {
        a *= -1;
    }
    if(b<0) {
        b *= -1;
    }
    return a + b; 
}; 
exports.abs = abs;