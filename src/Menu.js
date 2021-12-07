import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import env from "./Settings";

const Menu = () => {
	const history = useHistory();
	const [mail, setMail] = useState("");
	const [pwd, setPwd] = useState("");

	let handleSubmit = async (e) => {
		e.preventDefault();
		try {
			let apidata = await axios.post(`${env.api}/signin`, {
				mail,
				pwd,
			});
			if (apidata.data.code) {
				
				history.push("/home");
			} else {
				alert(apidata.data.message);
			}
			setMail("");
			setPwd("");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
					<div className="card text-center border-0 shadow rounded-3 my-5 py-5">
						<h1 className="m-2">Welcome</h1>
						<div className="card-body m-4">
							<h3 className="m-4">Sign In</h3>
							<form onSubmit={handleSubmit}>
								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control"
										id="floatingInput"
										placeholder="name@example.com"
										value={mail}
										onChange={(e) =>
											setMail(e.target.value)
										}
										required
									/>
									<label htmlFor="floatingInput">
										Email address
									</label>
								</div>
								<div className="form-floating mb-3">
									<input
										type="password"
										className="form-control"
										id="floatingPassword"
										placeholder="Password"
										value={pwd}
										onChange={(e) => setPwd(e.target.value)}
										required
									/>
									<label htmlFor="floatingPassword">
										Password
									</label>
								</div>
								<div className="d-grid py-3">
									<button
										className="btn btn-primary btn-login text-uppercase fw-bold"
										type="submit"
									>
										Sign in
									</button>
								</div>
							</form>
							<div className="d-grid py-3">
								<button
									type="submit"
									className="btn btn-danger text-uppercase fw-bold"
									onClick={() => history.push("/forgot")}
								>
									Forgot Password ?
								</button>
							</div>
							<hr />
						</div>
						Don't have an account, register below
						<button
							type="submit"
							className="btn btn-outline-success m-5 text-uppercase fw-bold"
							onClick={() => history.push("/signup")}
						>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
