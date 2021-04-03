import express from 'express';
import { getRates , createRate , updateRate , deleteRate , getRateByID} from '../controllers/rates.js';


const router = express.Router();

router.get('/' , getRates);

router.post('/' ,createRate);  

router.delete('/:id' , deleteRate);

router.patch('/:id' ,updateRate);

router.get('/:id', getRateByID);
  


  

export default router;
