const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render("home");
});
app.get('/blog', (req, res) => {
  res.render("blog");
});
app.get('/blog_details', (req, res) => {
  res.render("blog_detail");
});

app.get('/about', (req, res) => {
  res.render("about");
});
app.get('/contact', (req, res) => {
  res.render("contact");
});



app.listen(3000, () => {
  console.log("Example app listening on port 3000")
});
