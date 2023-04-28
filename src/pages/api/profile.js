import jwt from 'jsonwebtoken';
import Admin from "../../models/Admins"
import connectMongo from '../../lib/connectMongo';

async function getUserProfile(req, res) {
  const { token } = req.body;

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await getUserByUsername(decodedToken.username);
    if (!admin) {
      return res.status(401).json({ message: 'User does not exist' });
    }
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }

  async function getUserByUsername(username) {
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

export default getUserProfile;