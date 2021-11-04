const bcrypt = require('bcrypt')

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existingPassword = bcrypt.compareSync(password, users[i].passwordHash)
        console.log(existingPassword)
        // if (users[i].username === username && users[i].password === existingPassword) {
          if(users[i].username === username && existingPassword === true){
          
          let secureUser = {...users[i]}
          delete secureUser.passwordHash
          
          console.log(secureUser)
          res.status(200).send(secureUser)
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      console.log('Registering User')
      console.log(req.body)
      
      const {password, username, email, firstName, lastName} = req.body
      const salt = bcrypt.genSaltSync(5)
      const passwordHash = bcrypt.hashSync(password, salt)
      let newUser = {
        username,
        email,
        firstName,
        lastName,
        passwordHash
      }
      // users.push(req.body)
      
      let secureUser = {...newUser}
      delete secureUser.passwordHash
      
      users.push(newUser)
      console.log(users)
      res.status(200).send(secureUser)
      return users
    }
}