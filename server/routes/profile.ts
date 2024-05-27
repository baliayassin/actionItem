// routes/profile.ts
import { Router, Request, Response } from 'express';
import Profile, { IProfile } from '../models/Profile';

const router = Router();

/ API endpoint to update a profile by ID
router.put('/update-profile/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { thumbnail, name, gender, country, phoneNumber, email } = req.body;

    // Find the profile by ID and update its fields
    const updatedProfile = await Profile.findByIdAndUpdate(
      id,
      {
        thumbnail,
        name,
        gender,
        country,
        phoneNumber,
        email
      },
      { new: true } // To return the updated document
    );

    // Send the updated profile data in the response
    res.json(updatedProfile);
  } catch (error: any) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Error updating profile' });
  }
});

// API endpoint to delete a profile by ID
router.delete('/delete-profile/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    // Find the profile by ID and delete it
    await Profile.findByIdAndDelete(id);

    // Send a success response
    res.json({ message: `Profile with ID ${id} deleted successfully` });
  } catch (error: any) {
    console.error('Error deleting profile:', error);
    res.status(500).json({ error: 'Error deleting profile' });
  }
});

// API endpoint to save a new profile
router.post('/api/save-profile', async (req: Request, res: Response) => {
    console.log('fsdfsd')
    try {
      // Extract required fields from request body
      const { thumbnail, name, gender, country, phoneNumber, email } = req.body;
  
      // Create a new Profile document using the model and extracted fields
      const profileData: IProfile = {
        thumbnail,
        name,
        gender,
        country,
        phoneNumber,
        email
      };
      const profile: IProfile = new Profile(profileData);
  
      // Save the profile document to MongoDB Atlas
      await profile.save();
  
      // Send a success response
      res.status(201).json(profile);
    } catch (error: any) {
      // Handle errors and send an error response
      console.error('Error saving profile:', error);
      res.status(500).json({ error: 'Error saving profile' });
    }
  });
  




export default router;
