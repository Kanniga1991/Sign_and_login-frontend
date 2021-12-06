import React from "react";
import { useHistory } from "react-router";

const Home = () => {
	const history = useHistory();

	/*useEffect(() => {
		let fetch = async () => {
			try {
				let api = await axios.get(`${env.api}/data`, {
					headers: {
						Authorization: window.localStorage.getItem("app_token"),
					},
				});
				setData([...api.data]);
			} catch (error) {
				console.log(error);
			}
		};
		fetch();
	}, []);*/

	let handlelogout = (e) => {
		e.preventDefault();
		//window.localStorage.removeItem("app_token");
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
