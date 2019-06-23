/*
calculate the average price of all the products
*/

var avg = {
	"size":3,
	"products":[
	{
		name:"prod1",
		price:100
	},
	{
		name:"prod2",
		price:700
	},
	{
		name:"prod3",
		price:250
	}

	]
};

//console.log(avg.products[0].price, avg.products[1].price, avg.products[2].price);

x = [avg.products[0].price, avg.products[1].price, avg.products[2].price];

function average(data) {
  var sum = 0;
  var count = data.length;
  for (var i = 0; i < count; i++) {
    sum = sum + data[i];
  }
  return sum / count;
}

console.log(average(x));
