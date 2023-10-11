const { pool } = require("../../config/database");

exports.insertUsers = async function (connection, userID, nickname, password) {
  const Query = `insert into Users(userID, nickname, password) values(?,?,?);`;
  const Params = [userID, nickname, password];

  const rows = await connection.query(Query, Params);

  return rows;
};

exports.selectUsers = async function (connection, params) {
  const Query = `select * from Users`;
  const Params = [];

  const rows = await connection.query(Query, Params);

  return rows;
};

exports.isValidUsers = async function (connection, userID, password) {
  const Query = `select userIdx, nickname from Users WHERE userID = ? and password = ? and status='A';`;
  
  const Params = [userID, password];

  const rows = await connection.query(Query, Params);

  return rows;
};

exports.selectInfo = async function (connection, userIdx) {
  const Query = `select * from reservation where userIdx = ?`;
  const Params = [userIdx];
  const rows = await connection.query(Query, Params);

  return rows;
};

// exports.insertuserpital = async function (connection, userID, userName, password) {
//   const Query = `insert into user(userID,userName,password) values(?,?,?);`;
//   const Params = [userID,userName,password];

//   const rows = await connection.query(Query, Params);

//   return rows;
// };