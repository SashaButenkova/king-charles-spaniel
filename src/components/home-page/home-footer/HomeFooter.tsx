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
					gap: { xs: '2rem', md: '3rem', lg: '4rem' },
					padding: {
						xs: '2rem 1rem',
						sm: '3rem 1.5rem',
						md: '4rem 2rem',
						lg: '4rem 3rem',
					},
					alignItems: { xs: 'center', lg: 'flex-start' },
					justifyContent: { xs: 'center', lg: 'space-between' },
					margin: '0 auto',
					maxWidth: '1400px',
				}}
			>
				{/* Левая колонка - Основная информация */}
				<Stack
					sx={{
						width: '100%',
						maxWidth: { xs: '100%', lg: '450px' },
						gap: { xs: '1.5rem', md: '2rem' },
						alignItems: { xs: 'center', lg: 'flex-start' },
						textAlign: { xs: 'center', lg: 'left' },
						flex: 1,
					}}
				>
					{/* Логотип и название */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							gap: 2,
							justifyContent: { xs: 'center', lg: 'flex-start' },
							flexWrap: 'wrap',
							animation: 'fadeInUp 1s ease both',
							width: '100%',
						}}
					>
						<CardMedia
							component='img'
							src='Vector 10.svg'
							sx={{
								width: { xs: '40px', md: '50px', lg: '60px' },
								height: { xs: '45px', md: '55px', lg: '65px' },
								filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.6))',
								animation: 'float 4s ease-in-out infinite',
							}}
						/>
						<Typography
							sx={{
								color: '#fff',
								fontFamily: '"Playfair Display", serif',
								fontSize: {
									xs: '1.25rem',
									sm: '1.375rem',
									md: '1.5rem',
									lg: '1.75rem',
								},
								fontWeight: 700,
								textShadow: '0 0 8px rgba(255,255,255,0.5)',
								lineHeight: 1.2,
							}}
						>
							Кавалеры Беларуси
						</Typography>
					</Box>

					{/* Фото */}
					<Box
						sx={{
							borderRadius: '20px',
							overflow: 'hidden',
							boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
							width: '100%',
							maxWidth: { xs: '280px', sm: '300px', lg: '100%' },
							height: { xs: '160px', sm: '180px', lg: '220px' },
							animation: 'fadeInUp 1.2s ease both',
							'&:hover img': {
								transform: 'scale(1.05)',
								filter: 'brightness(1.1)',
							},
							transition: 'all 0.5s ease',
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

					{/* Описание */}
					<Typography
						sx={{
							fontFamily: 'PT Sans',
							fontWeight: 400,
							fontSize: { xs: '0.875rem', md: '1rem', lg: '1.1rem' },
							lineHeight: { xs: '1.5', md: '1.6', lg: '1.7' },
							color: 'rgba(255,255,255,0.9)',
							animation: 'fadeIn 2s ease both',
							textAlign: { xs: 'center', lg: 'left' },
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
							gap: { xs: 2, md: 3, lg: 3 },
							justifyContent: { xs: 'center', lg: 'flex-start' },
							flexWrap: 'wrap',
							width: '100%',
							mt: { lg: 1 },
						}}
					>
						{/* БКО */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: 1,
								padding: { xs: '0.75rem 1rem', md: '1rem 1.5rem' },
								backgroundColor: 'transparent',
								borderRadius: '12px',
								backdropFilter: 'blur(6px)',
								cursor: 'default',
								transition: 'all 0.4s ease',
								'&:hover': {
									transform: 'translateY(-2px)',
								},
							}}
						>
							<CardMedia
								component='img'
								src='iconRed.svg'
								sx={{
									width: { xs: '40px', md: '45px', lg: '50px' },
									height: { xs: '40px', md: '45px', lg: '50px' },
									filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.8))',
								}}
							/>
							<Typography
								sx={{
									fontFamily: 'PT Sans',
									fontWeight: 600,
									fontSize: { xs: '0.9rem', md: '1rem', lg: '1.1rem' },
									color: '#fff',
									letterSpacing: '0.5px',
								}}
							>
								БКО
							</Typography>
						</Box>

						{/* FCI */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: 1,
								padding: { xs: '0.75rem 1rem', md: '1rem 1.5rem' },
								backgroundColor: 'transparent',
								borderRadius: '12px',
								backdropFilter: 'blur(6px)',
								cursor: 'default',
								transition: 'all 0.4s ease',
								'&:hover': {
									transform: 'translateY(-2px)',
								},
							}}
						>
							<Box
								sx={{
									width: { xs: '40px', md: '45px', lg: '50px' },
									height: { xs: '40px', md: '45px', lg: '50px' },
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.8))',
									'& svg': {
										width: '100%',
										height: '100%',
									},
								}}
							>
								<FciRed />
							</Box>
							<Typography
								sx={{
									fontFamily: 'PT Sans',
									fontWeight: 600,
									fontSize: { xs: '0.9rem', md: '1rem', lg: '1.1rem' },
									color: '#fff',
									letterSpacing: '0.5px',
								}}
							>
								FCI
							</Typography>
						</Box>
					</Box>
				</Stack>

				{/* Правая колонка - Навигация и контакты */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'row' },
						gap: { xs: 2, sm: 3, md: 4, lg: 6 },
						width: '100%',
						maxWidth: { xs: '100%', sm: '500px', lg: '400px' },
						alignItems: { xs: 'center', sm: 'flex-start' },
						textAlign: { xs: 'center', sm: 'left' },
						flexWrap: 'wrap',
						justifyContent: {
							xs: 'center',
							sm: 'space-between',
							lg: 'flex-start',
						},
						flex: { lg: 0.8 },
					}}
				>
					{/* Быстрые ссылки */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: { xs: 1.5, md: 2 },
							width: { xs: '100%', sm: 'auto' },
							alignItems: { xs: 'center', sm: 'flex-start' },
							minWidth: { sm: '160px' },
						}}
					>
						<Typography
							sx={{
								fontFamily: '"Playfair Display", serif',
								fontWeight: 700,
								fontSize: { xs: '1.125rem', md: '1.25rem', lg: '1.375rem' },
								color: '#fff',
								mb: { lg: 1 },
								position: 'relative',
								'&::after': {
									content: '""',
									position: 'absolute',
									bottom: -8,
									left: { xs: '50%', sm: 0 },
									transform: { xs: 'translateX(-50%)', sm: 'none' },
									width: '40px',
									height: '2px',
									background: 'linear-gradient(90deg, #fff, transparent)',
									borderRadius: '2px',
								},
							}}
						>
							Быстрые ссылки
						</Typography>

						<List sx={{ padding: 0 }}>
							{listItems.map((item, index) => (
								<ListItem
									key={index}
									sx={{
										padding: { xs: '0.3rem 0', lg: '0.5rem 0' },
										justifyContent: { xs: 'center', sm: 'flex-start' },
									}}
								>
									<ListItemText
										primary={
											<Box
												component='a'
												href={item.link}
												sx={{
													textDecoration: 'none',
													color: 'rgba(255,255,255,0.85)',
													fontFamily: 'PT Sans',
													fontWeight: 400,
													fontSize: { xs: '0.9rem', md: '1rem', lg: '1.1rem' },
													position: 'relative',
													transition: 'all 0.3s ease',
													display: 'block',
													textAlign: { xs: 'center', sm: 'left' },
													padding: { xs: '0.25rem 0', sm: '0.4rem 0' },
													'&:hover': {
														color: '#fff',
														textShadow: '0 0 8px rgba(255,255,255,0.6)',
													},
													'&::after': {
														content: '""',
														position: 'absolute',
														left: { xs: '50%', sm: 0 },
														bottom: 2,
														width: '0%',
														height: '2px',
														background: '#fff',
														transition: 'width 0.3s ease',
														transform: { xs: 'translateX(-50%)', sm: 'none' },
													},
													'&:hover::after': {
														width: '100%',
													},
												}}
											>
												{item.label}
											</Box>
										}
										sx={{
											textAlign: { xs: 'center', sm: 'left' },
											'& .MuiTypography-root': {
												fontSize: { xs: '0.9rem', md: '1rem', lg: '1.1rem' },
											},
										}}
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
							gap: { xs: 1.5, md: 2 },
							width: { xs: '100%', sm: 'auto' },
							alignItems: { xs: 'center', sm: 'flex-start' },
							minWidth: { sm: '200px' },
						}}
					>
						<Typography
							sx={{
								fontFamily: '"Playfair Display", serif',
								fontWeight: 700,
								fontSize: { xs: '1.125rem', md: '1.25rem', lg: '1.375rem' },
								color: '#fff',
								mb: { lg: 1 },
								position: 'relative',
								'&::after': {
									content: '""',
									position: 'absolute',
									bottom: -8,
									left: { xs: '50%', sm: 0 },
									transform: { xs: 'translateX(-50%)', sm: 'none' },
									width: '40px',
									height: '2px',
									background: 'linear-gradient(90deg, #fff, transparent)',
									borderRadius: '2px',
								},
							}}
						>
							Контакты
						</Typography>

						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								gap: 2,
								justifyContent: { xs: 'center', sm: 'flex-start' },
								width: '100%',
								flexWrap: 'wrap',
								padding: { xs: '0.5rem 0', lg: '1rem 0' },
							}}
						>
							<CardMedia
								component='img'
								src='Call2.svg'
								sx={{
									width: { xs: '20px', md: '24px', lg: '28px' },
									height: { xs: '20px', md: '24px', lg: '28px' },
									filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.8))',
									flexShrink: 0,
								}}
							/>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: { xs: 'center', sm: 'flex-start' },
									gap: 0.5,
								}}
							>
								<Typography
									sx={{
										fontFamily: 'PT Sans',
										fontWeight: 600,
										fontSize: { xs: '0.9rem', md: '1rem', lg: '1.1rem' },
										color: '#fff',
										textAlign: { xs: 'center', sm: 'left' },
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
										fontSize: { xs: '0.9rem', md: '1rem', lg: '1.125rem' },
										color: 'rgba(255,255,255,0.9)',
										textDecoration: 'none',
										transition: 'all 0.3s ease',
										textAlign: { xs: 'center', sm: 'left' },
										'&:hover': {
											color: '#fff',
											textShadow: '0 0 12px rgba(255,255,255,0.9)',
											transform: 'translateX(4px)',
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
					borderTop: '1px solid rgba(255,255,255,0.3)',
					padding: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
					background: 'rgba(0,0,0,0.1)',
					backdropFilter: 'blur(10px)',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						maxWidth: '1400px',
						margin: '0 auto',
					}}
				>
					<Typography
						sx={{
							fontFamily: 'PT Sans',
							fontWeight: 400,
							fontSize: { xs: '0.75rem', sm: '0.875rem', lg: '1rem' },
							color: 'rgba(255,255,255,0.8)',
							textAlign: 'center',
							lineHeight: 1.4,
							letterSpacing: '0.5px',
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
				`}
			</style>
		</Box>
	)
}
