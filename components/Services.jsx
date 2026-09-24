'use client'

import {GanttChartSquare, Paintbrush2, Laptop, TrendingUp, Search, Camera, Video} from 'lucide-react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Modal from './Modal'

const servicesData = [
	{
		icon: <Paintbrush2 size={72} strokeWidth={0.8} />,
		title: 'UX / UI Design',
		description: 'Using applications such as Figma, Adobe XD, Adobe Illustrate and Canva; I am profficient in taking ideas and devloping them into full wireframed UX models for clients to visualise and interact with their designs.',
		moreInfo: {
			extendedDescription: 'In my experience as a UX/UI designer, I’ve worked with major clients to develop user-centric designs that are functional and visually appealing. I use tools like Figma and Adobe XD to create interactive prototypes that help streamline the design process.',
			media: '/images/ux-design-portfolio.png',
		},
	},
	{
		icon: <Laptop size={72} strokeWidth={0.8} />,
		title: 'Web Developer',
		description: 'Using languages and frameworks such as HTML, CSS, Javascript, ReactJS, TailwindCSS. I can create stunning websites to suit your purpose. Whether the need is to provide content or eCommerce, no goal is impossible to create.',
		moreInfo: {
			extendedDescription: 'Experienced in building responsive and dynamic websites using modern technologies including ReactJS and TailwindCSS. I ensure websites are optimized for performance and user experience.',
			media: '/images/web-development-portfolio.png',
		},
	},
	{
		icon: <TrendingUp size={72} strokeWidth={0.8} />,
		title: 'Business Growth Development',
		description: 'As a full time Product Owner for the largest Gaming/Gambling events businesses, I am capable of full project cycles. Including project discovery, requirements gathering, overseeing of delivery, sanity checking and final deliverables.',
		moreInfo: {
			extendedDescription: 'Skilled in managing end-to-end project lifecycles, from discovery to delivery, ensuring business growth and project success in competitive markets.',
			media: '/images/business-growth.png',
		},
	},
	{
		icon: <Search size={72} strokeWidth={0.8} />,
		title: 'SEO',
		description: 'Having experience with analytical data across multiple different products reaching 3M+ Users. I use tools such as Semrush, Google Analytics & Adobe Analytics to make sure projects are at optimal performance.',
		moreInfo: {
			extendedDescription: 'Proficient in SEO strategies and analytics tools to enhance website visibility and drive organic traffic effectively.',
			media: '/images/seo-analytics.png',
		},
	},
	{
		icon: <Camera size={72} strokeWidth={0.8} />,
		title: 'Photography',
		description: 'I have a deep passion for Photography, you can visit my portfolio using the link below. I am able to take pictures of stunning landscapes as well as memorable portraits for special occasions. Visit my site here',
		link: "https://photos.harshchopra.com"
	},
	{
		icon: <Video size={72} strokeWidth={0.8} />,
		title: 'Videography',
		description: 'The passion translates over to catching amazing videos with stunning quality. Profficient in drone usage to get amazing B-Role for video projects as well as an understanding of the clients idea.',
		moreInfo: {
			extendedDescription: 'Experienced in creating high-quality videos including drone footage and B-Roll, tailored to client visions and storytelling.',
			media: '/images/videography-portfolio.png',
		},
	},
]
const Services = () => {
	const [isModalOpen, setModalOpen] = useState(false)
	const [selectedService, setSelectedService] = useState({
		title: '',
		extendedDescription: '',
		media: '',
	})

	useEffect(() => {
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isModalOpen]);

	const handleTileClick = (item) => {
		if (!item.link && item.moreInfo) {
			// Open modal if there is no link, passing extended information
			setSelectedService({
				title: item.title,
				extendedDescription: item.moreInfo.extendedDescription,
				media: item.moreInfo.media,
			})
			setModalOpen(true)
		}
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<section className='mb-12 xl:mb-36'>
			<div className='container mx-auto'>
				<h2 className='section-title mb-12 xl:mb-24 text-center mx-auto mt-20'>My Services</h2>
				{/* grid items */}
				<div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
					{servicesData.map((item, index) => {
						const cardContent = (
							<Card
								className='w-full max-w-[424px] h-[325px] flex flex-col pt-16 pb-10 justify-center items-center relative
                transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-white dark:hover:bg-background
                cursor-pointer'
								key={index}
								onClick={() => handleTileClick(item)}
							>
								<CardHeader className='text-primary absolute -top-[60px]'>
									<div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
										{item.icon}
									</div>
								</CardHeader>
								<CardContent className='text-center'>
									<CardTitle className='mb-4'>{item.title}</CardTitle>
									<CardDescription className='text-lg'>{item.description}</CardDescription>
								</CardContent>
							</Card>
						)

						return item.link ? (
							<Link href={item.link} key={index} target='_blank' rel='noopener noreferrer'>
								{cardContent}
							</Link>
						) : (
							cardContent
						)
					})}
				</div>

				{/* Modal */}
				{isModalOpen && (
					<div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm pointer-events-auto"
						onClick={closeModal}
						style={{ cursor: 'pointer' }}
					>
						<div
							className="bg-white dark:bg-background p-6 rounded-lg shadow-xl relative max-w-lg w-full pointer-events-auto"
							onClick={(e) => e.stopPropagation()}
							style={{ cursor: 'default' }}
						>
							<button
								onClick={closeModal}
								className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black dark:hover:text-white focus:outline-none"
								style={{ zIndex: 10 }}
								aria-label="Close modal"
							>
								&times;
							</button>
							<Modal
								isOpen={isModalOpen}
								onClose={closeModal}
								title={selectedService.title}
								extendedDescription={selectedService.extendedDescription}
								media={selectedService.media}
							/>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}
export default Services
