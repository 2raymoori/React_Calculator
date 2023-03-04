export default class Calculation {
    constructor(expression) {
        this.expression = expression;
    }

    infixToPostFix =(input)=>{
        const operatorStack = [];
        const postFixStack = [];
        const expItems = input.split("");
        let numberAccum = "";
        let tracker = 0;
        expItems.map(a=>{
            tracker++;
            if(a==="*" || a==="/" || a==="+" || a==="-" || a==="(" || a===")" ){
                if(numberAccum !==""){
                postFixStack.push(numberAccum);
                numberAccum = "";
                }
                if(operatorStack.length === 0 || operatorStack[operatorStack.length-1] === "("){
                    operatorStack.push(a);
                }
                else if( (operatorStack[operatorStack.length -1]==="*" || operatorStack[operatorStack.length -1]==="/") && (a === "+" || a === "-") ){
                    postFixStack.push(operatorStack.pop());
                    operatorStack.push(a);
                }
                else if((operatorStack[operatorStack.length -1] == "+" || operatorStack[operatorStack.length -1] == "-") && (a == "/" || a === "*")  ){
                    operatorStack.push(a);
                }
                else if(((operatorStack[operatorStack.length -1]==="*" || operatorStack[operatorStack.length -1]==="/") && (a === "*" || a === "/")) || ((operatorStack[operatorStack.length -1]==="+" ||
                 operatorStack[operatorStack.length -1]==="-") && (a === "+" || a === "-")) ){
                    postFixStack.push(operatorStack.pop());
                    operatorStack.push(a);
                }
                else if(a === "("){
                    operatorStack.push(a);
                }
                else if(a === ")"){
                    // Come back to revisit this 
                    while(true){
                        let top = operatorStack.pop();
                        if(top === "("){
                            break;
                        }else{
                            postFixStack.push(top);
                        }
                    }
                }
            }
            else{
                numberAccum = numberAccum+a+"";
                if(tracker === expItems.length){
                    postFixStack.push(numberAccum);
                }
                console.log(numberAccum);
            }
        });
        if(operatorStack.length >0){
            while(true){
                postFixStack.push(operatorStack.pop())
                if(operatorStack.length === 0)
                break;
            }
        }
        return postFixStack;
    }

    postFixEval =(postOutPut)=>{

        let stack2 = []; // Second Stack to Store the result of the computation.  
        //let x = "";
        let tmp = ""; // To Store the value of the current character processed. 
        for(let i = 0; i<postOutPut.length; i++){
            tmp = postOutPut[i];
            if(tmp === "*" || tmp === "/" || tmp === "+" || tmp === "-"){
                // console.log("STACK2 VAL ================>"+stack2)
                
                let ope1 = stack2.pop(); // Remove from stack and use as first operand
                let ope2 =  stack2.pop() ; // Remove from stack and use as second operand
                let op1 = Number(ope1); // remove the comma (,) from the operand and convert it to a number
                let op2 = Number(ope2);
                // Checking while processing if any of the operands ( op1 or op2 ) could not be converted to a number. 
                if(op2 === 0 || op1 === 0){ 
                    
                    return "Wrong input!";
                }
                let res=0; // Store the result of the computation 
                // Below doing the Arithmetrics. 
                switch(tmp){
                    case "*":
                        res = op1 * op2;
                        break;
                    case "/":
                        res = op2/ op1;
                        break;
                    case "+":
                        res = op1+ op2;
                        break;
                    default:
                        res = op2 - op1;
                        break;
                }
                let returnIt = res; // appending , to indicate the ending of a number. 
                stack2.push(returnIt); // adding / appending to the Answer Stack 
            }
            else{
                stack2.push(tmp)  
            }
        }
        if(stack2.length == 1 && !isNaN(stack2[0])){
            return stack2[0];
        }
        return "wrong input!";
    };

    calculate() {
        /**
         * @TODO Add your implementaiton here
         */
        /*
         let stack = [];// Array dataStructure to store my Infix to Post fix Result ( Expression to PostFix) to Proceed with the computation. 
         let xyz = this.expression.split(""); // Seprate the Expression and process the expression character by Characer
         let postOutPut = "";// init the result of the PostFix to store
         xyz.forEach((a,i)=>{ // Process the Entire Expression Character by chracter
            // Below passes from infix to post fix Add and remove from the Postfix Stack if the current value to be processed is an operator or a bracket ( )
            if(a==="*" || a==="/" || a==="+" || a==="-" || a==="(" || a===")" ){
                postOutPut+=","; // Adding the Comma to Signal the ending of a number 
                if(stack.length === 0){
                    stack.push(a);
                }else{
                    let tmp = stack[stack.length-1]; 
                    if(tmp ==="(" && !a ===")"){
                        stack.push(a); // adding a value ot the Stack 
                    }
                    else if(a === ")"){
                        let rm = stack.pop();// Removing from the Stack and
                        postOutPut+=rm; // adding /appending to the Postfix output. 
                    }
                    else{
                        let k = stack[stack.length-1]; // Chek the value of the Stack on top. Because operators has Priorities. 
                        if( a === "*" || a === "/"  && (k === "+" || k === "-")){
                            stack.push(a); // Adding to the Stack
                        }else if(a ==="*" || a ==="/" ){
                            postOutPut+= stack.pop();
                            stack.push(a);
                        }
                        else if(a === "+" || a === "-" ){
                            while(true && stack.length !== 0){
                                postOutPut+= stack.pop();
                            }
                            stack.push(a);
                        }
                    }
                }

                }else{
                    postOutPut+=a+""; // adding / appending operands to the Postfix output. 
                }
            })
            postOutPut+=",";// Adding the Comma to Signal the ending of a number 
        let remaining = stack.length; // Getting the Length of the stack / remaining items in the stack 
        for(let x = 1; x<=remaining; x++){
            postOutPut+=stack.pop();
        }
*/

        const postFixRes = this.infixToPostFix(this.expression);
        return this.postFixEval(postFixRes);
        /*
        let stack2 = []; // Second Stack to Store the result of the computation.  
        let x = "";
        let tmp = ""; // To Store the value of the current character processed. 
        for(let i = 0; i<postOutPut.length; i++){
            tmp = postOutPut[i];
            if(tmp === "*" || tmp === "/" || tmp === "+" || tmp === "-"){
                // console.log("STACK2 VAL ================>"+stack2)
                let ope1 = stack2.pop(); // Remove from stack and use as first operand
                let ope2 =  stack2.pop() ; // Remove from stack and use as second operand
                let op1 = Number(ope1.slice(0,ope1.length-1)); // remove the comma (,) from the operand and convert it to a number
                let op2 = Number(ope2.slice(0,ope2.length-1));
                // Checking while processing if any of the operands ( op1 or op2 ) could not be converted to a number. 
                if(op2 === 0 || op1 === 0){ 
                    return "Wrong input!";
                }
                let res=0; // Store the result of the computation 
                // Below doing the Arithmetrics. 
                switch(tmp){
                    case "*":
                        res = op1 * op2;
                        break;
                    case "/":
                        res = op2/ op1;
                        break;
                    case "+":
                        res = op1+ op2;
                        break;
                    default:
                        res = op2 - op1;
                        break;
                }
                let returnIt = res+","; // appending , to indicate the ending of a number. 
                stack2.push(returnIt); // adding / appending to the Answer Stack 
            }
            else{
                // Checking if What is processed is not an operator. 
                if(tmp !== "," ){
                    x+=tmp;
                }else{
                    x+=",";
                    stack2.push(x); // Adding the temporal Result to the Stack.
                    x="";
                }
                
            }
        }
        */
            // If the Stack item is more than one, Then there is a problem, Return undefined to the caller. 
            // if(stack2.length >1){
            //     return undefined;
            // }
            // let result = stack2.pop();// Getting the last item in the Stack  which is the answer 
            // return Number(result.slice(0,result.length-1)); // returning the Answer of the expression to the caller. 
    }
}