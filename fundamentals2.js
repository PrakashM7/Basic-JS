//activate strict mode keyword 'use strict' in begining of the code (US is secure the code) 
//create visible errors 
 'Use strict'

 /*let hasdriverlicense =false;
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

 //if else with function
  /*const applelovers= prompt('are u a applelover? true or false');
  console.log(applelovers);*/
  const applelovers= true;
  const orangelovers= true;
 //const orangelovers= prompt('are u a orange lover? true or false');


if(applelovers && orangejuice)
{
    const juiceorder = fruit(30,30); //assign value to function and store the return value in a constant
    console.log('appple & orange are eqaul',juiceorder);  
}
//else if(applelovers===false && orangejuice ===true)
else
{
    const juiceorder= fruit(10,50); //calling the function with different values 
    console.log('orange juice greater than apple juice order list',juiceorder);//return value stored in a variable orange juice 

}

/*else
{
    const juiceorder= fruit(50,10); //calling the function with different values 
    console.log('apple juice greater than  orange juice order list',juiceorder);//return value stored in a variable orange juice 

}*/

//arrays 

//array declaration
const friendsarray =['ajith', 'prakash', 'mahendran','roopan'];

console.log (friendsarray);
console.log (friendsarray[1]); //array 1st index value 
console.log (friendsarray [friendsarray.length-1]);// last element present inarray n-1

friendsarray[2] = 'gamer mahe';// you can replace one element in an array 
console.log(friendsarray);
//friendsarray = ['ajith','prakash', 'navanee','roopan']; //but u cant replace an whole array or multiple array in same line 
//console.log(friendsarray);


//array methods 

const friendsarray1 =['ajith', 'prakash', 'mahendran','roopan'];
//Add element prefix and suffix 

//friendsarray1.push('surya'); //push is the function that add the data next to the last index in an present array 
friendsarray1.unshift('master');// unshift function add data in begining of an array and it return length of an array 
const newLength =friendsarray1.push('surya'); //push function does return the value that is length of new array
console.log(friendsarray1);
console.log(newLength); //length of an array stored in a variable newlength 


//Remove element in array 
const popped =friendsarray1.pop(); //last element  
//pop return the removed element 
console.log(popped);
console.log(friendsarray1);

friendsarray1.shift(); //remove first  element 
console.log(friendsarray1.indexOf('prakash')); //return the index of an element 
//if given element is not present in an array it will return -1
//es6 method 
console.log(friendsarray1.includes('prakash')); //return true or false 
friendsarray1.push(23);
console.log(friendsarray1.includes('23')); //it will return false because it is strict operator it does not do type cohersion 

if (friendsarray1.includes('ajith'))   {
    console.log('you have a friend ajith');
}