Package.describe({
  name: 'girassolbit:meteor-kouto-swiss',
  version: '0.0.2',
  summary: 'A complete CSS framework for Stylus',
  git: 'https://github.com/girassolbit/meteor-kouto-swiss.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0', 'METEOR@1.1.0.2']);
  api.use('stylus');
});

Package.onTest(function(api) {
  api.use(['tinytest','girassolbit:meteor-kouto-swiss']);
  api.addFiles('kouto-swiss-tests.js', 'client');
});

Npm.depends({
  'kouto-swiss' : '0.11.11'
});