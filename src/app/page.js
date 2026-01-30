'use client';
import React, { Fragment } from 'react';
import Image from 'next/image';
import {
	FaGithub,
	FaLaravel,
	FaPhone,
	FaPython,
	FaReact,
	FaServer,
	FaUbuntu,
	FaWhatsapp,
} from 'react-icons/fa';
import {
	SiApache,
	SiFlask,
	SiMariadb,
	SiMysql,
	SiCisco,
	SiNextdotjs,
	SiPostgresql,
	SiReact,
	SiLaravel,
	SiPfsense,
	SiUbiquiti,
	SiRuby,
	SiPhp,
	SiOwasp,
	SiSqlite,
} from 'react-icons/si';
import { DiDjango } from 'react-icons/di';
import { FcDownload, FcLinux } from 'react-icons/fc';
import { FaWindows } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import Media from 'react-media';

export default function Home() {
	const CustomNextArrow = (onClickHandler, hasNext, label) => {
		return (
			<button
				type='button'
				onClick={onClickHandler}
				disabled={!hasNext}
				aria-label={label}
				className='bg-[#05053f] absolute z-10 top-1/2 right-0 rounded-full -translate-y-1/2 p-4'>
				<FontAwesomeIcon
					icon={faChevronRight}
					color='white'
				/>
			</button>
		);
	};
	const CustomPrevArrow = (onClickHandler, hasNext, label) => {
		return (
			<button
				type='button'
				onClick={onClickHandler}
				disabled={!hasNext}
				aria-label={label}
				className='bg-[#05053f] absolute z-50 top-1/2 left-0 rounded-full -translate-y-1/2 p-4'>
				<FontAwesomeIcon
					icon={faChevronLeft}
					color='white'
				/>
			</button>
		);
	};

	const whatIDo = {
		'Software Development': [
			{
				id: 1,
				name: 'Design and build web applications',
				image: '/webapp.webp',
				description:
					'Designed and developed production-ready web applications using Django, Flask, React, and Next.js, focusing on clean architecture, usability, and maintainability in institutional environments.',
			},
			{
				id: 2,
				name: 'System digitization and automation',
				image: '/automation.jpg',
				description:
					'Digitized manual and paper-based workflows into secure, web-based systems, improving process efficiency, data accuracy, and traceability across institutional operations.',
			},
			{
				id: 3,
				name: 'API-driven systems',
				image: '/api.png',
				description:
					'Designed and implemented RESTful APIs to support modular, scalable systems and enable seamless integration between frontend applications and backend services.',
			},
			{
				id: 4,
				name: 'Database-backed applications',
				image: '/db.webp',
				description:
					'Built applications backed by relational databases (PostgreSQL, MySQL, SQLite), implementing proper data models, validations, and queries to ensure performance and data integrity.',
			},
		],
		'Network Administration': [
			{
				id: 1,
				name: 'Network design and implementation',
				image: '/networking.png',
				description:
					'Designed and deployed LAN infrastructures including IP addressing, VLAN segmentation, switching, and routing to deliver reliable and well-structured network connectivity.',
			},
			{
				id: 2,
				name: 'Firewall and security configuration',
				image: '/firewall.webp',
				description:
					'Configured and managed firewall and network security controls, including routing, NAT, and access rules, to protect internal resources and regulate network traffic.',
			},
			{
				id: 3,
				name: 'Server deployment and maintenance',
				image: '/serverman.jpg',
				description:
					'Installed, configured, and maintained Windows and Linux servers, ensuring system availability, performance monitoring, backups, and routine maintenance.',
			},
			{
				id: 4,
				name: 'End-user and institutional ICT support',
				image: '/support.png',
				description:
					'Provided day-to-day ICT support to end users in office and lab environments, resolving hardware, software, and connectivity issues while supporting system adoption and training.',
			},
		],
	};

	const skills = {
		'Software Development Skills': [
			{
				id: 1,
				name: 'Languages',
				items: [
					{ id: 1, name: 'Python', icon: <FaPython size={32} /> },
					{ id: 2, name: 'JavaScript', icon: <FaReact size={32} /> },
					{ id: 3, name: 'Ruby', icon: <SiRuby size={32} /> },
					{ id: 4, name: 'PHP', icon: <SiPhp size={32} /> },
				],
			},
			{
				id: 2,
				name: 'Frameworks',
				items: [
					{ id: 1, name: 'Django', icon: <DiDjango size={32} /> },
					{ id: 2, name: 'Flask', icon: <SiFlask size={32} /> },
					{ id: 3, name: 'Next.js', icon: <SiNextdotjs size={32} /> },
					{ id: 4, name: 'Laravel', icon: <SiLaravel size={32} /> },
				],
			},
			{
				id: 3,
				name: 'Databases',
				items: [
					{ id: 1, name: 'PostgreSQL', icon: <SiPostgresql size={32} /> },
					{ id: 2, name: 'MySQL/MariaDB', icon: <SiMariadb size={32} /> },
					{ id: 3, name: 'SQLite', icon: <SiSqlite size={32} /> },
				],
			},
		],
		'Systems & Network Skills': [
			{
				id: 1,
				name: 'Networking',
				items: [
					{
						id: 1,
						name: 'L2/L3 Switching (Cisco)',
						icon: <SiCisco size={32} />,
					},
					{ id: 2, name: 'Unifi Wireless', icon: <SiUbiquiti /> },
				],
			},
			{
				id: 2,
				name: 'Firewalls',
				items: [
					{ id: 1, name: 'pfSense', icon: <SiPfsense size={32} /> },
					{ id: 2, name: 'Owasp Mod-Security', icon: <SiOwasp size={32} /> },
				],
			},
			{
				id: 3,
				name: 'Servers',
				items: [
					{ id: 1, name: 'Windows Server', icon: <FaWindows size={32} /> },
					{ id: 2, name: 'Ubuntu', icon: <FaUbuntu size={32} /> },
				],
			},
		],
	};

	const projects = [
		{
			id: 1,
			name: 'Attendance Management System (Final Year Project)',
			description: '',
			image: '',
			link: '',
		},
		{
			id: 2,
			name: 'Gowns Issuance System',
			description: '',
			image: '',
			link: '',
		},
		{
			id: 3,
			name: 'Expo Registration System (QR-based)',
			description: '',
			image: '',
			link: '',
		},
		{ id: 4, name: 'Expo Website', description: '', image: '', link: '' },
		{ id: 5, name: 'Hotel Website', description: '', image: '', link: '' },
		{
			id: 6,
			name: 'E-Commerce Web Application',
			description: '',
			image: '',
			link: '',
		},
		{
			id: 7,
			name: 'Project Management System',
			description: '',
			image: '',
			link: '',
		},
	];
	const engangements = [
		{
			id: 2,
			name: 'End-to-end network deployments',
			description:
				'Planned and implemented complete network infrastructures from ISP handoff to internal LAN connectivity, including IP addressing, VLAN segmentation, routing, switching, and firewall integration to deliver secure and reliable internet access for offices and computer labs.',
			image: '/deployment.png',
		},
		{
			id: 3,
			name: 'Cabling & cabinet installations',
			description:
				'Executed structured cabling projects involving network cabinet installation, patch panel termination, cable pulling, labeling, and cable management to ensure organized, maintainable, and standards-compliant network environments.',
			image: '/patchpanel.jpeg',
		},
		{
			id: 4,
			name: 'UniFi wireless deployments',
			description:
				'Deployed and managed Ubiquiti UniFi wireless networks, including access point adoption, controller configuration, SSID design, and ongoing monitoring to provide stable, scalable wireless coverage for multi-user environments.',
			image: '/unifi.webp',
		},
		{
			id: 5,
			name: 'pfSense firewall implementations',
			description:
				'Configured and maintained pfSense firewalls to handle routing, NAT, and firewall rules, enabling secure network segmentation, controlled internet access, and improved overall network security.',
			image: '/pfsense.png',
		},
		{
			id: 6,
			name: 'IP telephony setup and support',
			description:
				'Installed, configured, and supported IP telephony systems, including handset provisioning and basic troubleshooting, ensuring reliable voice communication within institutional and office environments.',
			image: '/xorcom.png',
		},
	];
	return (
		<main className='grid h-screen items-center justify-between w-full overflow-y-visible overflow-x-hidden'>
			{/* Hero */}
			<div className='w-full h-svh grid grid-flow-col items-center justify-center gap-6 px-8 lg:px-48'>
				<div className=''>
					<div className=''>
						<h1 className='font-bold text-4xl text-left'>Koome Franklin</h1>
						<h2 className='font-bold text-2xl text-left'>
							Software Developer & Systems / Network Administrator
						</h2>
						<div className='text-left self-center text-lg'>
							Junior Software Developer with hands-on experience in: Designing
							and supporting production web applications Deploying and
							maintaining enterprise ICT infrastructure Emphasis on: Reliability
							Security Maintainability User-focused system
						</div>
					</div>
					<div className='grid grid-flow-col gap-6'>
						<button
							title='View Projects'
							className='rounded-md  bg-[#2AB090] text-white font-bold'>
							<Link
								href='#projects'
								className='flex p-2 text-center'>
								View Projects
							</Link>
						</button>
						<button
							title='Download CV'
							className='rounded-md bg-[#2AB090] text-white font-bold'>
							<Link
								href='#'
								className='flex p-2 text-center'>
								Download CV
							</Link>
						</button>
						<button
							title='Contact Me'
							className='rounded-md bg-[#2AB090] text-white font-bold'>
							<Link
								href='#contact'
								className='flex p-2 text-center '>
								Contact Me
							</Link>
						</button>
					</div>
				</div>
				<div className='rounded-full self-center'>
					<Image
						src='/me.jpeg'
						alt='Me'
						width={500}
						height={500}
						className='rounded-full'
					/>
				</div>
			</div>
			<div className='grid w-full'>
				{/* Nav */}
				<div className='w-full sticky top-0 left-0 min-h-12 z-10 px-4 bg-[#1B1B1B] text-white'>
					<div className='w-full h-full justify-around flex flex-nowrap gap-2'>
						<button className='p-2'>
							<Link href='#about'>About Me</Link>
						</button>
						<button className='p-2'>
							<Link href='#snapshot'>Snapshot</Link>
						</button>
						<button className='p-2'>
							<Link href='#skills'>Skills</Link>
						</button>
						<button className='p-2'>
							<Link href='#experience'>Experience</Link>
						</button>
						<button className='p-2'>
							<Link href='#projects'>Software Projects</Link>
						</button>
						<button className='p-2'>
							<Link href='#contact'>Contact Me</Link>
						</button>
					</div>
				</div>
				<div className='lg:w-2/3 md:w-5/6 w-5/6 grid self-center place-self-center'>
					{/* About Me */}

					<div
						className=''
						id='about'>
						<p className='text-center font-bold text-2xl'>What I Do</p>
						<div className='grid lg:grid-flow-col gap-2'>
							<div className='shadow-lg p-2'>
								<h3 className='text-center font-bold text-lg'>
									Software Development
								</h3>
								{whatIDo &&
									whatIDo['Software Development'].map((item) => (
										<div
											key={item.id}
											className='flex flex-row p-4 gap-3 shadow-md'>
											<Image
												src={item.image}
												alt={item.name}
												width={200}
												height={200}
											/>
											<div className=''>
												<h3 className='font-bold text-lg self-center'>
													{item.name}
												</h3>
												<p>{item.description}</p>
											</div>
										</div>
									))}
							</div>
							<div className='shadow-lg p-2'>
								<h3 className='text-center font-bold text-lg'>
									Network Administration
								</h3>
								{whatIDo &&
									whatIDo['Network Administration'].map((item) => (
										<div
											key={item.id}
											className='flex flex-row p-4 gap-3 shadow-md'>
											<div className=''>
												<h3 className='font-bold text-lg self-center'>
													{item.name}
												</h3>
												<p>{item.description}</p>
											</div>
											<Image
												src={item.image}
												alt={item.name}
												width={200}
												height={200}
											/>
										</div>
									))}
							</div>
						</div>
					</div>
					{/* Professional Snapshot */}
					<div
						className='px-10 py-2 w-full shadow-lg'
						id='snapshot'>
						<h2 className='text-center font-bold text-2xl'>
							Professional Snapshot
						</h2>
						<div className='grid gap-2 justify-between'>
							<div className=''>
								<p className='font-bold text-lg'>Full-Stack Development</p>
								<ul className='indent-2 list-disc'>
									<li className='flex'>
										<DiDjango />
										Django
									</li>
									<li className='flex'>
										<SiFlask />
										Flask
									</li>
									<li className='flex'>
										<SiNextdotjs />
										Next.js
									</li>
									<li className='flex'>
										<SiReact />
										React
									</li>
									<li className='flex'>
										<SiLaravel />
										Laravel
									</li>
									<li className='flex'>
										<SiPostgresql />
										Postgresql
									</li>
									<li className='flex'>
										<SiMariadb />
										MySQL/Mariadb
									</li>
								</ul>
							</div>
							<div className=''>
								<p className='font-bold text-lg'>
									Systems & Network Administration
								</p>
								<ul className='indent-2 list-disc'>
									<li className='flex'>
										<SiPfsense />
										pfSense installation and Configuration
									</li>
									<li className='flex'>
										<SiCisco />
										L2/L3 Switching
									</li>
									<li className='flex'>
										<SiUbiquiti />
										Unifi Access point Adoption and Management
									</li>
									<li className='flex'>
										<FaWindows />
										Windows servers Configuration and Maintenance
									</li>
									<li className='flex'>
										<FcLinux />
										Linux Servers Configuration and Maintenance
									</li>
									<li className='flex'>
										<FaServer />
										Web Server Management
									</li>
								</ul>
							</div>
							<div className=''>
								<p className='font-bold text-lg'>Institutional Experience</p>
								<ul className='indent-2 list-disc'>
									<li>Production systems used in real organizations</li>
								</ul>
							</div>
							<div className=''>
								<p className='font-bold text-lg'>End-to-End Delivery</p>
								<ul className='indent-2 list-disc'>
									<li>From requirements → deployment → support</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Skills & Technologies */}
					<div
						className='px-10 py-2 w-full'
						id='skills'>
						<h2 className='text-center font-bold text-2xl'>
							Skills & Technologies
						</h2>
						<div className='grid gap-2 justify-around'>
							<div className=''>
								<p className='font-bold text-lg'>Software Engineering Skills</p>
								<div className='flex flex-wrap gap-4'>
									{skills &&
										skills['Software Development Skills'].map(
											(skillCategory) => (
												<div
													key={skillCategory.id}
													className='shadow-lg p-2 border rounded-md'>
													<p className='font-semibold'>{skillCategory.name}:</p>
													<div className='indent-2 gap-4'>
														{skillCategory.items.map((item, index) => (
															<div
																key={index}
																className='flex flex-row gap-4'>
																{item.icon}
																{item.name}
															</div>
														))}
													</div>
												</div>
											),
										)}
								</div>
							</div>
							<div className=''>
								<p className='font-bold text-lg'>Systems & Network Skills</p>
								<div className='flex flex-wrap gap-4'>
									{skills &&
										skills['Systems & Network Skills'].map((skillCategory) => (
											<div
												key={skillCategory.id}
												className='shadow-md p-2 border rounded-md'>
												<p className='font-semibold'>{skillCategory.name}:</p>
												<div className='indent-2 gap-4'>
													{skillCategory.items.map((item, index) => (
														<div
															key={index}
															className='flex flex-row gap-4'>
															{item.icon}
															{item.name}
														</div>
													))}
												</div>
											</div>
										))}
								</div>
							</div>
						</div>
					</div>
					{/* Professional Experience */}
					<div
						className='px-10 py-2 w-full shadow-lg'
						id='experience'>
						<h2 className='text-center font-bold text-2xl'>Work Experience</h2>
						<ul className='indent-2 list-disc'>
							<li>
								ICT Assistant — KISE (July 2024 – Present)
								<p>Software Development and support of institutional systems</p>
								<p>
									UI/UX improvements Application troubleshooting and user
									support
								</p>
								<p>Infrastructure Network design and maintenance</p>
								<p>
									Firewall configuration (pfSense) Switch and wireless
									management
								</p>
								<p>Server maintenance and backups</p>
							</li>
							<li>
								ICT Intern — KISE (Sep 2023 – Jun 2024)
								<p>Participated in full SDLC</p>
								<p>Supported helpdesk and system users</p>
								<p>Assisted in server and network maintenance</p>
							</li>
							<li>
								Industrial Attachment — KISE (May 2023 – Aug 2023)
								<p> Asset management system development</p>
								<p>Hardware installation and network cabling</p>
							</li>
						</ul>
					</div>
					{/* Software Projects */}
					<div
						className='px-10 py-2 w-full'
						id='projects'>
						<h2 className='text-center font-bold text-2xl'>
							Software Projects
						</h2>
						<div className='overflow-x-hidden w-full'>
							<p>
								Each project follows the same template: Problem Solution
								Technologies Outcome
							</p>
							<Media
								queries={{
									small: '(max-width: 599px)',
									medium: '(min-width: 600px) and (max-width: 1199px)',
									large: '(min-width: 1200px)',
								}}>
								{(matches) => (
									<Fragment>
										{matches.small && (
											<Carousel
												infiniteLoop={true}
												autoPlay={true}
												showIndicators={false}
												showThumbs={false}
												interval={2000}
												centerMode={true}
												centerSlidePercentage={80}
												renderArrowNext={CustomNextArrow}
												renderArrowPrev={CustomPrevArrow}
												className='grid gap-4'>
												{projects &&
													projects.map((project) => (
														<div
															key={project.id}
															className='shadow-lg rounded-md border flex flex-row p-2'>
															{/* <Image
																src={project.image}
																alt={project.name}
																width={150}
																height={100}
															/> */}
															<div className='self-center'>
																<h3 className='font-bold'>{project.name}</h3>
																<p>{project.description}</p>
															</div>
														</div>
													))}
											</Carousel>
										)}
										{matches.medium && (
											<Carousel
												infiniteLoop={true}
												autoPlay={true}
												showIndicators={false}
												showThumbs={false}
												interval={2000}
												centerMode={true}
												centerSlidePercentage={40}
												renderArrowNext={CustomNextArrow}
												renderArrowPrev={CustomPrevArrow}
												className='grid gap-4'>
												{projects &&
													projects.map((project) => (
														<div
															key={project.id}
															className='shadow-lg rounded-md border flex flex-row p-2'>
															{/* <Image
																src={project.image}
																alt={project.name}
																width={200}
																height={200}
															/> */}
															<div className='self-center'>
																<h3 className='font-bold'>{project.name}</h3>
																<p>{project.description}</p>
															</div>
														</div>
													))}
											</Carousel>
										)}
										{matches.large && (
											<Carousel
												infiniteLoop={true}
												autoPlay={true}
												showIndicators={false}
												showThumbs={false}
												interval={2000}
												centerMode={true}
												centerSlidePercentage={33.33}
												renderArrowNext={CustomNextArrow}
												renderArrowPrev={CustomPrevArrow}
												className='grid gap-4'>
												{projects &&
													projects.map((project) => (
														<div
															key={project.id}
															className='shadow-lg rounded-md border grid grid-flow-col p-2 gap-2'>
															{/* <Image
																src={project.image}
																alt={project.name}
																width={200}
																height={200}
															/> */}
															<div className='self-center'>
																<h3 className='font-bold'>{project.name}</h3>
																<p>{project.description}</p>
															</div>
														</div>
													))}
											</Carousel>
										)}
									</Fragment>
								)}
							</Media>
						</div>
					</div>
					{/* Infrastructure & Technical Engagements */}
					<div className='px-10 py-2 w-full'>
						<h2 className='text-center font-bold text-2xl'>
							Infrastructure & Technical Engagements
						</h2>
						<div className=''>
							<div className='grid lg:grid-cols-2 gap-4'>
								{engangements &&
									engangements.map((engagement) => (
										<div
											key={engagement.id}
											className='flex flex-row p-4 shadow-lg gap-2'>
											<Image
												src={engagement.image}
												alt={engagement.name}
												width={200}
												height={200}
											/>
											<div className=''>
												<h3 className='font-bold'>{engagement.name}</h3>
												<p>{engagement.description}</p>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
					{/* Tools & Work Approach */}
					<div className='px-10 py-2 w-full'>
						<h2 className='text-center font-bold text-2xl'>
							Tools & Work Approach
						</h2>
						<div className=''>
							Documentation practices User training and support
							Security-conscious design Reliability and uptime focus
							Collaboration with non-technical users
						</div>
					</div>
					{/* Contact*/}
					<div
						className='px-10 py-2 w-5/6 self-center'
						id='contact'>
						<h2 className='text-center font-bold text-2xl'>Get In Touch</h2>
						<div className=''>
							<div className='grid gap-4 grid-flow-col justify-center'>
								<Link
									href='mailto:frankoomef@gmail.com'
									title='Email: frankoomef@gmail.com'
									className='flex flex-row'>
									<MdOutlineMail size={32} />
								</Link>
								<Link
									href='tel:+254768597648'
									title='Mobile Phone: +254768597648'
									className='flex flex-row'>
									<FaPhone size={32} />
								</Link>
								<Link
									href='https://wa.me/254768597648'
									title='WhatsApp: +254768597648'
									className='flex flex-row'>
									<FaWhatsapp size={32} />
								</Link>
								<Link
									href='https://github.com/Koomefranklin'
									title='Github'
									className='flex flex-row'>
									<FaGithub size={32} />
								</Link>
								<button
									className='flex flex-row'
									title='Download CV'>
									<FcDownload size={32} />
								</button>
								{/* (Software / Systems or Combined) */}
							</div>
							{/* contact form */}
							<form className='grid gap-4 shadow-lg place-self-center w-full p-4'>
								<label htmlFor='name'>Name:</label>
								<input
									type='text'
									id='name'
									name='name'
									required
									className='border-2 rounded-md'
								/>
								<label htmlFor='email'>Email:</label>
								<input
									type='email'
									id='email'
									name='email'
									required
									className='border-2 rounded-md'
								/>
								<label htmlFor='phone'>Phone:</label>
								<input
									type='tel'
									id='phone'
									name='phone'
									required
									className='border-2 rounded-md'
								/>
								<label htmlFor='message'>Message:</label>
								<textarea
									id='message'
									name='message'
									rows='4'
									required
									className='border-2 rounded-md'
								/>
								<button
									type='submit'
									className='p-3 bg-[#2AB090] rounded-md place-self-center w-fit text-white'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
