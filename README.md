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

* routes/talent.js - we will implement the GET route for talent
* node_modules/jasmine - our test framework and test runner

We will also, during lecture, add the following.

* spec/ - for our tests and Jasmine config
* services/ - for our refactored talent service

# Applying This To Your Codebase

1. Follow the instructions for node applications on [Jasmine's website](http://jasmine.github.io/2.4/node.html).
2. Refactor. Move the majority of your logic from the route to a service. Let the service
handle the heavy lifting while allowing the route to merely receive requests and send responses.
3. Test success AND error conditions.
4. Have fun!