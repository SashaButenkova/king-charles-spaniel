import { Box, CardMedia, Typography, Button, Stack } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import {
	type HomeHistoryCardProps,
	HomeHistoryCard,
} from './home-history-card/HomeHistoryCard'

export const HomeHistoryBlock: React.FC = ({}) => {
	const theme = useTheme()

	const cardsData: HomeHistoryCardProps[] = [
		{
			index: 1,
			iconImages: [
				{
					src: 'atom.svg',
					sx: {
						width: { xs: '48px', md: '64px' },
						height: { xs: '48px', md: '64px' },
					},
				},
			],
			title: '20+ лет опыта',
			subtitle:
				'Более двадцати лет живём рядом с собаками, растим и изучаем их',
			backgroundElement: (
				<Box
					sx={{
						position: 'absolute',
						top: { xs: -10, md: -20 },
						right: { xs: -10, md: -20 },
						width: { xs: '80px', md: '120px' },
						height: { xs: '80px', md: '120px' },
						background:
							'radial-gradient(circle, rgba(219,190,46,0.15) 0%, transparent 70%)',
						opacity: 0.6,
					}}
				/>
			),
			badge: {
				text: 'С 2000 года',
				color: '#8C0303',
				bgColor: 'rgba(140,3,3,0.1)',
			},
			cardSx: {
				minHeight: { xs: '180px', sm: '200px', md: '220px' },
				padding: { xs: '1.5rem', md: '2rem' },
			},
		},
		{
			index: 2,
			iconImages: [
				{
					src: 'redDog.svg',
					sx: {
						width: { xs: '48px', md: '64px' },
						height: { xs: '48px', md: '64px' },
					},
				},
			],
			title: '10+ племенных сук',
			subtitle: 'Более десяти племенных сук и выдающиеся производители',
			backgroundElement: (
				<Box
					sx={{
						position: 'absolute',
						bottom: { xs: -20, md: -30 },
						left: { xs: -20, md: -30 },
						width: { xs: '100px', md: '150px' },
						height: { xs: '100px', md: '150px' },
						background:
							'radial-gradient(circle, rgba(140,3,3,0.1) 0%, transparent 70%)',
						opacity: 0.5,
					}}
				/>
			),
			badge: {
				text: 'Элитное поголовье',
				color: '#DBBE2E',
				bgColor: 'rgba(219,190,46,0.15)',
			},
			cardSx: {
				minHeight: { xs: '180px', sm: '200px', md: '220px' },
				padding: { xs: '1.5rem', md: '2rem' },
			},
		},
		{
			index: 3,
			iconImages: [
				{
					src: 'Family.svg',
					sx: {
						width: { xs: '48px', md: '64px' },
						height: { xs: '48px', md: '64px' },
					},
				},
			],
			title: 'Каждая собака — член семьи',
			subtitle: 'Мы вкладываем в малышей всё тепло и заботу',
			backgroundElement: (
				<>
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: { xs: '70px', md: '100px' },
							height: { xs: '70px', md: '100px' },
							background:
								'conic-gradient(from 45deg, rgba(140,3,3,0.05), rgba(219,190,46,0.05), rgba(140,3,3,0.05))',
							borderRadius: '50%',
							opacity: 0.4,
						}}
					/>
					<Box
						sx={{
							position: 'absolute',
							top: 8,
							right: 8,
							width: { xs: '30px', md: '40px' },
							height: { xs: '30px', md: '40px' },
							background: 'rgba(247,228,175,0.3)',
							borderRadius: '50%',
							opacity: 0.3,
						}}
					/>
				</>
			),
			badge: {
				text: 'С заботой',
				color: '#8C0303',
				bgColor: 'rgba(247,228,175,0.3)',
			},
			cardSx: {
				minHeight: { xs: '180px', sm: '200px', md: '220px' },
				padding: { xs: '1.5rem', md: '2rem' },
			},
		},
		{
			index: 4,
			iconImages: [
				{
					src: 'busMini.svg',
					sx: {
						width: { xs: '48px', md: '64px' },
						height: { xs: '48px', md: '64px' },
					},
				},
			],
			title: 'Личная доставка',
			subtitle: 'Лично и бесплатно доставляем по Беларуси и России',
			backgroundElement: (
				<Box
					sx={{
						position: 'absolute',
						top: { xs: -8, md: -10 },
						right: { xs: '25%', md: '30%' },
						width: { xs: '60px', md: '80px' },
						height: { xs: '60px', md: '80px' },
						background:
							'linear-gradient(45deg, rgba(140,3,3,0.08) 0%, rgba(219,190,46,0.08) 100%)',
						borderRadius: '16px',
						transform: 'rotate(45deg)',
						opacity: 0.4,
					}}
				/>
			),
			badge: {
				text: 'Бесплатно',
				color: '#8C0303',
				bgColor: 'rgba(140,3,3,0.1)',
			},
			cardSx: {
				minHeight: { xs: '180px', sm: '200px', md: '220px' },
				padding: { xs: '1.5rem', md: '2rem' },
			},
		},
	]

	const handleContactScroll = () => {
		const element = document.getElementById('contacts')
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
	}

	const handleCall = () => {
		window.open('tel:+375296395904', '_self')
	}

	return (
		<Box
			id='about'
			className='General-History-Box'
			sx={{
				minHeight: { xs: 'auto', md: '100vh' },
				backgroundColor: '#F8F7F5',
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
			<Box
				className='Heading-Box'
				sx={{
					position: 'relative',
					zIndex: 2,
					padding: { xs: '2rem 1rem', sm: '3rem 2rem', md: '4rem 2rem 3rem' },
					textAlign: 'center',
					maxWidth: '1200px',
					margin: '0 auto',
				}}
			>
				<Stack
					className='Header-Badge'
					direction='row'
					alignItems='center'
					justifyContent='center'
					gap={{ xs: 1, md: 2 }}
					sx={{ mb: 3 }}
				>
					<CardMedia
						component='img'
						src='heartRed.svg'
						sx={{
							width: { xs: '24px', md: '28px' },
							height: { xs: '24px', md: '28px' },
							filter: 'drop-shadow(0 2px 4px rgba(140,3,3,0.2))',
						}}
					/>
					<Box
						className='Badge'
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							padding: { xs: '0.4rem 1rem', md: '0.5rem 1.5rem' },
							backgroundColor: '#F7E4AF',
							borderRadius: { xs: '8px', md: '12px' },
							boxShadow: '0 4px 12px rgba(247,228,175,0.4)',
							border: '1px solid rgba(140,3,3,0.1)',
						}}
					>
						<Typography
							sx={{
								color: '#8C0303',
								fontWeight: '700',
								fontSize: { xs: '0.875rem', md: '1rem' },
								fontFamily: '"Inter", sans-serif',
								letterSpacing: '0.5px',
							}}
						>
							О нас
						</Typography>
					</Box>
					<CardMedia
						component='img'
						src='stars.svg'
						sx={{
							width: { xs: '24px', md: '28px' },
							height: { xs: '24px', md: '28px' },
							filter: 'drop-shadow(0 2px 4px rgba(219,190,46,0.3))',
						}}
					/>
				</Stack>

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
						textShadow: '0 4px 8px rgba(0,0,0,0.1)',
					}}
				>
					Там, где начинается
					<Typography
						component='span'
						sx={{
							fontSize: { xs: '2rem', sm: '2.25rem', md: '3.5rem' },
							fontWeight: 700,
							fontFamily: '"Playfair Display", serif',
							color: '#DBBE2E',
							ml: { xs: 1, md: 2 },
							display: 'inline-block',
							background: 'linear-gradient(135deg, #DBBE2E 0%, #8C0303 100%)',
							backgroundClip: 'text',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}
					>
						дружба
					</Typography>
				</Typography>

				<Typography
					sx={{
						fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
						lineHeight: 1.6,
						fontFamily: '"PT Sans", sans-serif',
						color: '#666',
						maxWidth: '800px',
						margin: { xs: '1rem auto 0', md: '1.5rem auto 0' },
						textAlign: 'center',
						px: { xs: 1, sm: 0 },
					}}
				>
					Питомник «Кавалеры Беларуси» — это семья, влюблённая в породу Кавалер
					Кинг Чарльз Спаниель. Мы заботимся о каждом щенке с вниманием и
					теплом, как о собственном.
				</Typography>
			</Box>

			{/* Основной контент */}
			<Box
				className='Content-Container'
				sx={{
					position: 'relative',
					zIndex: 2,
					maxWidth: '1200px',
					margin: '0 auto',
					padding: { xs: '0 1rem 2rem', sm: '0 2rem 3rem' },
					display: { xs: 'block', md: 'grid' },
					gridTemplateColumns: { md: '1fr 380px' },
					gap: { xs: '2rem', md: '3rem' },
					alignItems: 'start',
				}}
			>
				{/* Левая колонка - текст и карточки */}
				<Box
					className='Left-Column'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: { xs: '1.5rem', md: '2rem' },
						mb: { xs: '2rem', md: 0 },
					}}
				>
					{/* Текстовый блок */}
					<Box
						className='Text-Block'
						sx={{
							padding: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
							backgroundColor: 'rgba(255,255,255,0.95)',
							backdropFilter: 'blur(10px)',
							borderRadius: { xs: '16px', md: '20px' },
							boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
							border: '1px solid rgba(255,255,255,0.5)',
						}}
					>
						<Typography
							sx={{
								fontSize: { xs: '1rem', md: '1.125rem' },
								lineHeight: { xs: 1.6, md: 1.7 },
								fontFamily: '"PT Sans", sans-serif',
								color: '#333',
								mb: { xs: 2, md: 3 },
								textAlign: { xs: 'left', sm: 'justify' },
							}}
						>
							Мы более двадцати лет живём рядом с собаками, растим, воспитываем
							и изучаем их. Для нас каждая собака — член семьи. Мы вкладываем в
							малышей всё тепло и заботу, чтобы подарить им счастливую и
							полноценную жизнь рядом с вами.
						</Typography>
						<Typography
							sx={{
								fontSize: { xs: '1rem', md: '1.125rem' },
								lineHeight: { xs: 1.6, md: 1.7 },
								fontFamily: '"PT Sans", sans-serif',
								color: '#333',
								textAlign: { xs: 'left', sm: 'justify' },
							}}
						>
							Сегодня «Кавалеры Беларуси» — один из крупнейших и надёжных
							питомников в Республике Беларусь. У нас более десяти племенных сук
							и выдающиеся производители. Каждую пару для вязки мы подбираем с
							особой тщательностью, чтобы гарантировать крепкое здоровье,
							прекрасный характер и соответствие стандартам породы.
						</Typography>
					</Box>

					{/* Карточки преимуществ */}
					<Box
						className='Cards-Container'
						sx={{
							display: 'grid',
							gridTemplateColumns: {
								xs: '1fr',
								sm: '1fr 1fr',
								md: '1fr 1fr',
							},
							gap: { xs: '1rem', sm: '1.5rem' },
							width: '100%',
							justifyItems: { xs: 'center', md: 'stretch' },
						}}
					>
						{cardsData.map((card, index) => (
							<Box
								key={index}
								sx={{
									height: '100%',
									transform: 'translateY(0)',
									transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
									position: 'relative',
									'&:hover': {
										transform: {
											xs: 'translateY(-4px)',
											md: 'translateY(-8px)',
										},
										'& .card-glow': {
											opacity: 1,
										},
									},
								}}
							>
								<HomeHistoryCard
									{...card}
									sx={{
										minHeight: { xs: '180px', sm: '200px', md: '220px' },
										position: 'relative',
										overflow: 'hidden',
										'&::before': {
											content: '""',
											position: 'absolute',
											top: 0,
											left: 0,
											right: 0,
											bottom: 0,
											background:
												'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,247,245,0.9) 100%)',
											borderRadius: { xs: '16px', md: '20px' },
											zIndex: 1,
										},
									}}
								/>
								{/* Эффект свечения при hover */}
								<Box
									className='card-glow'
									sx={{
										position: 'absolute',
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										borderRadius: { xs: '16px', md: '20px' },
										background:
											index === 0
												? 'linear-gradient(135deg, rgba(219,190,46,0.1) 0%, transparent 50%)'
												: index === 1
													? 'linear-gradient(135deg, rgba(140,3,3,0.1) 0%, transparent 50%)'
													: index === 2
														? 'linear-gradient(135deg, rgba(247,228,175,0.1) 0%, transparent 50%)'
														: 'linear-gradient(135deg, rgba(140,3,3,0.08) 0%, transparent 50%)',
										opacity: 0,
										transition: 'opacity 0.4s ease',
										pointerEvents: 'none',
										zIndex: 0,
									}}
								/>
							</Box>
						))}
					</Box>
				</Box>

				{/* Правая колонка - изображение и контакты */}
				<Box
					className='Right-Column'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: { xs: '1.5rem', md: '2rem' },
						position: { xs: 'static', md: 'sticky' },
						top: { md: '2rem' },
					}}
				>
					{/* Изображение собаки */}
					<Box
						className='Dog-Image-Container'
						sx={{
							position: 'relative',
							borderRadius: { xs: '16px', md: '20px' },
							overflow: 'hidden',
							boxShadow: '0 15px 30px rgba(0,0,0,0.12)',
							height: { xs: '250px', sm: '300px', md: '280px' },
							flexShrink: 0,
							'&::before': {
								content: '""',
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								background:
									'linear-gradient(45deg, rgba(140,3,3,0.05) 0%, rgba(219,190,46,0.05) 100%)',
								zIndex: 1,
							},
						}}
					>
						<CardMedia
							component='img'
							src='Dog2.svg'
							sx={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								transition: 'transform 0.5s ease',
								'&:hover': {
									transform: { xs: 'scale(1.02)', md: 'scale(1.03)' },
								},
							}}
						/>
					</Box>

					{/* Блок контактов */}
					<Box
						className='Contact-Box'
						sx={{
							padding: { xs: '1.5rem', md: '2rem' },
							backgroundColor: 'rgba(255,255,255,0.95)',
							backdropFilter: 'blur(10px)',
							borderRadius: { xs: '16px', md: '20px' },
							boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
							border: '1px solid rgba(255,255,255,0.6)',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Stack direction='row' alignItems='center' gap={2} sx={{ mb: 2 }}>
							<CardMedia
								component='img'
								src='Call2.svg'
								sx={{
									width: { xs: '32px', md: '40px' },
									height: { xs: '32px', md: '40px' },
									filter: 'drop-shadow(0 2px 4px rgba(140,3,3,0.2))',
								}}
							/>
							<Box>
								<Typography
									sx={{
										fontSize: { xs: '1rem', md: '1.1rem' },
										fontWeight: '600',
										fontFamily: '"Inter", sans-serif',
										color: '#8C0303',
										mb: 0.5,
									}}
								>
									Связаться с нами
								</Typography>
								<Typography
									sx={{
										fontSize: { xs: '0.75rem', md: '0.8rem' },
										color: '#666',
										fontFamily: '"PT Sans", sans-serif',
									}}
								>
									Всегда рады ответить на вопросы
								</Typography>
							</Box>
						</Stack>

						<Button
							onClick={handleCall}
							fullWidth
							sx={{
								py: { xs: 1, md: 1.25 },
								backgroundColor: 'rgba(140,3,3,0.08)',
								color: '#8C0303',
								borderRadius: { xs: '8px', md: '12px' },
								fontWeight: '500',
								fontFamily: '"Inter", sans-serif',
								fontSize: { xs: '0.875rem', md: '0.95rem' },
								mb: { xs: 1, md: 1.5 },
								border: '1px solid rgba(140,3,3,0.1)',
								'&:hover': {
									backgroundColor: 'rgba(140,3,3,0.15)',
									transform: 'translateY(-1px)',
									boxShadow: '0 4px 12px rgba(140,3,3,0.2)',
								},
								transition: 'all 0.3s ease',
							}}
						>
							+375 29 639-59-04
						</Button>

						<Button
							onClick={handleContactScroll}
							fullWidth
							sx={{
								py: { xs: 1, md: 1.25 },
								backgroundColor: '#8C0303',
								color: 'white',
								borderRadius: { xs: '8px', md: '12px' },
								fontWeight: '500',
								fontFamily: '"Inter", sans-serif',
								fontSize: { xs: '0.875rem', md: '0.95rem' },
								'&:hover': {
									backgroundColor: '#a10505',
									transform: 'translateY(-1px)',
									boxShadow: '0 4px 12px rgba(140,3,3,0.3)',
								},
								transition: 'all 0.3s ease',
							}}
						>
							Написать сообщение
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
