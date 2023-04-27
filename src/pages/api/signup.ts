import jwt from 'jsonwebtoken';
import { hash } from 'bcrypt';
import Admin from "../../models/Admins"
import connectMongo from '../../lib/connectMongo';
import { NextApiRequest, NextApiResponse } from 'next';

async function signup(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;
  
  try {
    console.log(username, password)
    const hashedPassword = await hash(password, 10);
    const newUser = await createAdmin(username, hashedPassword);

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

  async function createAdmin(username: string, password: string) {
    try {

      await connectMongo()

      const newAdmin = new Admin({
        username,
        password
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
