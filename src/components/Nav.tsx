function Nav() {
	return (
		<nav className="flex flex-row [&>*]:p-4 ">
			<a href="/" className="hover:underline">Home</a>
			<a href="about" className="hover:underline">About</a>
			<a href="/projects" className="hover:underline">Projects</a>
		</nav>
	);
}

export default Nav;
