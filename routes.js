module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR REGIFY CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller

  const entryControllerCallbacks = require('./controllers/entry')(allModels);

  app.get('/', entryControllerCallbacks.loginForm);
  app.post('/login', entryControllerCallbacks.login);

  const regifyControllerCallbacks = require('./controllers/regify')(allModels);

  app.get('/regify', regifyControllerCallbacks.index);
  app.get('/events', regifyControllerCallbacks.events);
  app.post('/events', regifyControllerCallbacks.addEvent);
  app.get('/events/:id', regifyControllerCallbacks.viewEvent);
  app.get('/events/:id/settings', regifyControllerCallbacks.settings);
  app.put('/events/:id/settings', regifyControllerCallbacks.changeSettings);
  app.get('/events/:id/scan', regifyControllerCallbacks.scan);
  app.post('/events/:id/scan', regifyControllerCallbacks.scanAttendee);
  app.get('/events/:id/attendees', regifyControllerCallbacks.attendees);
  app.get('/events/:id/attendees.json', regifyControllerCallbacks.attendeesJSON);
  app.post('/events/:id/attendees', regifyControllerCallbacks.addAttendee);
};