var body = document.body

var mainEl = document.getElementById("main")
var mainContEl = document.getElementsByClassName("container")
var questionEl = document.getElementById("question")
var btnEl = document.getElementById("btn1")

//var questionEl = document.getElementById("question")

var listEl = document.createElement("ol")
var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")
var timeEl = document.createElement("p")
var answerChoiceEl = document.createElement("div")

var listItems = document.getElementsByTagName("li")

var secondsLeft = 10
var answerKey = ""

li1.textContent = "You will have 3 min or 180 Seconds to compete!"
li2.textContent = "Wrong answers will deduct 20seconds off the clock!"
li3.textContent = "Are you are ready to test your knowlege?"
li4.textContent = "Click the Start button below ->Ready<- ->>Steady<<- GO!!!"


$("#main").on("click", function(){

    $("#main").text("")
 
    mainEl.appendChild(li1);
    mainEl.appendChild(li2);
    mainEl.appendChild(li3);
    mainEl.appendChild(li4);  

    listItems[0].setAttribute("style", " color:white; background: #999999; padding: 25px; margin-left: 50px;");
    listItems[1].setAttribute("style", " color:white; background: #888888; padding: 25px; margin-left: 50px;");
    listItems[2].setAttribute("style", " color:white; background: #777777; padding: 25px; margin-left: 50px;");
    listItems[3].setAttribute("style", " color:white; background: #666666; padding: 25px; margin-left: 50px;");

    btnEl.style.visibility = "visible"

})

function testRun(){

    btnEl.style.visibility = "hidden"
    mainEl.removeChild(li1)
    mainEl.removeChild(li2)
    mainEl.removeChild(li3)
    mainEl.removeChild(li4)

    
    mainEl.appendChild(timeEl)
    var para = document.createElement("p")
    para.innerHTML = "This is bla bla"
    questionEl.appendChild(para)
   // questionEl.innerHTML(timeEl)
    
      
    startTimer()

        
}

function startTimer() {  
    timeEl.textContent = secondsLeft + " seconds to start!"
    var timerInterval = setInterval(() => {
    secondsLeft--
    timeEl.textContent = secondsLeft + " seconds left in the game!"

    if(secondsLeft === 0){
        clearInterval(timerInterval)
        timeEl.textContent = " Finished!"
        alert("timer done")
    }

    }, 1000);

        
  }
