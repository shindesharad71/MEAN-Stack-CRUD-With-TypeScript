import { Router } from 'express';

import * as CityController from './controllers/city';

const router = Router();

// City routes
router.post('/city/add', CityController.add);
router.get('/city/all', CityController.all);
router.put('/city/:id', CityController.update);

export default router;
