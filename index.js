//this is entry point
var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name: 'Hello World',
  description: 'The nodejs.org example web server.',
  script: 'D:\\Work\\Projects\\github\\win_service\\service.js ',
  nodeOptions: ['--harmony', '--max_old_space_size=4096'],
  env: {
    name: 'USERNAME',
    value: 'Developer',
  },
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function() {
  svc.start();
});

svc.on('uninstall', function() {
  //svc.install();
});

svc.uninstall();
//svc.install();
