const Footer = () => {
	const currentYear = new Date().getFullYear();
	return <footer className="mt-auto mx-auto">&copy; {currentYear} Viktor Wiman</footer>;
};

export default Footer;
