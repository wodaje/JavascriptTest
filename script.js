var body = document.body

var mainEl = document.getElementById("main")
var questionEl = document.getElementById("question")

var listEl = document.createElement("ol")
var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")
var questionLoop = document.createElement("div")
var timeEl = document.createElement("h1")
var answerChoice = document.createElement("div")
var questionList = document.createElement("div")

var listItems = document.getElementsByTagName("li")

var answerKey = ""

//var btn = document.createElement("button")

li1.textContent = "You will have 3 min or 180 Seconds to compete!"
li2.textContent = "Wrong answers will deduct 20seconds off the clock!"
li3.textContent = "Are you are ready to test your knowlege?"
li4.textContent = "Click the Start button below ->Ready<- ->>Steady<<- GO!!!"


$("#main").on("click", function(){

    $("#main").text("")
 
    mainEl.appendChild(li1);
    listItems[0].setAttribute("style", " color:white; background: #999999; padding: 25px; margin-left: 50px;");
    mainEl.appendChild(li2);
    listItems[1].setAttribute("style", " color:white; background: #888888; padding: 25px; margin-left: 50px;");
    mainEl.appendChild(li3);
    listItems[2].setAttribute("style", " color:white; background: #777777; padding: 25px; margin-left: 50px;");
    mainEl.appendChild(li4);  
    listItems[3].setAttribute("style", " color:white; background: #666666; padding: 25px; margin-left: 50px;");


})
//body.appendChild(btn);

//listEl.setAttribute("style", "background:green; padding:200px;");
//listEl.setAttribute("height", 300, "width", 400)

//btn1.setAttribute("height", 200)
//btn1.setAttribute("width", 200)

//var secondsLeft = 180

//function kickOff(){

//    mainEl.textContent = " "
    
//    alert("This is where it all comes to and END ... no need to look further")
 //   alert("No random object loop on the question array")
 //   alert("No local storage exchange for final score or score display")
 //   alert("No penalty application for wrong answers - hard to do since they are not even cycling lmao")


 //         var timerInterval = setInterval(function() {
 //         secondsLeft--;
 //         console.log(secondsLeft)
         // timeEl.textContent = "Timer: " + secondsLeft 
      
          //if(secondsLeft === 0) {
          //  clearInterval(timerInterval);
          //  sendMessage();
          //}
      
//        }, 1000);
      

//} 
