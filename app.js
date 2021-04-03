import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './Routes/users.js';
import mongoose from 'mongoose';
import ratesRoutes from './Routes/rates.js';
import donationsRoutes from './Routes/donation.js';

const app = express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());

const PORT = '5000';

const dbURL = "";
mongoose.connect(dbURL , { useNewUrlParser: true ,  useUnifiedTopology: true   })
  .then((result) => app.listen(PORT , () => console.log(`server Running on port : http://localhost:${PORT}`)))
    .catch((err) => console.log(err));

    mongoose.set("useFindAndModify" , false);



app.use('/users' , usersRoutes);

app.use('/rates' , ratesRoutes);

app.use('/donations' , donationsRoutes);



app.get('/', (req,res) =>{
  res.send('hello to home page');
} );



