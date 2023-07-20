import Link from "next/link"

export default function Navbar() {
	return (
		<>
			<nav>
				<div>
					<h1>
						<Link href='/'>LOGO/Homepage</Link>
					</h1>
				</div>
				<div>
					<ul>
						<li>
							<Link href='/about'>About</Link>
						</li>
						<li>
							<Link href='/blog'>Blog</Link>
						</li>
						<li>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	)
}
