#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 20000;
let mypin = 2233;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("Your pin is correct!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option!!",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > mybalance) {
            console.log("invalid");
        }
        else if (mybalance -= amountAns.amount) {
            console.log("Your remaining is " + mybalance);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("your balance is:" + mybalance);
    }
}
else {
    console.log("Please enter correct pin code!!!");
}
