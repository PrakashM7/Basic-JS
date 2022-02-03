/* But there is a no way of giving this element by name we cannot refer by name we can refer only by order number in which they appear in array 
to solve this we have an another data structure in js OBJECTS
we actually declare key value pairs then we can give each of the values by name */

const jonas= {
    firstName: 'Prakash',
    lastName: 'mariyappan',
    job:'frontend developer',
    friends:['prakash','Ajith','Mahe']

} //each of the keys is alsocalled property this object jonas have 3 properties 
//big differents between arrays and object is object doeas not matter order at all  but array is by order 

//how to retrive data from an object and also change the data in objects using dot and bracket 

console.log(jonas.lastName); //dot nototation 
console.log(jonas['firstName']);//bracket 

const details= prompt('what details u want ex firstname, lastname ,job');
console.log(jonas.details); // undefined because details is not the property so dot wont here
console.log(jonas[details]);// evaluated details first then go for jonas property 

if (jonas[details]){
    console.log(jonas[details])
} else{
    console.log('wrong requested ')
}
//add new data property  to excisting object

jonas.location ='Devakottai';
jonas['location']='Devakottai'; 
console.log(jonas.location);

//object methods  