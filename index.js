// index.js
const env = process.env.NODE_ENV || "development";
const cfg = require("./knexfile");

const knex = require("knex")(cfg[env]);
const Bookshelf = require("bookshelf")(knex);
Bookshelf.plugin("bookshelf-page");

const commonRoutes = require("common-routes");
const express = require("express");
const { json } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(json());
app.use(cors());
app.use(morgan("dev"));

const User = Bookshelf.Model.extend({
  idAttribute: "user_id",
  tableName: "user"
});

const Party = Bookshelf.Model.extend({
  idAttribute: "party_id",
  tableName: "party",
  host() {
    return this.belongsTo(User, "user_id");
  },
  guests() {
    return this.belongsToMany(User, "guests", "party_id", "user_id");
  }
});

const r1 = new express.Router();
const r2 = new express.Router();

commonRoutes.apply(r1, User);
commonRoutes.apply(r2, Party, ["host", "guests"]);

app.use("/user", r1);
app.use("/party", r2);

knex.migrate
  .latest()
  .then(_ => app.listen(3000, _ => console.log("App online")));
