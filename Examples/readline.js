const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,
                        output : process.stdout});
let num1 = Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2} `,(userInput)=>{
    if(userInput.trim() == answer){
        rl.close();
    }
    else{
        rl.setPrompt('Incorrect response ');
        rl.prompt();
        rl.on('line', (userInput)=>{
            if(userInput.trim() == answer){
                rl.close();            }
                else{
                rl.setPrompt(`${userInput} is incorrect, try again `);
                rl.prompt();
                }
        })
    }

})

rl.on('close', ()=>{
    console.log('Correct!');
})