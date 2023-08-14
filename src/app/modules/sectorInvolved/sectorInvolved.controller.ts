import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IsectorInvolved } from './sectorInvolved.interface';
import { sectorInvolvedService } from './sectorInvolved.service';

/**
 * post a sector involved
 */
const createsectorInvolved = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...sectorInvolvedData } = req.body;
    const result = await sectorInvolvedService.createSectorInvolved(
      sectorInvolvedData,
    );

    sendResponse<IsectorInvolved>(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Sector involved created successfully!',
      data: result,
    });
    next();
  },
);

/**
 * get single sector involved
 */
const getSingleSectorInvolved = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await sectorInvolvedService.getSingleSectorInvolved(id);

    sendResponse<IsectorInvolved>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Sector involved retrieved successfully',
      data: result,
    });

    next();
  },
);

/**
 * update sector involved
 */
const updateSectorInvolved = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await sectorInvolvedService.updateSectorInvolved(
      id,
      updatedData,
    );

    sendResponse<IsectorInvolved>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Updated successfully',
      data: result,
    });

    next();
  },
);

/**
 * delete sector involved
 */
const deteSectorInvolved = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await sectorInvolvedService.deleteSectorInvolved(id);

    sendResponse<IsectorInvolved>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Deleted successfully',
      data: result,
    });

    next();
  },
);

export const sectorInvolvedController = {
  createsectorInvolved,
  getSingleSectorInvolved,
  updateSectorInvolved,
  deteSectorInvolved,
};
