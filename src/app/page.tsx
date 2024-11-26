import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <article className="flex-grow flex flex-col items-center justify-center text-center gap-2 p-12">
        <Image
          className="relative"
          src="/catstressy_q.png"
          alt="Stressed cat"
          width={128}
          height={118}
          priority
        />
        <h1 className="text-4xl">Are regexes self-aware yet?</h1>
        <p className="text-[12rem]">No.</p>
        <aside>The world is safe from generalised AI for another day.</aside>
      </article>

      <footer className="flex-shrink text-xs p-12">
        Created with ❤️ and snark by <a className="underline" href="https://bsky.app/profile/matmannion.com">@matmannion.com</a>.
      </footer>
    </main>
  )
}
