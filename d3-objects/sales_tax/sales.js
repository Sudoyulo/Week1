const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const calculateArray = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const calculateTax = function(array,tax) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] * tax;
  }
  return sum;
};

const calculateSalesTax = function(salesData, taxRates) {
  let collection = {};
  
  for (let information of salesData) { //information = ith object of salesData
    if (collection[information.name]) { //if exists
      collection[information.name].totalSales += calculateArray(information.sales);
      collection[information.name].salesTax += calculateTax(information.sales, salesTaxRates[information.province]);

    } else { //doesnt exist
      collection[information.name] = {};
      collection[information.name].totalSales = calculateArray(information.sales);
      collection[information.name].salesTax = calculateTax(information.sales, salesTaxRates[information.province]);
    }
  }
  return collection;
};

const results = calculateSalesTax(companySalesData,salesTaxRates);
console.log(results);
