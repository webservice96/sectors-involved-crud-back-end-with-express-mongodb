/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import config from '../../config';
import ApiError from '../../errors/ApiError';
import handleCastError from '../../errors/handleCastError';
import handleValidationError from '../../errors/handleValidationError';
import handleZodError from '../../errors/handleZodError';
import { IGenericErrorMessage } from '../../interfaces/error';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === 'development'
    ? console.log('globalErrorHandler ~', error)
    : console.log('globalErrorHandler ~', error);

  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidationError') {
    const simlifiedError = handleValidationError(error);
    statusCode = simlifiedError.statusCode;
    message = simlifiedError.message;
    errorMessages = simlifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  } else if (error instanceof ZodError) {
    const simplifiedZoderror = handleZodError(error);
    statusCode = simplifiedZoderror.statusCode;
    message = simplifiedZoderror.message;
    errorMessages = simplifiedZoderror.errorMessages;
  } else if (error?.name === 'CastError') {
    const simplifiedCasterror = handleCastError(error);
    statusCode = simplifiedCasterror.statusCode;
    message = simplifiedCasterror.message;
    errorMessages = simplifiedCasterror.errorMessages;
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });

  next();
};

export default globalErrorHandler;
