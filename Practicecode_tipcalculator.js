/* build a tip calculator for resturant if bill amount is between 50 -300 tip %15 
above 300 tip 20% print the value of bill amount + tip amount and total amount 

NOTE: do this without if else statement 

test data bill value 275, 40 and 430 */

/*var bill=prompt('Enter the bill amount') , tips,totalAmount;
tips = ((15/100)*bill);
totalAmount= (Number(bill)+Number(tips));
console.log('bill amount',bill ,'total amount =',totalAmount);*/

const bill=prompt('Enter the bill amount') ;
const tips= bill>=300 &&bill<=50 ? bill*0.15: bill*0.2 ;
console.log(`Bill amount ${bill}, tips= ${tips},total amount  ${Number(bill) + Number(tips)}`);


//code challange
//tip calculator using arrays 

/* 1.create an array containing bill values test data: 122,155,44
   2.create an array tips ontaining tips value for each bill 
   3.create an array total bill+ tips 

   const bills= [122,155,44];
   const newlength= bills.push();
   const poppeds =bills.pop();
   console.log(poppeds)

    const tip= poppeds>=300 && poppeds <=50 ? poppeds *0.15: poppeds*0.2 ;
    console.log(tip);  */