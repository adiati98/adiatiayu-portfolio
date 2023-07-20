import Link from "next/link"

export const metadata = {
	title: "Ayu Adiati | Blog",
	description: "Ayu Adiati's blog posts",
}

export default function Blog() {
	return (
		<>
			<h1>Blog</h1>
			<h2>⛔ Sorry. Nothing to see here for now.</h2>
			<h3>
				Back to <Link href='/'>Homepage</Link>
			</h3>
		</>
	)
}
