function checkNumber(num) {
    return num > 0 ? num : 0;
}

function sayHello(name) {
    return `Hello, ${name} how are you?`;
}

module.exports={
    checkNumber,
    sayHello
}