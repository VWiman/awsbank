import Main from "@/components/Main/Main";
import "@/style/globals.css";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata = {
	title: "Bank App",
	description: "Next Bank app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
			<body className="flex flex-col min-h-screen">
				<Main>{children}</Main>
			</body>
		</html>
	);
}
