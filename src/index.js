module.exports = function reverse (n) {
    let str = n.toString();
    if (n >= 0) {
        return +str.split("").reverse().join("");
    } else {
        return +str.split("").slice(1).reverse().join("") ;
    }
}

