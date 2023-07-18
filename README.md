# README.md



## librum
<img width="1438" alt="Schermata 2023-07-10 alle 17 59 29" src="https://github.com/Valeprogr/Librum/assets/96908140/eee9b360-d549-42e8-b72f-00a981a21077">



## Description

***Librum*** is a project on invetate app created to resell secondhand paper books in excellent condition. In this web application you will be able to : create an account, add the books to sell, add books to your cart and contact the seller if you decide to purchase a book.
For the creation of this project I used React with Typescript and ESLint. For user authentication i use Auth0. To stylize I used Tailwind and normal css. For backend I used node.js, express, mongoDb, Joi and Typescript instead. For deployment I used on Fronted Netlify and Backend Vercel .

## User Stories

- **Sign up:** As a user I can sign up in the platform.
- **Log in:** As a user I can login to the platform.
- **Log out:** As a user I can logout from the platform so no one else can use it.
- **Add Book** As a user I can add an item to sell.
- **Delete Book** As a user I can delete items.
- **Add & Delete Books from Cart** As a user I can add players to a tournament
- **Contact the Seller** As a user I can contact the seller via Email




# Client / Frontend

## React Router Routes (React App)

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | Home                 | public `<Route>`           | Home page                                                    |
| `/books`         | BooksPage            | public `<Route>`           | Show collection of books for sale                            |
| `/book/:id`      | BookPageInfo         | public `<Route>`           | Show selected book description                               |
| `/location`      | Location Page        | public `<Route>`           | Shows Location                                               |
| `/about`         | About                | public `<Route>`           | Show About                                                   |
| `/create-product`| CreateProduct        | user only `<PrivateRoute>` | Add a new book to Database                                   |
| `/user-books`    | UserBooks            | user only `<PrivateRoute>` | Show a list of add books                                     |
| `/profile`       | Profile              | user only `<PrivateRoute>` | Show User Profile                                            |
| `/cart`          | Cart                 | user only `<PrivateRoute>` | Show User Cart                                               |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |

## Components

- Navbar
- Spinner
- BookCard
- Carousel
- CTAButton
- Input
- LoginButton
- LogoutButton
- Pagination
- Searchbar
  

## Services

- Book Service
  - BookDataServices.getAll()
  - BookDataServices.get(id)
  - BookDataServices.create(data)
  - BookDataServices.delete(id)
  - auth.getUser() // synchronous

- User Service
  - userDataServices.get(data)
  - userDataServices.create(data)



# Server / Backend

## Models

User model

```
{
    email: string;
    books?: string;
}
```

Book model

```
 {
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required:true},
    genre: {type: String, required: true},
    stock: { type: Number, default: 1 },
    imageUrl: { type: String, default: '' },
    price: { type: String, required: true },
    email: {type: String, required: true}
   
 }
```



## Backend routes

| HTTP Method | URL                      | Request Body                                                 | Success status | Error Status | Description                                                  |
| ----------- | -------------------------| ------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/user/findUser`         | {email}                                                      | 200            | 404          | Check if user email is save in database and return profile page|
| POST        | `/user/createUser`       | {name, email, password}                                      | 201            | 403          | Checks if user email exists (403)if not then create new user |
| POST        | `/books/addBook`         | { description, genre, stock, imageUrl, price, email }        | 201            | 500          | Create a new Book                                            |
| GET         | `/books/book/:bookId`    | {id}                                                         | 200            | 500          | Find a Book by id                                            |
| GET         | `/books/listOfBooks`     | (empty)                                                      | 200            | 500          | Find all Books                                               |
| PATCH       | `/books/editBook/:bookId | {id}                                                         | 201            | 500          | Used to update one book by id                 |
| DELETE      | `/books/deleteBook/:bookId`|   {id}                                                     | 201            | 500          | Used to delete a book by id                    |


## Links

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client](https://github.com/Valeprogr/Librum)

[Server repository Link](https://github.com/screeeen/project-server](https://github.com/Valeprogr/librum-server)

🔗 [Deployed App Link](http://heroku.com/](https://lustrous-manatee-2f10bf.netlify.app/)https://lustrous-manatee-2f10bf.netlify.app/)



