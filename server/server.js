const express = require('express')
const app = express()

//route for the API
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo",  "userThree", "userFour", "userFive", "ddm"]})
})

app.listen(5000, () => {console.log("Server started on port 5000")})