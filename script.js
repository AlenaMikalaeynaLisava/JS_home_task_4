const shopCustomers = [ 
    { name: "Rachel", cashBalance: 50, desiredAlcoholItem: "vine", amountOfAlcohol: 1,  age: 18}, 
    { name: "Monica", cashBalance: 120, desiredAlcoholItem: "vodka", amountOfAlcohol: 1.5,  age: 28}, 
    { name: "Phoebe", cashBalance: 30, desiredAlcoholItem: "brandy", amountOfAlcohol: 10,  age: 35}, 
    { name: "Joey", cashBalance: 45, desiredAlcoholItem: "vodka", amountOfAlcohol: 7,  age: 15}, 
    { name: "Chandler", cashBalance: 50, desiredAlcoholItem:"cognac", amountOfAlcohol: 2,  age: 47},
    { name: "Ross",  cashBalance: 150, desiredAlcoholItem: "rum", amountOfAlcohol: 3,  age: 34}, 
    { name: "Sarri",cashBalance: 100, desiredAlcoholItem: "vine", amountOfAlcohol: 12,  age: 28}, 
    { name: "Villy", cashBalance: 130, desiredAlcoholItem: "brandy", amountOfAlcohol: 1,  age: 38}, 
    { name: "Mari",cashBalance: 160, desiredAlcoholItem: "rum", amountOfAlcohol: 9,  age: 78},
    { name: "Hanna", cashBalance: 10, desiredAlcoholItem: "cognac", amountOfAlcohol: 4,  age: 19}, 
    ];

const priceForOneItem = {vine: 12.3, vodka: 8.5, rum: 17.3, cognac: 23.4, brandy: 20.3,};
 
function INIT(array){
  array.forEach(element => {
    //console.log(element);
    function Customer(customer){
    let {name, cashBalance, desiredAlcoholItem, amountOfAlcohol, age}= customer;
      let CustomerAge = (val) => val>=18?true:false;
      let CustomerAgeVar= CustomerAge(age);
      let CustomerCostForAlcoholItem =(val1) => priceForOneItem[val1];
      let CustomerCostForAlcoholItemVar= CustomerCostForAlcoholItem(desiredAlcoholItem);
      let CustomerCostForAlcoholPurchase = (val2, val3) => val2*val3;
      let CustomerCostForAlcoholPurchaseVar= CustomerCostForAlcoholPurchase(amountOfAlcohol,CustomerCostForAlcoholItemVar).toFixed(2);
      let cashBalanceIsEnough =(temp1, temp2)=> temp1>=temp2?true:false;
      let cashBalanceIsEnoughVar = cashBalanceIsEnough(cashBalance, CustomerCostForAlcoholPurchaseVar);
      if(cashBalanceIsEnoughVar && CustomerAgeVar){
        customer.cashBalance = +(cashBalance-CustomerCostForAlcoholPurchaseVar).toFixed(2);
        console.log(name +", your order is: " + desiredAlcoholItem + " in amount of " + amountOfAlcohol+"."+ " Your bill is "+ CustomerCostForAlcoholPurchaseVar + " rubles");
      } else if(!CustomerAgeVar){console.log( name + ", You are too young for buying alcohol")}
       else{console.log( name + ", Your cash Balance is " + cashBalance + " that is not anough to pay your bill " + CustomerCostForAlcoholPurchaseVar)}
    }   
    return(Customer(element));
  });
}
//console.log(shopCustomers);
INIT(shopCustomers);