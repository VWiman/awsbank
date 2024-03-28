"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Account() {
	const { user, token, balance, getBalance, amount, setAmount, sendDeposit, sendWithdraw } = useAuth();

	useEffect(() => {
		if (token) {
			getBalance();
		}
	}, [token, getBalance]);

	return (
		<Card className=" mx-auto max-w-sm w-full border-0 shadow-transparent sm:shadow-sm sm:border min-h-96">
			<CardHeader>
				<CardTitle>Account</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<div className="flex flex-row gap-2 justify-between items-center">
					<label htmlFor="displayUser">Username:&nbsp;</label>
					<p id="displayUser">{user}</p>
					<label htmlFor="displayBalance">Balance:&nbsp;</label>
					<p id="displayBalance">{balance}$</p>
				</div>
				<label htmlFor="amountInput" className="text-lg font-medium">Amount&nbsp;</label>
				<div className="flex flex-row gap-2 justify-between items-center">
					<Input
						id="amountInput"
						type="number"
						value={amount}
						onChange={(e) => setAmount(parseInt(e.target.value))}
						className="text-2xl"></Input>
					<p className="text-2xl">$</p>
				</div>
				<div className="flex flex-row w-full justify-center gap-8">
					<Button onClick={() => sendDeposit()}>Deposit</Button>
					<Button onClick={() => sendWithdraw()}>Withdraw</Button>
				</div>
			</CardContent>
		</Card>
	);
}
