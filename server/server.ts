import express, { Request, Response } from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

// const MONGO_URL = process.env.MONGO_URL;
mongoose
.connect(`${process.env.MONGO_URL}`)
.then(()=> {
    console.log('database connected successfully')
    app.listen(PORT, ()=> {
        console.log('server is running in port' , PORT)
    })
}).catch((error)=>{
    console.log('error', error)
})


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//  update a profile by ID
app.put('/api/update-profile/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    // Implement logic to update the profile
    res.send(`Updating profile with ID ${id}`);
  });
  
  // delete a profile by ID
  app.delete('/api/delete-profile/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`Deleting profile with ID ${id}`);
  });
  
  // save a new profile
  app.post('/api/save-profile', (req: Request, res: Response) => {
    res.send('Saving new profile');
  });
