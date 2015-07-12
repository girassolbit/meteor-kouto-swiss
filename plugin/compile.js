var fs      = Npm.require('fs')
    ,path   = Npm.require('path')
    // ,_      = Npm.require('lodash')
    ,Future = Npm.require('fibers/future');

// TODO: Use Promises

var stylus        = Npm.require('stylus')
    ,kouto        = Npm.require('kouto-swiss')
    ,nib          = Npm.require('nib')
    ,autoprefixer = Npm.require('autoprefixer-stylus')
    ,jeet         = Npm.require('jeet')
    ,rupture      = Npm.require('rupture')
    ,axis         = Npm.require('axis')
    ,typographic  = Npm.require('typographic');

function ksHandler(compileStep) {
  var f = new Future;

  stylus(compileStep.read().toString('utf8'))
    // plugins
    .use(kouto())
    .use(jeet())
    .use(axis())
    .use(rupture())
    .use(nib())
    .use(autoprefixer())
    .use(typographic())
    // config
    .set('filename', compileStep.inputPath)
    .set('sourcemap', {comment: false})
    .set('compress', true)
    // includes for relative and absolute imports
    .include(path.dirname(compileStep._fullInputPath)) // relative @import
    .include(process.cwd()) // absolute @import
    .render(f.resolver());

    try {
      var css = f.wait();
    } catch (e) {
      compileStep.error({
        message: "KoutoSwiss compiler error: " + e.message
      });
      return;
    }
    compileStep.addStylesheet({
      path: compileStep.inputPath + ".css",
      data: css
    });

};

Plugin.registerSourceHandler('styl', {archMatching: 'web'}, ksHandler);
