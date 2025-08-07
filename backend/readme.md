# Uber Backend API Documentation

## `/users/register` Endpoint

### ✅ Description
Registers a new user by validating input, hashing the password, saving the user in the database, and returning a JWT token.

---

### 📬 HTTP Method
`POST`

---

### 📦 Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "123456"
}
```

### 📋 Validation Rules:

```json
email: must be a valid email

fullname.firstname: at least 3 characters

password: at least 6 characters
```

---

### 📥 Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR...",
  "user": {
    "_id": "64a0bda5f7c3b7e...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```