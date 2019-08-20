// Initializes the `company` service on path `/company`
const createService = require('feathers-mongodb');
const hooks = require('./company.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/company', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('company');

  mongoClient.then(db => {
    service.Model = db.collection('company');
  });

  service.hooks(hooks);
};
