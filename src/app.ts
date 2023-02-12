import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import index from './routes/index';

const app = express();

// CORS Setting
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));

// JSON Request Body Parsing
app.use(express.json());

// MongoDB Connection
const NODE_PORT: number = 8081;
const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;
const MONGODB_URL: string = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@recentanthem.xqvhmwa.mongodb.net/recent-anthem`;
const connection = mongoose.connect(MONGODB_URL);
connection
  .then(() => {
    app.listen(NODE_PORT, () => {
      console.log(`Server started at http://localhost:${NODE_PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error);
    process.exit();
  });

app.use('/', index);

// catch 404 and forward to error handler
// app.use((req: Request, res: Response, next: NextFunction) => {
//   const err = new Error('Not Found');
//   err['status'] = 404;
//   next(err);
// });

// error handler
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err['status'] || 500);
//   res.render('error');
// });
