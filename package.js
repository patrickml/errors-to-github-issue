Package.describe({
  name: 'patrickml:errors-to-github-issue',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'underscore'
  ]);

  Npm.depends({
    'github' : '0.2.4'
  });

  api.addFiles([
    'lib/both/namespace.js'
  ],[
    'client',
    'server'
  ]);

  api.addFiles([
    'lib/client/error-tracker.js'
  ],[
    'client'
  ]);

  api.addFiles([
    'lib/server/error-tracker.js',
    'lib/server/github.js',
    'lib/server/methods.js'
  ],[
    'server'
  ]);

  api.export([
    'GitLogger'
  ], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('patrickml:errors-to-github-issue');
});
