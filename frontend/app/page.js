import Link from "next/link";

export default function Home() {
	return (
		<div className="flex justify-center items-center w-full min-h-full">
			<Link href={"create"} className="bg-blue-200 sm:text-3xl font-medium hover:bg-blue-100 mt-4 md:mt-8 border rounded-3xl p-4">
				Create your account today!
			</Link>
		</div>
	);
}
