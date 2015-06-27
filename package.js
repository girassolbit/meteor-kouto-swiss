Package.describe({
  name: 'girassolbit:meteor-kouto-swiss',
  version: '0.0.3',
  summary: 'A complete Meteor package to work with Stylus, using Kouto Swiss - CSS Framework + Jeet + Rupture + Axis + AutoPrefixer + Nib',
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
    'stylus': '0.51.1',
    'kouto-swiss': '0.11.12',
    'nib': '1.1.0',
    'autoprefixer-stylus': '0.7.0',
    'jeet': '6.1.2',
    'rupture': '0.6.1',
    'axis': '0.4.1'
  }
});

Npm.depends({
  'stylus': '0.51.1',
  'kouto-swiss': '0.11.12',
  'nib': '1.1.0',
  'autoprefixer-stylus': '0.7.0',
  'jeet': '6.1.2',
  'rupture': '0.6.1',
  'axis': '0.4.1'
});

Package.onTest(function(api) {
  api.use(['tinytest','girassolbit:meteor-kouto-swiss', 'test-helpers']);
  api.add_files([
    'tests/main.styl',
    'tests/relative.import.styl',
    'tests/absolute.import.styl',
    'tests/koutoswiss.import.styl',
    'tests/tinytest.js'
  ],'client');
});
