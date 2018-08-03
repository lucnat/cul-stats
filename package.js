Package.describe({
  name: 'cul:stats',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'gather stats on your meteor collections',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

// external dependencies: react-plotly.js plotly.js moment 

Package.onUse(function(api) {
  api.versionsFrom('1.6.0.1');
  api.use('ecmascript');
  api.mainModule('client.js','client');
  api.mainModule('server.js','server');
});

