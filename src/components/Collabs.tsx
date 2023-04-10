import RepoCard from "./Repos/RepoCard"

const collabs = [
    {
        name: "devstr",
        description: "A work in progress Github / Nostr integrated developer platform. This was made in collaboration with Austin Kelsay, for the PlebLab SatsX Hackathon. devstr won the nostr category. ",
        topics: ["nextjs", "vercel", "chakra-ui"],
        html_url: "https://devstr.vercel.app",
        image: "https://i.ytimg.com/vi/C1VL-Bj6of0/maxresdefault.jpg",
        deployedUrl: "https://devstr.vercel.app/", 
    },
    {
        name: "jate",
        description: "JATE is a fully functional taco restaurant website. It demonstrates my ability to create a fully functional e-commerce site, with a stripe checkout integration.",
        topics: ["stripe", "graphql", "react", "heroku"],
        html_url: "https://github.com/harrisonboatman/Jate2.0",
        image: "",
        deployedUrl: "https://jate-emporium.herokuapp.com/",
    },
    {
        name: "space-defence",
        description: "This is an in-browser Tower Defense game. The goal of the game is to defend your tower from invaders by strategically placing weapons around your base to kill the enemy.",
        topics: ["mysql", "heroku", "expressjs"],
        html_url: "https://github.com/medranomiler/space-defence",
        image: "https://user-images.githubusercontent.com/117382111/218797300-d783b434-b093-4921-8c88-b237cbc8408b.png",
        deployedUrl: "https://space-defence.herokuapp.com/",

    }
]

const Collabs = () => {
    return (
        <>
            {(collabs.map((repo) => (
                <RepoCard key={repo.name} repo={repo} />
            )))}
        </>
    )
}

export default Collabs;