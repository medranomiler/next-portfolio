import jwt from 'jsonwebtoken';
import Admin from "../../models/Admins"
import connectMongo from '../../lib/connectMongo';
import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from "bcrypt"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method){
    case 'POST': {
      return getUserProfile(req, res)
    }
    case 'PUT': {
      return updateUserProfile(req, res)
    }
    default: {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }
  }

async function getUserProfile(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.body;

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT secret is not defined');
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (typeof decodedToken === 'string') {
      throw new Error('Invalid token');
    }
    
    const admin = await getUserByUsername(decodedToken.username);
    if (!admin) {
      return res.status(401).json({ message: 'User does not exist' });
    }
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }

  async function getUserByUsername(username: string) {
    try {
      await connectMongo()
      const admin = await Admin.findOne({ username });
      return admin;
    } catch (error) {
      console.error(error);
      throw new Error('Error getting user by username');
    }
  }
  
}


async function updateUserProfile(req: NextApiRequest, res: NextApiResponse) {
  const { username, password, bio, profilePhoto } = req.body;
  const token = req.body.token

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT secret is not defined');
    }

    if (!token) {
      throw new Error('Token is missing');
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (typeof decodedToken === 'string') {
      throw new Error('Invalid token');
    }

    const existingAdmin = await getUserByUsername(decodedToken.username)
    if (!existingAdmin) {
      throw new Error('Admin not found');
    }

    // Only update fields that are provided
    if (username) {
      existingAdmin.username = username;
    }
    if (password) {
      existingAdmin.password = await hash(password, 10);
    }
    if (bio) {
      existingAdmin.bio = bio;
    }
    if (profilePhoto) {
      existingAdmin.profilePhoto = profilePhoto;
    }

    const updatedAdmin = await existingAdmin.save();
    const newToken = jwt.sign({ username: updatedAdmin.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200)
      .json({ token: newToken });
  } catch (error) {
    console.error(error);
    res.status(500)
      .json({ message: 'Server error' });
  }

  async function getUserByUsername(username: string) {
    try {
      await connectMongo()
      const admin = await Admin.findOne({ username });
      return admin;
    } catch (error) {
      console.error(error);
      throw new Error('Error getting user by username');
    }
  }
}
