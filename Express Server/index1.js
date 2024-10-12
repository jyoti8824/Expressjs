import express from "express";
const app = express();


app.get( "/", ( req, res ) => {
    3;
    res.send( "<h1>Get/</h1>" );
} );

app.post( "/register", ( req, res ) => {
    res.sendStatus( 201 );
} );

app.put( "/user/jyoti", ( req, res ) => {
    res.sendStatus( 200 );
} );

app.patch( "/user/jyoti", ( req, res ) => {
    res.sendStatus( 200 );
} );

app.delete( "/user/jyoti", ( req, res ) => {
    res.sendStatus( 200 );
} );

app.listen( 3000, () => {
    console.log( "Server is running on port 3000" );
} );