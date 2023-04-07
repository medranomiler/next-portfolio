import RepoCard from "./RepoCard"

const RepoCards = () =>{
  const repos = [
    {
      name: "chat-bot",
      description: "This is a chat bot that uses the Open AI gpt-3.5-turbo model, better known as the model for ChatGPT. It may be useful for times when ChatGPT is having server errors.",
      topics: ['bootstrap', 'github', 'js', 'openai'],
      html_url: "https://github.com/medranomiler/chat-bot",
      image: "https://user-images.githubusercontent.com/67513942/228424352-154f0837-b5b1-413e-b9a9-642214d4a3ed.png"
    },
    {
      name: "tech-blog",
      description: "This is a tech blog website. Users can create an account, log in to an existing account,  add, edit, delete, and comment on blog posts. This website uses Handlebars.js, MySQL, Sequelize, and Express.js. This was deployed using Heroku.  ",
      topics: ['expressjs', 'heroku', 'mysql', 'nodejs'],
      html_url: "https://github.com/medranomiler/tech-blog",
      image: "https://user-images.githubusercontent.com/67513942/220243736-6ac7feb4-4741-4443-b278-bb444d739c4a.png"
    },
    {
      name: "e-commerce-back-end",
      description: "A back end e commerce application. This app uses Express.js for routing, and MySql and Sequelize for the data handling. ",
      topics: ['expressjs', 'mysql'],
      html_url: "https://github.com/medranomiler/e-commerce-back-end",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg"
    },
    {
      name: "next-portfolio",
      description: "This is a full stack developer portfolio website. This was built with Next.JS, MongoDB, and Chakra UI, and deployed to Vercel. Visit darrenmedrano.vercel.app",
      topics: ['mongodb', 'nextjs', 'react', 'typescript', 'vercel'],
      html_url: "https://github.com/medranomiler/next-portfolio",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg"
    },
    {
      name: "react-portfolio",
      description: "This is a react project porfolio. This is a front end only React App. This app uses the useState hook to conditionally render content on the page. This website uses Tailwind CSS and Flowbite for the styling. ",
      topics: ['github', 'react', 'tailwindcss'],
      html_url: "https://github.com/medranomiler/react-portfolio",
      image: "https://user-images.githubusercontent.com/67513942/230475286-a957a7fc-7e48-4da2-957d-80132efc127d.png"
    }
  ]

  return (
    <>   
      {(repos.map((repo) => ( 
        <RepoCard key={repo.name} repo={repo}/>
      )))}
    </>
  );
};

export default RepoCards;






