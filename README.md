# Learning Node.js Development

- [Learning Node.js Development](#learning-nodejs-development)
      - [Table of Contents](#table-of-contents)
            - [Preface](#preface)
            - [1. Getting Set Up](#1-getting-set-up)
            - [2. Node Fundamentals – Part 1](#2-node-fundamentals-%E2%80%93-part-1)
            - [3. Node Fundamentals – Part 2 (**_CURRENT_**)](#3-node-fundamentals-%E2%80%93-part-2-current)
            - [4. Node Fundamentals – Part 3](#4-node-fundamentals-%E2%80%93-part-3)
            - [5. Basics of Asynchronous Programming in Node.js](#5-basics-of-asynchronous-programming-in-nodejs)
            - [6. Callbacks in Asynchronous Programming](#6-callbacks-in-asynchronous-programming)
            - [7. Promises in Asynchronous Programming](#7-promises-in-asynchronous-programming)
            - [8. Web Servers in Node](#8-web-servers-in-node)
            - [9. Deploying Applications to Web](#9-deploying-applications-to-web)
            - [10. Testing the Node Applications – Part 1](#10-testing-the-node-applications-%E2%80%93-part-1)
            - [11. Testing the Node Applications – Part 2](#11-testing-the-node-applications-%E2%80%93-part-2)
- [ANOTACIONES Y RECURSOS](#anotaciones-y-recursos)
      - [Enlaces Utiles](#enlaces-utiles)

  - [Enlaces Utiles](#enlaces-utiles)

  - [Enlaces Utiles](#enlaces-utiles)

  - [Enlaces Utiles](#enlaces-utiles)

  - [Enlaces Utiles](#enlaces-utiles)

  - [Enlaces Utiles](#enlaces-utiles)

  - [Enlaces Utiles](#enlaces-utiles)

- [Anotaciones](#anotaciones)
  - [Enlaces Utiles](#Enlaces-Utiles)

## Table of Contents

### Preface

- [x] What this book covers
- [x] Who this book is for
- [x] To get the most out of this book
- [x] Download the example code files
- [x] Conventions used
- [x] Get in touch
- [x] Reviews
      <br/>[Go Up](#learning-nodejs-development)

### 1. Getting Set Up

- [x] Node.js installation
- [x] Node.js version confirmation
- [x] Installing Node
- [x] Verifying installation
- [x] What is Node?
- [x] Differences between JavaScript coding using Node and in the browser
- [x] Why use Node
- [x] Blocking and non-blocking software development
- [x] The working of blocking I/O
- [x] The working non-blocking I/O
- [x] Blocking and non-blocking examples using Terminal
- [x] Node community – problem solving open source libraries
- [x] Different text editors for node applications
- [x] Hello World – creating and running the first Node app
- [x] Creating the Node application
- [x] Running the Node application
- [x] Summary
      <br/>[Go Up](#learning-nodejs-development)

### 2. Node Fundamentals – Part 1

- [x] Module basics
- [x] Using case for require()
- [x] Initialization of an application
- [x] The built-in module to use require()
- [x] Creating and appending files in the File System module
- [x] The OS module in require()
- [x] Concatenating user.username
- [x] Using template strings
- [x] Require own files
- [x] Making a new file to load other files
- [x] Exporting files from note.js to use in app.js
- [x] A simple example of the working of the exports object
- [x] Exporting the functions
- [x] Exercise – adding a new function to the export object
- [x] Solution to the exercise
- [x] Third-party modules
- [x] Creating projects using npm modules
- [x] Installing the lodash module in our app
- [x] Installation of lodash
- [x] Using the utilities of lodash
- [x] Using the \_.isString utility
- [x] Using \_.uniq
- [x] The node_modules folder
- [x] Global modules
- [x] Installing the nodemon module
- [x] Executing nodemon
- [x] Getting input
- [x] Getting input from the user inside the command line
- [x] Accessing the command-line argument for the notes application
- [x] Adding if/else statements
- [x] Exercise – adding two else if clauses to an if block
- [x] Solution to the exercise
- [x] Getting the specific note information
- [x] Summary
      <br/>[Go Up](#learning-nodejs-development)

### 3. Node Fundamentals – Part 2 (**_CURRENT_**)

- [x] yargs
- [x] Installing yargs
- [x] Running yargs
- [x] Working with the add command <br/>**\***`NOTA: pag.233 18/06/208 01:02 progreso es hasta aqui, no hay dudas por el momento hasta este punto, aprendi markdown para hacer este archivo readme y configure el repositorio git para seguir los ejemplos del libro.`**\***
- [x] Working with the list command
- [x] The read command
- [x] Dealing with the errors in parsing commands
- [x] The remove command
- [x] Fetching command
- [x] JSON
- [x] Converting objects into strings
- [x] Defining a string and using in app as an object
- [x] Converting a string back to an object<br/>**\***`NOTA: pag.257 18/06/208 02:30 progreso hasta aqui, TODO: dar un repaso a la documentacion de la API JSON de Node.js.`**\***
- [x] Storing the string in a file
- [x] Writing the file in the playground folder
- [x] Reading out the content in the file
- [x] Adding and saving notes
- [x] Adding notes
- [x] Adding notes to the notes array
- [x] Fetching new notes
- [x] Trying and catching code block<br/>**\***`NOTA: pag.278 18/06/208 23:06 terminada esta seccion, TODO: repasar manejo de errores en javascript`**\***
- [x] Making the title unique
- [x] Refactoring
- [x] Moving functionality into individual functions
- [x] Working with fetchNotes
- [x] Working with saveNotes
- [x] Testing the functionality
- [x] Summary <br/>**\***`NOTA: pag.299 22/06/208 19:18 terminada esta seccion, aprendido el manejo de errores basico en javascript`**\***
      <br/>[Go Up](#learning-nodejs-development)

### 4. Node Fundamentals – Part 3

- [x] Removing a note
- [x] Using the removeNote function
- [x] Printing a message of removing notes
- [x] Reading note
- [x] Using the getNote function
- [x] Running the getNote function
- [x] The DRY principle
- [x] Using the logNote function<br/>**\***`NOTA: pag.321 24/06/208 23:36 terminada esta seccion, TODO: investigar acerca de debugging en nodejs`**\***
- [x] Debugging
- [x] Executing a program in debug mode
- [x] Working with debugging
- [x] Using debugger inside the notes application
- [x] Listing notes
- [x] Using the getAll function
- [x] Advanced yargs
- [x] Using chaining syntax on yargs
- [x] Calling the .help command
- [x] Adding the options object
- [x] Adding the title
- [x] Adding the body
- [x] Adding support to the read and remove commands
- [x] Adding the titleOption and bodyOption variables
- [x] Testing the remove command
- [x] Arrow functions
- [x] Using the arrow function
- [x] Exploring the difference between regular and arrow functions
- [x] Exploring the arguments array
- [x] Summary<br/>**\***`NOTA: pag.374 25/06/208 19:57 terminada esta seccion, TODO: Repasar los videos de Javier Moreno en youtube para asentar la programacion orientada a objetos, Repasar event loop`**\***
      <br/>[Go Up](#learning-nodejs-development)

### 5. Basics of Asynchronous Programming in Node.js

- [x] The basic concept of asynchronous program
- [x] Illustrating the async programming model
- [x] Call stack and event loop
- [x] A synchronous program example
- [x] The call stack
- [x] Running the synchronous program
- [x] A complex synchronous program example
- [x] An async program example
- [x] The Node API in async programming
- [x] The callback queue in async programming
- [x] The event loop
- [x] Running the async code
- [x] Callback functions and APIs
- [x] The callback function
- [x] Creating the callback function
- [x] Running the callback function
- [x] Simulating delay using setTimeout
- [x] Making request to Geolocation API
- [x] Using Google Maps API data in our code
- [x] Installing the request package
- [x] Using request as a function
- [x] Running the request
- [x] Pretty printing objects
- [x] Using the body argument
- [x] Making up of the HTTPS requests
- [x] The response object
- [x] The error argument
- [x] Printing data from the body object
- [x] Printing the formatted address
- [x] Printing latitude and longitude
- [x] Summary<br/>**\***`NOTA: pag.405 04/07/208 22:07 terminada esta seccion.`**\***
      <br/>**\***`NOTA: pag.426 06/07/208 22:07 avance hasta el momento todavia no esta terminada la seccion. TODO: Estudiar GOOGLE API`**\***
      <br/>**\***`NOTA: pag.447 07/07/208 19:19 terminada la seccion.`**\***
      <br/>[Go Up](#learning-nodejs-development)

### 6. Callbacks in Asynchronous Programming

- [x] Encoding user input
- [x] Installing yargs
- [x] Configuring yargs
- [x] Printing the address to screen
- [x] Encoding and decoding the strings
- [x] Encoding URI component
- [x] Decoding URI component
- [x] Pulling the address out of argv
- [x] Callback errors
- [x] Checking error in Google API request
- [x] Adding the if statement for callback errors
- [x] Adding if else statement to check body status property
- [x] Testing the body status property
- [x] Abstracting callbacks
- [x] Refactoring app.js and code into geocode.js file
- [x] Working on request statement
- [x] Creating geocode file
- [x] Adding callback function to geocodeAddress
- [x] Setting up the function in geocodeAddress function in app.js
- [x] Implementing the callback function in geocode.js file
- [x] Testing the callback function in geocode.js file<br/>**\***`NOTA: pag.486 07/07/208 21:21 progreso hasta el momento, TODO: estudiar la api de`[OpenWeatherMap](https://openweathermap.org/api)**\***
- [x] Wiring up weather search
- [x] Exploring working of API in the browser
- [x] Exploring the actual URL for code
- [x] Making a request for the weather app using the static URL
- [x] Error handling in the the callback function
- [x] Another way of error handling
- [x] Testing the error handling in callback
- [x] Chaining callbacks together
- [x] Refactoring our request call in weather.js file
- [x] Defining the new function getWeather in weather file
- [x] Providing weather directory in app.js
- [x] Passing the arguments in the getWeather function
- [x] Printing errorMessage in the getWeather function
- [x] Implementing getWeather callback inside weather.js file
- [x] Adding dynamic latitude and longitude
- [x] Changing console.log calls into callback calls
- [x] Chaining the geocodeAddress and getWeather callbacks together
- [x] Moving getWeather call into geocodeAddress function
- [x] Replacing static coordinates with dynamic coordinates
- [x] Testing the chaining of callbacks
- [x] Summary<br/>**\***`NOTA: pag.524 09/07/208 19:50 Terminada esta seccion, bien asentado el conocimiento de callbacks.`**\***
      <br/>[Go Up](#learning-nodejs-development)

### 7. Promises in Asynchronous Programming

- [x] Introduction to ES6 promises
- [x] Creating an example promise
- [x] Calling the promise method then
- [x] Running the promise example in Terminal
- [x] Error handling in promises
- [x] Merits of promises
- [x] Advanced promises
- [x] Providing input to promises
- [x] Returning the promises
- [x] Promise chaining
- [x] Error handling in promises chaining
- [x] The catch method
- [x] The request library in promises
- [x] Testing the request library
- [x] Weather app with promises
- [x] Fetching weather app code from the app.js file
- [x] Axios documentations
- [x] Installing axios
- [x] Making calls in the app-promise file
- [x] Making axios request
- [x] Error handling in axios request
- [x] Error handling with ZERO_RESULT body status
- [x] Generating the weather URL
- [x] Chaining the promise calls
- [x] Summary<br/>**\***`NOTA: pag.578 10/07/208 03:05 Terminada esta seccion, TODO: Estudiar Servidores con Node y protocolo HTTP.`**\***
      <br/>[Go Up](#learning-nodejs-development)
      <br/>**\***`NOTA: iniciando con el modulo HTTP de node. TODO: practicar con el modulo http`**\***
      <br/>[Go Up](#learning-nodejs-development)

### 8. Web Servers in Node

- [ ] Introducing Express
- [ ] Configuring Express
- [ ] Express docs website
- [ ] Installing Express
- [ ] Creating an app
- [ ] Exploring the developer tools in the browser for the app request
- [ ] Passing HTML to res.send
- [ ] Sending JSON data back
- [ ] Error handling in the JSON request
- [ ] The static server
- [ ] Making an HTML page
- [ ] The head tag
- [ ] The body tag
- [ ] Serving the HTML page in the Express app
- [ ] The call to app.listen
- [ ] Rendering templates
- [ ] Installing the hbs module
- [ ] Configuring handlebars
- [ ] Our first template
- [ ] Getting the static page for rendering
- [ ] Injecting data inside of templates
- [ ] Rendering the template for the root of the website
- [ ] Advanced templates
- [ ] Adding partials
- [ ] Working of partial
- [ ] The Header partial
- [ ] The Handlebars helper
- [ ] Arguments in Helper
- [ ] Express Middleware
- [ ] Exploring middleware
- [ ] Creating a logger
- [ ] Printing message to file
- [ ] The maintenance middleware without the next object
- [ ] Testing the maintenance middleware
- [ ] Summary
      <br/>[Go Up](#learning-nodejs-development)

### 9. Deploying Applications to Web

- [ ] Adding version control
- [ ] Installing Git
- [ ] Git on macOS
- [ ] Git on Windows
- [ ] Testing the installation
- [ ] Turning the node-web-server directory into a Git repository
- [ ] Using Git
- [ ] Adding untracked files to commit
- [ ] Making a commit
- [ ] Setting up GitHub and SSH keys
- [ ] Setting up SSH keys
- [ ] SSH keys documentations
- [ ] Working on commands
- [ ] Generating a key
- [ ] Starting up the SSH agent
- [ ] Configuring GitHub
- [ ] Testing the configuration
- [ ] Creating a new repository
- [ ] Setting up the repository
- [ ] Deploying the node app to the Web
- [ ] Installing Heroku command-line tools
- [ ] Log in to Heroku account locally
- [ ] Getting SSH key to Heroku
- [ ] Setting up in the application code for Heroku
- [ ] Changes in the server.js file
- [ ] Changes in the package.json file
- [ ] Making a commit in Heroku
- [ ] Running the Heroku create command
- [ ] Summary
      <br/>[Go Up](#learning-nodejs-development)

### 10. Testing the Node Applications – Part 1

- [ ] Basic testing
- [ ] Installing the testing module
- [ ] Testing a Node project
- [ ] Mocha – the testing framework
- [ ] Creating a test file for the add function
- [ ] Creating the if condition for the test
- [ ] Testing the squaring a number function
- [ ] Autorestarting the tests
- [ ] Using assertion libraries in testing Node modules
- [ ] Exploring assertion libraries
- [ ] Chaining multiple assertions
- [ ] Multiple assertions for the square function
- [ ] Exploring usage of expect with bogus test
- [ ] Using toBe and toNotBe to compare array/objects
- [ ] Using the toEqual and toNotEqual assertions
- [ ] Using toInclude and toExclude
- [ ] Testing the setName method
- [ ] The asynchronous testing
- [ ] Creating the asyncAdd function using the setTimeout object
- [ ] Writing the test for the asyncAdd function
- [ ] Making assertion for the asyncAdd function
- [ ] Adding the done argument
- [ ] The asynchronous testing for the square function
- [ ] Creating the async square function
- [ ] Writing test for asyncSquare
- [ ] Making assertions for the asyncSquare function
- [ ] Summary
      <br/>[Go Up](#learning-nodejs-development)

### 11. Testing the Node Applications – Part 2

- [ ] Testing the Express application
- [ ] Setting up testing for the Express app
- [ ] Testing the Express app using SuperTest
- [ ] The SuperTest documentation
- [ ] Creating a test for the Express app
- [ ] Writing the test for the Express app
- [ ] Testing our first API request
- [ ] Setting up custom status
- [ ] Adding flexibility to SuperTest
- [ ] Creating an express route
- [ ] Writing the test for the express route
- [ ] Organizing test with describe()
- [ ] Adding describe() for individual methods
- [ ] Adding the route describe block for the server.test.js file
- [ ] Test spies
- [ ] Creating a test file for spies
- [ ] Creating a spy
- [ ] Setting up spies assertions
- [ ] More details out of spy assertion
- [ ] Swapping of the function with spy
- [ ] Installing and setting up the rewire function
- [ ] Replacing db with the spy
- [ ] Writing a test to verify swapping of the function
- [ ] Summary
- [ ] Conclusion
      <br/>[Go Up](#learning-nodejs-development)

# ANOTACIONES Y RECURSOS

**_Seccion para anotaciones, recordatorios y snippets utiles._**

## Enlaces Utiles

- **Loupe** `Herramienta para ver grafica e interactivamente el funcionamiento del EVENT LOOP Y CALL STACK` [http://latentflip.com/loupe](http://latentflip.com/loupe)
- **Appdelante** `Canal de youtube con excelentes temas, como Fundamentos de HTTP y Apis, Asincronia en Javascript, Cookies y Sesiones en Node.js, AWS S3 con Node.js, Desarrollo de Un Clon de Twitter con Node, etc...` [https://www.youtube.com/channel/UCJlT-NI_6xxLuuRjN8HNJDQ/playlists](https://www.youtube.com/channel/UCJlT-NI_6xxLuuRjN8HNJDQ/playlists)
- **streams en nodejs** [https://www.transitions-now.com/tag/node-js/](https://www.transitions-now.com/tag/node-js/)
- **The Net Ninja** `canal de youtube con muy buenos tutoriales de Javascript y NodeJS` [https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg/playlists](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg/playlists)
- **Canal de javier moreno** `Canal de youtube con una explicacion magistral acerca de objetos, stack y heap, prototipado, closures, etc.. en javascript`[https://www.youtube.com/watch?v=ncHEgulapWM&list=PLeHi8rVLGcYZMVCwqN2-XN8qrhWZhM1l7](https://www.youtube.com/watch?v=ncHEgulapWM&list=PLeHi8rVLGcYZMVCwqN2-XN8qrhWZhM1l7)
- **Presentacion interactiva de EVENT LOOP** [https://thomashunter.name/presentations/javascript-event-loop-v5/#/5](https://thomashunter.name/presentations/javascript-event-loop-v5/#/5)
  <br/>[Go Up](#learning-nodejs-development)
- **Variables de Entorno en PowerShell** [https://technet.microsoft.com/es-es/library/hh847808.aspx](https://technet.microsoft.com/es-es/library/hh847808.aspx)
  <br/>[Go Up](#learning-nodejs-development)
