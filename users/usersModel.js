const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

// function insert(user) {
//   return (
//     db("users")
//       .insert(user, "id")
//       // .then(([id]) => {
//       .then(ids => {
//         const id = ids[1];
//         // const [id] = ids;
//         return db("users")
//           .where({ id })
//           .first();
//       })
//   );
// }

async function insert(user) {
    // the second parameter here is of other databases, SQLite returns the id by default
    const [id] = await db('users').insert(user, 'id');
  
    return db('users')
      .where({ id })
      .first();
  }

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("users");
}

function findById(id) {
  return null;
}
