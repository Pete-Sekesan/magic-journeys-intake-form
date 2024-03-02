import express from 'express';
import postEntry from './handlers/postEntry';

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({
    success: true,
    message: 'API Up!'
  });
});

router.post('/entry', postEntry);

export default router;
