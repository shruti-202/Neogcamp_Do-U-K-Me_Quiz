// Taking Input
var readlineSync=require('readline-sync');
var score=0;
var userInput=readlineSync.question("What's Your Name ?");
console.log("Welcome "+userInput);
console.log("--Let's check how much do you know me---");

function fun(question,answers)
{
var userAns=readlineSync.question(question);
if(userAns.toUpperCase()==answers.toUpperCase())
{
  console.log("Yaay!You are right");
  score=score+1;
  
}
else
{
  console.log("Oops!You are wrong");
  score=score-1;
}
console.log("Current Score:"+score);
console.log("----------");
}
// Function Call
fun("1.Which is my Fav Color?", "Red");
fun("2.Which is my Dream Company?", "Google");
// array of objects
var listQuestion=[{question:"3.Which phone do I own?", answer:"Vivo"},{question:"4.Where do I work?", answer:"Cognizant"},{question:"5.Where do I lived?", answer:"Ballarpur"}];
// for loop to access the array
for(var i=0;i<listQuestion.length;i++){
  fun(listQuestion[i].question, listQuestion[i].answer);
}
// Data structure to hold highest score
var highestScore=[
  {
    name:"shruti",
    score:5,
    
  },
  {
    name:"shamu",
    score:4,
  }
];
console.log("Please have a look on your Final Score:"+score);
console.log("----------");
for(var i=0;i<highestScore.length;i++){
  console.log("Highest Score of this Quiz:"+highestScore[i].name,":"+highestScore[i].score);
}
console.log("-----------");
console.log("**THANKS FOR TAKING THIS CHALLENGE**");