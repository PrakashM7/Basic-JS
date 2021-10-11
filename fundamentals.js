///template literals E6 feature 
let arc = "Developer";
console.log('startups need a good'+' ' + arc); //instead of adding + operator to conc data 
                                    //we can use E6 feature template literals 
console.log(`startups  need a good ${arc}`); //${} we can conc data //no need to give extra space to seperate the words

console.log('multiple \n\
lines\n\
printed'); //we can use '\n\' for new lines

console.log(`multiple 
lines
printed`); //alter way for new line ``above tab key )


//conversion
const year= '1990';//'1990' is a string red indicates string white indicates number 
console.log(year + 10); //it wil conc the value (199010) because data type was differnt 
console.log(Number(year)+10); //Number() is a function converts string to number

//type coersion
                                      
console.log('I am '+ 23+ ' years old') ;//here it will convert 23 number as string (js automatically do coersion)
console.log('23'-10-'3'); // 10  coverts string to number 
console.log('23'+10+'3'); //  +operator conc the values 23103 
console.log('23' -'10' -'3'); 
console.log('25' / '5'); 
                  // except +operator other oper work thier func
                
let m='1' +1; //'11' +conc
m=m -1;
console.log(m);//10
console.log("10"-'4'-1+'5'); //10-4 = 6 -1=5 +conc 5 '55'

//diff btw '===' % '=='

const eq =18

if (eq===18) // === it well check equalent function
{
    console.log("equal to");
}
else {
    console.log("not equal to");
}


const y= '18'; //'18' is string 
if (y==18) // == will do coersion first (change string into number) then check equal function 
// '18' === it will not do coersion check equalent func  
{
    console.log("coersion and check condition");
}
else {
    console.log("not equal to");
}
/*const z =prompt('Equal?'); //prompt input from page 
console.log('prompt value ',z);
if(z==18) console.log("equal");*/ //prompt value is assigned to variable == do coersion from string to value  


//logical operators  '&& and || or !not'

const driverlicense= true;
const drivereyepower= true;
const drivernottired = true;

if (drivereyepower && driverlicense && drivernottired) // && And || or !not  operator 
//if (drivereyepower && driverlicense && !drivernottired) true true false
{

console.log('person can drive now ')
}
else{
    console.log('person cant drive someone else can drive')
}

//switch case 

const day = 'monday';

switch(day){
    case 'monday':
        console.log('start of the week ');
        break;
    default :
     console.log('In valid input ');
}

//conditional (ternary)

const age1 =22;
age1>= 18? console.log("person is eligible for voting") :
console.log("Not eligible for voting");
