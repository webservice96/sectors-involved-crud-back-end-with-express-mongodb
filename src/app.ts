import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routers from './app/routes';

const app: Application = express();

// cors
app.use(cors());

// parser
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

// routers
app.use('/api/v1/', routers);

app.get('/', async (req: Request, res: Response) => {
  res.send('Server Working');
});

/**
 * handle not found route
 */
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    statusCode: httpStatus.NOT_FOUND,
    success: false,
    message: 'Not Found!',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found!',
      },
    ],
  });

  next();
});

// global error handler
app.use(globalErrorHandler);

export default app;
