// display number in text box

function display(num){
    console.log(num);
    result.value+=num;
}


// cleae text box

function clearBox(){
    result.value="";
}

// evaluate expression

function evaluateExpression(){
// exp=result.value;
// output=eval(exp);
// result.value=output;
result.value=eval(result.value);
}


//remove last item

function removeLast(){
    currentexp=result.value;
    result.value=currentexp.slice(0,-1);
}