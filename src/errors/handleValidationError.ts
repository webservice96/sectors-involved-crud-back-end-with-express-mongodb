import httpStatus from 'http-status';
import { Error } from 'mongoose';
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';

const handleValidationError = (
  err: Error.ValidationError,
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (elelent: Error.ValidatorError | Error.CastError) => {
      return {
        path: elelent?.path,
        message: elelent?.message,
      };
    },
  );

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleValidationError;
