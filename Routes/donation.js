import express from 'express';
import { getDonations , createDonation , updateDonation , deleteDonation , getDonationByID} from '../controllers/donations.js';


const router = express.Router();

router.get('/' , getDonations);

router.post('/' ,createDonation);  

router.delete('/:id' , deleteDonation);

router.patch('/:id' ,updateDonation);

router.get('/:id', getDonationByID);
  


  

export default router;
