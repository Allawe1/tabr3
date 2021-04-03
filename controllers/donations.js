import Donation from '../modules/donations.js';
import mongoose from 'mongoose';
import User from'../modules/rates.js'

export const getDonations = async (req,res) => {
    try{
        const donations = await Donation.find();

        res.status(200).json(donations);
    }catch(error){
        res.status(404).json({ message : error});
    }
};

export const getDonationByID = async (req,res) => {
    try{
        const donation = await Donation.findById(req.params);

        res.status(200).json(donation);
    }catch(error){
        res.status(404).json({ message : error});
    }
};

export const createDonation = async (req,res) => {
    const donation = req.body;
    const newDonation = new Donation(donation);

    const {userId} = req.params;
    const user = await User.findById(userId);
    newDonation.user = user;
    try {
       await newDonation.save();
       user.donations.push(newDonation);
       await user.save();
       res.status(201).json(newDonation);
     
   } catch (error) {
       res.status(409).json({message : error});
   }
};



export const updateDonation = async (req,res) => {
   const { id : _id} = req.params;
   const donation = req.body;

   const updatedDonation =  Donation.findByIdAndUpdate(_id , donation ,{ new : true});

   res.json(updatedDonation);

};

export const deleteDonation = async (req,res) => {
    const { id } = req.params;
    const donation = req.body;
 
    await Donation.findByIdAndRemove(id);
 
    res.json({message : 'Donation deleted'});
 
 };