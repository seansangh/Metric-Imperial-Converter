/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
  var lb2= input.replace(/\d|\.|\//gi, "");
  var lb3 = input.replace(lb2,"");
  var lb4= (/\d/gi).test(input)
  if(lb4==false){lb3=1;}
  var lb1a=""; var lb2a="";
  var lb1b=""; var lb2b=""; var ta="";
    

var my=input.split('');
var x=0;
for(var i=0; i<my.length; i++){
if(my[i]=='/'){
x++
}
}  
  

  if(x>1){lb3=null}        
    
    var result= lb3;
    
    return result;
  };
  
  this.getUnit = function(input) {
  var lb2= input.replace(/\d|\.|\//gi, "");
  var lb3 = input.replace(lb2,"");
  var lb4= (/\d/gi).test(input)
  if(lb4==false){lb3=1;}
  if(input=""){lb2= null}
  switch(lb2){
      case('gal'):
      case('GAL'):
      break;
      case('lbs'):
      case('LBS'):
      break; 
      case('mi'):
      case('MI'):
      break;  
      case('km'):
      case('KM'):
      break;
      case('L'):
      case('l'):
      break;
      case('KG'):
      case('kg'):
      break; 
      default:
       var lb2 = null;
      break;      
         }  
   
    var result= lb2;    
    return result;
    
  };
  
  this.getReturnUnit = function(initUnit) {
      switch(initUnit){
      case('gal'):
          var lb2a = "l";
      break;
      case('GAL'):
          var lb2a = "L";
      break;
      case('lbs'):
          var lb2a = "kg";
      break;
      case('LBS'):
          var lb2a = "kg";
      break; 
      case('mi'):
      case('MI'):
          var lb2a = "km";
      break;  
      case('km'):
      case('KM'):
          var lb2a = "mi";
      break;
      case('L'):
      case('l'):
          var lb2a = "gal";
      break;
      case('KG'):
      case('kg'):
          var lb2a = "lbs";
      break; 
      default:
       var lb2a = "invalid unit";
      break;
     }
    
    var result= lb2a;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
      switch(unit){
      case('gal'):
      case('GAL'):
       var lb2a = "gallon";
      break;
      case('lbs'):
      case('LBS'):
       var lb2a = "pound";
      break; 
      case('mi'):
      case('MI'):
       var lb2a = "mile";
      break;  
      case('km'):
      case('KM'):
       var lb2a = "kilometer";
      break;
      case('L'):
      case('l'):
       var lb2a = "liter";
      break;
      case('KG'):
      case('kg'):
       var lb2a = "kilogram";
      break; 
      default:
       var lb2a = null;
      break;
     }
    
    var result= lb2a;    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
     switch(initUnit){
      case('gal'):
      case('GAL'):
       var lb2a = initNum * galToL;
      break;
      case('lbs'):
      case('LBS'):
       var lb2a = initNum * lbsToKg;
      break; 
      case('mi'):
      case('MI'):
       var lb2a = initNum * miToKm;
      break;  
      case('km'):
      case('KM'):
       var lb2a = initNum / miToKm;
      break;
      case('L'):
      case('l'):
       var lb2a = initNum / galToL;
      break;
      case('KG'):
      case('kg'):
       var lb2a = initNum / lbsToKg;
      break; 
      default:
       var lb2a = "invalid number";
      break;
     }    
    
    
    var result = lb2a;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    
    var result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
