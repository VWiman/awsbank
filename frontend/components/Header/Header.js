"use client";
import Link from "next/link";
import { HeaderLinks } from "./constants";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
	const { isLoggedIn, logout } = useAuth();
	return (
		<header className="sticky flex w-screen top-0 h-16 text-slate-50 bg-slate-950">
			{isLoggedIn ? (
				<nav className="flex flex-row font-medium w-full items-center justify-end gap-4 shadow-sm">
					<button onClick={() => logout()}>LOG OUT</button>
				</nav>
			) : (
				<nav className="flex flex-row font-medium w-full items-center justify-center gap-4 shadow-sm">
					{HeaderLinks.map((link) => (
						<li id={link.id} key={link.id} className="list-none">
							<Link href={link.href}>{link.text}</Link>
						</li>
					))}
				</nav>
			)}
		</header>
	);
};

export default Header;
