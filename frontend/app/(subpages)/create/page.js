"use client";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Create() {
	const { createAccount, setCreateUsername, setCreatePassword, createPassword, createUsername } = useAuth();

	const preventCreateDefault = (e) => {
		e.preventDefault()
		createAccount()
	}
	return (
		<form onSubmit={(e) => preventCreateDefault(e)}>
			<Card className="mx-auto max-w-sm w-full border-0 shadow-transparent sm:shadow-sm sm:border min-h-96">
				<CardHeader>
					<CardTitle className="text-2xl">Create account</CardTitle>
					<CardDescription>Enter username and password below to create an account</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="create-username">Username</Label>
							<Input
								value={createUsername}
								onChange={(e) => setCreateUsername(e.target.value)}
								id="create-username"
								type="text"
								placeholder="username"
								autoComplete="username"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="create-password">Password</Label>
							<Input
								value={createPassword}
								onChange={(e) => setCreatePassword(e.target.value)}
								id="create-password"
								type="password"
								placeholder="password"
								autoComplete="current-password"
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							Create account
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						Already have an account?{" "}
						<Link href="/login" className="underline">
							Log in
						</Link>
					</div>
				</CardContent>
			</Card>
		</form>
	);
}
