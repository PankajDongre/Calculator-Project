function cal(){
    var one = document.getElementById('num1').value;
    var two = document.getElementById('num2').value;
    // alert(one);  //for using condition working or not
    // alert(two);
     var oprand = document.getElementById('oprand').value;
    //  alert(oprand);

    if(oprand == '+'){
        var result = parseInt(one) + parseInt(two);
        // alert(result);
    }
    if(oprand == '-'){
        var result = parseInt(one) - parseInt(two);
        // alert(result);
    } 
    if(oprand == '*'){
        var result = parseInt(one) * parseInt(two);
        // alert(result);
    } 
    if(oprand == '/'){
        var result = parseInt(one) / parseInt(two);
        // alert(result);
    }
    //alert(result);
     document.getElementById('result').value =result;
    
}