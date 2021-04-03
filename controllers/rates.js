import Rate from '../modules/rates.js';
import mongoose from 'mongoose';


export const getRates = async (req,res) => {
    try{
        const rates = await Rate.find();

        res.status(200).json(rates);
    }catch(error){
        res.status(404).json({ message : error});
    }
};

export const getRateByID = async (req,res) => {
    try{
        const rates = await Rate.findById(req.params);

        res.status(200).json(rates);
    }catch(error){
        res.status(404).json({ message : error});
    }
};

export const createRate = async (req,res) => {
    const rate = req.body;
    const newRate = new Rate(rate);
    try {
       await newRate.save();
       res.status(201).json(newRate);
   } catch (error) {
       res.status(409).json({message : error});
   }
};

export const updateRate = async (req,res) => {
   const { id : _id} = req.params;
   const rate = req.body;

   const updatedRate =  Rate.findByIdAndUpdate(_id , rate ,{ new : true});

   res.json(updatedRate);


};

export const deleteRate = async (req,res) => {
    const { id } = req.params;
    const rate = req.body;
 
    await Rate.findByIdAndRemove(id);
 
    res.json({message : 'rate deleted'});
 
 };