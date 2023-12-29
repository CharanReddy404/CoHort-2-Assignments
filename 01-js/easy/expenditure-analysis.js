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

function calculateTotalSpentByCategory(transactions) {
  let map1 = new Map();

  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    if (map1.has(category)) {
      map1.set(category, map1.get(category) + price);
    } else {
      map1.set(category, price);
    }
  });

  const results = [];

  map1.forEach((key, value) => {
    results.push({ category: value, totalSpent: key });
  });

  return results;
}

module.exports = calculateTotalSpentByCategory;
