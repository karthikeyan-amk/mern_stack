console.log("Hello world");


{// Add function 
    function add(a,b) {
        return a+b;
    }

    console.log(add(5,5));
}
// 
// Arrow function
{
    addition = (a,b)=>{
        return (a+b);
    }
    subtraction = (a,b)=>{
        return a-b;
    }
    multiplication = (a,b)=>{
        return a*b;
    }
    division = (a,b)=>{
        return a/b;
    }

    let a = parseInt(process.argv[2])
    let b = parseInt(process.argv[3])

    switch (process.argv[4]) {
        case '+':
            console.log("Addition :",addition(a,b));
            break;
        case '-':
            console.log("Subtraction :",subtraction(a,b));
            break;
        case '*':
            console.log("Multiplication :",multiplication(a,b));
            break;
        case '/':
            console.log("division :",division(a,b));
            break;
        default:
            console.log("Give proper operation");
    }
}




