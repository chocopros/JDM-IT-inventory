# SKELETON TEMPLE

- Express
- PostgreSQL
- Sequelize ORM
- Autentificacion con Tokens
- Bcrypt para hashear contrasenas.
- Uso de Json Web Token

---

- Rutas de Login y creacion de usuario (register).
- Herramienta para publicar img de perfil.
- CRUD de usuarios con auntentificacion y manejo de permisos.
- /users/:id DELETE, PUT
- /users/me

---

# .env

- info about the DB and variables de entorno

---

# CMD
- npm init --y
- npm i express uuid sequelize dotenv pg pg-hstore bcrypt passport passport-jwt jsonwebtoken
- npm i -D nodemon



# GET A SINGLE EMPLOYEE

- GET http://localhost:9000/api/v1/employees

    {
      "id": 1,
      "firstName": "Jesus",
      "lastName": "Arechider",
      "age": 29,
      "email": "jarechider@jdmgroupcompany.com",
      "position": {
        "id": 3,
        "position": "Director IT",
        "description": "Technology & Support Desk"
      },
      "team": {
        "id": 19,
        "nameTeam": "TECHNOLOGY",
        "description": "Socialmedia & IT, Support Desk",
        "email": "technology@jdmgroupcompany.com"
      },
      "computer": {
        "id": 1,
        "isActive": true,
        "serialNumber": "SN-7589415",
        "brand": "HP",
        "model": "HP Notebook One",
        "processor": "INTEL i7-7500 2.70Ghz ",
        "memoryRam": "6.00GB",
        "hardDisk": "500GB SSD",
        "createdAt": "2023-06-24T14:41:33.415Z",
        "updatedAt": "2023-06-24T14:41:33.415Z"
      },
      "monitoremployees": [
        {
          "id": 1,
          "monitor": {
            "id": 1,
            "isActive": true,
            "serialNumber": "s3rialNumber-111111",
            "brand": "AOC",
            "model": "Mx299-2",
            "screenSize": "21 Plugin.",
            "createdAt": "2023-06-28T12:53:44.705Z",
            "updatedAt": "2023-06-28T12:53:44.705Z"
          }
        },
        {
          "id": 2,
          "monitor": {
            "id": 2,
            "isActive": true,
            "serialNumber": "s3rialNumber-111111",
            "brand": "AOC",
            "model": "Mx299-2",
            "screenSize": "21 Plugin.",
            "createdAt": "2023-06-28T12:53:51.292Z",
            "updatedAt": "2023-06-28T12:53:51.292Z"
          }
        }
      ]
    },
    "Accesories": [
      
    ]

