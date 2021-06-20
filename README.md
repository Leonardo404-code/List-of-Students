# list-of-students
A full-stack web application built entirely with JavaScript, using ReactJs on the front-end and NodeJS integrating with a Mariadb database on the back-end

### This application has the features of:
- Register a new user
- Login this user

- Authentication to allow only logged in users to modify students

- Complete student creation CRUD
- Addition of photos (no tested size limit) on each student

### Requirements
- NodeJS V12 or higher
- MariaDB database installed in your machine or in container(Docker, by example)

### Clone
```git@github.com:Leonardo404-code/list-of-students.git```

## In the Back-end folder
- Install all dependencies: ```npm install``` or ```yarn add```
- In the config folder in the database.js file, change the following fields to locate your database:

- Realize the database migrations with sequelize, in terminal type:
```npx sequelize db:migrate```

- Run the back-end:
```npm start``` or ```yarn start```

⚠️ Look at the application logs on the terminal to ensure there was no database connection error ⚠️

## In the Front-end folder
- Install all dependencies: ```npm install``` or ```yarn add```

- Start the project

<p>🔥 Your application front-end started 🔥</p>
