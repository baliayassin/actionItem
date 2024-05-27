// models/Profile.ts
import mongoose, { Document } from 'mongoose';

interface IName {
  title: string;
  first: string;
  last: string;
}

interface IProfile extends Document {
  thumbnail: string;
  name: IName;
  gender: string;
  country: string;
  phoneNumber: string;
  email: string;
}

const profileSchema = new mongoose.Schema<IProfile>({
  thumbnail: { type: String, required: true },
  name: {
    title: { type: String, required: true },
    first: { type: String, required: true },
    last: { type: String, required: true }
  },
  gender: { type: String, required: true },
  country: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true }
});

export default mongoose.model<IProfile>('Profile', profileSchema);
