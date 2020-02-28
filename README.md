# Back-End
## How-To Base URL: https://how-to-lifehack.herokuapp.com/
---
## Endpoint Summary Table
---
|Type     |Endpoint           |Description        |Auth|
|:-------:|:-----------------------:|:----------------------:|:--:|
|POST     |/users/register          |Register User           |No  |
|POST     |/users/login             |Login User              |No  |
|GET      |/how-to/                 |get all how-to's        |No  |
|GET      |/how-to/:id              |get how-to by id        |No  |
|GET      |/how-to/user/:id         |get how-to by user id   |No  |
|GET      |/how-to/instructions/:id |get step by id          |No  |
|POST     |/how-to                  |add new how-to          |Yes |
|POST     |/how-to/instructions     |add new step for how-to |Yes |
|PUT      |/how-to/:id              |edit existing how-to    |Yes |
|PUT      |/how-to/instructions/:id |edit existing step      |Yes |
|DELETE   |/how-to/:id              |remove how-to and steps |Yes |

## Token must be in the header under Authorization for Auth endpoints
---
## POST Register
### Endpoint /users/register
```
    {
        "username": "string",       required
        "password": "string",       required
        "bio": "text block",
        "email": "string",
        "allowPost": "boolean"      defaults to false
    }
```
#### Returns
```
    {
        "id": "user id",
        "message": "success message",
        "username": "registered user name",
        "bio": "user's bio description",
        "email": "users email address",
        "token": "authentication token",
        "allowPost": "user access to post how-to"
    }
```
---
## POST Login
### Endpoint /users/login
```
    {
        "username": "user's registered user name",     required
        "password": "user's password"                  required
    }
```
#### Returns
```
    {
        "id": "user id",
        "message": "success message",
        "username": "registered user name",
        "bio": "user's bio description",
        "email": "users email address",
        "token": "authentication token",
        "allowPost": "user access to post how-to"
    }
```
---
## GET all How-To's
### Endpoint /how-to
#### Returns Array of All How-To's
```
    [
        {
            "id": integer,
            "title": "string",                        
            "problem": "string",                      
            "liked": integer,
            "solution": "text",                       
            "topic": "string",
            "user_id": integer
        }
    ]
```
---
## GET How-to by Id
### Endpoint /how-to/:id
#### Returns How-to with an array of all the instructions
```
    {
        "id": integer,
        "title": "string",                        
        "problem": "string",                      
        "liked": integer,
        "solution": "text",                       
        "topic": "string",
        "user_id": integer,
        "instructions": [
            {
                "id": integer,
                "step_number": integer,
                "step_title": "string",
                "description": "text",
                "how_to_id": integer
            }
        ]    
    }
```
---
## GET all users how-to's by user id
### Endpoint /how-to/user/:id
#### Returns How-to's that are register to a given user
```
    [
        {
            "id": integer,
            "title": "string",                        
            "problem": "string",                      
            "liked": integer,
            "solution": "text",                       
            "topic": "string",
            "user_id": integer
        }
    ]
```
---
## GET instructions by instruction id
### Endpoint /how-to/insrtuctions/:id
#### Returns instruction with given id
```
    {
        "id": integer,
        "step_number": integer,
        "step_title": "string",
        "description": "text",
        "how_to_id": integer
    }
```
---
## POST add a new how-to
### Endpoint /how-to
```
    {
        "title": "string",              required                        
        "problem": "string",            required
        "solution": "text",             required          
        "topic": "string",
        "user_id": integer              required
    }
```
#### Returns newly created how-to 
```
    {
        "id": integer,
        "title": "string",                        
        "problem": "string",                      
        "liked": integer,
        "solution": "text",                       
        "topic": "string",
        "user_id": integer,
        "message": "string"
    }
```
---
## POST add instruction to how-to
### Endpoint /how-to/instructions
```
    {                  
        "step_number": integer,         required
        "step_title": "string",         required
        "description": "text",          required
        "how_to_id": integer,           required
    }
```
#### Returns
```
    {
        "id": integer,
        "step_number": integer,
        "step_title": "string",
        "description": "text",
        "how_to_id": integer,
        "message": "string"
    }
```
---
## PUT Edit existing how-to by id
### Endpoint /how-to/:id
```
    {
        "title": "string",      Edit any of these fields                               
        "problem": "string",            
        "solution": "text",                     
        "topic": "string"
    }
```
#### Returns Edited how-to
```
    {
        "message": "string",
        "updated": {
            "id": integer,
            "title": "string",
            "problem": "string",
            "liked": integer,
            "solution": "text",
            "topic": "string",
            "user_id": integer
        }
    }
```
---
## PUT Edit existing instruction by given id
### Endpoint /how-to/instructions/:id
```
    {
        "step_number" : integer,    Edit any of these fields
	    "step_title": "string",
	    "description": "text"
    }
```
#### Returns Edited instruction
```
    {
        "message": "string",
        "updated": [
            {
                "id": integer,
                "step_number": integer,
                "step_title": "string",
                "description": "text",
                "how_to_id": integer
            }
        ]
    }
```
---
## DELETE Delete how-to with given id
### Endpoint /how-to/:id
#### Returns success response
```
    {
        "message": "successfully removed",
        "response": 1
    }
```
---
How-to
How-to
NAME
How-to
PITCH
Have a life hack? Share it on how-to. Posts with the most likes/reviews/tried its will be at the top of the feed. Simplifying life for everyone.
MVP
1. An on-boarding process for a new general user (user that will consume the service)
 2. On-boarding process for user who wants to generate content (i.e. organize how-to tutorials)
 3. Ability to easily create / setup a how - to guide
 4. Ability to easily edit / delete an a how-to guide
 5. Ability to easily view/ search / find /filter how-to guides
STRETCH
Add the ability to add photos and/or videos to be uploaded with an API like cloudinary.

UX: Collaborate on a portion or all of a Web MVP with any Web teammate. For example: File structuring, Git, Styles, Semantic elements, etc. Learn something new and practice cross-collaborating.

UX: Write a blog post in medium about your visual design decisions for this project; share the link in your Google Doc.
