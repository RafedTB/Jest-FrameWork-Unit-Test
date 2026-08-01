function checkNumber(num) {
    if(num > 0) {
        return num;
    } else if(num < 0) {
        return 0;
    }
    return 0;
}
module.exports={
    checkNumber
}