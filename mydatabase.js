// const mysql = require('mysql');

// var connection = mysql.createConnection({
// 	host : 'localhost',
// 	database : 'testing',
// 	user : 'root',
// 	password : ''
// });

// connection.connect(function(error){
// 	if(error)
// 	{
// 		throw error;
// 	}
// 	else
// 	{
// 		console.log('MySQL Database is connected Successfully');
// 	}
// });

// module.exports = connection;

const mysql = require('mysql');
// require("dotenv").config();
module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Nilavp21$',
  database: 'products',
  port: 3306,
});
