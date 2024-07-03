function display(result){
     console.log(result);
}
function calculation(num1,num2, callback){
    let total=5+7;
    callback(total);
}
calculation (5,7,display)