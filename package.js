Package.describe({
  name: 'girassolbit:meteor-kouto-swiss',
  version: '0.0.5',
  summary: 'Package Meteor for Stylus using KoutoSwiss + Jeet + Rupture + Axis + AutoPrefixer + Nib + Typographic',
  git: 'https://github.com/girassolbit/meteor-kouto-swiss.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');
  // api.use(['logging'], ['client', 'server']);
});

Package.registerBuildPlugin({
  name: 'compileKoutoSwiss',
  use: [],
  sources: [
    'plugin/compile.js'
  ],
  npmDependencies: {
    'stylus': '0.51.1',
    'kouto-swiss': '0.11.13',
    'nib': '1.1.0',
    'autoprefixer-stylus': '0.7.0',
    'jeet': '6.1.2',
    'rupture': '0.6.1',
    'axis': '0.4.1',
    'lodash': '3.10.1',
    'typographic': '2.9.3'
  }
});

Package.onTest(function(api) {
  api.use(['tinytest','test-helpers']);
  api.use('girassolbit:meteor-kouto-swiss');
  api.add_files([
    'tests/main.styl',
    'tests/relative.import.styl',
    'tests/absolute.import.styl',
    'tests/koutoswiss.import.styl',
    'tests/tinytest.js'
  ],'client');
});
