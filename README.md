# Back-End
## How-To Base URL: https://how-to-lifehack.herokuapp.com/
---
## Endpoint Summary Table
---
|Type     |Endpoint           |Description        |Auth|
|:-------:|:-----------------:|:-----------------:|:--:|
|POST     |/users/register    |Register User      |No  |
|POST     |/users/login       |Login User         |No  |

## Token must be in the header under Authorization for Auth endpoints
---
## Register
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
## Login
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
