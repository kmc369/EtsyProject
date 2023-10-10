import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}
	};

	return (
		<>
			
			<h1 className="signup-header">Sign Up</h1>
			<form onSubmit={handleSubmit} className="sign-up-form-container">
				<ul>
					{errors.map((error, idx) => (
						<li key={idx}>{error}</li>
					))}
				</ul>
				<label className="label-signup">
					Email
					<div>
					<input className="input-signup"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/></div>
				</label>
				<label className="label-signup">
					Username
					<div>
					<input className="input-signup"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/></div>
				</label>
				<label className="label-signup">
					Password
					<div><input className="input-signup"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/></div>
				</label>
				<label className="label-signup">
					Confirm Password
					<div><input className="input-signup"
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/></div>
				</label>
				<div className="signup-buttons">
				<button className="cancel" onClick={closeModal}>Cancel</button>
				<button className="submitButtonsignup" type="submit">Sign Up</button>
				</div>
			</form>
	
		</>
	);
}

export default SignupFormModal;