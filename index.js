const express = require('express');
const app = express();

// student submit assignment (POST)
app.post('/submitassignment', (req, res) => {
    
    // You can access the sent data here using req.body later
    res.send('<html><body>INSIDE SUBMIT ASSIGNMENT API..</body></html>');
});

// //studentlogin (POST)
// app.post('/studentlogin', (req, res) => {
//     res.send('<html><body>INSIDE STUDENT LOGIN API..</body></html>');
// });

//viewassignment (GET)
app.get('/viewassignment', (req, res) => {
    res.send('<html><body>INSIDE VIEW ASSIGNMENT API..</body></html>');
});

//studentupdateprofile (PUT)
app.put('/studentupdateprofile', (req, res) => {
    res.send('<html><body>INSIDE UPDATE PROFILE API..</body></html>');
});

//START THE EXPRESS SERVER. 5001 IS THE PORT NUMBER
app.listen(5001, () => {
    console.log('EXPRESS Server started at Port No: 5001');
});