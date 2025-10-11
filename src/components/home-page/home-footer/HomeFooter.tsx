import {
	Box,
	Stack,
	CardMedia,
	Typography,
	List,
	ListItem,
	ListItemText,
	useMediaQuery,
} from '@mui/material'
import React, { useEffect } from 'react'
import { FciRed } from './FCI-RED/FciRed'

export const HomeFooter: React.FC = () => {
	const isMobile = useMediaQuery('(max-width:768px)')

	// ✅ Плавная прокрутка
	useEffect(() => {
		const handleSmoothScroll = (event: MouseEvent) => {
			const target = event.target as HTMLElement
			if (
				target.tagName === 'A' &&
				target.getAttribute('href')?.startsWith('#')
			) {
				event.preventDefault()
				const id = target.getAttribute('href')!.substring(1)
				const el = document.getElementById(id)
				if (el) {
					el.scrollIntoView({ behavior: 'smooth', block: 'start' })
				}
			}
		}

		document.addEventListener('click', handleSmoothScroll)
		return () => document.removeEventListener('click', handleSmoothScroll)
	}, [])

	const listItems = [
		{ label: 'Главная', link: '#home' },
		{ label: 'О нас', link: '#about' },
		{ label: 'Доставка', link: '#delivery' },
		{ label: 'FAQ', link: '#faq' },
	]

	return (
		<Box
			component='footer'
			sx={{
				width: '100%',
				overflowX: 'hidden',
				position: 'relative',
				background:
					'linear-gradient(180deg, #8C0303 0%, #B8431D 35%, #E1B24B 100%)',
				color: '#fff',
				scrollBehavior: 'smooth',
				animation: 'gradientShift 10s ease-in-out infinite alternate',
				backgroundSize: '200% 200%',
			}}
		>
			{/* Декоративная тень */}
			<Box
				sx={{
					position: 'absolute',
					inset: 0,
					background:
						'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 60%)',
					zIndex: 0,
				}}
			/>

			{/* Основной контент */}
			<Stack
				sx={{
					position: 'relative',
					zIndex: 2,
					flexDirection: { xs: 'column', lg: 'row' },
					gap: { xs: '2rem', md: '3rem' },
					padding: {
						xs: '2rem 1rem',
						sm: '3rem 1.5rem',
						md: '4rem 2rem',
						lg: '4rem 2rem',
					},
					alignItems: { xs: 'center', lg: 'flex-start' },
					justifyContent: 'space-between',
					margin: '0 auto',
				}}
			>
				{/* Левая колонка */}
				<Stack
					sx={{
						width: '100%',
						maxWidth: { xs: '100%', lg: '400px' },
						gap: { xs: '1.5rem', md: '2rem' },
						alignItems: { xs: 'center', lg: 'flex-start' },
						textAlign: { xs: 'center', lg: 'left' },
					}}
				>
					{/* Логотип */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 2,
							justifyContent: { xs: 'center', lg: 'flex-start' },
							flexWrap: 'wrap',
							animation: 'fadeInUp 1s ease both',
						}}
					>
						<CardMedia
							component='img'
							src='Vector 10.svg'
							sx={{
								width: { xs: '40px', md: '50px' },
								height: { xs: '45px', md: '55px' },
								filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))',
								animation: 'float 4s ease-in-out infinite',
							}}
						/>
						<Typography
							sx={{
								color: '#fff',
								fontFamily: '"Playfair Display", serif',
								fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' },
								fontWeight: 700,
								textShadow: '0 0 8px rgba(255,255,255,0.5)',
							}}
						>
							Кавалеры Беларуси
						</Typography>
					</Box>

					{/* Фото */}
					<Box
						sx={{
							borderRadius: '16px',
							overflow: 'hidden',
							boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
							width: '100%',
							maxWidth: { xs: '280px', sm: '300px', lg: '100%' },
							height: { xs: '160px', sm: '180px' },
							animation: 'fadeInUp 1.2s ease both',
							'&:hover img': {
								transform: 'scale(1.05)',
								filter: 'brightness(1.1)',
							},
						}}
					>
						<CardMedia
							component='img'
							src='Girl.svg'
							sx={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
								transition: 'all 0.6s ease',
							}}
						/>
					</Box>

					<Typography
						sx={{
							fontFamily: 'PT Sans',
							fontWeight: 400,
							fontSize: { xs: '0.875rem', md: '1rem' },
							lineHeight: { xs: '1.5', md: '1.6' },
							color: 'rgba(255,255,255,0.85)',
							animation: 'fadeIn 2s ease both',
						}}
					>
						Крупнейший питомник кавалер-кинг-чарльз-спаниелей в Беларуси.
						Профессиональное разведение с 2015 года. Здоровые, красивые щенки с
						отличной родословной.
					</Typography>

					{/* Сертификаты */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: { xs: 1, md: 2 },
							justifyContent: { xs: 'center', lg: 'flex-start' },
							flexWrap: 'wrap',
							width: '100%',
						}}
					>
						{['БКО', 'FCI'].map((label, i) => (
							<Box
								key={i}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: 0.5,
									padding: { xs: '0.5rem 0.75rem', md: '0.75rem 1rem' },
									backgroundColor: 'rgba(255,255,255,0.1)',
									borderRadius: '8px',
									border: '1px solid rgba(255,255,255,0.2)',
									backdropFilter: 'blur(6px)',
									cursor: 'pointer',
									transition: 'all 0.4s ease',
									'&:hover': {
										transform: 'translateY(-4px) scale(1.05)',
										boxShadow: '0 0 12px rgba(255,255,255,0.3)',
									},
								}}
							>
								{i === 0 ? (
									<CardMedia
										component='img'
										src='iconRed.svg'
										sx={{
											width: { xs: '20px', md: '24px' },
											height: { xs: '20px', md: '24px' },
											filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.7))',
										}}
									/>
								) : (
									<FciRed />
								)}
								<Typography
									sx={{
										fontFamily: 'PT Sans',
										fontWeight: 600,
										fontSize: { xs: '0.7rem', md: '0.75rem' },
										color: '#fff',
									}}
								>
									{label}
								</Typography>
							</Box>
						))}
					</Box>
				</Stack>

				{/* Правая колонка */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						gap: { xs: 2, sm: 3, md: 4, lg: 3 },
						width: '100%',
						maxWidth: { xs: '100%', sm: 'auto' },
						alignItems: { xs: 'center', sm: 'flex-start' },
						textAlign: { xs: 'center', sm: 'left' },
						flexWrap: 'wrap',
					}}
				>
					{/* Быстрые ссылки */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							width: { xs: '100%', sm: 'auto' },
							alignItems: { xs: 'center', sm: 'flex-start' },
						}}
					>
						<Typography
							sx={{
								fontFamily: '"Playfair Display", serif',
								fontWeight: 700,
								fontSize: { xs: '1.125rem', md: '1.25rem' },
								color: '#fff',
							}}
						>
							Быстрые ссылки
						</Typography>

						<List sx={{ padding: 0 }}>
							{listItems.map((item, index) => (
								<ListItem key={index} sx={{ padding: '0.4rem 0' }}>
									<ListItemText
										primary={
											<a
												href={item.link}
												style={{
													textDecoration: 'none',
													color: 'rgba(255,255,255,0.9)',
													fontFamily: 'PT Sans',
													fontWeight: 400,
													fontSize: isMobile ? '0.9rem' : '1rem',
													position: 'relative',
													transition: 'all 0.3s ease',
												}}
												onMouseEnter={e =>
													(e.currentTarget.style.color = '#fff')
												}
												onMouseLeave={e =>
													(e.currentTarget.style.color =
														'rgba(255,255,255,0.9)')
												}
											>
												{item.label}
												<span
													style={{
														position: 'absolute',
														left: 0,
														bottom: -2,
														width: '0%',
														height: '2px',
														background: '#fff',
														transition: 'width 0.3s ease',
													}}
													className='underline'
												/>
											</a>
										}
									/>
								</ListItem>
							))}
						</List>
					</Box>

					{/* Контакты */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							width: { xs: '100%', sm: 'auto' },
							alignItems: { xs: 'center', sm: 'flex-start' },
						}}
					>
						<Typography
							sx={{
								fontFamily: '"Playfair Display", serif',
								fontWeight: 700,
								fontSize: { xs: '1.125rem', md: '1.25rem' },
								color: '#fff',
							}}
						>
							Контакты
						</Typography>

						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'flex-start',
								gap: 2,
								justifyContent: { xs: 'center', sm: 'flex-start' },
								width: '100%',
								flexWrap: 'wrap',
							}}
						>
							<CardMedia
								component='img'
								src='Call2.svg'
								sx={{
									width: { xs: '20px', md: '24px' },
									height: { xs: '20px', md: '24px' },
									filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.7))',
								}}
							/>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: { xs: 'center', sm: 'flex-start' },
								}}
							>
								<Typography
									sx={{
										fontFamily: 'PT Sans',
										fontWeight: 600,
										fontSize: { xs: '0.9rem', md: '1rem' },
										color: '#fff',
									}}
								>
									Телефон
								</Typography>
								<Typography
									component='a'
									href='tel:+375296395904'
									sx={{
										fontFamily: 'PT Sans',
										fontWeight: 400,
										fontSize: { xs: '0.9rem', md: '1rem' },
										color: 'rgba(255,255,255,0.9)',
										textDecoration: 'none',
										transition: 'all 0.3s ease',
										'&:hover': {
											color: '#fff',
											textShadow: '0 0 8px rgba(255,255,255,0.8)',
										},
									}}
								>
									+375 (29) 639-59-04
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Stack>

			{/* Нижняя часть */}
			<Box
				sx={{
					width: '100%',
					borderTop: '1px solid rgba(255,255,255,0.2)',
					padding: { xs: '1rem', sm: '1.5rem', md: '2rem' },
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'PT Sans',
							fontWeight: 400,
							fontSize: { xs: '0.75rem', sm: '0.875rem' },
							color: 'rgba(255,255,255,0.8)',
							textAlign: 'center',
							lineHeight: 1.4,
						}}
					>
						© {new Date().getFullYear()} Питомник «Кавалеры Беларуси». Все
						права защищены.
					</Typography>
				</Box>
			</Box>

			{/* 🌈 Анимации */}
			<style>
				{`
				@keyframes fadeInUp {
					from { opacity: 0; transform: translateY(20px); }
					to { opacity: 1; transform: translateY(0); }
				}
				@keyframes fadeIn {
					from { opacity: 0; }
					to { opacity: 1; }
				}
				@keyframes float {
					0% { transform: translateY(0); }
					50% { transform: translateY(-5px); }
					100% { transform: translateY(0); }
				}
				@keyframes gradientShift {
					0% { background-position: 0% 50%; }
					100% { background-position: 100% 50%; }
				}
				a:hover .underline {
					width: 100% !important;
				}
				`}
			</style>
		</Box>
	)
}
