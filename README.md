# Unit Testing Node with Jasmine - Basic Example

This codebase was originally a Prime Peer Challenge, but here
I will reuse it to demonstrate

* creating a route that gets data from a database -- as we often do
* refactoring that code to make it more testable within the constraints 
of our framework/middleware
* writing a test of our refactored code using Jasmine spies to mock our database
* running our tests with Jasmine

# Project Structure

This project was originally generated with Express generator, the files and 
directories of interest are

* routes/talent.js - we will implement the GET route
* node_modules/jasmine - our test framework and test runner
