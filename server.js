const express = require("express");
const mongoose = require("mongoose");
const app = express();
const articleRouter = require("./routes/articles.js");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb:// localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test article 1",
      createdAt: new Date(),
      description: "Test description 2",
    },
    {
      title: "Test article 2",
      createdAt: new Date(),
      description: "Test description 2",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

app.listen(5000, () => {
  console.log("Server is running on port 5000 port");
});
