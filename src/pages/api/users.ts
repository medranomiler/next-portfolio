import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../lib/connectMongo';
import User from '../../models/Users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  switch (req.method) {
    case 'POST': {
      return addUser(req, res);
    }
    default: {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  }
}

async function addUser(
  req: NextApiRequest,
  res: NextApiResponse | { error: string }
) {
  try {
    await connectMongo();

    const user = await User.create(req.body);

    (res as NextApiResponse).status(201).json(user);
  } catch (error) {
    (res as NextApiResponse).status(500).json({ error: (error as Error).message });
  }
}

