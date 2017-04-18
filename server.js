var express  = require( 'express' ),
    path     = require( 'path' ),
    bodyParser = require('body-parser');
    port     = process.env.PORT || 8000,
    app      = express();

//keeps track of root folder of app
process.env['APPROOT'] = __dirname;
app.use( express.static( path.join( process.env['APPROOT'], 'client' )));
app.use( express.static( path.join( process.env['APPROOT'], 'bower_components' )));
app.use(bodyParser.json())
//require mongoose file, use path to build route
require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'))
require(path.join(process.env['APPROOT'], 'server/config/routes.js'))(app);

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
