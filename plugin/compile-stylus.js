var fs = Npm.require('fs');
var path = Npm.require('path');
var Future = Npm.require('fibers/future');

var stylus = Npm.require('stylus');
var koutoSwiss = Npm.require('kouto-swiss')
var nib = Npm.require('nib');
var autoprefixer = Npm.require('autoprefixer-stylus');
var jeet = Npm.require('jeet');
var rupture = Npm.require('rupture');
var axis = Npm.require('axis');


Plugin.registerSourceHandler("styl", {archMatching: 'web'}, function (compileStep) {
  var f = new Future;
  stylus(compileStep.read().toString('utf8'))
    .use(koutoSwiss())
    .use(nib())
    .use(autoprefixer())
    .use(jeet())
    .use(rupture())
    .use(axis())
    .set( "compress", true)
    .set('filename', compileStep.inputPath)
    // Include needed to allow relative @imports in stylus files
    .include(path.dirname(compileStep._fullInputPath))
    .render(f.resolver());

  try {
    var css = f.wait();
  } catch (e) {
    compileStep.error({
      message: "Stylus compiler error: " + e.message
    });
    return;
  }
  compileStep.addStylesheet({
    path: compileStep.inputPath + ".css",
    data: css
  });
});

// Register import.styl files with the dependency watcher, without actually
// processing them. There is a similar rule in the less package.
Plugin.registerSourceHandler("import.styl", function () {
  // Do nothing
});
