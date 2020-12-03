var readlinesync = require("readline-sync")
var chalk = require("chalk")
var chalkRainbow = require('chalk-rainbow')


console.log(chalk.rgb(185,247,0).bold("Welcome to "+chalk.rgb(210,0,0).underline.bold("KAUN BANEGA DEVELOPER") + " Show"));
console.log()
var score = 0;
console.log(chalk.rgb(0, 0, 255).bold("1) 10 Questions will be asked"))
console.log(chalk.rgb(0, 0, 255).bold("2) 2 Marks for correct answer"))
console.log(chalk.rgb(0, 0, 255).bold("3) 1 Mark will be deducted for false answer"))
console.log(chalk.rgb(0, 0, 255).bold("3) Press correct number of corresponding option to answer"))
console.log(chalk.rgb(0, 0, 255).bold("...........ALL THE BEST........."))

function testStart(question,answer,options,currentNumber,totalNumber){
  console.log(chalk.bold("Q"+currentNumber+") "+question));
  var index = readlinesync.keyInSelect(options,"",{cancel:false});

  if(options[index]===answer){
  console.log(chalk.rgb(124,252,0).bold("Correct!"));
  score+=2;
}
else{
  console.log(chalk.bold.rgb(217,2,93)("Oops Wrong Answer!!!"));
  if(score!=0){
  score--;  
  }
  
}
console.log(chalk.rgb(124,252,0).bold("Current Score is",score));
  if(currentNumber!=totalNumber){
    console.log("-----------------")
  }

}

var qna = [{
  question:"Node JS is a __________ language",
  answer:"Server Side",
  options:["Client Side","Server Side", "Both"]
},
{
  question:"Node JS is a multithreaded. True or False?",
  answer:"False",
  options:["True","False"]
},
{
  question:"Node JS is ________",
  answer:"Asynchronous",
  options:["Synchronous","Asynchronous", "Both"]
},
{
  question:"In which of the following areas, Node.js is perfect to use?",
  answer:"All given options",
  options:[" I/O bound Applications"," Data Intensive Realtime Applications DIRT", " Data Streaming Applications","All given options"]
},
{
  question:"NPM stands for?",
  answer:"Node Package Manager",
  options:["Node Package Manager","New Package Manager", "Node Packet Manager"]
},
{
  question:"Command to list all modules that are install globally?",
  answer:"$ npm ls -g",
  options:["$ npm -g","$ npm ls -g", "$ npm ls"]
},
{
  question:"Node.js uses an event-driven, non-blocking I/O model ?",
  answer:"True",
  options:["False","True"]
},
{
  question:"Node uses _________ engine in core.*",
  answer:"Chrome V8",
  options:["Node En","Microsoft Chakra", "Chrome V8", "Java SE"]
},
{
  question:"Which of the following code gets length of a buffer buf?",
  answer:"buf.length",
  options:["buf.length","buf.size", "buf.length()","buf.size()"]
},
{
  question:"What are the key features of Node.js?",
  answer:"All given options",
  options:["Builds fast and scalable network Applications","Highly scalable servers for Web Applications", "Real time Data intensive","All given options"]
},
]

for(var i=0;i<qna.length;i++){
  var q_node=qna[i].question;
  var a_node=qna[i].answer;
  var o_node=qna[i].options;
  testStart(q_node,a_node,o_node,i+1,qna.length);
}

feedback(score);

function feedback(score){
  switch(true) {
  case (score>18):
    console.log("💻 Great, your basics of Node JS are clear 🔥")
    break;
  case (score>12 && score<19):
    console.log("Nice score, you can do better 💻🔥💻")
    break;
  case (score>6 && score<13):
    console.log("Keep it up, you can score more  🔥🔥💻🔥💻🔥")
    break;

  default:
    console.log("Code more to learn more💻🔥💻💻🔥💻💻🔥💻")
}
}
