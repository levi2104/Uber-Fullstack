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

Here is a properly formatted `README.md` section for the `/captains/register` endpoint:

---

## `/captains/register` Endpoint

### ✅ Description

Registers a new **Captain** by:

* Validating email, password, full name, and vehicle details
* Hashing the password before storing
* Saving captain info in the database
* Returning a JWT token on successful registration

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
  "password": "strongpassword123",
  "vehicle": {
    "color": "Red",
    "plate": "GJ01AB1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

---

### 📥 Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
  "captain": {
    "_id": "64a1c7b61f8fc9...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Red",
      "plate": "GJ01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

### 🚫 Error Responses

#### 1. Validation Errors (Missing or invalid fields)

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email"
    }
  ]
}
```

#### 2. Captain Already Exists

```json
{
  "message": "Captain already exists"
}
```

---

### 🧠 Notes

* Passwords are hashed using `bcrypt` before saving.
* JWT token is generated using `captain.generateAuthToken()`.
* Vehicle types allowed: `car`, `motorcycle`, `auto`.
* Default captain status is set to `'inactive'`.

---

## `/captains/login` Endpoint

### ✅ Description

Authenticates an existing **Captain** by:

* Validating email and password format.
* Checking if the captain exists in the database.
* Verifying the provided password with the stored hashed password.
* Returning a JWT token on successful authentication.

---

### 📬 HTTP Method

`POST`

---

### 📦 Request Body

```json
{
  "email": "john@example.com",
  "password": "strongpassword123"
}
```

---

### 📥 Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
  "captain": {
    "_id": "64a1c7b61f8fc9...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Red",
      "plate": "GJ01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

### 🚫 Error Responses

#### 1. Validation Errors (Invalid email or short password)

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email"
    }
  ]
}
```

#### 2. Invalid Credentials

```json
{
  "message": "Invalid email or password"
}
```

---

### 🧠 Notes

* Password verification is done using `captain.comparePassword()`.
* JWT token is generated using `captain.generateAuthToken()`.
* The password is never returned in the response.

---

## `/captains/profile` Endpoint

### ✅ Description

Fetches the **logged-in Captain's profile**.

---

### 📬 HTTP Method

`GET`

---

### 🔑 Authentication

* Requires a valid JWT token provided either:

  * In cookies (`token`), or
  * In `Authorization` header as `Bearer <token>`.
* Token must not be blacklisted.

---

### 📥 Example Response

```json
{
  "captain": {
    "_id": "64a1c7b61f8fc9...",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "Red",
      "plate": "GJ01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

### 🚫 Error Responses

#### 1. Missing or Invalid Token

```json
{
  "message": "Unauthorized"
}
```

#### 2. Blacklisted Token

```json
{
  "message": "Unauthorized"
}
```

---

### 🧠 Notes

* This route is protected by `authCaptain` middleware.
* Blacklisted tokens are denied access.

---

## `/captains/logout` Endpoint

### ✅ Description

Logs out a **Captain** by:

* Adding the current JWT token to the blacklist.
* Clearing the authentication cookie.

---

### 📬 HTTP Method

`POST`

---

### 🔑 Authentication

* Requires a valid JWT token (in cookies or `Authorization` header).
* Token must not be blacklisted already.

---

### 📥 Example Response

```json
{
  "message": "Logged Out"
}
```

---

### 🚫 Error Responses

#### 1. Missing Token

```json
{
  "message": "Unauthorized"
}
```

#### 2. Blacklisted Token

```json
{
  "message": "Unauthorized"
}
```

---

### 🧠 Notes

* Blacklisted tokens automatically expire after **24 hours** (based on MongoDB TTL index).
* Once blacklisted, the token cannot be reused for authentication.

---