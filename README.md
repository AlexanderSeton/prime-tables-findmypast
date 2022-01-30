# Findmypast Coding Exercise - Prime Tables

A web application that takes a numeric input (N) from a user, and then outputs a multiplication table of N prime numbers. 

## Running the program
To run this application you need Node.js installed on you machine.  
Clone this repository onto your machine.    
Type the following commands in order into your terminal while in the project directory.    
`npm install` - To install all necessary dependancies.  
`npm start` - To start the application (by default it will open in your browser at [http://localhost:3000](http://localhost:3000)). 

## Testing the program  
To test this application you need Node.js installed on you machine.     
Clone this repository onto your machine.    
Type the following commands in order into your terminal while in the project directory.  
`npm install` - To install all necessary dependancies.  
`npm run mocha` - To run the unit tests for the prime generation algorithm.  
`npm run cypress` - To run the end to end tests for the application. (You will need to be running the application locally, using npm start, in order to run the cypress tests)  

## What I Am Pleased With?  
Successfully implemented a prime sieve algorithm (Sieve of Erastosthenes)
Easy to use web page    
I created this project with a Test Drived Development (TDD) approach       
Clear and well commented code       

## Possible Extensions  
Implement a different prime sieve algorithm with a better time complexity, such as the Sieve of Atkin       
Optomise my algorithm that calculates the range of naturals that need to be seived      
Improve my cypress tests to cover the application fully     
Add a popup when the user hovers over a cell of the table displaying the two primes that have been multiplied to produce it         
