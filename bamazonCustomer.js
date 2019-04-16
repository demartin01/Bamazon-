var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

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

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

///////////////////////////////////////// defining start()

function start() {
  connection.query("SELECT * FROM products",function (err,res) {
    if(err) throw err;
    var table = new Table({
      head: ["Item ID", "Product", "Dept", "Price", "Quantity"],
      colWidths: [10, 20, 30, 10, 10]
    });
    for (let i = 0; i < res.length; i++) {
      table.push([res[i].item_id,res[i].products_name, res[i].price, res[i].stock_quantity])
    }
    console.log(table.toString());
  })
}

