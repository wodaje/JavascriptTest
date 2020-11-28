var body = document.body

var mainEl = document.getElementById("main")
var questionEl = document.getElementById("question")
var btnEl = document.getElementById("btn1")
var headerInstTest = document.createElement("p")
var breakLine = document.createElement("hr")
var breakSpace = document.createElement("br")
var buttonsEl = document.getElementById("buttons")

var questionEl = document.getElementById("question")
var liH = document.createElement("p")

var listEl = document.createElement("ol")
var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")
var br = document.createElement("br")

var timeEl = document.createElement("p")
var answerChoiceEl = document.createElement("div")

var listItems = document.getElementsByTagName("li")
var userAnswer = ""  
var questionListEl = ""
var answerKey
var gameScore = 0
var x = 0
var y = 0

li1.textContent = "You will have 3 min or 180 Seconds to compete!"
li2.textContent = "Wrong answers will deduct 20seconds off the clock!"
li3.textContent = "Are you are ready to test your knowlege?"
li4.textContent = "Click NEXT when you are ->Ready<- ->>Steady<<- GO!!!"

//headerInstTest.textContent = "<<Select your answer by clicking on it directly>>"


 function nextButton(){

    if (y === 0) {
    mainEl.textContent = ""
 
    mainEl.appendChild(li1);
    mainEl.appendChild(li2);
    mainEl.appendChild(li3);
    mainEl.appendChild(li4);  

    listItems[0].setAttribute("style", " color:white; background: #999999; padding: 25px; margin-left: 50px;");
    listItems[1].setAttribute("style", " color:white; background: #888888; padding: 25px; margin-left: 50px;");
    listItems[2].setAttribute("style", " color:white; background: #777777; padding: 25px; margin-left: 50px;");
    listItems[3].setAttribute("style", " color:white; background: #666666; padding: 25px; margin-left: 50px;");

    y++

    }
    
    else if (y === 1){

       setRun()
    }


}



function setRun(){

    btnEl.style.visibility = "hidden"
    mainEl.removeChild(li1)
    mainEl.removeChild(li2)
    mainEl.removeChild(li3)
    mainEl.removeChild(li4)

    
    mainEl.appendChild(timeEl)
    mainEl.appendChild(breakLine)
    mainEl.appendChild(breakSpace)
        
      
    startTimer()

    initialButtons()

    questionLoop()
        
}

var secondsLeft = 60
function startTimer() {  
    timeEl.textContent = secondsLeft + " seconds to start!"
    var timerInterval = setInterval(() => {
    secondsLeft--
    timeEl.textContent = secondsLeft + " seconds left in the game!"

    if(secondsLeft <= 0){
        clearInterval(timerInterval)
        timeEl.textContent = " Finished!"
    }

    }, 1000);
        
  }


  // Creating Buttons for Question Loop Answer choices
  var btnA = document.createElement("button")
  btnA.innerHTML = "Answer: A"
  btnA.setAttribute("style", "background-color: #999999; font-size: 20px; padding: 20px")
  var btnB = document.createElement("button")
  btnB.innerHTML = "Answer: B"
  btnB.setAttribute("style", "background-color: #888888; font-size: 20px; padding: 20px")
  var btnC = document.createElement("button")
  btnC.innerHTML = "Answer: C"
  btnC.setAttribute("style", "background-color: #777777; font-size: 20px; padding: 20px")
  var btnD = document.createElement("button")
  btnD.innerHTML = "Answer: D"
  btnD.setAttribute("style", "background-color: #666666; font-size: 20px; padding: 20px")

function initialButtons(){
      
    buttonsEl.appendChild(btnA)
    buttonsEl.appendChild(btnB)  
    buttonsEl.appendChild(btnC)  
    buttonsEl.appendChild(btnD)
     
    btnA.addEventListener("click",function(){userAnswer ="A"; resetAnswer()})
    btnB.addEventListener("click",function(){userAnswer ="B"; resetAnswer()})
    btnC.addEventListener("click",function(){userAnswer ="C"; resetAnswer()})
    btnD.addEventListener("click",function(){userAnswer ="D"; resetAnswer()})  

}


  function questionLoop(){ 
       
    userAnswer = ""
    answerKey =  questionList[x].answerKey  
    liH.textContent = questionList[x].q
    li1.textContent = questionList[x].answerChoice["A"]
    li2.textContent = questionList[x].answerChoice["B"]
    li3.textContent = questionList[x].answerChoice["C"]
    li4.textContent = questionList[x].answerChoice["D"]

    questionEl.appendChild(br)
    questionEl.appendChild(liH)
    questionEl.appendChild(br)
    questionEl.appendChild(li1)
    questionEl.appendChild(li2)
    questionEl.appendChild(li3)
    questionEl.appendChild(li4)

    //btnA.addEventListener("click",function(){userAnswer ="A"; resetAnswer()})
    //btnB.addEventListener("click",function(){userAnswer ="B"; resetAnswer()})
    //btnC.addEventListener("click",function(){userAnswer ="C"; resetAnswer()})
    //btnD.addEventListener("click",function(){userAnswer ="D"; resetAnswer()})    

   
  }

function resetAnswer(){
    
    if(userAnswer === answerKey){
    gameScore = gameScore +20
    console.log(gameScore)
    alert("That was correct <Yeah Baby Yeah> Your Score is now " + gameScore)
    }
    else if(userAnswer !== answerKey){
    alert("Noooooo Wrong Answer Mon! Not <<" + userAnswer + ">> You just lost 20 Seconds!!" )
    secondsLeft = secondsLeft -20

    }

    questionEl.removeChild(liH)
    questionEl.removeChild(br)
    questionEl.removeChild(li1)
    questionEl.removeChild(li2)
    questionEl.removeChild(li3)
    questionEl.removeChild(li4)

if (secondsLeft > 0){
    x ++
    questionLoop()
}
else if (secondsLeft <=0 ){
    alert("Time is ER Finito... NO more Finished!")
    writeFinalScore()
}

function writeFinalScore(){
alert("write out local storage")

}
      
}