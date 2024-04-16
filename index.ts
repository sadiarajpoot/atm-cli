#! /usr/bin/env node 
import inquirer from "inquirer";
 
console.log("WELLCOME TO SADIA KHAN ATM MECHINE") 

let mybalance = 5000;
let mypin = 2468 ;

let pinAns= await inquirer.prompt([

  {
    name:"pin", type:"number" , message:"Enter your pin code "
  }
]) 
if (pinAns.pin === mypin){ 
  console.log ("pin is correct , login successfully !!! ")
  

  let operationAns = await inquirer.prompt([
    {
      name:"operation", type:"list", message:"select an operation",
      choices:["withdraw", "check balance"]
    }
  ]) 


  if  (operationAns.operation==="withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name:"amount", type:"number", message:"Enter the amount to withdraw"
      }
    ])
    console.log(operationAns);
  
    if (amountAns.amount > mybalance){ 
      console.log("insufficient balance ");

    } 
    else { mybalance -= amountAns.amount;
      console.log(` ${amountAns.amount} withdraw successfully !!! `)
      console.log(`your remaining balance is: ${mybalance}`)
    }
 
  } 
  else if(operationAns==="check balance"){ 
    console.log (`your account balance is : ${mybalance}`)
  }
}
else{ console.log (" pin is incorrect , try again !!")}