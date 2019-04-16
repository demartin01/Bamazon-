var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var figlet = require("figlet");

// create the connection for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  //  port number
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "dogs4",
  database: "bamazon_db"
});
////////////////////////////////////////// connection 

//Company title
figlet("BAMAZON", function (err, data) {
  if (err) throw err;
  console.log(data);
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});


///////////////////////////////////////// defining start()


function start() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    //  console.log(res);

    var table = new Table({
      head: ["Item ID", "Product", "Dept", "Price", "Quantity"],
      colWidths: [10, 20, 30, 10, 10]
    });

    for (let i = 0; i < res.length; i++) {
      table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity])
    }
    console.log(table.toString());
  }); 
  setTimeout(purchase, 1000)
};

function purchase() {

  inquirer
    .prompt([
      {
        name: "buy",
        type: "input",
        message: "What is the ID of the item you would like to purchase?"
      },
      {
        name: "amount",
        type: "input",
        message: "How many would you like to purchase?"
      }
    ])
    .then(function (answer) {
      const query = "SELECT * FROM products WHERE item_id = ?";
      connection.query(query, answer.buy, function (err, res) {
        if (err) throw err;
        if (res.length > 0) {
          if (answer.amount > res[0].stock_quantity) {
            console.log("\r\n Sorry this amount is greater than what we have in stock at this time. Please try again.");
            setTimeout(purchase, 1000);
          }
          else {
            const query = "UPDATE products SET stock_quantity = ? WHERE item_id = ?";
            connection.query(query, [(res[0].stock_quantity - parseInt(answer.amount)),answer.buy], function (err,res) {
              console.log ("Your purchase has been processed. Thank you for your business. Come back soon!");
              connection.end();
            })
          }
        }
        else {
          console.log("\r\n You have selected an ID we do not have. Please select another item.");
          setTimeout(purchase, 1000);
        }
      })
    })
}

