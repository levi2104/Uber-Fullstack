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

---

## `/users/profile` Endpoint

### ✅ Description

Returns the profile details of the currently logged-in user. Requires a valid JWT token in headers or cookies for authentication.

---

### 📬 HTTP Method

`GET`

---

### 🛡️ Authentication

Requires JWT token in either:

* Cookie: `token`
* Authorization Header: `Bearer <token>`

---

### 📦 Request Body

None

---

### 📥 Example Response

```json
{
  "_id": "64a0bda5f7c3b7e...",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com"
}
```

---

### 🚫 Error Response (Missing or Blacklisted Token)

```json
{
  "message": "Unauthorized"
}
```

---

## `/users/logout` Endpoint

### ✅ Description

Logs out the current user by:

* Clearing the JWT token from cookies
* Blacklisting the token to prevent future use until expiry

---

### 📬 HTTP Method

`POST`

---

### 🛡️ Authentication

Requires JWT token in either:

* Cookie: `token`
* Authorization Header: `Bearer <token>`

---

### 📦 Request Body

None

---

### 📥 Example Response

```json
{
  "message": "Logged Out"
}
```

---

### 🧠 Blacklist Token Schema Behavior

```js
createdAt: {
  type: Date,
  default: Date.now,
  expires: 86400 // token auto-deletes after 24 hours
}
```

---

### 🚫 Error Response (Missing or Already Logged Out Token)

```json
{
  "message": "Unauthorized"
}
```

---

