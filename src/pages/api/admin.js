import connectMongo from '../../lib/connectMongo';
import Repo from '../../models/Repos';
import Admin from '../../models/Admins';

export default async function handler(req, res) {
  switch (req.method){
    case 'GET': {
      return getAdminRepos(req, res)
    }
    case 'POST': {
      return postReposToAdmin(req, res)
    }
    default: {
      return res.status(405).json({ message: 'Method not allowed' });
    }
  }
  }

  async function getAdminRepos(req, res) {
    const adminId = req.query.adminId
  
    try {
      await connectMongo();
  
      const admin = await Admin.findById(adminId).populate('repos');
  
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
  
      const adminRepos = admin.repos;
  
      return res.status(200).json(adminRepos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  }


  async function postReposToAdmin(req, res){
  const  adminId = await req.body.admin
  const repo = await req.body

  try {
    await connectMongo();
    console.log(adminId)
    // Find the admin
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Create the new repo
    const newRepo = await Repo.create(repo);

    // Add the repo to the admin's list of repos
    admin.repos.push(newRepo);
    await admin.save();

    return res.status(201).json(newRepo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }

}

