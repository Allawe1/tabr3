import User from '../modules/users.js';
import mongoose from 'mongoose';
import Donation from '../modules/donations.js'
import Rate from '../modules/rates.js'

export const getUsers = async (req,res) => {
    try{
        const users = await User.find();

        res.status(200).json(users);
    }catch(error){
        res.status(404).json({ message : error});
    }
};

export const getUserByID = async (req,res) => {
    try{
        const {id : _id} = req.params;
        const users = await User.findById(_id);

        res.status(200).json(users);
    }catch(error){
        console.log(req.params);
        res.status(404).json({ message : error});
    }
};

export const createUser = async (req,res) => {
    const user = req.body;
    const newUser = new User(user);
    try {
       await newUser.save();
       res.status(201).json(newUser);
   } catch (error) {
       res.status(409).json({message : error});
   }
};

export const createUserDonations = async (req,res) => {
    const donation = req.body;
    const newDonation = new Donation(donation);

    const {id : _id} = req.params;
    const user = await User.findById(_id);
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

export const createUserRates = async (req,res) => {
    const rate = req.body;
    const newRate = new Rate(rate);

    const {id : _id} = req.params;
    const user = await User.findById(_id);
    newRate.user = user;
    try {
       await newRate.save();
       user.rates.push(newRate);
       await user.save();
       res.status(201).json(newDonation);
     
   } catch (error) {
       res.status(409).json({message : error});
   }
};


export const updateUser = async (req,res) => {
   const {id : _id} = req.params;
   const user = req.body;

   const updatedUser =  User.findByIdAndUpdate(_id , user ,{ new : true});

   res.json(updatedUser);

};

export const deleteUser = async (req,res) => {
    const  id  = req.params;
    const user = req.body;
 
    await User.findByIdAndRemove(id);
 
    res.json({message : 'user deleted'});
 
 };

 export const getUserDonations = async (req , res) => {
    const { id : _id } = req.params;
    const foundUser = await User.findById({_id}).populate("donations");

    res.json(foundUser.donations)


 }
 export const getUserRates = async (req , res) => {
    const { id : _id } = req.params;
    const foundUser = await User.findById({_id}).populate("rates");

    res.json(foundUser.rates)


 }