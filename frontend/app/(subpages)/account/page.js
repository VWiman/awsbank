"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

export default function Account() {
	const { user, token, balance, getBalance, amount, setAmount, sendDeposit, sendWithdraw } = useAuth();

	useEffect(() => {
		if (token) {
			getBalance();
		}
	}, [token, getBalance]);

	return (
		<>
			<div>
				<label htmlFor="displayUser">Username:&nbsp;</label>
				<p id="displayUser">{user}</p>
				<label htmlFor="displayBalance">Balance:&nbsp;</label>
				<p id="displayBalance">{balance}</p>
			</div>
			<div>
				<label htmlFor="amountInput">Amount:&nbsp;</label>
				<input
					id="amountInput"
					type="number"
					value={amount}
					onChange={(e) => setAmount(parseInt(e.target.value))}></input>
				<p>$</p>
				<button onClick={() => sendDeposit()}>Deposit</button>
				<button onClick={() => sendWithdraw()}>Withdraw</button>
			</div>
		</>
	);
}
