import connectMongo from '../../lib/connectMongo';
import Repo from '../../models/Repos';
import Admin from '../../models/Admins';

export default async function handler(req, res) {
  switch (req.method){
    case 'GET': {
      return getAdminRepos(req, res)
    }
    case 'POST': {
      return postRepoToAdmin(req, res)
    }
    case 'PUT': {
      return updateRepoFromAdmin(req, res)
    }
    case 'DELETE': {
      return deleteRepoFromAdmin(req, res)
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


  async function postRepoToAdmin(req, res){
  const  adminId = await req.body.adminId
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

async function updateRepoFromAdmin(req, res){
  const adminId = req.body.adminId;
  const name = req.body.name;

  try {
    await connectMongo();

    // Find the admin
    const admin = await Admin.findById(adminId).populate('repos');
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Find the repo with the given name for the admin
    const repo = admin.repos.find(r => r.name === name);
    if (!repo) {
      return res.status(404).json({ message: `Repo ${name} not found for admin ${adminId}` });
    }

    // Update the repo with the new information
    repo.set(req.body);
    await repo.save();

    return res.status(200).json({ message: `${name} updated.` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

async function deleteRepoFromAdmin(req, res) {
  const adminId = req.body.adminId;
  const name = req.body.name;

  try {
    await connectMongo();

    // Find the admin
    const admin = await Admin.findById(adminId).populate('repos');
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    // Find the repo with the given name for the admin
    const repo = admin.repos.find(r => r.name === name);
    if (!repo) {
      return res.status(404).json({ message: `Repo ${name} not found for admin ${adminId}` });
    }

    // Delete the repo
    await repo.delete();

    // Remove the repo from the admin's list of repos
    admin.repos = admin.repos.filter(r => r.name !== name);
    await admin.save();

    return res.status(200).json({ message: `${name} deleted.` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}

