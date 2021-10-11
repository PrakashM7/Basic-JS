//activate strict mode keyword 'use strict' in begining of the code (US is secure the code) 
//create visible errors 

/* 'Use strict'

 let hasdriverlicense =false;
 const testpass= true;

 if(testpass) has.
driverslicense= true;
 if(driverlicense) console.log(`i can drive`);*/

 //functions 

  function check() //function keyword and (check user defined) function name 
  {
      console.log('function call working fine ');
  }

  check(); // calling the function 

  function fruit(apple, orange)
  {
      const juice =`juice with ${apple} apples and ${orange} orange`;
    return juice; // return to juice  , const juice having some statements that will execute 
      //store return value to other varaibles(if needed) return does not store the value just it will return 
  }
 const applejuice= fruit(5,10); //assign value to function and store the return value in a constant
 console.log(applejuice);
 const orangejuice= fruit(42,10); //calling the function with different values 
 console.log(orangejuice);//return value stored in a variable orange juice 
