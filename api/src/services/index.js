const company = require('./company/company.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(company);
};
