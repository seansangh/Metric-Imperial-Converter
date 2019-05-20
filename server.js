'use strict';

var express     = require('express');
var bodyParser  = require('body-parser');
var expect      = require('chai').expect;
var cors        = require('cors');

var apiRoutes         = require('./routes/api.js');
var fccTestingRoutes  = require('./routes/fcctesting.js');
var runner            = require('./test-runner');
var helmet = require('helmet');
var app = express();

app.use(helmet.noSniff());
app.use(helmet.xssFilter());

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });


app.get('/api/convert', (req,res)=>{
  var lb= req.query.input;
  var lb2= lb.replace(/\d|\.|\//gi, "");
  var lb3 = lb.replace(lb2,"");
  var lb4= (/\d/gi).test(lb)
  if(lb4==false){lb3=1;}
  var lb1a=""; var lb2a="";
  var lb1b=""; var lb2b=""; var ta="";
  console.log(req.query.input)
  console.log(lb2);
  console.log(lb3);
  
var my=lb.split('');
var x="";
for(var i=0; i<my.length; i++){
if(my[i]=='/'){
x++
}
}  
  
  
  switch(lb2){
      case('gal'):
      case('GAL'):
       lb1a = lb3 * 3.78541;
       lb2a = "L";
       lb1b = "gallons";
       lb2b = "liters";
      break;
      case('lbs'):
      case('LBS'):
       lb1a = eval(lb3) * 0.45359237;
       lb2a = "kg";
       lb1b = "pounds";
       lb2b = "kilograms";
      break; 
      case('mi'):
      case('MI'):
       lb1a = lb3 * 1.60934;
       lb2a = "km";
       lb1b = "miles";
       lb2b = "kilometers";
      break;  
      case('km'):
      case('KM'):
       lb1a = lb3 / 1.60934;
       lb2a = "mi";
       lb1b = "kilometers";
       lb2b = "miles";
      break;
      case('L'):
      case('l'):
       lb1a = lb3 / 3.78541;
       lb2a = "gal";
       lb1b = "liters";
       lb2b = "gallons";
      break;
      case('kg'):
      case('KG'):
       lb1a = eval(lb3) / 0.45359237;
       lb2a = "lbs";
       lb1b = "kilograms";
       lb2b = "pounds";
      break; 
      default:
      ta="no";
      break;
                  }
  if(ta=="no" && x<=1){res.send("invalid unit")}
  else if(lb1a == NaN && ta != "no"){res.send("invalid number")}
  else if(x>1 && ta != "no"){res.send("invalid number")}
  else if(x>1 && ta == "no"){res.send("invalid number and unit")}
  else{
  res.json({initNum:eval(lb3), initUnit: lb2, returnNum: Number(lb1a.toFixed(5)), returnUnit: lb2a, string: lb3 + " " + lb1b + " converts to " + lb1a.toFixed(5) + " " + lb2b})
  }   
})
     
//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API 
apiRoutes(app);  

var ConvertHandler = require('./controllers/convertHandler.js');

var convertHandler = new ConvertHandler();


console.log(convertHandler.getNum("5.5/2/1L"));

//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port " + process.env.PORT);
  if(process.env.NODE_ENV==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch(e) {
        var error = e;
          console.log('Tests are not valid:');
          console.log(error);
      }
    }, 1500);
  }
});

module.exports = app; //for testing
