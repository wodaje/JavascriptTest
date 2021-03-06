var body = document.body

// Set up Elments 
var mainEl = document.getElementById("main")
var buttonsEl = document.getElementById("buttons")
var questionEl = document.getElementById("question")
var btnEl = document.getElementById("btn1")

// Create Elements
var headerInstTest = document.createElement("p")
var breakLine = document.createElement("hr")
var breakSpace = document.createElement("br")
var ansDispEl = document.createElement("p")
var liH = document.createElement("p")
var listEl = document.createElement("ol")
var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")
var br = document.createElement("br")
var timeEl = document.createElement("p")
var listItems = document.getElementsByTagName("li")

// Set Variables
var userAnswer = ""  
var questionListEl = ""
var answerKey
var gameScore = 0
var highScore = localStorage.getItem("highScore")
// control variables for loops
var x = 0
var y = 0
var b = 0

// timer variable 
var secondsLeft = 90

//Populate List for Test Start Dynamic Display
li1.textContent = "You will have 90 Seconds to compete!"
li2.textContent = "Wrong answers will deduct 20seconds off the clock!"
li3.textContent = "Are you are ready to test your knowlege?"
li4.textContent = "Click NEXT when you are ->Ready<- ->>Steady<<- GO!!!"

// Creating Buttons for Question Loop Answer choices in matching answer color closest I got this time around
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
 var btnF = document.createElement("button")
 btnF.innerHTML = "Play Again"
 btnF.setAttribute("style", "color: white; background-color: teal; font-size: 40px; padding: 40px; float: right")

// Controls Next Button Feature with dual usage using y contorl variable
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

//Starts the Test run
function setRun(){

    btnEl.style.visibility = "hidden"
    mainEl.removeChild(li1)
    mainEl.removeChild(li2)
    mainEl.removeChild(li3)
    mainEl.removeChild(li4)

    mainEl.appendChild(timeEl)
    mainEl.appendChild(breakLine)
    mainEl.appendChild(breakSpace)
    ansDispEl.textContent = ""
    mainEl.hasPointerCapture(ansDispEl)
        
    startTimer()
    initialButtons()
    questionLoop()
}

// Sets Timer and Time out Feature
function startTimer() {  
    timeEl.textContent = secondsLeft + " seconds to start!"
    var timerInterval = setInterval(() => {
    secondsLeft--
    timeEl.textContent = secondsLeft + " seconds left in the game!"

    if(secondsLeft <= 0){
        clearInterval(timerInterval)
        timeEl.textContent = " Finished!"
        b++
        ansDispEl.textContent = "Your Final Score is " + gameScore
        mainEl.appendChild(ansDispEl)     
        resetAnswer()
        initialButtons()
        writeFinalScore()
    }

}, 1000);      
}

// Controls Button Display for Test Taking using b variable
function initialButtons(){

    if (b === 0){   
    buttonsEl.appendChild(btnA)
    buttonsEl.appendChild(btnB)  
    buttonsEl.appendChild(btnC)  
    buttonsEl.appendChild(btnD)
     
    btnA.addEventListener("click",function(){userAnswer ="A"; resetAnswer()})
    btnB.addEventListener("click",function(){userAnswer ="B"; resetAnswer()})
    btnC.addEventListener("click",function(){userAnswer ="C"; resetAnswer()})
    btnD.addEventListener("click",function(){userAnswer ="D"; resetAnswer()})  
    }

    else if (b ===1){
    buttonsEl.removeChild(btnA)
    buttonsEl.removeChild(btnB)  
    buttonsEl.removeChild(btnC)  
    buttonsEl.removeChild(btnD)
    }
}

//Accesses and loops through question obejct array
function questionLoop(){ 
       
    userAnswer = ""
    answerKey =  questionList[x].answerKey  
    liH.textContent = questionList[x].q
    li1.textContent = questionList[x].answerChoice["A"]
    li2.textContent = questionList[x].answerChoice["B"]
    li3.textContent = questionList[x].answerChoice["C"]
    li4.textContent = questionList[x].answerChoice["D"]

    questionEl.appendChild(liH)
    questionEl.appendChild(br)
    questionEl.appendChild(li1)
    questionEl.appendChild(li2)
    questionEl.appendChild(li3)
    questionEl.appendChild(li4)    
}

// Gathers Score and Clears Fields for next Answer set uses same end of life b variable to clean up question text
function resetAnswer(){

    if(b === 0){

        if(userAnswer === answerKey){
        gameScore = gameScore +20
        ansDispEl.textContent = "Current Score: " + gameScore + " ...Your Choice: " + userAnswer + " was correct"
        mainEl.appendChild(ansDispEl)        
        }
        else if(userAnswer !== answerKey){
        secondsLeft = secondsLeft -20
        ansDispEl.textContent ="Current Score: " + gameScore + " ...<< Incorrect>> - 20 Second loss!"
        mainEl.appendChild(ansDispEl)
        }

        questionEl.removeChild(liH)
        questionEl.removeChild(br)
        questionEl.removeChild(li1)
        questionEl.removeChild(li2)
        questionEl.removeChild(li3)
        questionEl.removeChild(li4)

        x ++
        questionLoop()
    } 
    
    else if (b ===1){
        questionEl.removeChild(liH)
        questionEl.removeChild(br)
        questionEl.removeChild(li1)
        questionEl.removeChild(li2)
        questionEl.removeChild(li3)
        questionEl.removeChild(li4)
    }
}

// writes score to local storage and allows user input for high score
function writeFinalScore(){        

    if (highScore === "null") {
    
        highScore = 0
    }


    
        if (gameScore >= highScore){
            //alert("Congrats you just achieved a new high score!")
            //let userInitial = prompt("Enter your initials if you like to store it for the record!")           
            highScore = gameScore
            console.log("if statement triggered")
            inputForm()
            
        }
        else if (gameScore < highScore){
            userInitial = localStorage.getItem("userInitial")

            liH.innerText = "Initials | < " + userInitial  + " > |  High Score < " + highScore + " > |"
          
            questionEl.appendChild(liH)
        }
        
buttonsEl.appendChild(btnF)
btnF.addEventListener("click", function(){location.reload()})
}
      
function inputForm(){
    
    var userInitial = document.createElement("input")
    userInitial.classList.add("UI")
    

    var btnG = document.createElement("button")
    btnG.addEventListener("click", function(event){
        event.preventDefault()
        var userInitialInput = userInitial.value.trim()
        writeHigh(userInitialInput)
    })
    btnG.innerHTML = "Commit High Score"
    btnG.setAttribute("style", "background-color: green; font-size: 20px; padding: 20px")
    buttonsEl.appendChild(userInitial)
    buttonsEl.appendChild(btnG)
    
}

function writeHigh(initials){


    liH.innerText = "Initials | < " + initials + " > |  High Score < " + highScore + " > |"
    questionEl.appendChild(liH)
    localStorage.setItem("userInitial", initials)
    localStorage.setItem("highScore", highScore)

}