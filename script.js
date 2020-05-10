const shopCustomers = [ 
    { name: "Rachel", cashBalance: 15, desiredAlcoholItem: "vine", amountOfAlcohol: 1,  age: 18}, 
    { name: "Monica", cashBalance: 22, desiredAlcoholItem: "vodka", amountOfAlcohol: 1.5,  age: 28}, 
    { name: "Phoebe", cashBalance: 7, desiredAlcoholItem: "brandy", amountOfAlcohol: 2,  age: 35}, 
    { name: "Joey", cashBalance: 45, desiredAlcoholItem: "vodka", amountOfAlcohol: 1,  age: 15}, 
    { name: "Chandler", cashBalance: 5, desiredAlcoholItem:"cognac", amountOfAlcohol: 2,  age: 47},
    { name: "Ross",  cashBalance: 3, desiredAlcoholItem: "rum", amountOfAlcohol: 3,  age: 34}, 
    { name: "Sarri",cashBalance: 1, desiredAlcoholItem: "vine", amountOfAlcohol: 2,  age: 28}, 
    { name: "Villy", cashBalance: 2, desiredAlcoholItem: "brandy", amountOfAlcohol: 1,  age: 38}, 
    { name: "Mari",cashBalance: 3, desiredAlcoholItem: "rum", amountOfAlcohol: 3,  age: 78},
    { name: "Hanna", cashBalance: 10, desiredAlcoholItem: "cognac", amountOfAlcohol: 2,  age: 19}, 
    ];

const priceForOneItem = {vine: 12, vodka: 8, rum: 17, cognac: 23, brandy: 20,};
let difference = {};
Object.assign(difference, priceForOneItem);
let NotEnoughMoney=[];


function INIT(array){
  array.forEach(element => {
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
       else{
         console.log( name + ", Your cash Balance is " + cashBalance + " that is not anough to pay your bill " + CustomerCostForAlcoholPurchaseVar);
         NotEnoughMoney.push(element);
      }
    }   
    return(Customer(element));
  });
}
INIT(shopCustomers);

function INIT1(array){
  let i=0;
  let sum=0;
  let k=0;
  let spirit;
  let group="";
  array.forEach(element => {
    function Customer1(customer){
    let {name, cashBalance}= customer;
    function AmountOfGroupManey(temp){
      if((i<2)&&(k < array.length)){
         sum=sum+temp;
         group=group+" "+name;
        i++;
        }
        else{
          sum=sum+temp;
          group=group+" "+name;
          let MinDifference = sum;
          for (let key in difference) {
            if( ( (sum - difference[key]) >0) && ( (sum - difference[key]) < MinDifference) ){
              MinDifference = sum - difference[key];
              spirit = key;
            } 
            }
            if(MinDifference == sum) {
            console.log(group);
            console.log("You don't have enaugh money, you need some extra");
            } else{
            console.log(group);
            console.log(spirit);}
            i=0;
            sum=0;
            group ='';
          };
        }
        k++; 
    AmountOfGroupManey(cashBalance);
      }
    return(Customer1(element));
})
}
INIT1(NotEnoughMoney);
