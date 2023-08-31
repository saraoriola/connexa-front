# E-commerce B2B App - Documentation

## Introduction
Welcome to the documentation for the **E-commerce B2B App**! This application is a business-to-business (B2B) e-commerce platform that enables businesses to register, explore wholesale products, request quotes, and manage their orders.

## Functional Requirements
The application fulfills the following functional requirements:

- **Business Registration:** Businesses can register by providing their commercial information.
- **Login:** Registered businesses can log in to the platform using their credentials.
- **Product Catalog:** The application displays a catalog of products available for wholesale purchase.
- **Add to Quote:** Businesses can add products to their quote list to request prices.
- **Order Creation:** Businesses can create orders based on the products in their quote list.
- **Profile Management:** Businesses have access to a profile where they can manage their information and order history.

## Application Structure
The application is composed of the following essential components:

- **Register:** Registration page for new businesses.
- **Login:** Login page for registered businesses.
- **Home:** Landing page of the application.
- **Courses:** Page displaying the catalog of available products.
- **Orders:** Page displaying the order history.
- **Profile:** Page where businesses can manage their information.

## Navigation
Navigation within the application is achieved using React Router:

- `/home`: Home page.
- `/login`: Login page.
- `/register`: Registration page.
- `/profile`: Profile management page.
- `/courses`: Product catalog page.
- `/orders`: Order history page.

## Technologies Used
The application leverages the following technologies and practices:

- **React:** The application is developed using the React library.
- **React Router:** Used to manage navigation between different pages.
- **Context:** Context is implemented to handle the global state of the application.
- **SASS:** SASS is used for styling the application, including color variables to maintain visual consistency.

## Development Guidelines
To ensure clean and maintainable code, the following guidelines are followed:

- Components should remain under 400 lines of code.
- Functions should be kept within a maximum of 75 lines of code.

## API Configuration
To allow API requests, CORS needs to be enabled. Make sure you have the CORS module installed in your backend:
```sh
npm i cors
```
```sh
const cors = require("cors");
app.use(cors());
```

## Contributions
We welcome contributions to our application! If you'd like to collaborate, please follow these guidelines:
1. Fork the repository.
2. Create a branch with a descriptive name.
3. Make your changes and improvements.
4. Create a Pull Request describing your changes.

## Contact
If you have any questions or comments, feel free to get in touch with us via email 

© 2023 E-commerce B2B App. All rights reserved.

![Tester](src/assets/pasos.gif)
