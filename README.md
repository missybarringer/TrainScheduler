# TrainScheduler

## Contributors
@missybarringer
____________________________________
## Technology
* CSS3, HTML5, Javascript, Bootstrap, jQuery, Firebase, Moment.js
* [GitHub Repository Link](https://github.com/missybarringer/TrainScheduler)
* [Website published here](https://missybarringer.github.io/TrainScheduler/)
____________________________________
### Overview of the problem

Create a train schedule application that incorporates Firebase to host arrival and departure data. The app will retrieve and manipulate this information with Moment.js. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

### Instructions

  * When adding trains, administrators should be able to submit the following:
    * Train Name
    * Destination 
    * First Train Time -- in military time
    * Frequency -- in minutes
  * Code this app to calculate when the next train will arrive; this should be relative to the current time.
  * Users from many different machines must be able to view same train times.

### Solution
__________________________________
  * Create a Realtime Firebase database in test mode with R/W access
  * Create a bootstrap card for the dynamic train schedule table
  * Create a bootstrap card for the new train entry form
  * Create a button for adding new trains - then update the html & database
  * Retrieve the new trains from the database and show in schedule table
  * Calculate when the next train will arrive relative to the current time
  * Make sure users from different machines can view the same train times
  
### Technical Approach
__________________________________
* Created the firebase database & initialized it in the JS
* Got the user's form input for a new train and on submit created a "temporary" object to hold it, then pushed it to the database
* Created a firebase event to add the train to the db and a row in the html on submission using a childSnapshot passed into the function
* Within that function determined the time values using moment.js
__________________________________
#### Contributors
*background Photo by Ugur Akdemir on Unsplash
____________________________________
## License
*This product is licensed under the MIT License (MIT).
____________________________________
## Contributing Guidelines
All contributions and suggestions are welcome!
For direct contributions, please fork the repository and file a pull request.
____________________________________
## Contact
* e-mail: barringer.margaret@gmail.com
* Twitter: @WebWabiSabi
* Instagram: @WebWabiSabi
* Added to [Personal Portfolio webpage](https://missybarringer.github.io/)
