import { Router } from 'express';

import * as CityController from './controllers/city';

const router = Router();

// City routes
router.post('/city', CityController.add);
router.get('/city', CityController.all);
router.put('/city/:id', CityController.update);
router.delete('/city/:id', CityController.remove);

export default router;
