const bcrypt = require('bcryptjs')
//const { password } = require('pg/lib/defaults')

const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}


//module.exports = { encrypt,compare }
module.exports = { compare }