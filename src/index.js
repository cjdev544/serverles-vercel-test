const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

// Create GET request
app.get('/', (_req, res) => {
  res.send('Express on Vercel')
})

// Initialize server
app.listen(5000, () => {
  console.log(`Running on port: ${PORT}`)
})

// Export the Express API
module.exports = app
