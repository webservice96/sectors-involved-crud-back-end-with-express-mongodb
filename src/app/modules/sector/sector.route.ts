import express from 'express';
import { sectorsController } from './sector.controller';

const router = express.Router();

router.get('/', sectorsController.getSectors);

export const SectorRoutes = router;
