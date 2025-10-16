import { Box, CardMedia, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import { motion } from 'framer-motion'

// 🔹 Новый импорт — твой компонент карточки
import { HomeHistoryCard } from './home-history-card/HomeHistoryCard'

export const HomeHistoryBlock: React.FC = () => {
	const theme = useTheme()

	const cardsData = [
		{
			icon: <CardMedia component='img' src='atom.svg' />,
			title: '20+ лет опыта',
			text: 'Более двадцати лет живём рядом с собаками, растим и изучаем их',
		},
		{
			icon: <CardMedia component='img' src='redDog.svg' />,
			title: '10+ племенных сук',
			text: 'Более десяти племенных сук и выдающиеся производители',
		},
		{
			icon: <CardMedia component='img' src='Family.svg' />,
			title: 'Каждая собака — член семьи',
			text: 'Мы вкладываем в малышей всё тепло и заботу',
		},
		{
			icon: <CardMedia component='img' src='busMini.svg' />,
			title: 'Личная доставка',
			text: 'Лично и бесплатно доставляем по Беларуси и России',
		},
	]

	const handleContactScroll = () => {
		const element = document.getElementById('contacts')
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	const handleCall = () => {
		window.open('tel:+375296395904', '_self')
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	}

	return (
		<Box
			id='about'
			sx={{
				minHeight: { xs: 'auto', md: '100vh' },
				background: 'linear-gradient(135deg, #F8F7F5 0%, #F1F0ED 100%)',
				position: 'relative',
				overflow: 'hidden',
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					right: 0,
					width: { xs: '200px', md: '500px' },
					height: { xs: '200px', md: '500px' },
					background:
						'radial-gradient(circle, rgba(219,190,46,0.08) 0%, transparent 70%)',
					zIndex: 0,
				},
			}}
		>
			{/* Заголовок */}
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<Box
					sx={{
						position: 'relative',
						zIndex: 2,
						padding: { xs: '2rem 1rem', sm: '3rem 2rem', md: '4rem 2rem 3rem' },
						textAlign: 'center',
						maxWidth: '1200px',
						margin: '0 auto',
					}}
				>
					<motion.div variants={itemVariants}>
						<Stack
							direction='row'
							alignItems='center'
							justifyContent='center'
							gap={{ xs: 1, md: 2 }}
							sx={{ mb: 3 }}
						>
							<CardMedia
								component='img'
								src='heartRed.svg'
								sx={{ width: { xs: 24, md: 28 } }}
							/>
							<Box
								sx={{
									padding: { xs: '0.4rem 1rem', md: '0.5rem 1.5rem' },
									backgroundColor: '#F7E4AF',
									borderRadius: '12px',
								}}
							>
								<Typography
									sx={{
										color: '#8C0303',
										fontWeight: 700,
										fontSize: { xs: '0.875rem', md: '1rem' },
									}}
								>
									О нас
								</Typography>
							</Box>
							<CardMedia
								component='img'
								src='stars.svg'
								sx={{ width: { xs: 24, md: 28 } }}
							/>
						</Stack>
					</motion.div>

					<motion.div variants={itemVariants}>
						<Typography
							variant='h1'
							sx={{
								fontSize: { xs: '2rem', sm: '2.25rem', md: '3.5rem' },
								fontWeight: 700,
								fontFamily: '"Playfair Display", serif',
								color: '#8C0303',
								lineHeight: 1.1,
								mb: 1,
								background: 'linear-gradient(135deg, #8C0303 0%, #DBBE2E 100%)',
								backgroundClip: 'text',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							Там, где начинается{' '}
							<Typography
								component='span'
								sx={{
									fontSize: { xs: '2rem', sm: '2.25rem', md: '3.5rem' },
									fontWeight: 700,
									fontFamily: '"Playfair Display", serif',
									color: '#DBBE2E',
									display: 'inline-block',
									background:
										'linear-gradient(135deg, #DBBE2E 0%, #8C0303 100%)',
									backgroundClip: 'text',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
								}}
							>
								дружба
							</Typography>
						</Typography>
					</motion.div>

					<motion.div variants={itemVariants}>
						<Typography
							sx={{
								fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
								lineHeight: 1.6,
								color: '#666',
								maxWidth: '800px',
								margin: '1rem auto 0',
							}}
						>
							Питомник «Кавалеры Беларуси» — это семья, влюблённая в породу
							Кавалер Кинг Чарльз Спаниель. Мы заботимся о каждом щенке с
							вниманием и теплом, как о собственном.
						</Typography>
					</motion.div>
				</Box>
			</motion.div>

			{/* Контент */}
			<Box
				sx={{
					position: 'relative',
					zIndex: 2,
					maxWidth: '1200px',
					margin: '0 auto',
					padding: { xs: '0 1rem 3rem', sm: '0 2rem 4rem' },
					display: { xs: 'flex', md: 'grid' },
					flexDirection: { xs: 'column', md: 'row' },
					gridTemplateColumns: { md: '1fr 380px' },
					gap: { xs: '2rem', md: '3rem' },
				}}
			>
				{/* Левая часть */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: { xs: '1.5rem', md: '2rem' },
						order: { xs: 2, md: 1 },
					}}
				>
					<motion.div
						initial={{
							opacity: 0,
							y: 40,
							scale: 0.95,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
							scale: 1,
						}}
						viewport={{ once: true, margin: '-50px' }}
						transition={{
							duration: 0.8,
							ease: [0.25, 0.46, 0.45, 0.94],
							delay: 0.2,
						}}
						whileHover={{
							boxShadow: '0 0 40px rgba(219,190,46,0.35)',
							scale: 1.01,
							y: -5,
						}}
						style={{
							borderRadius: '20px',
							overflow: 'hidden',
							background: 'rgba(255,255,255,0.95)',
							boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
							backdropFilter: 'blur(10px)',
							border: '1px solid rgba(255,255,255,0.2)',
							position: 'relative',
						}}
					>
						{/* Декоративный элемент */}
						<Box
							sx={{
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								height: '3px',
								background:
									'linear-gradient(90deg, #8C0303 0%, #DBBE2E 50%, #8C0303 100%)',
								opacity: 0.8,
							}}
						/>

						<Box
							sx={{
								padding: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
								position: 'relative',
								zIndex: 2,
							}}
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.4 }}
							>
								<Typography
									sx={{
										fontSize: { xs: '1rem', md: '1.125rem' },
										lineHeight: 1.7,
										color: '#333',
										mb: 2,
										fontFamily: '"Inter", sans-serif',
										textAlign: { xs: 'left', sm: 'justify' },
									}}
								>
									Мы более двадцати лет живём рядом с собаками, растим,
									воспитываем и изучаем их. Для нас каждая собака — член семьи.
									Мы вкладываем в малышей всё тепло и заботу, чтобы подарить им
									счастливую и полноценную жизнь рядом с вами. Сегодня «Кавалеры
									Беларуси» — один из крупнейших и надёжных питомников в
									Республике Беларусь. У нас более десяти племенных сук и
									выдающиеся производители. Каждую пару для вязки мы подбираем с
									особой тщательностью, чтобы гарантировать крепкое здоровье,
									прекрасный характер и соответствие стандартам породы.
								</Typography>
							</motion.div>

							{/* Декоративные уголки */}
							<Box
								sx={{
									position: 'absolute',
									top: 15,
									left: 15,
									width: '20px',
									height: '20px',
									borderTop: '2px solid #DBBE2E',
									borderLeft: '2px solid #DBBE2E',
									opacity: 0.5,
								}}
							/>
							<Box
								sx={{
									position: 'absolute',
									bottom: 15,
									right: 15,
									width: '20px',
									height: '20px',
									borderBottom: '2px solid #DBBE2E',
									borderRight: '2px solid #DBBE2E',
									opacity: 0.5,
								}}
							/>
						</Box>

						{/* Фоновый градиент */}
						<Box
							sx={{
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								background:
									'linear-gradient(135deg, rgba(140,3,3,0.02) 0%, rgba(219,190,46,0.02) 100%)',
								zIndex: 1,
								opacity: 0,
								transition: 'opacity 0.6s ease',
							}}
							className='hover-gradient'
						/>
					</motion.div>

					{/* Карточки */}
					<Box
						sx={{
							display: 'grid',
							gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
							gap: { xs: '1rem', sm: '1.5rem' },
							marginTop: { xs: '0.5rem', sm: '1rem' },
						}}
					>
						{cardsData.map((card, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 * i }}
								whileHover={{ y: -8 }}
							>
								<HomeHistoryCard {...card} />
							</motion.div>
						))}
					</Box>
				</Box>

				{/* Правая колонка */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1.5rem',
						position: { xs: 'static', md: 'sticky' },
						top: '2rem',
						order: { xs: 3, md: 2 }, // ✅ теперь на мобильных после карточек
					}}
				>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						whileHover={{
							scale: 1.04,
							boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
						}}
						transition={{
							type: 'spring',
							stiffness: 120,
							damping: 15,
						}}
						style={{
							borderRadius: '24px',
							overflow: 'hidden',
							boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
							display: 'inline-block',
							cursor: 'pointer',
						}}
					>
						<motion.img
							src='Dog2.svg'
							style={{
								width: '100%',
								height: 'auto',
								objectFit: 'cover',
								borderRadius: '24px',
								display: 'block',
								transition: 'filter 0.6s ease',
							}}
							whileHover={{
								scale: 1.06,
								filter: 'brightness(1.08) contrast(1.05)',
							}}
							transition={{ duration: 0.6, ease: 'easeOut' }}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						whileHover={{
							scale: 1.02,
							boxShadow: '0 20px 50px rgba(140, 3, 3, 0.15)',
						}}
						style={{
							borderRadius: '20px',
							overflow: 'hidden',
							background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
							boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
							transition: 'box-shadow 0.4s ease, transform 0.4s ease',
						}}
					>
						<Box sx={{ padding: '1.8rem' }}>
							<Stack direction='row' alignItems='center' gap={2} sx={{ mb: 2 }}>
								<motion.img
									src='Call2.svg'
									style={{
										width: 38,
										height: 38,
										filter: 'drop-shadow(0 2px 4px rgba(140,3,3,0.25))',
									}}
									whileHover={{ scale: 1.1, rotate: 8 }}
									transition={{ type: 'spring', stiffness: 200, damping: 12 }}
								/>
								<Box>
									<Typography
										sx={{
											color: '#8C0303',
											fontWeight: 600,
											fontFamily: '"Inter", sans-serif',
											fontSize: '1rem',
										}}
									>
										Связаться с нами
									</Typography>
									<Typography
										sx={{
											color: '#666',
											fontSize: '0.85rem',
											fontFamily: '"PT Sans", sans-serif',
										}}
									>
										Всегда рады ответить на вопросы
									</Typography>
								</Box>
							</Stack>

							<motion.div whileHover={{ scale: 1.03 }}>
								<Button
									onClick={handleCall}
									fullWidth
									sx={{
										backgroundColor: 'rgba(140,3,3,0.08)',
										color: '#8C0303',
										borderRadius: '10px',
										mb: 1.5,
										fontFamily: '"Inter", sans-serif',
										fontWeight: 600,
										transition: 'all 0.3s ease',
										'&:hover': {
											backgroundColor: 'rgba(140,3,3,0.15)',
											boxShadow: '0 0 15px rgba(140,3,3,0.25)',
											transform: 'translateY(-2px)',
										},
									}}
								>
									+375 29 639-59-04
								</Button>
							</motion.div>

							<motion.div whileHover={{ scale: 1.03 }}>
								<Button
									onClick={handleContactScroll}
									fullWidth
									sx={{
										background:
											'linear-gradient(135deg, #8C0303 0%, #DBBE2E 100%)',
										color: 'white',
										borderRadius: '10px',
										fontFamily: '"Inter", sans-serif',
										fontWeight: 600,
										transition: 'all 0.4s ease',
										'&:hover': {
											boxShadow: '0 0 20px rgba(219,190,46,0.4)',
											transform: 'translateY(-2px)',
										},
									}}
								>
									Написать сообщение
								</Button>
							</motion.div>
						</Box>
					</motion.div>
				</Box>
			</Box>
		</Box>
	)
}
