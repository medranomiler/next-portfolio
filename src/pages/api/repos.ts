import { NextApiRequest, NextApiResponse } from 'next';
import connectMongo from '../../lib/connectMongo';
import Repo from "../../models/Repos"

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
    // case 'POST': {
    //   return addRepo(req, res);
    // }
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

// async function addRepo(
//     req: NextApiRequest,
//     res: NextApiResponse | { error: string }
//   ) {
//     try {
//       await connectMongo();
  
//       const repo = await Repo.create(req.body);
  
//       (res as NextApiResponse).status(201).json(repo);
//     } catch (error) {
//       (res as NextApiResponse).status(500).json({ error: (error as Error).message });
//     }
//   }

  async function getRepoByName(
    req: NextApiRequest,
    res: NextApiResponse | { error: string }
  ) {
    try {
      await connectMongo();
  
      const repo = await Repo.findOne({ name: req.query.name });
  
      if (!repo) {
        return (res as NextApiResponse).status(404).json({ error: 'Repo not found' });
      }
  
      (res as NextApiResponse).status(200).json(repo);
    } catch (error) {
      (res as NextApiResponse).status(500).json({ error: (error as Error).message });
    }
  }