const bcrypt = require('bcryptjs')

module.exports = {
  register: (req, res) => {
    req.app.get('db')

    res.status(200).send('success')
  }
}