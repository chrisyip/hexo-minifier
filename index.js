var UglifyJS = require( 'uglify-js' )
  , css_condense = require( 'css-condense' )
  , fs = require( 'graceful-fs' )
  , async = require( 'async' )
  , extend = hexo.extend

extend.console.register( 'minify', 'Minify CSS and JavaScript', function( args ) {
  var config = hexo.config
    , read_file, compressor

  compressor = function( path, data, type ) {
    if ( type === 'js' ) {
      data = UglifyJS.minify( data, { fromString: true } ).code
    }

    if ( type === 'css' ) {
      data = css_condense.compress( data )
    }

    fs.unlink( path, function ( err ) {
      if ( err ) throw err;
      fs.writeFile( path, data, 'utf8', function(err) {
        if (err) throw err;
      })
    })
  }

  async.series( [
    function ( next ) {
      console.log( 1 )
      if ( args.g || args.generate ) {
        hexo.call( 'generate', next )
      } else {
        fs.exists( hexo.public_dir, function ( exist ) {
          exist ? next() : hexo.call( 'generate', next )
        } )
      }
    }, function(){

      ( function( path ) {
        var _path = path

        fs.readdir( _path, function( err, files ) {
          files.forEach( function( file ) {
            if ( file.indexOf( '.min.' ) > -1 ) return;

            var path = _path + '/' + file
            fs.stat( path, function( err, stats) {
              if ( err ) return;

              if ( stats.isDirectory() ) {
                arguments.callee.call( null, path )
              } else if ( stats.isFile() ) {
                var ext = /\.(js|css?)$/i.exec( file )
                if ( ext ) {
                  fs.readFile( path, 'utf8', function( err, data ) {
                    compressor( path, data, ext[1] )
                  })
                }
              }
            })
          })
        })
      } )( hexo.public_dir )
    } ], function(){} )
})
