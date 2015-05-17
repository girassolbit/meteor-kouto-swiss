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
  console.log(api);
});

Package._transitional_registerBuildPlugin({
  name: 'compileStylus',
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: '0.50.0',
    kouto-swiss: '0.11.11'
  }
});

Package.onTest(function(api) {
  api.use(['tinytest','girassolbit:meteor-kouto-swiss', 'test-helpers']);
  api.add_files([
    'tests/import.styl',
    'tests/relative.import.styl',
    'tests/absolute.import.styl',
    'tests/koutoswiss_.styl',
    'tests/tinytest.js'
  ],'client');
});

Npm.depends({
  'kouto-swiss' : '0.11.11'
});
