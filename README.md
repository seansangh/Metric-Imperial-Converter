# Metric-Imperial-Converter

*unit converter*

This is an app that allows you to convert different units of measurement.


...

**Home Page**

<img src="/MetricImperialConverter.PNG" title="home page" alt="home page" width="500px">



---


## Table of Contents 

> Sections
- [Sample Code](#Sample_Code)
- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [Team](#team)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)


---

## Sample Code

```javascript
// code

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
```

---

## Installation


### Setup


>  install npm package

```shell
$ npm install
```

- For all of the packages used, refer to the package.json file [here](/package.json).

---

## Features
## Usage (Optional)
## Documentation (Optional)
## Tests (Optional)
## Contributing
## Team

> Contributors/People

| [**seansangh**](https://github.com/seansangh) |
| :---: |
| [![seansangh](https://avatars0.githubusercontent.com/u/45724640?v=3&s=200)](https://github.com/seansangh)    |
| [`github.com/seansangh`](https://github.com/seansangh) | 

-  GitHub user profile

---

## FAQ

- **Have any *specific* questions?**
    - Use the information provided under *Support* for answers

---

## Support

Reach out to me at one of the following places!

- Twitter at [`@sean13nay`](https://twitter.com/sean13nay?lang=en)
- Github at [`seansangh`](https://github.com/seansangh)

---

## Donations (Optional)

- If you appreciate the code provided herein, feel free to donate to the author via [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4VED5H2K8Z4TU&source=url).

[<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/cc-badges-ppppcmcvdam.png" alt="Pay with PayPal, PayPal Credit or any major credit card" />](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4VED5H2K8Z4TU&source=url)

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a>S.S.</a>
