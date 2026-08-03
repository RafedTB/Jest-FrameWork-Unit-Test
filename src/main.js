function checkNumber(num) {
    return num > 0 ? num : 0;
}

function sayHello(name) {
    return `Hello, ${name} how are you?`;
}
function getNames(){
    return ["Alice", "Bob", "Charlie"];
}

module.exports={
    checkNumber,
    sayHello,
    getNames
}