// Bring in our dependencies
const app = require('express')();
const routes = require('./routes');

app.use('/', routes);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
