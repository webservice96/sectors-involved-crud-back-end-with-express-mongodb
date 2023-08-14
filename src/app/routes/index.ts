import express from 'express';
import { SectorRoutes } from '../modules/sector/sector.route';
import { SectorInvoledRoutes } from '../modules/sectorInvolved/sectorInvolved.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/sector-involved/',
    router: SectorInvoledRoutes,
  },
  {
    path: '/sectors/',
    router: SectorRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.router));

export default router;
