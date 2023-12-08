
# Sequelize CRUD Operations with MySQL

This project demonstrates basic CRUD operations using Sequelize with MySQL database. Sequelize is a promise-based Node.js ORM that supports multiple database systems, and MySQL is used as the database in this example.

## Prerequisites

- Node.js installed (version >= 12)
- MySQL server installed and running
- npm package manager installed

## .env info
    PORT = 3000
    DB_HOST=localhost
    DB_USER=root
    DB_NAME=user
    DB_PASSWORD=db_password

## Usage

- Start the application:

- The application will run at `http://localhost:3000`.

## API Endpoints

### Create Record

- **Endpoint:** `POST /add`
- **Request Body:**

  ```json
  {
    "email": "vivek@gmail.com",
    "password": "Admin@123"
    }
  ```

### Read Records

- **Endpoint:** `GET /`

### Update Record

- **Endpoint:** `PUT /update`
- **Request Body:**

  ```json
  {
    "id": 22,
    "email" : "vivekupdate@gmail.com",
    "password" : "Admin@123"
    }
  ```

### Delete Record

- **Endpoint:** `DELETE /delete`

```json
  {
    "id": 22,
    }
```
