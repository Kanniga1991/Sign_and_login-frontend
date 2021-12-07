import React from "react";
import { useHistory } from "react-router";

const Home = () => {
	const history = useHistory();

	let handlelogout = (e) => {
		e.preventDefault();
		
		history.push("/");
	};

	return (
		<div className="text-center">
			<div className="d-flex flex-wrap justify-content-center my-3">
				<button
					type="submit"
					onClick={handlelogout}
					className="btn btn-danger m-3"
				>
					Log Out
				</button>
			</div>
		</div>
	);
};

export default Home;
