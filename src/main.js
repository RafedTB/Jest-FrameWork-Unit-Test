function checkNumber(num) {
    return num > 0 ? num : 0;
}

function sayHello(name) {
    return `Hello, ${name} how are you?`;
}
function getNames(){
    return ["Alice", "Bob", "Charlie"];
}

function getUser(userId,username) {
    return {
        id: userId,
        name: username,
        role: "user"
    }
}

module.exports={
    checkNumber,
    sayHello,
    getNames,
    getUser
}