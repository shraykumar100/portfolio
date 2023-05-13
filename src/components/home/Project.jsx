import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";

const Project = ({ heading, username, length, specfic }) => {
	const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
	const specficReposAPI = `${API}/repos/${username}`;

	const [projectsArray, setProjectsArray] = useState([]);

	const fetchRepos = useCallback(async () => {
		let repoList = [];
		try {
			// getting all repos
			const response = await axios.get(allReposAPI);
			// slicing to the length
			repoList = [...response.data.slice(0, length)];
			// adding specified repos
			try {
				for (let repoName of specfic) {
					const response = await axios.get(`${specficReposAPI}/${repoName}`);
					repoList.push(response.data);
				}
			} catch (error) {
				console.error(error.message);
			}
			// setting projectArray
			// TODO: remove the duplication.
			setProjectsArray(repoList);
		} catch (error) {
			console.error(error.message);
		}
	}, [allReposAPI, length, specfic, specficReposAPI]);

	useEffect(() => {
		fetchRepos();
	}, [fetchRepos]);

	return (
		<Jumbotron fluid id="projects" className="bg-light m-0">
			<Container className="">
				<h2 className="display-4 pb-5 text-center">{heading}</h2>
				<Row>
					{projectsArray.length ? (
						projectsArray.map((project, index) => (
							<ProjectCard
								key={`project-card-${index}`}
								id={`project-card-${index}`}
								value={project}
							/>
						))
					) : (
						<h2 className="display-8 pb-5 text-center text-danger">
							Github API limit exceeded. Please try again after an hour.
						</h2>
					)}
				</Row>
			</Container>
		</Jumbotron>
	);
};

export default Project;
