/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const transaction = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656080400000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656084000000,
    price: 50,
    category: 'Travel',
    itemName: 'Bus Ticket',
  },
  {
    id: 4,
    timestamp: 1656087600000,
    price: 100,
    category: 'Shopping',
    itemName: 'Shoes',
  },
  {
    id: 5,
    timestamp: 1656091200000,
    price: 30,
    category: 'Travel',
    itemName: 'Auto Ride',
  },
  {
    id: 6,
    timestamp: 1656094800000,
    price: 40,
    category: 'Food',
    itemName: 'Pasta',
  }
];

function calculateTotalSpentByCategory(arr) {
   const result=[]
   for(let i=0;i<arr.length;i++){
    let found=false;
    for(let j=0;j<result.length;j++){
        if(result[j].category===arr[i].category){
            result[j].spent+=arr[i].price
            found=true;
            break
        }}
        if(!found){
            result.push({
                category:arr[i].category,
                spent:arr[i].price
            })
        }
    
   }
   return result
}
const result=calculateTotalSpentByCategory(transaction)
console.log(result)
