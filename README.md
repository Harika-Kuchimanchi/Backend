This Project Book Store primarily about connecting dots of how the BE system works when requesting/responding from/to FE.

Softwares used in this Project:
 1. Database - Postgres
 2. ORM - Drizzle
 3. Express Js and Node Js
 4. Docker for running Postgres
 5. Postman for testing APIs

Steps followed and what they do:
1. Install docker
2. Initialize a project in vsCode
3. Install drizzle-orm, drizzle kit, pg and dotenv using the commands
    npm i drizzle-orm@rc pg dotenv drizzle-kit@rc
4. Create a docker compose.yaml file which contains all the details of the service, containername, imagename,Password, username,port
5. .env file is used to store the sensitive data like DATABASE_URL etc. In .env file store the Postgres database url in the format -  url format = postgres://<user>:<password>@<host>:<port>/<database> take the feilds from compose.yaml docker file which we created in step 4
6. Now create folders representing MVC architecture as below
    Folder Structure of Project:
        Backend-JS(Root)
        ├ 📂 Controllers
            └ 📜 authors.js
            └ 📜 books.js
        ├ 📂 db
        └ 📜 index.js
        ├ 📂 drizzle
        └ 📜 drizzle.config.js
        ├ 📂 Middlewares
        ├ 📂 Models
        │   └ 📜 authors.model.js
            └ 📜 books.model.js
            └ 📜 index.js
        ├ 📂 Routes
        │   └ 📜 authors.routes.js
            └ 📜 books.routes.js
        ├ 📂 Views
        └ 📜 node_modules
        ├ 📜 .env
        ├ 📜 index.js
        ├ 📜 package.json
        └ 📜 package.lock.json
7. In controllers we write all the query logic to manipulate data in DB
8. In Models we write the schema (fields, indexing)
9. Routes contain all the API endpoints
10. drizzle.config.js file has the configuration details like schema, dialect, db creds etc.
11. db index.js initializes the connection between the Drizzle-ORM and Postgres Database.

NOTES:
1. if we make any changes in the schema we must push it to the database using command
    npx drizzle-kit push
2. Drizzle-kit provides a studio to quickly view the schema. To view we need to run the command
    npx drizzle-kit studio
3. We must keep running the docker container using command-"docker compose up" and to stop the container use  command-"docker compose down" or can be done using app.
4. For testing in postman just start your local server using command-"npm start".
