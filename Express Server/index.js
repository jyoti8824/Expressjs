import express from "express";
const app = express();

app.get( "/", ( req, res ) => {
    // console.log( req.rawHeaders );
    res.send( "Hello " );
} );

app.get( "/about", ( req, res ) => {
    res.send( "<h1>About</h1>" );
} );

app.get( "/contact", ( req, res ) => {
    res.send( "<h1>Contact: +91 1234567890</h1>" );
} );

app.listen( 3000, () => {
    console.log( "Server is running on port 3000" );
} );
