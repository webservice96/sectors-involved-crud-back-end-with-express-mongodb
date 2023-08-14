import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { sectorInvolvedController } from './sectorInvolved.controller';
import { sectorInvolvedValidation } from './sectorInvolved.user.validation';

const router = express.Router();

router.post(
  '/create-sectorInvolved',
  validateRequest(sectorInvolvedValidation.createsectorInvolvedZodSchema),
  sectorInvolvedController.createsectorInvolved,
);

router.get('/:id', sectorInvolvedController.getSingleSectorInvolved);

router.patch(
  '/:id',
  validateRequest(sectorInvolvedValidation.createsectorInvolvedZodSchema),
  sectorInvolvedController.updateSectorInvolved,
);

router.delete('/:id', sectorInvolvedController.deteSectorInvolved);

export const SectorInvoledRoutes = router;
