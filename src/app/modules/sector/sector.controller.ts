import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { Isector } from './sector.interface';
import { sectorService } from './sector.service';

/**
 * get sectors
 */
const getSectors = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await sectorService.getSectors();

    sendResponse<Isector[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Sectors retrieved successfully',
      data: result,
    });

    next();
  },
);

export const sectorsController = {
  getSectors,
};
