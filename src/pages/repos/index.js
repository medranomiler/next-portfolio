import Link from 'next/link'


export default function ReposList(props) {
  return (
    <div className="">
      <main className="h-screen p-4 dark:bg-gray-950">
        <h1 className="font-bold text-5xl dark:text-gray-400">
          Personal
        </h1>

<div className="dark:text-gray-400 font-md text-lg m-4">
        <ul>
          <li>
            <Link href="/repos/chat-bot">chat-bot</Link>
          </li>
          <li>
            <Link href="/repos/next-portfolio">next-portfolio</Link>
          </li>
          <li>
            <Link href="/repos/react-portfolio">react-portfolio</Link>
          </li>
          <li>
            <Link href="/repos/tech-blog">tech-blog</Link>
          </li>
        </ul>
</div>
<h1 className="font-bold text-5xl dark:text-gray-400">
          Collaborations
        </h1>

<div className="dark:text-gray-400 font-md text-lg m-4">
        <ul>
          <li>
            <Link href="/repos/jate">jate</Link>
          </li>
          <li>
            <Link href="/repos/devstr">devstr</Link>
          </li>
          <li>
            <Link href="/repos/space-defence">space-defence</Link>
          </li>
        </ul>
</div>
        </main>
    </div>
  )
  }