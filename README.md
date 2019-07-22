# password-manager

ENV Contents:

        PORT=3000
        SECRET=xendit
        NODE_ENV=development
        

## User Routes
### GET
1. GET /user/:id
* Route

        GET http://localhost:3000/user/:id

* Description

        Get user data using IDP

* Response (Status: 200)

        Returns object of curently logged in user
        {
            _id: ID,
            username: STRING,
            email: STRING,
        }

* Reject (Status: 500)

        Internal server error

### POST
1. POST /user/login
* Route

        POST http://localhost:3000/user/login

* Description

        Let user login

* Response (Status: 200)

        Returns token of logged in user
        {
            token: STRING,
            username: STRING,
        }

* Reject (Status: 400)

        Wrong email / password

* Reject (Status: 500)

        Internal server error

2. POST /user/register
* Route

        POST http://localhost:3000/user/register

* Description

        Create a new user in database

* Response (Status: 201)

        Object of created user
        {
            _id: ID,
            username: STRING,
            email: STRING,
        }

* Reject (Status: 500)

        Internal server error

## Password Routes
### GET
1. GET /password/:id
* Route

        GET http://localhost:3000/password/:id

* Description

        Get one password data by ID

* Response (Status: 200)

        Returns data password
        {
            _id: ID,
            account: STRING,
            email: STRING,
            password: STRING,
            icon: STRING,
            userId: ID
        }

* Reject (Status: 500)

        Internal server error

2. GET /password
* Route

        GET http://localhost:3000/password

* Description

        Get all passwords of logged in user

* Response (Status: 200)

        Returns all user's data passwords
        [
            {
                _id: ID,
                account: STRING,
                email: STRING,
                password: STRING,
                icon: STRING,
                userId: ID
            }
        ]

* Reject (Status: 500)

        Internal server error

### POST
1. POST /password
* Route
        
        POST http://localhost:3000/password

* Description

        Create a new password

* Response (Status: 201)

        Object of created password
        {
            _id: ID,
            account: STRING,
            email: STRING,
            password: STRING,
            icon: STRING,
            userId: ID
        }

* Reject (Status: 500)

        Internal server error

### PATCH
1. PATCH /password/:id
* Route

        PATCH http://localhost:3000/password/:id

* Description

        Edit a password

* Response (Status: 200)

        Object of updated password
        {
            _id: ID,
            account: STRING,
            email: STRING,
            password: STRING,
            icon: STRING,
            userId: ID
        }

* Reject (Status: 500)

        Internal server error

### DELETE
1. DELETE /password/:id
* Route

        DELETE http://localhost:3000/password/:id

* Description

        Delete a password

* Response (Status: 200)

        Object of deleted password
        {
            _id: ID,
            account: STRING,
            email: STRING,
            password: STRING,
            icon: STRING,
            userId: ID
        }

* Reject (Status: 500)

        Internal server error