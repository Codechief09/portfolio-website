import {
	FaHtml5,
	FaCss3,
	FaReact,
	FaSass,
	FaPython,
	FaNodeJs,
	FaDocker,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaAngular,
	FaPhp,
	FaLaravel,
	FaWordpress,
} from "react-icons/fa";

import {
	TbBrandTypescript,
	TbBrandJavascript,
	TbBrandCpp,
	TbBrandRedux,
	TbBrandBootstrap,
	TbBrandTailwind,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
	SiPug,
	SiExpress,
	SiPostman,
	SiGnubash,
	SiNextdotjs,
	SiNuxtdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode, FaVuejs } from "react-icons/fa6";
import {
	BsGlobe,
	BsCodeSlash,
	BsRobot,
	BsFileBarGraph,
	BsGit,
	BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
	{ text: "Home", path: "/" },
	{ text: "About", path: "/about" },
	{ text: "Skills", path: "/skills" },
	{ text: "Projects", path: "/projects" },
	{ text: "Experience", path: "/experience" },
	// { text: "Blogs", path: "/blogs" },
	{ text: "Contact", path: "/contact" },
	{ text: "Resume", path: "/resume" },
];

export const interestsData = [
	{
		interest: "Software Engineering",
		icon: BsCodeSlash,
	},
	{
		interest: "Tech Blog",
		icon: FaHashnode,
	},
	{
		interest: "Internet of Things",
		icon: FcElectronics,
	},
	{
		interest: "Market Research",
		icon: GiArchiveResearch,
	},
	{
		interest: "Visualization",
		icon: BsFileBarGraph,
	},
	{
		interest: "Software Development",
		icon: AiFillCode,
	},
	{
		interest: "Robotics",
		icon: BsRobot,
	},
	{
		interest: "Web Scraping",
		icon: BsGlobe,
	},
];

export const skillsData = [
	{
		name: "HTML5",
		icon: FaHtml5,
	},
	{
		name: "CSS3",
		icon: FaCss3,
	},
	{
		name: "Javascript",
		icon: TbBrandJavascript,
	},
	{
		name: "Jquery",
		icon: BiLogoJquery,
	},
	{
		name: "ReactJS",
		icon: FaReact,
	},
	{
		name: "Redux",
		icon: TbBrandRedux,
	},
	{
		name: "NextJS",
		icon: SiNextdotjs,
	},
	{
		name: "Vue.js",
		icon: FaVuejs,
	},
	{
		name: "Nuxt.js",
		icon: SiNuxtdotjs,
	},
	{
		name: "Angular",
		icon: FaAngular,
	},
	{
		name: "Typescript",
		icon: TbBrandTypescript,
	},
	{
		name: "NodeJs",
		icon: FaNodeJs,
	},
	{
		name: "PugJs",
		icon: SiPug,
	},
	{
		name: "Express",
		icon: SiExpress,
	},
	{
		name: "PHP",
		icon: FaPhp,
	},
	{
		name: "Laravel",
		icon: FaLaravel,
	},
	{
		name: "WordPress",
		icon: FaWordpress,
	},
	{
		name: "C/C++",
		icon: TbBrandCpp,
	},
	{
		name: "Python",
		icon: FaPython,
	},
	{
		name: "SASS",
		icon: FaSass,
	},
	{
		name: "Bootstrap",
		icon: TbBrandBootstrap,
	},
	{
		name: "TailwindCSS",
		icon: TbBrandTailwind,
	},
	{
		name: "Docker",
		icon: FaDocker,
	},
	{
		name: "Postgres",
		icon: BiLogoPostgresql,
	},
	{
		name: "Postman",
		icon: SiPostman,
	},
	{
		name: "Git",
		icon: BsGit,
	},
	{
		name: "Github",
		icon: FaGithub,
	},
	{
		name: "ChatGPT",
		icon: GiArtificialIntelligence,
	},
	{
		name: "Bash",
		icon: SiGnubash,
	},
	{
		name: "Markdown",
		icon: BsMarkdown,
	},
];

export const workData = [
	{
		company: "Terra Systems Pte Ltd",
		designation: "Full Stack Developer",
		duration: "May 2022 - Present",
		companyImg: "1ds.png",
		description: (
			<>
				<ul>
					<li>
						I work on Reviniti, an analytics product designed for e-commerce
						players in the bid management domain. Solely migrated the old
						codebase from a templating engine (PugJS) to React with TypeScript.
					</li>
					<li>
						Engaged in developing new features, refactoring code, enhancing
						product performance, bug fixes and contributing towards achieving
						high scalability for the product.
					</li>
				</ul>
			</>
		),
	},
	{
		company: "Asticom Technology",
		designation: "Full Stack Developer",
		duration: "July 2019 - April 2022",
		companyImg: "atc.png",
		description: (
			<>
				<ul>
					<li>
						Engaged in creating comprehensive client-specific and syndicated
						research reports, along with SEO-focused articles and collateral
						materials within the domains of chemicals, materials, consumer
						goods, and industrial goods.
					</li>
					<li>
						Expertly estimated market valuations and conducted primary research
						in collaboration with industry experts to validate data, extract
						valuable market insights.
					</li>
				</ul>
			</>
		),
	},
	{
		company: "Techtronic Industries",
		designation: "Front End Developer",
		duration: "August 2015 - June 2019",
		companyImg: "tti.png",
		description: (
			<>
				<ul>
					<li>
						I have a strong background in conducting in-depth research and
						analysis. I am skilled in gathering data from various sources,
						synthesizing information, and creating comprehensive reports that
						provide valuable market insights. I am meticulous when it comes to
						data validation and ensure that the reports are accurate and
						reliable.
					</li>
					<li>
						I understand the importance of search engine optimization in driving
						organic traffic to your website. I have experience in crafting
						engaging and informative articles that are optimized for relevant
						keywords. By incorporating SEO best practices, I can help improve
						your online visibility and attract a larger audience.
					</li>
				</ul>
			</>
		),
	},
];

export const projectsData = [
	{
		type: "WEB-APP",
		title: "Portfolio Website",
		image: "portfolio-website",
		link: null,
		source: "https://github.com/codechief09/portfolio-website",
	},
	{
		type: "WEB-APP",
		title: "Weather App",
		image: "weather-app",
		link: "https://vaheedsk36.github.io/weather-app/",
		source: "https://github.com/Codechief09/wether-app",
	},
	{
		type: "WEB-APP",
		title: "Landing Page",
		image: "landing-page",
		link: "https://vaheedsk36.github.io/demo-frontend-bootcamp",
		source: "https://github.com/Codechief09/landingpage",
	},
	{
		type: "WEB-APP",
		title: "Guess Game",
		image: "guess-game",
		link: "https://vaheedsk36.github.io/guess-my-number",
		source: "https://github.com/Codechief09/guess-game",
	},
	{
		type: "WEB-APP",
		title: "Notes App",
		image: "react-notes-app",
		link: "https://vaheedsk36.github.io/react-notes-app/",
		source: "https://github.com/Codechief09/react-note-app-project",
	},
	{
		type: "PROJECT",
		title: "Delta Assistant",
		image: "delta-assistant",
		link: "",
		source: "https://github.com/Codechief09/delta-assistant",
	},
	{
		type: "WEB-APP",
		title: "Text Utility App",
		image: "text-utility-app",
		link: "https://vaheedsk36.github.io/text-utility-app/",
		source: "https://github.com/Codechief09/text-utility-app",
	},
];

export const socialMediaLinks = [
	{
		href: "https://github.com/vaheedsk36",
		icon: FaGithub,
		backgroundColor: "gray.700",
		hoverColor: "gray.600",
	},
	// {
	// 	href: "https://www.instagram.com/codersk36/",
	// 	icon: FaInstagram,
	// 	backgroundColor: "social.instagram",
	// 	hoverColor: "social.instagramHover",
	// },
	// {
	// 	href: "https://www.linkedin.com/in/sk36/",
	// 	icon: FaLinkedin,
	// 	backgroundColor: "social.linkedin",
	// 	hoverColor: "social.linkedinHover",
	// },
	// {
	// 	href: "https://twitter.com/codersk36",
	// 	icon: FaTwitter,
	// 	backgroundColor: "social.twitter",
	// 	hoverColor: "social.twitterHover",
	// },
	// {
	// 	href: "https://codersk36.hashnode.dev/",
	// 	icon: FaHashnode,
	// 	backgroundColor: "social.hashnode",
	// 	hoverColor: "social.hashnodeHover",
	// },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
