const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  res.send(calculate(num1, num2, req.body.submit))

});

app.get("/bmi", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmi", (req, res) => {
 var height = Number(req.body.height);
 var weight = Number(req.body.weight);
 var result = weight / ((height / 100) * (height / 100));

 res.send("Your BMI is: " + result);
});

function calculate(one, two, func) {
  if (func == 1) {
    return ("The result of your inputs is: " + (one + two))
  } else if (func == 2) {
    return ("The result of your inputs is: " + (one - two))
  } else if ( func == 3) {
    return ("The result of your inputs is: " + (one * two))
  } else {
    return ("The result of your inputs is: " + (one / two))
  }
}


app.listen(3000);
