import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();

// CORS Setting
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));

// JSON Request Body Parsing
app.use(express.json());

app.listen('8081', () => {
  console.log(`
  ################################################
  🛡️  Server listening on port: 8081🛡️
  ################################################
`);
});

app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
  res.send('welcome!');
});
