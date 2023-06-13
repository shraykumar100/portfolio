// Navigation Bar SECTION
const navBar = {
	show: true,
};

// Main Body SECTION
const mainBody = {
	gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
	firstName: "Shray",
	middleName: "",
	lastName: "Kumar",
	message: " Passionate about changing the world with technology. ",
	icons: [
		{
			image: "fa-github",
			url: "https://github.com/shraykumar100",
		},
		{
			image: "fa-facebook",
			url: "https://www.facebook.com/shray.kumar.39/",
		},
		{
			image: "fa-instagram",
			url: "https://www.instagram.com/k.shrey16/",
		},
		{
			image: "fa-linkedin",
			url: "https://www.linkedin.com/in/shray-kumar/",
		},
		{
			image: "fa-twitter",
			url: "https://twitter.com/shraykumar100",
		},
	],
};

const about = {
	show: true,
	heading: "About Me",
	imageLink: require("../editable-stuff/shray.png"),
	imageSize: 375,
	message:
		"My name is Shray Kumar. I’m a graduate of 2022 from Dr. APJ Abdul Kalam Technical University Lucknow with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like learn more innovative things.",
	resume:
		"https://drive.google.com/file/d/1vbJ1ot_o74n64lqKGE4KFbbZe68WaWk4/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
	show: false,
	heading: "Recent Github Repos",
	gitHubUsername: "shraykumar100", //i.e."johnDoe12Gh"
	reposLength: 4,
	specificRepos: [""],
};

// Leadership SECTION
const leadership = {
	// show: false,
	// heading: "Leadership",
	// message:
	// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
	// images: [
	// 	{
	// 		img: require("../editable-stuff/shray.png"),
	// 		label: "First slide label",
	// 		paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
	// 	},
	// 	{
	// 		img: require("../editable-stuff/shray.png"),
	// 		label: "Second slide label",
	// 		paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
	// 	},
	// ],
	// imageSize: {
	// 	width: "615",
	// 	height: "450",
	// },
};

//Project
const projects = [
	{
		name: "Cryptoview",
		description:
			"Cryptoview is a cutting-edge web application that provides real-time cryptocurrency data and news updates, streamlining the user experience and decision-making in the crypto market.The app boasts a responsive UI, intuitive navigation, and eye-catching graphics, all powered by Redux Toolkit for efficient state management and enhanced performance.",
		stack: "ReactJs and Redux Toolkit",
		live: "https://shraykumar100.github.io/cryptoview/",
		ghlink: "https://github.com/shraykumar100/cryptoview",
	},
	{
		name: "My Emojee",
		description:
			"A user-friendly and intuitive web application for seamless browsing, searching, and copying of emojis across messaging, social media, and online platforms. Enjoy an extensive emoji collection, keyword-based search, and support for light/dark mode. Simplify your emoji usage with this convenient and responsive web app.",
		stack: "ReactJs",
		live: "https://my-emojee.netlify.app/",
		ghlink: "https://github.com/shraykumar100/my-emojee",
	},
	{
		name: "Employee Management System",
		description:
			"A centralized web application for efficient workforce management and streamlined human resources tasks. Features include adding, editing, and deleting employee records, ensuring easy access and seamless interaction with employee information. Enhances organizational efficiency through a user-friendly interface.",
		stack: "ReactJs",
		live: "https://employee-mng-system.netlify.app/",
		ghlink: "https://github.com/shraykumar100/employee-mng-system",
	},
	{
		name: "Password Generator",
		description:
			"A password generator tool. It utilizes the useState hook, a built-in ReactJS feature, to manage and update the password generation process.The application allows users to generate random passwords based on different requirements, providing flexibility and customization. It incorporates various inbuilt functions to ensure strong and secure password generation.",
		stack: "ReactJs",
		live: "https://shray-password-generator.netlify.app/",
		ghlink: "https://github.com/shraykumar100/password-generator",
	},
	{
		name: "Giphy",
		description:
			"Gif search project that dynamically displays search results on the webpage. Utilized the Giphy API to fetch data and leveraged DOM manipulation for real-time rendering. Incorporated EventListeners, for loops, and functional programming techniques to enhance functionality.",
		stack: "HTML, CSS, and JavaScriptt",
		live: "https://shraykumar100.github.io/web_projects/giphy/",
		ghlink: "https://github.com/shraykumar100/web_projects/tree/main/giphy",
	},
	{
		name: "Weather App",
		description:
			"Weather application utilizing the OpenWeather API for retrieving and displaying weather information of any city. Implemented with JavaScript's fetch API to fetch data and manipulated the DOM to present the weather details on the web page.",
		stack: "HTML, CSS, and JavaScript",
		live: "https://shraykumar100.github.io/web_projects/weather_app/",
		ghlink:
			"https://github.com/shraykumar100/web_projects/tree/main/weather_app",
	},
];

// SKILLS SECTION
const skills = {
	show: true,
	heading: "Skills",
	hardSkills: [
		{ name: "HTML", value: 80 },
		{ name: "CSS", value: 70 },
		{ name: "JavaScript", value: 90 },
		{ name: "ReactJS", value: 65 },
		{ name: "NodeJS", value: 60 },
		{ name: "UI/UX", value: 60 },
	],
	softSkills: [
		{ name: "Goal-Oriented", value: 80 },
		{ name: "Collaboration", value: 90 },
		{ name: "Positivity", value: 75 },
		{ name: "Adaptability", value: 85 },
		{ name: "Problem Solving", value: 75 },
		{ name: "Empathy", value: 90 },
		{ name: "Organization", value: 70 },
		{ name: "Creativity", value: 90 },
	],
};

// GET IN TOUCH SECTION
const getInTouch = {
	show: true,
	heading: "Get In Touch",
	message:
		"I'm currently looking for full-time Software Engineering or Web Development opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
	email: "shraykumar100@gmail.com",
};

const experiences = {
	show: false,
	heading: "Experiences",
	data: [
		// {
		// 	role: """,
		// 	companylogo: require("path"),
		// 	date: "date",
		// }
	],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
	navBar,
	mainBody,
	about,
	repos,
	projects,
	skills,
	leadership,
	getInTouch,
	experiences,
};
