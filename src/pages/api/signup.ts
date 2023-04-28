import jwt from 'jsonwebtoken';
import { hash } from 'bcrypt';
import Admin from "../../models/Admins"
import connectMongo from '../../lib/connectMongo';
import { NextApiRequest, NextApiResponse } from 'next';

async function signup(req: NextApiRequest, res: NextApiResponse) {
  const { username, password, bio, profilePhoto } = req.body;
  
  try {
    console.log(username, password)
    const hashedPassword = await hash(password, 10);
    const newUser = await createAdmin(username, hashedPassword, bio, profilePhoto);

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT secret is not defined');
    }

    const token = jwt.sign({ username: newUser.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200)
    .json({ token });
  } catch (error) {
    console.error(error);
    res.status(500)
    .json({ message: 'Server error' });
  }

  async function createAdmin(username: string, password: string, bio: string, profilePhoto: string) {
    try {

      await connectMongo()

      const newAdmin = new Admin({
        username,
        password,
        bio,
        profilePhoto
      });
      const savedAdmin = await newAdmin.save();
      return savedAdmin;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating user');
    }
  }
}

export default signup;
