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
var btnEl = document.getElementById("btn1")

var listItems = document.getElementsByTagName("li")

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
