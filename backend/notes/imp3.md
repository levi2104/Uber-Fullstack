```
userSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(this.password, password)
}

is it correct? 
```

No, this code is **incorrect**.

Here's the line you're using:

```js
return await bcrypt.compare(this.password, password)
```

This is **wrong** because you're comparing `this.password` (the hashed password) **with** `password` (the plain text password) — but **bcrypt.compare() expects:**

```js
bcrypt.compare(plainTextPassword, hashedPassword)
```

---

### ✅ Correct Version:

```js
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}
```

---

### 🔍 Explanation:

* `password` → plain text password entered by user (e.g., in login form)
* `this.password` → hashed password stored in MongoDB
* `bcrypt.compare(plain, hash)` → internally hashes the plain password and compares with the existing hash

So the correct order matters.

---

Let me know if you want the **full flow of user login password check using this method**.

```
const isMatch = user.comparePassword(password)
  console.log(isMatch)

i am calling that func here, but why do i have to use await again here? i already done it while returning? shouldnt it return the true or false instead of promise pending to the isMatch variable? 
```

Great question. The key point here is:

> Just because you used `await` **inside** a function doesn't mean the **caller** will get the result synchronously.

Let’s break it down clearly:

---

## 🔁 What’s Happening:

Your method:

```js
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
```

* This method is **async**
* It returns a **Promise** (that eventually resolves to true/false)

---

### ❌ Incorrect Usage (No `await` at call site):

```js
const isMatch = user.comparePassword(password);
console.log(isMatch); // ❌ Promise { <pending> }
```

You’re just calling the async function without `await`, so `isMatch` will be a **Promise**, not a boolean value.

---

### ✅ Correct Usage (Use `await` when calling):

```js
const isMatch = await user.comparePassword(password);
console.log(isMatch); // ✅ true or false
```

Even though `await` is used **inside** the function, you still need to `await` it when you **call** it, otherwise you're working with the unresolved Promise.

---

### 🧠 Key Rule to Remember:

> **`async` functions always return a Promise**, no matter what's inside them.
> If you don’t `await` them at the call site, you get a Promise, not the actual value.

---

### ✅ Bonus Tip: Always wrap `await` calls in `try/catch` when dealing with authentication

```js
try {
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  // proceed to generate token...
} catch (error) {
  return res.status(500).json({ error: "Server error" });
}
```

---

Let me know if you want to see the full login route flow too.


```
so its necessary to use await while calling async funcs, so i can remove the await at returning that func right?
```

You're asking a **smart** and very common question — let's get it absolutely clear:

---

## ❓ “If I `await` when calling an async function, can I remove `await` from inside the function’s return?”

### 🔁 Short Answer:

> ✅ **Yes, you can remove the inner `await`,** but only if you’re returning a Promise directly (which you are).

---

## 🔍 Let's break it down:

### Your original code:

```js
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
```

This works perfectly. But here's a better version:

---

### ✅ Cleaner & Equivalent Version:

```js
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};
```

### Why?

* `bcrypt.compare()` **already returns a Promise**
* So you don’t need to wrap it in `async` + `await`
* The method still returns a Promise — so at the call site, you can still use `await`

---

## 🔁 Summary:

| Inside Function                 | At Call Site | Works?                      |
| ------------------------------- | ------------ | --------------------------- |
| `return await somethingAsync()` | `await fn()` | ✅ Yes                       |
| `return somethingAsync()`       | `await fn()` | ✅ Yes                       |
| `return await somethingAsync()` | `fn()`       | ❌ No (You’ll get a Promise) |
| `return somethingAsync()`       | `fn()`       | ❌ No (You’ll get a Promise) |

---

## ✅ Final Suggestion:

Unless you need to catch errors **inside** the method, just return the Promise directly:

```js
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};
```

Still use `await` when calling:

```js
const isMatch = await user.comparePassword(password);
```

Let me know if you'd like a version with custom error handling inside the method.
