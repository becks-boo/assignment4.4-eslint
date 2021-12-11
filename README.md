# Assignment 4.3 - ExpressJS with databases
## Learning Objectives
The goal of this assignment is to learn the basics of SQL. We're going to use the same code-repository as in assignment
4.2 but this time we will add an SQLite database. <br/>
That means, we're going to create a search form, but this time we will search inside our database instead of a JSON 
file.

Your goal is to get familiar with the concepts of:
1. CREATE TABLE statements to create the database structure
2. INSERT statements to fill the database with content
3. SELECT queries to filter the results.

## Tasks
### Task 0 - Install the project
Run `npm install` and then run the `app.js` as your entry point.

### Task 1 - Copy relevant code from Assignment 4.2
Copy your necessary code changes from Assignment 4.2 to this code repository. Note that there have been changes to the
`app.js` file. 

**Do not overwrite these changes!**

### Task 2 - Create table and insert some data
Have a look at `Database.js` and fill in the `CREATE TABLE` and `INSERT INTO` statements. You can get some helpful 
resources here [https://www.tutorialspoint.com/sqlite/index.htm] and 
here [https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/].

### Task 3 - Implement the search query
Implement the "SELECT ... FROM ..." query to get all relevant rows for your search. Render those with your template
as you did in Assignment 4.2

### Task 4 - More sample data
Import the JSON file from Assignment 4.2 and loop through it to insert every object into the SQLite database.

### Task 5 (optional)
Create a separate form to add data to your database. Create a `POST` endpoint to store it inside your table (via `INSERT`)

