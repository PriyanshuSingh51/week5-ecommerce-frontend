# Advanced E-commerce Frontend

## Project Overview

Advanced E-commerce Frontend is a modern and responsive web application built using React.js. The application provides users with an online shopping experience where they can browse products, search products, filter and sort items, manage their shopping cart, and proceed to checkout.

The project demonstrates modern frontend development concepts including component-based architecture, state management, routing, responsive design, and local storage integration.

---

## Objectives

- Build a responsive e-commerce user interface.
- Implement reusable React components.
- Manage application state using Context API.
- Practice React Router navigation.
- Implement shopping cart functionality.
- Implement search, filter, and sorting features.
- Store cart data using Local Storage.
- Create a professional frontend project suitable for a portfolio.

---

## Features

### Product Catalog
- Display products in a responsive grid layout.
- Show product details including:
  - Product Name
  - Brand
  - Category
  - Price
- Responsive product cards.

### Shopping Cart
- Add products to cart.
- Remove products from cart.
- Increase product quantity.
- Decrease product quantity.
- Automatically calculate total price.
- Display cart item count in navigation bar.

### Product Search
- Search products by name.
- Dynamic filtering while typing.

### Product Filtering
- Filter products by category.
- Filter products by brand.

### Product Sorting
- Sort products by:
  - Price Low to High
  - Price High to Low

### Navigation
- Home Page
- Products Page
- Cart Page
- Wishlist Page
- Login Page
- Signup Page
- Checkout Page

### Local Storage
- Persist cart data.
- Cart remains available after page refresh.

### Responsive Design
- Works on:
  - Desktop
  - Tablet
  - Mobile Devices

---

## Technologies Used

### Frontend
- React.js
- JavaScript ES6+
- HTML5
- CSS3

### Routing
- React Router DOM

### State Management
- Context API

### Development Tool
- Vite

### Storage
- Local Storage

---

## Project Structure

```text
week5-ecommerce-frontend/

├── public/

├── src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│
├── context/
│   └── CartContext.jsx
│
├── data/
│   └── products.js
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Wishlist.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Checkout.jsx
│
├── App.jsx
├── main.jsx
├── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation Guide

### Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/advanced-ecommerce-frontend.git
```

### Step 2: Open Project Folder

```bash
cd advanced-ecommerce-frontend
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start Development Server

```bash
npm run dev
```

### Step 5: Open Browser

```text
http://localhost:5173
```

---

## Application Workflow

### Home Page

Users land on the home page and can navigate through the application using the navigation bar.

### Product Page

Users can:

- Browse products
- Search products
- Filter products
- Sort products
- View product information

### Shopping Cart

Users can:

- Add products
- Remove products
- Increase quantity
- Decrease quantity
- View total amount

### Checkout

Users enter:

- Name
- Address
- Phone Number

And proceed with order placement.

---

## State Management

The application uses React Context API.

### CartContext

Manages:

- Cart Items
- Add To Cart
- Remove From Cart
- Increase Quantity
- Decrease Quantity

Benefits:

- Centralized state management
- Avoids prop drilling
- Easy access across components

---

## Algorithms Used

### Add Product To Cart

1. Check whether product already exists.
2. If exists:
   - Increase quantity.
3. Else:
   - Add new product.

### Remove Product

1. Find product ID.
2. Remove product from array.

### Calculate Total

```javascript
total = cartItems.reduce(
  (sum, item) =>
    sum + item.price * item.quantity,
  0
);
```

### Search Product

```javascript
products.filter(product =>
  product.name
    .toLowerCase()
    .includes(search.toLowerCase())
);
```

---

## Sample Products

### Mobiles

- iPhone 15
- iPhone 16 Pro
- Samsung S25
- Samsung S25 Ultra
- OnePlus 13

### Laptops

- MacBook Air M4
- Dell XPS 15
- HP Spectre

### Accessories

- Sony WH1000XM5
- Boat Rockerz 550

---

## Performance Optimization

Implemented:

- Component-based architecture
- Reusable components
- Efficient state management
- Local storage persistence
- Responsive grid layouts

Future Enhancements:

- Lazy Loading
- Code Splitting
- API Integration
- Redux Toolkit
- Authentication
- Payment Gateway Integration

---

## Screenshots

### Home Page

Add screenshot here.

### Products Page

Add screenshot here.

### Cart Page

Add screenshot here.

### Checkout Page

Add screenshot here.

---

## Testing

### Test Case 1

Action:

```text
Add Product To Cart
```

Expected Result:

```text
Product added successfully.
```

Result:

```text
Pass
```

### Test Case 2

Action:

```text
Increase Quantity
```

Expected Result:

```text
Quantity increases.
```

Result:

```text
Pass
```

### Test Case 3

Action:

```text
Remove Product
```

Expected Result:

```text
Product removed.
```

Result:

```text
Pass
```

---

## Learning Outcomes

Through this project, the following concepts were practiced:

- React Components
- React Hooks
- React Router
- Context API
- State Management
- Local Storage
- Responsive Design
- Component Reusability
- Modern JavaScript ES6+

---

## Future Scope

- Backend Integration
- User Authentication
- Payment Gateway
- Product Reviews
- Wishlist Persistence
- Order Tracking
- Admin Dashboard
- Inventory Management
- REST API Integration

---

## Author

Priyanshu Singh

Computer Science Engineering Student

Frontend Developer | React Developer

---

## License

This project is developed for educational and learning purposes.
