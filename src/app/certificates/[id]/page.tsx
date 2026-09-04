import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, certificates } from '../../../data/certificates';
import CertificatePageClient from './CertificatePageClient';
import CertificateDetailsClient from './CertificateDetailsClient';

// Per-certificate skill context for unique, descriptive meta descriptions
const certSkillDescriptions: Record<string, string> = {
 'Machine Learning with Python':
 'validates practical ML skills including supervised learning, regression, classification, and model evaluation using Python',
 'AI Infrastructure & Operations':
 'covers AI infrastructure fundamentals including deployment pipelines, MLOps workflows, and operational considerations for production AI systems',
 'LLM Deployment & Ethical AI':
 'demonstrates competency in deploying large language models, prompt engineering at scale, and responsible AI governance frameworks',
 'AI Workflow: Model Deployment':
 'validates end-to-end AI deployment skills including model packaging, monitoring, and enterprise-scale inference pipelines',
 'AI Python for Beginners':
 'covers foundational AI programming in Python including data manipulation, NumPy, Pandas, and building first ML prototypes',
 'AI Workflow: Business Priorities':
 'demonstrates ability to align AI initiatives with business goals, define KPIs, and prioritize use cases for maximum ROI',
 'AI Workflow: Data Analysis':
 'validates skills in statistical analysis, hypothesis testing, and deriving actionable insights from structured and unstructured data',
 'AI Workflow: Feature Engineering':
 'covers feature selection, transformation, scaling techniques, and bias detection methods to improve model performance',
 'AI Workflow: ML & NLP':
 'validates end-to-end ML pipeline skills including model training, evaluation, visual recognition, and NLP techniques',
 'Computer Vision Intro':
 'covers foundational computer vision concepts including image processing, feature detection, and convolutional neural networks',
 'Deep Learning for CV':
 'demonstrates advanced deep learning skills for computer vision including CNNs, transfer learning, and object detection architectures',
 'AI & ML Engineering':
 'validates comprehensive AI/ML engineering competency including model design, training pipelines, and production deployment on Azure',
 'Prompt Engineering':
 'validates advanced prompt engineering skills including context design, chain-of-thought reasoning, and optimizing LLM outputs',
 'Google Prompting Essentials':
 'covers foundational to advanced prompting techniques for Google AI tools, including context framing and iterative refinement strategies',
 'Design Prompts for Tasks':
 'validates ability to craft effective prompts for everyday work tasks, from document summarization to workflow automation with AI',
 'Use AI as Creative Partner':
 'demonstrates skills in leveraging AI for creative tasks including content generation, brainstorming, and collaborative problem-solving',
 'Speed Up Data Analysis':
 'covers using AI tools to accelerate data analysis workflows, automated reporting, and presentation building from raw datasets',
 'Intro to Cybersecurity':
 'covers foundational cybersecurity concepts including threat landscape, security controls, risk management, and defense-in-depth strategies',
 'Cyber Security Fundamentals':
 'validates core cybersecurity knowledge including network security, cryptography, incident response, and security governance frameworks',
 'Cybersecurity Essentials':
 'covers essential security practices including access control, vulnerability management, security monitoring, and compliance fundamentals',
 'Tools & Cyberattacks':
 'demonstrates understanding of cybersecurity tooling, attack vectors, penetration testing methodologies, and defensive countermeasures',
 'Developing Solutions AZ-204':
 'validates Azure development skills including compute solutions, storage, security, monitoring, and integrating third-party services on Azure',
 'IT & AWS Cloud':
 'covers core AWS cloud services including EC2, S3, IAM, VPC, and foundational cloud architecture principles',
 'Intro to IT & AWS':
 'validates foundational IT and cloud computing knowledge including AWS core services, deployment models, and cloud best practices',
 'Technical Support Fundamentals':
 'covers IT support fundamentals including troubleshooting methodologies, customer service, operating systems, and networking basics',
 'Technical Support Fundamentals II':
 'builds on core IT support skills with advanced troubleshooting, system administration, and enterprise support practices',
 'Git and GitHub':
 'validates proficiency in version control with Git and GitHub including branching strategies, pull requests, and collaborative workflows',
 'Python Full Stack Internship':
 'demonstrates full-stack Python development skills including Django/Flask backends, REST APIs, database design, and frontend integration',
 'MERN Stack Developer Intern':
 'validates full-stack JavaScript skills using MongoDB, Express.js, React, and Node.js to build scalable web applications',
 'Programming in Python':
 'validates core Python programming skills including data structures, control flow, functions, OOP, and writing production-quality code',
 'Programming with JavaScript':
 'covers JavaScript fundamentals including DOM manipulation, event handling, async programming, and ES6+ syntax features',
 'Android Mobile App Dev':
 'demonstrates Android development skills including UI design with Jetpack Compose, app architecture, and publishing to Google Play',
 'JavaScript Intermediate':
 'validates intermediate JavaScript skills including closures, prototypes, async/await, error handling, and functional programming patterns',
 'JavaScript Basic':
 'validates foundational JavaScript skills including variables, operators, control flow, functions, and basic DOM manipulation',
 'Python Basic':
 'validates foundational Python skills including data types, conditionals, loops, functions, and basic problem-solving',
 'CSS':
 'validates CSS skills including selectors, box model, flexbox, grid, responsive design, and modern layout techniques',
 'SQL Basic':
 'covers SQL fundamentals including SELECT queries, JOINs, aggregations, subqueries, and relational database design principles',
 'Programming in C':
 'validates C programming skills including pointers, memory management, data structures, and low-level systems programming concepts',
 'Programming for Everybody':
 'covers universal programming fundamentals using Python including variables, loops, functions, and computational thinking for beginners',
 'Crash Course On Python':
 'provides foundational Python programming skills including syntax, data structures, loops, functions, and problem-solving with code',
 'Python for Data Science':
 'validates Python skills for data science including NumPy, Pandas, Matplotlib, and building data pipelines for analysis and ML',
 'Python Development':
 'validates Python development skills including best practices, testing, debugging, and building maintainable production applications',
 'Data Analytics Automation':
 'demonstrates skills in automating data analytics workflows including ETL processes, dashboard creation, and business intelligence reporting',
 'Data Analytics Lab':
 'validates hands-on data analytics skills including exploratory data analysis, visualization, statistical testing, and BI tool proficiency',
 'Intro to Data Analytics':
 'covers data analytics fundamentals including data collection, cleaning, analysis techniques, and communicating insights to stakeholders',
 'English Composition I':
 'validates academic writing skills including argument structure, research methodology, citation practices, and clear technical communication',
};

// Helper to build category-page descriptions with actual issuer names
const categoryIssuerLists: Record<string, string> = {
 google: 'Google',
 ibm: 'IBM',
 microsoft: 'Microsoft',
 meta: 'Meta',
 nvidia: 'NVIDIA',
 hackerrank: 'HackerRank',
 aws: 'AWS',
 universities: 'DeepLearning.AI, University of Colorado, University of London, Duke University, University of Michigan, EduSkills, Codec Technologies, and AICTE',
};

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
	const certParams = certificates.map((c) => ({ id: c.id }));
	const categoryParams = categories.map((cat) => ({ id: cat.id }));
	return [...certParams, ...categoryParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;

	// Check if it's a category first
	const category = categories.find((c) => c.id === id);
	if (category) {
		const count = certificates.filter((c) => c.category === id).length;
		const title = `${category.label} Certificates | Soumya Chakraborty`;
		const description = `${count} professional certificates in ${category.label} from ${categoryIssuerLists[category.id] || category.label} earned by Soumya Chakraborty`;
		const url = `https://chksoumya.in/certificates/${id}/`;

		return {
			title,
			description,
			category: category.label,
			keywords: [category.label, 'certificates', 'Soumya Chakraborty', 'professional development', 'online courses', 'full stack developer'],
			openGraph: {
				title,
				description,
				url,
				type: 'website',
				siteName: 'Soumya Chakraborty Portfolio',
				images: [
					{
						url: 'https://chksoumya.in/og-image.png',
						width: 1200,
						height: 630,
						alt: `${category.label} Certificates - Soumya Chakraborty`,
					},
				],
			},
			twitter: {
				card: 'summary_large_image',
				title,
				description,
				images: ['https://chksoumya.in/og-image.png'],
			},
			alternates: {
				canonical: url,
			},
			robots: {
				index: true,
				follow: true,
				googleBot: {
					index: true,
					follow: true,
					'max-image-preview': 'large',
					'max-snippet': -1,
					'max-video-preview': -1,
				},
			},
		};
	}

	// Otherwise, check if it's an individual certificate
	const cert = certificates.find((c) => c.id === id);

	if (!cert) {
		return {
			title: 'Certificate Not Found | Soumya Chakraborty',
			description: 'The requested certificate could not be found.',
			robots: { index: false, follow: true },
		};
	}

	const categoryObj = categories.find((c) => c.id === cert.category);
	const skillContext = certSkillDescriptions[cert.title] || `demonstrates competency and professional expertise in ${cert.category}`;
	const title = `${cert.title} — ${cert.issuer} Certificate | Soumya Chakraborty`;
	const description = `${cert.title} certificate by ${cert.issuer} (${cert.date}): This credential ${skillContext}, held by Soumya Chakraborty, Full Stack Developer. View the verified PDF.`;
	const url = `https://chksoumya.in/certificates/${cert.id}/`;

	return {
		title,
		description,
		category: categoryObj?.label || cert.category,
		keywords: [
			cert.title,
			cert.issuer,
			cert.category,
			'Certificate',
			'Soumya Chakraborty',
			'Professional Development',
			'Online Course',
			`${cert.issuer} Certified`,
			'Full Stack Developer',
			'React',
			'Next.js',
			'Node.js',
			'Python',
		],
		openGraph: {
			title,
			description,
			url,
			type: 'article',
			siteName: 'Soumya Chakraborty Portfolio',
			images: [
				{
					url: 'https://chksoumya.in/og-image.png',
					width: 1200,
					height: 630,
					alt: `${cert.title} — ${cert.issuer} Certificate`,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: ['https://chksoumya.in/og-image.png'],
		},
		alternates: {
			canonical: url,
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-image-preview': 'large',
				'max-snippet': -1,
				'max-video-preview': -1,
			},
		},
	};
}

export default async function CertificatePage({ params }: Props) {
	const { id } = await params;
	const category = categories.find((c) => c.id === id);

	if (category) {
		const SITE = 'https://chksoumya.in';
		const url = `${SITE}/certificates/${category.id}/`;
		const certs = certificates.filter((c) => c.category === category.id);

		const collectionLd = {
			'@context': 'https://schema.org',
			'@type': 'CollectionPage',
			'@id': `${url}#collection`,
			url,
			name: `${category.label} Certificates — Soumya Chakraborty`,
			description: `${certs.length} professional certificates in ${category.label} earned by Soumya Chakraborty.`,
			isPartOf: { '@id': `${SITE}/#website` },
			about: { '@id': `${SITE}/#person` },
			inLanguage: 'en-IN',
			mainEntity: {
				'@type': 'ItemList',
				numberOfItems: certs.length,
				itemListElement: certs.map((c, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					name: c.title,
					url: `${SITE}/certificates/${c.id}/`,
				})),
			},
		};

		const breadcrumbLd = {
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
				{ '@type': 'ListItem', position: 2, name: 'Certificates', item: `${SITE}/#certificates` },
				{ '@type': 'ListItem', position: 3, name: category.label, item: url },
			],
		};

		return (
			<>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
				/>
				<CertificateDetailsClient />
			</>
		);
	}

	// For individual cert pages — let not-found.tsx handle invalid routes
	const cert = certificates.find((c) => c.id === id);
	if (!cert) {
		notFound();
	}

	return <CertificatePageClient paramsPromise={params} />;
}
