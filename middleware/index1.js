import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname( fileURLToPath( import.meta.url ) );
const app = express();
const port = 3000;

// Middleware
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( 'public' ) );

// Routes
app.post( "/submit", ( req, res ) => {
  console.log( req.body );

  res.send( `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Registration Successful</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f0f8ff, #e6f2ff);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          background-color: #ffffff;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
        }
        h1 {
          color: #2c3e50;
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 2rem;
        }
        p {
          color: #34495e;
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          background-color: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 4px;
          padding: 0.8rem;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #2c3e50;
        }
        .btn {
          display: inline-block;
          background-color: #3498db;
          color: white;
          padding: 0.8rem 1.5rem;
          text-decoration: none;
          border-radius: 4px;
          font-size: 1rem;
          transition: background-color 0.3s ease;
          margin-top: 1rem;
        }
        .btn:hover {
          background-color: #2980b9;
        }
        .center {
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Registration Successful</h1>
        <p>Thank you for registering a street dog!</p>
        <p>Details:</p>
        <ul>
          <li><strong>Street Name:</strong> ${req.body.street}</li>
          <li><strong>Dog Color:</strong> ${req.body.pet}</li>
          <li><strong>Nickname:</strong> ${req.body.nickname || 'Not provided'}</li>
          <li><strong>Last Seen:</strong> ${req.body.lastSeen || 'Not provided'}</li>
        </ul>
        <div class="center">
          <a href="/" class="btn">Register Another Dog</a>
        </div>
      </div>
    </body>
    </html>
  `);
} );

app.get( "/", ( req, res ) => {
  res.sendFile( __dirname + "/public/index.html" );
} );

// Start the server
app.listen( port, () => {
  console.log( `Server running at http://localhost:${port}` );
} );