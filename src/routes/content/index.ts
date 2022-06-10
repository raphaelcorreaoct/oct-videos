import express from 'express';
import ContentController from '../../controllers/ContentController';

const router = express.Router();

router.get('/content', ContentController.findAll);
router.get('/content/:contentId', ContentController.findOne);
router.post('/content', ContentController.create);
router.put('/content/:contentId', ContentController.update);
router.delete('/content/:contentId', ContentController.destroy);

export default router;
