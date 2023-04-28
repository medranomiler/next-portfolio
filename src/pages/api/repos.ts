import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../lib/connectMongo';
import Repo from "../../models/Repos"
import Admin from "../../models/Admins"

export default async function repoHandler(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  switch (req.method) {
    case 'GET': {
        if (req.query.id) {
            return getRepoById(req, res);
    }else if (req.query.name) {
      return getRepoByName(req, res);
    }else{
       return getRepos(req, res)
    }
  }
    case 'POST': {
      return addRepo(req, res);
    }
    case 'PUT': {
      return updateRepo(req, res);
    }

    case 'DELETE': {
      console.log(req.body)
      return deleteRepo(req, res);
    }
    default: {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  }
}
async function getRepoById(
    req: NextApiRequest,
    res: NextApiResponse | { error: string }
  ){
    try {
      await connectMongo();
  
      const repo = await Repo.findById(req.query.id);
  
      if (!repo) {
        return (res as NextApiResponse).status(404).json({ error: 'Repo not found' });
      }
  
      (res as NextApiResponse).status(200).json(repo);
    } catch (error) {
      (res as NextApiResponse).status(500).json({ error: (error as Error).message });
    }
  }
  

async function getRepos(
  req: NextApiRequest,
  res: NextApiResponse | { error: string }
){
try {
    await connectMongo();

    const repos = await Repo.find();

    (res as NextApiResponse).status(200).json(repos);
  } catch (error) {
    (res as NextApiResponse).status(500).json({ error: (error as Error).message });
  }
}

async function addRepo(
    req: NextApiRequest,
    res: NextApiResponse | { error: string }
  ) {
    try {
      await connectMongo();
  
      const repo = await Repo.create(req.body);
  
      (res as NextApiResponse).status(201).json(repo);
    } catch (error) {
      (res as NextApiResponse).status(500).json({ error: (error as Error).message });
    }
  }

  async function getRepoByName(
    req: NextApiRequest,
    res: NextApiResponse | { error: string }
  ) {

    try {
      
      await connectMongo();

      const admin = await Admin.findById(req.query.adminId).populate('repos')
      const repo = await Repo.findOne({ name: req.query.name });
      
      if (!admin) {
        return (res as NextApiResponse).status(404).json({ error: `Admin with ID ${req.query.adminId} not found` });
      }

      
      const adminRepos = admin.repos;

if (!adminRepos || adminRepos.length === 0) {
  return (res as NextApiResponse).status(404).json({ error: `Admin with ID ${req.query.adminId} is not associated with any repositories` });
}

const adminRepo = adminRepos.find((r: { name: string | string[] | undefined; }) => r.name === req.query.name);

if (!adminRepo) {
  return (res as NextApiResponse).status(404).json({ error: `Admin with ID ${req.query.adminId} is not associated with a repository named ${req.query.name}` });
}

      
      if (!repo) {
        return (res as NextApiResponse).status(404).json({ error: `Project named ${req.query.name} not found` });
      }
  
      (res as NextApiResponse).status(200).json(adminRepo);
    } catch (error) {
      (res as NextApiResponse).status(500).json({ error: (error as Error).message });
    }
  }

  
  async function deleteRepo(
    req: NextApiRequest,
    res: NextApiResponse | { error: string } | { message: string }
  ) {
    try {
      await connectMongo();
      console.log(req.body.name)
      const repo = await Repo.findOneAndDelete({ name: req.body.name });
      
      if (!repo) {
        return (res as NextApiResponse).status(404).json({ error: `Project named ${req.body.name} not found` });
      }
  
      (res as NextApiResponse).status(200).json({ message: `${req.body.name} deleted.`});
    } catch (error) {
      (res as NextApiResponse).status(500).json({ error: (error as Error).message });
    }
  }


  
  async function updateRepo(
    req: NextApiRequest,
    res: NextApiResponse | { error: string } | { message: string }
  ) {
    try {
      await connectMongo();
      
      const repo = await Repo.findOneAndUpdate(
        { name: req.body.name },
        { $set: req.body },
        { new: true }
      );
  
      if (!repo) {
        return (res as NextApiResponse).status(404).json({ error: `Project named ${req.body.name} not found` });
      }
  
      (res as NextApiResponse).status(200).json({message: `${req.body.name} updated.`});
    } catch (error) {
      (res as NextApiResponse).status(500).json({ error: (error as Error).message });
    }
  }