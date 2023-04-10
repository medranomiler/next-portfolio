import Link from 'next/link'


export default function ReposList(props) {
  return (
    <div className="">
      <main className="">
        <h1 className="">
          Repos list
        </h1>

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
        </main>
    </div>
  )
  }