import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';
// import axios from "axios";

const LiveProjectsCard = ({ value }) => {
	const { name, description, stack, live, ghlink } = value;
	return (
		<Col md={6}>
			<Card className="card shadow-lg p-3 mb-5 bg-white rounded">
				<Card.Body>
					<Card.Title as="h3">{name || <Skeleton />} </Card.Title>
					<Card.Text>
						{!description ? '' : description || <Skeleton count={3} />}{' '}
					</Card.Text>
					<Card.Text>
						{'Tech stacks : '}
						{!stack ? '' : stack || <Skeleton count={3} />}
					</Card.Text>
					<hr />
					{live && ghlink ? (
						<CardButtons live={live} ghlink={ghlink} />
					) : (
						<Skeleton count={2} />
					)}
				</Card.Body>
			</Card>
		</Col>
	);
};

const CardButtons = ({ live, ghlink }) => {
	return (
		<div className="d-grid gap-2 d-md-block">
			<a
				href={live}
				target=" _blank"
				className="btn btn-outline-secondary mx-2">
				<i className="fab fa-github" /> Live link
			</a>
			<a
				href={ghlink}
				target=" _blank"
				className="btn btn-outline-secondary mx-2">
				<i className="fab fa-github" /> Repo
			</a>
		</div>
	);
};
//
// const Language = ({ languages_url, repo_url }) => {
// 	const [data, setData] = useState([]);
//
// 	const handleRequest = useCallback(async () => {
// 		try {
// 			const response = await axios.get(languages_url);
// 			return setData(response.data);
// 		} catch (error) {
// 			console.error(error.message);
// 		}
// 	}, [languages_url]);
//
// 	useEffect(() => {
// 		handleRequest();
// 	}, [handleRequest]);
//
// 	const array = [];
// 	let total_count = 0;
// 	for (let index in data) {
// 		array.push(index);
// 		total_count += data[index];
// 	}
//
// 	return (
// 		<div className="pb-3">
// 			Languages:{" "}
// 			{array.length
// 				? array.map((language) => (
// 						<a
// 							key={language}
// 							className="card-link"
// 							href={repo_url + `/search?l=${language}`}
// 							target=" _blank"
// 							rel="noopener noreferrer">
// 							<span className="badge bg-light text-dark">
// 								{language}:{" "}
// 								{Math.trunc((data[language] / total_count) * 1000) / 10} %
// 							</span>
// 						</a>
// 				  ))
// 				: "code yet to be deployed."}
// 		</div>
// 	);
// };
//
// const CardFooter = ({ star_count, repo_url, pushed_at }) => {
// 	const [updated_at, setUpdated_at] = useState("0 mints");
//
// 	const handleUpdatetime = useCallback(() => {
// 		const date = new Date(pushed_at);
// 		const nowdate = new Date();
// 		const diff = nowdate.getTime() - date.getTime();
// 		const hours = Math.trunc(diff / 1000 / 60 / 60);
//
// 		if (hours < 24) {
// 			if (hours < 1) return setUpdated_at("just now");
// 			let measurement = hours === 1 ? "hour" : "hours";
// 			return setUpdated_at(`${hours.toString()} ${measurement} ago`);
// 		} else {
// 			const options = { day: "numeric", month: "long", year: "numeric" };
// 			const time = new Intl.DateTimeFormat("en-US", options).format(date);
// 			return setUpdated_at(`on ${time}`);
// 		}
// 	}, [pushed_at]);
//
// 	useEffect(() => {
// 		handleUpdatetime();
// 	}, [handleUpdatetime]);
//
// 	return (
// 		<p className="card-text">
// 			<a
// 				href={repo_url + "/stargazers"}
// 				target=" _blank"
// 				className="text-dark text-decoration-none">
// 				<span className="text-dark card-link mr-4">
// 					<i className="fab fa-github" /> Stars{" "}
// 					<span className="badge badge-dark">{star_count}</span>
// 				</span>
// 			</a>
// 			<small className="text-muted">Updated {updated_at}</small>
// 		</p>
// 	);
// };

export default LiveProjectsCard;
