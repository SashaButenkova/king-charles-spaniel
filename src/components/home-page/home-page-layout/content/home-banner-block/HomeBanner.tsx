import React from 'react'
import {
	Box,
	Button,
	CardMedia,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { FCI } from './FCI/FCI'
import { useScroll } from '../../../../../context/ScrollContext'

export const HomeBanner: React.FC = () => {
	const { scrollToServices } = useScroll()
	const theme = useTheme()
	const locItems = ['Смоленск', 'Москва', 'Беларусь', 'Брянск', 'Калуга']

	return (
		<Box
			id='home'
			component='section'
			sx={{
				width: '100%',
				minHeight: { xs: 'auto', md: '40.75rem' },
				position: 'relative',
				overflow: 'hidden',
				// 🌈 Новый современный фон с плавными переливами и светом
				background: `
					linear-gradient(135deg, #8C0303 0%, #A10505 40%, #DBBE2E 100%),
					radial-gradient(circle at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 60%),
					radial-gradient(circle at 80% 20%, rgba(219,190,46,0.2) 0%, transparent 70%)
				`,
				backgroundBlendMode: 'overlay',
				'&::before': {
					content: '""',
					position: 'absolute',
					inset: 0,
					background:
						'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
					animation: 'gradientShift 10s ease-in-out infinite alternate',
				},
				'@keyframes gradientShift': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' },
				},
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', lg: 'row' },
					gap: { xs: 4, lg: 6 },
					alignItems: 'center',
					justifyContent: 'space-between',
					position: 'relative',
					zIndex: 2,
					minWidth: { xs: '100%', lg: '71.625rem' },
					minHeight: { xs: 'auto', lg: '31rem' },
					px: { xs: 2, sm: 3, md: 4, lg: 10 },
					py: { xs: 4, md: 6 },
				}}
			>
				{/* Левый контент */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: { xs: 3, md: 3 },
						width: { xs: '100%', lg: '35.188rem' },
						height: { xs: 'auto', lg: 'auto' },
						justifyContent: 'space-between',
						alignItems: { xs: 'center', lg: 'flex-start' },
						textAlign: { xs: 'center', lg: 'left' },
					}}
				>
					{/* Бесплатная доставка */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: 2,
							alignItems: 'center',
							width: '100%',
							justifyContent: { xs: 'center', lg: 'flex-start' },
						}}
					>
						<CardMedia
							component='img'
							src='Bus.svg'
							sx={{
								width: { xs: 36, md: 46 },
								height: { xs: 36, md: 46 },
								filter: 'drop-shadow(0 2px 4px rgba(219,190,46,0.4))',
							}}
						/>
						<Typography
							sx={{
								fontFamily: 'PT Sans',
								fontWeight: 700,
								fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' },
								color: '#DBBE2E',
								textShadow: '0 2px 4px rgba(0,0,0,0.2)',
							}}
						>
							Бесплатная доставка по:
						</Typography>
					</Box>

					{/* Локации */}
					<List
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							mt: { xs: 2, md: 3 },
							flexWrap: { xs: 'wrap', sm: 'nowrap' },
							gap: { xs: 2, sm: 0 },
						}}
					>
						{locItems.map((item, index) => (
							<ListItem
								key={item}
								sx={{
									flexDirection: 'column',
									pt: 0,
									alignItems: 'center',
									flex: {
										xs: index === 2 ? '1 0 100%' : '1',
										sm: '1',
										lg: index === 2 ? '1.2' : '1',
									},
									order: { xs: index === 2 ? -1 : 0, lg: 0 },
									mb: { xs: index === 2 ? 2 : 0, sm: 0 },
								}}
							>
								<CardMedia
									component='img'
									src='loc3.svg'
									sx={{
										width: {
											xs: index === 2 ? 50 : 25,
											sm: index === 2 ? 55 : 28,
											md: index === 2 ? 60 : 30,
											lg: index === 2 ? 70 : 32,
										},
										height: {
											xs: index === 2 ? 50 : 25,
											sm: index === 2 ? 55 : 28,
											md: index === 2 ? 60 : 30,
											lg: index === 2 ? 70 : 32,
										},
										filter: 'drop-shadow(0 2px 4px rgba(219,190,46,0.6))',
										transition: 'transform 0.3s ease',
										'&:hover': { transform: 'scale(1.1)' },
									}}
								/>
								<ListItemText
									primary={item}
									sx={{
										mt: 1,
										textAlign: 'center',
										'& .MuiListItemText-primary': {
											fontFamily: 'PT Sans',
											fontWeight: 700,
											fontSize: {
												xs: index === 2 ? '1.25rem' : '1rem',
												sm: index === 2 ? '1.375rem' : '1.125rem',
												md: index === 2 ? '1.5rem' : '1.25rem',
												lg: index === 2 ? '1.75rem' : '1.25rem',
											},
											color: '#fff',
											textShadow: '0 1px 2px rgba(0,0,0,0.3)',
										},
									}}
								/>
							</ListItem>
						))}
					</List>

					{/* Заголовок */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: { xs: 1.5, md: 1.5 },
							width: '100%',
							mb: { xs: 1, lg: 0.5 },
						}}
					>
						<Typography
							variant='h3'
							sx={{
								fontWeight: 700,
								lineHeight: 1.3,
								color: '#fff',
								fontSize: {
									xs: '1.75rem',
									sm: '2.25rem',
									md: '2.5rem',
									lg: '3rem',
								},
								textAlign: { xs: 'center', lg: 'left' },
								'& span': {
									background:
										'linear-gradient(135deg, #DBBE2E 0%, #F7E4AF 100%)',
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
								},
							}}
						>
							От нашего <span>сердца</span> — к вашему дому
						</Typography>
						<Typography
							sx={{
								color: 'rgba(255,255,255,0.9)',
								lineHeight: 1.5,
								fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
								textAlign: { xs: 'center', lg: 'left' },
								'& span': {
									color: '#DBBE2E',
									fontWeight: 600,
								},
							}}
						>
							Родословная каждого щенка наполнена титулами предков{' '}
							<span>Чемпион Беларуси</span>.
						</Typography>
					</Box>

					{/* 🏅 Сертификаты — одинаковые размеры и стиль */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', sm: 'row' },
							gap: { xs: 2, sm: 3 },
							alignItems: 'center',
							width: '100%',
							justifyContent: { xs: 'center', lg: 'flex-start' },
							mb: { xs: 1, lg: 0.5 },
						}}
					>
						{/* FCI Сертификат */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								gap: 1,
								alignItems: 'center',
								px: 1.5,
								py: 0.75,
								borderRadius: 2,
								backgroundColor: '#8C0303',
								border: '1px solid rgba(255,255,255,0.15)',
								width: { xs: '100%', sm: 'auto' },
								minWidth: { sm: '165px', lg: '180px' },
								height: 44,
								justifyContent: 'center',
								boxShadow: 'inset 0 0 8px rgba(219,190,46,0.2)',
								transition: 'all 0.3s ease',
								'&:hover': {
									backgroundColor: '#A10505',
									transform: 'translateY(-2px)',
									boxShadow: '0 0 12px rgba(219,190,46,0.4)',
								},
							}}
						>
							<Box
								sx={{
									width: 26,
									height: 26,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									'& svg': {
										width: '100%',
										height: '100%',
										fill: '#DBBE2E',
									},
								}}
							>
								<FCI />
							</Box>
							<Typography
								sx={{
									color: '#fff',
									fontWeight: 700,
									fontSize: '0.85rem',
									fontFamily: '"PT Sans", sans-serif',
									lineHeight: 1.2,
									whiteSpace: 'nowrap',
								}}
							>
								Сертификат FCI
							</Typography>
						</Box>

						{/* БКО Сертификат */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								gap: 1,
								alignItems: 'center',
								px: 1.5,
								py: 0.75,
								borderRadius: 2,
								backgroundColor: '#8C0303',
								border: '1px solid rgba(255,255,255,0.15)',
								width: { xs: '100%', sm: 'auto' },
								minWidth: { sm: '165px', lg: '180px' },
								height: 44,
								justifyContent: 'center',
								boxShadow: 'inset 0 0 8px rgba(219,190,46,0.2)',
								transition: 'all 0.3s ease',
								'&:hover': {
									backgroundColor: '#A10505',
									transform: 'translateY(-2px)',
									boxShadow: '0 0 12px rgba(219,190,46,0.4)',
								},
							}}
						>
							<CardMedia
								component='img'
								src='zzz1.svg'
								sx={{
									width: 26,
									height: 26,
									objectFit: 'contain',
								}}
							/>
							<Typography
								sx={{
									color: '#fff',
									fontWeight: 700,
									fontSize: '0.85rem',
									fontFamily: '"PT Sans", sans-serif',
									lineHeight: 1.2,
									whiteSpace: 'nowrap',
								}}
							>
								Сертификат БКО
							</Typography>
						</Box>
					</Box>

					{/* Кнопка */}
					<Button
						onClick={scrollToServices}
						sx={{
							mt: { xs: 1, md: 0.5, lg: 0 },
							px: { xs: 3, sm: 4, lg: 4 },
							py: { xs: 1.25, md: 1.5, lg: 1.75 },
							borderRadius: 3,
							fontWeight: 700,
							fontSize: { xs: '0.9rem', md: '1rem', lg: '1.1rem' },
							background: 'linear-gradient(135deg, #F7E4AF 0%, #DBBE2E 100%)',
							color: '#8C0303',
							boxShadow: '0 6px 16px rgba(219,190,46,0.35)',
							textTransform: 'none',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							transition: 'all 0.3s ease',
							width: { xs: '100%', sm: 'auto', lg: 'auto' },
							minWidth: { xs: 'auto', sm: '220px', lg: '260px' },
							height: { xs: 'auto', lg: '56px' },
							'&:hover': {
								background: 'linear-gradient(135deg, #DBBE2E 0%, #F7E4AF 100%)',
								transform: {
									xs: 'scale(1.02)',
									sm: 'scale(1.05)',
									lg: 'scale(1.03)',
								},
								boxShadow: '0 8px 20px rgba(219,190,46,0.45)',
							},
						}}
					>
						<CardMedia
							component='img'
							src='Call1.svg'
							sx={{
								width: { xs: 18, md: 20, lg: 22 },
								height: { xs: 18, md: 20, lg: 22 },
								mr: { xs: 1, lg: 1.5 },
								filter: 'brightness(0.6)',
							}}
						/>
						Получить консультацию
					</Button>
				</Box>

				{/* Картинки собак — без изменений */}
				<Box
					sx={{
						position: 'relative',
						flexShrink: 0,
						display: { xs: 'none', lg: 'block' },
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: '110%',
							height: '110%',
							borderRadius: '50%',
							background:
								'radial-gradient(circle, rgba(219,190,46,0.15) 0%, transparent 70%)',
						}}
					/>
					<CardMedia
						component='img'
						src='Dog.svg'
						sx={{
							width: { lg: 480, xl: 520 },
							height: { lg: 480, xl: 520 },
							borderRadius: 2,
							boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
							transition: 'transform 0.5s ease',
							'&:hover': { transform: 'scale(1.02)' },
						}}
					/>
				</Box>

				<Box
					sx={{
						position: 'relative',
						display: { xs: 'block', lg: 'none' },
						width: '100%',
						maxWidth: '400px',
						mt: 2,
					}}
				>
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: '100%',
							height: '100%',
							borderRadius: '50%',
							background:
								'radial-gradient(circle, rgba(219,190,46,0.15) 0%, transparent 70%)',
						}}
					/>
					<CardMedia
						component='img'
						src='Dog.svg'
						sx={{
							width: '100%',
							height: 'auto',
							borderRadius: 2,
							boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
						}}
					/>
				</Box>
			</Box>
		</Box>
	)
}
