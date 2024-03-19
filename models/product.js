const getDb = require("../util/database").getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db
      .collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(this);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;

// const db = require("../util/database");

// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//     return db.execute(
//       "insert into products (title,price,description,imageUrl) values (?, ?, ?, ?)",
//       [this.title, this.price, this.description, this.imageUrl]
//     );
//   }

//   static fetchAll() {
//     return db.execute("select * from products");
//   }

//   static findById(id) {
//     return db.execute("select * from products where id = ?", [id]);
//   }

//   static deleteProductById(id) {
//     return db.execute("delete from products where id = ?", [id]);
//   }
// };
