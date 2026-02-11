import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  linkedIn: {
    type: String,
    default: ""
  },
  twitter: {
    type: String,
    default: ""
  },
  otherSocial: {
    type: String,
    default: ""
  },
  interests: [
    {
      type: String,
      trim: true
    }
  ]
}, {
  timestamps: true
});

export const Card = new mongoose.model("cards", CardSchema);

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "cards"
    });
    console.log("db connected");
  } catch (error) {
    console.log("error connecting db", error);
  }
};
