# JavascriptTest written by Jeff Woda  28 November 2020
    Kown Bugs/Issues:
    a) if the question array runs out of question there is no if/saftey loop to catch that - normally the question array would be long enough but either way this feature doesn't exist so if you run out of questions before the time finishes the clean up function fails and no highscore is displayed etc.
    b) code has duplicate typings could easily be cleaned up more 
    c) Local storage works fine on my machine but on the uploaded git site when testing the local storage feature fails - no time to investigate why


    Script File Notes
1.  This consitutes two script files script.js for the dynamic control of the display
2.  And second question_array.js for the question module object array

    Main Process Flow
3.  The page starts out with basic instruction and a next button hard coded on the intial launch HTML page 
4.  First the script.js gets the three main section ids from the layout main, buttons, questions as well as the btn
5.  It then creates list and p elements as well as hr and br elements to control the layout flow and display of the test questions and elements
6.  Next it sets necessary user variables - note due to the function structure control style of this program these need to be declared here and as var to be accesible by multiple functions (x,y,b are all control variables)
7. Line 35 simply pulls the HighScore from local storage which will be NULL to start
8. Lines 38-41 simply are instructions that are cycled as the user had clicked next and called the function nextButton - as this button is reused a control variable y is used to separate funcionality (lines 61-77) - note also the event control calls the function resetAnswer() built into each buttons event listener.
9. Next buttons are created for later use, labeled and formatted. (Note in a perfect world I would have placed the answers in buttons or on event elements but this will have to do for now - or at least have the buttons next to the answer [next time])
10. Lines 61 - 82 is the next button control variable that calls setRun for the kick off on second click load (line 80)
11. Lines 85 - 102 is the  main kickoff control function that the next button just listed in item 9 will kick off. It hides the next button, removes prior text and sets up formatting for the test run
12. This then calls these three functions to initiate the test cycle, startTimer() for the clock, initialButtons() that popluates the buttons mentioned earlier to allow for user test response, questionLoop() to intiate the test question cycle refernce to the question_array.js object array loading. Note this is currently not set to randomize - I may still get to this but can't fall behind again on next homework.
13. Lines 105-120 is the timer function intial time set earlier on windows variable level to 90 seconds this way the wrong answer function response can call an ammend it.
14. It starts the intial time display, swaped for seconds left, and ends with fnished upon time running out. When the time runs out the variable b is also incremnted to clear answer buttons.
15. The timer also controls via the time out function the end of the game interface by calling these three functions: resetAnswer() here the variable b is used again as the timeout function set that to off or value one which then just clears the old question list so its not left to display. Second function called intialButtons() mentioned before clears those also with control variable b, third writeFinalScore() then goes into the option of recording the highScore and intials via local storage.
16. Lines 126-145 function InitialButtons() is mentioned button control poplulating and removing controled by variable b
17. Lines 149 - 165 function questionLoop() does jsut that simply pulls the question from the array via control variable [x] allowing for future randomization too jsut not at this time.. 
18. Lines 168 - 202 is the resetAnswer function checks the userAnswer against the objects answerKey for true or false either increments the score by 20 or deducts 20 seonds based on correct answer. It then moves to clear out the old question list elements(li) ammends variable [x] the loop control variable for the question loop and calls the question loop function to repopulate the next question. It also refers to the time out control variable b = if it's timed out simply the questions are cleared out and not re-populated.
19. Lines 205 - 225 writeFinalScore() function uses uses input field for initials - it does not carry any input control parameters.   The highscore was pulled on the variable declaration from local storage here it's compared to the gameScore and if appropriate then the user is asked for initials the body is ammended to display the high score, otherwise the body is ammended with prior high score details. Finally next button then allows for a new game option.