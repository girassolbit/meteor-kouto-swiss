var fs    = Npm.require('fs')
    ,path = Npm.require('path');
/*var Future = Npm.require('fibers/future');*/
// TODO: Use Promises

var stylus        = Npm.require('stylus')
    ,kouto        = Npm.require('kouto-swiss')
    ,nib          = Npm.require('nib')
    ,autoprefixer = Npm.require('autoprefixer-stylus')
    ,jeet         = Npm.require('jeet')
    ,rupture      = Npm.require('rupture')
    ,axis         = Npm.require('axis');

function ksHandler(compileStep) {
  var contents = compileStep.read().toString('utf8');

  stylus(source)
    // plugins
    .use(kouto())
    .use(jeet())
    .use(axis())
    .use(rupture())
    .use(nib())
    .use(autoprefixer())
    // config
    .set('filename', compileStep.inputPath)
    .set('sourcemap', {comment: false})
    .set('compress', true);
    // includes for relative and absolute imports
    .include(path.dirname(compileStep._fullInputPath)) // relative @import
    .include(process.cwd()); // absolute @import


  if(compileStep.inputPath == "main.styl"){

  }

  try{
  }catch(e){

  }

};

Plugin.registerSourceHandler('styl', {archMatching: 'web'}, ksHandler);
