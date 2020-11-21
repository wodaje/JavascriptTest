var mainEl = document.getElementById("main")
var timeEl = document.getElementById("time")
var questionEl = document.getElementById("question")

var bodyEl = document.createElement("pre")


$("#main").on("click", function(){

    $("#main").text("")
  
bodyEl.textContent =

`You will have 3 min or 180 Seconds to compete!

Wrong answers will deduct 20seconds off the clock!

When you are ready to test your knowlege click anywhere within this text!`

mainEl.append(bodyEl)

})

var secondsLeft = 180

function kickOff(){

    mainEl.textContent = " "
    
    alert("This is where it all comes to and END ... no need to look further")
    alert("No random object loop on the question array")
    alert("No local storage exchange for final score or score display")
    alert("No penalty application for wrong answers - hard to do since they are not even cycling lmao")


          var timerInterval = setInterval(function() {
          secondsLeft--;
          console.log(secondsLeft)
         // timeEl.textContent = "Timer: " + secondsLeft 
      
          //if(secondsLeft === 0) {
          //  clearInterval(timerInterval);
          //  sendMessage();
          //}
      
        }, 1000);
      

} 


