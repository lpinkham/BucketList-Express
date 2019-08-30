# Bucket List App

![alt text](https://i.imgur.com/5mbxMvk.jpg "Bucket List App")
[Imgur](https://i.imgur.com/5mbxMvk.jpg)

Bucket List App is a single page application that a user can login and add items
to their bucket list. Once you have completed an item just mark it as
completed.

To use create an account, sign-in and starting adding buckets to your app.


## Links to deployed Site
(https://lpinkham.github.io/BucketList-FrontEnd/)
(https://secret-badlands-58963.herokuapp.com)


## Installation

1.  [Download] both repo's
    - (https://github.com/lpinkham/BucketList-Express)
    - (https://lpinkham.github.io/BucketList-FrontEnd)
1.  Install dependencies with `npm install`.
1.  Ensure that you have `nodemon` installed by running `npm install -g nodemon`.
1.  Ensure the API is functioning properly by running `npm run server`.


## Link to Heroku

 (https://git.heroku.com/secret-badlands-58963.git)


## Link TO ERD

(https://imgur.com/a/nkEmtax)


## Technologies used
1.  Express
2.  HTML
3.  CSS
4.  Javascript
5.  jQuery
6.  Handlebars
7. Bootstrap

## Process and Planning
The process and planning process started with an idea of what the app would do. From there I began with writting the user stories. Then came a basic wireframe and a data diagram.

Once the initial planning was complete I dove into the code. Starting with the back-end. Set up CURL scripts and tested user auth. Then added models and routes for the buckets.

From there I jumped over to the front-end and started with a plain html doc that was enough to get started with testing
creating, edit and delete of the buckets. After that came styling and documenting.

Problem-solving was a lot of googling on how to best do some things. Most of that was for styling. Using my previous classroom assignments was very helpful with tying to solve why create or edit wasn't working properly.

## Future Updates
In the future I would add to this app by allowing users to be able upload a photo or two for each bucket list.

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password`     | `users#changepw`  |
| DELETE | `/sign-out`            | `users#signout`   |
| POST   | `/create-bucket`       | `bucket#create`   |
| GET    | `/buckets`             | `bucket#index`    |
| PATCH  | `/update-bucket`       | `bucket#update`   |
| DELETE | `/delete-bucket`       | `bucket#delete`   |
