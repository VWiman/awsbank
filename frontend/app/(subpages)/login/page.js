"use client";


import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			await login(username, password);
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	return (
		<form onSubmit={(e) => handleLogin(e)}>
			<Card className="mx-auto max-w-sm w-full border-0 shadow-transparent sm:shadow-sm sm:border min-h-96">
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>Enter username and password below to access your account</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="usernameInputId">Username</Label>
							<Input
								onChange={(e) => setUsername(e.target.value)}
								value={username}
								id="usernameInputId"
								type="text"
								placeholder="username"
								autoComplete="username"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="passwordInputId">Password</Label>
							<Input
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								id="passwordInputId"
								type="password"
								placeholder="password"
								autoComplete="current-password"
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							Submit
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						{"Don't have an account?"}
						<Link href="/create" className="underline">
							Create account
						</Link>
					</div>
				</CardContent>
			</Card>
		</form>
	);
}
