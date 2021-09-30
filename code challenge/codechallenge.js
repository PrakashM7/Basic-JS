let mark , john; //initializing 
var mass , height,mass1 , height1 ;
let BMI ,BMI1;
mass =78;    //example values 
mass1 =92;   //example values
height=1.69  //example values
height1=1.95 //example values
BMI = (mass /(height *height )) ;//BMI formula 
BMI1 = (mass1 /(height1 *height1 )) ;


console.log('mark' ,BMI,"john", BMI1);
if (BMI>BMI1) // checking equalent operator with if else 
{
console.log("mark", BMI ); //priting in console with name and bmi value
}
else{
    console.log("john",BMI1);
}