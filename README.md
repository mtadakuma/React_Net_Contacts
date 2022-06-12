
# React and .NET with MongoDB Contacts Store

This is a project for a contacts storing application with React as it's frontend and a .NET REST API as the backend, this project also persists the information in MongoDB and includes the Swagger documentation for the Rest API calls.



## Tech Stack

**Client:** React, CSS.

**Server:** .NET, MongoDB, Swagger


## Dependencies

- react
- react-router-dom
- dotnet
- MongoDB
- mongosh

## Run Locally


**Instructions for MongoDB**:

Open mongosh and add the path
```bash
  mongodb://localhost:27017
```
Then add the following code to create a new database
```bash
  use ContactsStore
```
Create a collection
```bash
  db.createCollection('Contacts')
```
Insert two registries to the collection

```bash
  db.Contacts.insertMany([{ "Username": "JosePerez", "Email": "jperez@gmail.com", "Telefono": "02231512345678" }, { "Username": "PaulaLopez", "Email": "plopez@gmail.com", "Telefono": "0111587654321" }])
```
Check if the registries were correctly inserted

```bash
  db.Contacts.find().pretty()
```


**Running the project**:

Clone the project

```bash
  git clone https://github.com/mtadakuma/React_Net_Contacts.git
```

**To run the serverside webapi**:

Go to the project directory

```bash
  cd React_NET_Contacts
```

Go to WebApi folder
```bash
  cd ContactsStoreApi
```

Run the server side Api
```bash
  dotnet run
```

**To run the clientside in React**:

Go to the project directory

```bash
  cd React_NET_Contacts
```

Go to React folder
```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

**To check Swagger documentation**:

While the serverside webapi is running go to the following path

https://localhost:7235/swagger/index.html

or 

http://localhost:5021/swagger/index.html
## Authors

- [@mtadakuma](https://github.com/mtadakuma)

