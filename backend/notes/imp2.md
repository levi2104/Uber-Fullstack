```
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, 'First name must be at least 3 characters long']
    },
    lastname: {
      type: String,
      minlength: [3, 'Last name must be at least 3 characters long']
    }
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: [5, 'Email must be at least 5 characters long']
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
})
```

in userSchema, password field, we have done select: false, means when u call any find query, it'll not get the password by default from the db:

```
  const user = await userModel.findOne({ email })
```

now, this user will be like this:

```
{
    "fullname": {
        "firstname": "Rajvi"
    },
    "_id": "689460dd9b0aedb548440468",
    "email": "rajvi@gmail.com",
    "__v": 0
}
```

to get the password explicitly:

```
  const user = await userModel.findOne({ email }).select('+password')
```

now u will get the response:

```
{
    "fullname": {
        "firstname": "Rajvi"
    },
    "_id": "689460dd9b0aedb548440468",
    "email": "rajvi@gmail.com",
    "password": "$2b$10$f/gic2pgUbUEIDlSmQSiTuHQydE92hZ51wMrlFa2Ra.gVZwua1r76",
    "__v": 0
}
```
