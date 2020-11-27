# JavaScript Timer

This Project contains a simple Timer Application made using Vanilla Javascript Functions.\
It gives the functionality to Start the Timer, Pause the Timer, & Reset the Timer.\
It uses setInterval() & clearInterval() functions of JS to perform the Timer functionality.\
It also uses the concepts of DOM Manipulation to dynamically update the contents on the Webpage.\
The Timer also has an Internal Status to check whether the Timer is running or not.\
By default the status is "false".

# Start Button:

The Start Timer button calls the startTimer() fucntion on click.\
It sets the status to "true" if it is "false" when it starts.\
Then it calls the setInterval method which has a duration of 1000 milliseconds.\
Here, all the calculation of hours, minutes & seconds is done.\
A preceeding 0 is also added for single digits.\
An alert is raised when the timer expires after running for a maximum duration of 24 Hours.\
Then the status is set to "false" & the clearInterval() function is called.\
If the timer is running, the Timer value is updated after every 1 second.\
The seconds value keeps increasing & the elapsed value also increases.

# Pause Button:

The Pause Timer button calls the stopTimer() function on click.\
It sets the status to "false" & the clearInterval() function is called.

# Reset Button:

The Reset Timer Button calls the resetTimer() function on click.\
It sets the status to "false" & the clearInterval() function is called.\
It sets the hours, minutes & seconds to 0.\
The timer value is also set to 00:00:00.\
An alert is raised displaying the Elapsed Time in Minutes & Seconds.
Then the elapsed value is also set to 0.

# Demo:

Live Demo of the JavaScript Timer can be found here:\
https://khardik1698.github.io/JavaScriptTimer/
