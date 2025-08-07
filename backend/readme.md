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

---

## `/users/login` Endpoint

### ✅ Description
Logs in an existing user by validating input, hashing the password and returning a JWT token.

---

### 📬 HTTP Method
`POST`

---

### 📦 Request Body

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

### 📋 Validation Rules:

```json
email: must be a valid email

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

if Email is invalid: 

```json
{
  "email": "john@example.co",
  "password": "123456"
}
```

it returns: 

```
{
    "error": "Invalid Email or Password"
}
```

if Password is invalid:

```json
{
  "email": "john@example.com",
  "password": "12345678"
}
```

again it returns:

```
{
  "error": "Invalid Email or Password"
}
```
