# Bucket List App

Bucket List App is a single page application that a user can login and add items
to their bucket list. Once you have completed an item just check it off as
completed.

## Installation

1.  [Download] both repo's
    - (https://github.com/lpinkham/BucketList-Express)
    - (https://lpinkham.github.io/BucketList-FrontEnd)
1.  Install dependencies with `npm install`.
1.  Ensure that you have `nodemon` installed by running `npm install -g nodemon`.
1.  Ensure the API is functioning properly by running `npm run server`.


## Link to Heroku

 https://git.heroku.com/secret-badlands-58963.git


## Link TO ERD
(https://imgur.com/a/nkEmtax)


## Tasks

Instead of `grunt`, this template uses `npm` as a task runner. This is more
conventional for modern Express apps, and it's handy because we'll definitely
use `npm` anyway. These are the commands available:

## API

Use this as the basis for your own API documentation. Add a new third-level
heading for your custom entities, and follow the pattern provided for the
built-in user authentication documentation.

Scripts are included in [`curl-scripts`](curl-scripts) to test built-in actions.
Add your own scripts to test your custom API.

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/`    | `users#changepw`  |
| DELETE | `/sign-out/`           | `users#signout`   |
| POST   | `/create-bucket`       | `bucket#create`   |
| GET    | `/buckets`             | `bucket#index`    |
| PATCH  | `/update-bucket/`      | `bucket#update`   |
| DELETE | `/delete-bucket/`      | `bucket#delete`   |

####
