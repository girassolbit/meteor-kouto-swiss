Package.describe({
  name: 'charlenopires:meteor-kouto-swiss',
  version: '0.0.1',
  summary: 'A complete CSS framework for Stylus',
  git: 'https://github.com/charlenopires/meteor-kouto-swiss.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('charlenopires:meteor-kouto-swiss');
  api.addFiles('kouto-swiss-tests.js', 'client');
});

Npm.depends({
  'kouto-swiss' : '0.11.11'
});