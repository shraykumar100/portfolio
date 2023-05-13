import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import LiveProjectsCard from "./LiveProjectsCard";

const LiveProjects = ({ projects }) => {
	return (
		<Jumbotron fluid id="projects" className="bg-light m-0">
			<Container className="">
				<h2 className="display-4 pb-5 text-center">Projects</h2>
				<Row>
					{projects.length ? (
						projects.map((project, index) => (
							<LiveProjectsCard
								key={`project-card-${index}`}
								id={`project-card-${index}`}
								value={project}
							/>
						))
					) : (
						<h2 className="display-4 pb-5 text-center">
							Could not found any projects
						</h2>
					)}
				</Row>
			</Container>
		</Jumbotron>
	);
};

export default LiveProjects;
