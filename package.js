Package.describe({
  name: 'girassolbit:meteor-kouto-swiss',
  version: '0.0.2',
  summary: 'A complete CSS framework for Stylus',
  git: 'https://github.com/girassolbit/meteor-kouto-swiss.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('stylus');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('girassolbit:meteor-kouto-swiss');
  api.addFiles('kouto-swiss-tests.js', 'client');
});

Npm.depends({
  'kouto-swiss' : '0.11.11'
});