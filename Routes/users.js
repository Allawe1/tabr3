import express from 'express';
import { getUsers , createUser , updateUser , deleteUser , getUserByID ,getUserDonations , createUserDonations , getUserRates , createUserRates} from '../controllers/users.js';


const router = express.Router();

router.get('/' , getUsers);

router.post('/' ,createUser);  

router.delete('/:id' , deleteUser);

router.patch('/:id' ,updateUser);

router.get('/:id', getUserByID);

router.get('/:id/donations' , getUserDonations);
  
router.post('/:id/donations' , createUserDonations);

router.get('/:id/rates' , getUserRates);

router.post('/:id/rates' , createUserRates);

  

export default router;
