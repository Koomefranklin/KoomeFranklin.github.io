import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Koome Franklin Mburus',
	description: 'Software Engineer & Systems / Network Administrator',
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className='overflow-visible'>
			<body className={`${inter.className} overflow-visible  `}>
				<div className='overflow-visible'>{children}</div>
			</body>
			{/* lg:bg-[url(/mburustech4k.png)] md:bg-[url(/mburustech4k.png)]
			bg-[url(/mburustechmobile.png)] w-screen bg-cover md:bg-contain
			bg-no-repeat bg-fixed */}
			{/* Building reliable software systems and robust ICT infrastructure for
			institutional and enterprise environments. */}
		</html>
	);
}
