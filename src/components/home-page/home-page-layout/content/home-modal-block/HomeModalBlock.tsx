import {
	Box,
	Stack,
	CardMedia,
	Typography,
	TextField,
	Button,
	Snackbar,
	Alert,
	useMediaQuery,
} from '@mui/material'
import { theme } from '../../../../../styles/themes'
import React, { useState } from 'react'
import { useScroll } from '../../../../../context/ScrollContext'

interface HomeModalBlockProps {}

export const HomeModalBlock: React.FC<HomeModalBlockProps> = () => {
	const { servicesRef } = useScroll()
	const isMobile = useMediaQuery('(max-width:768px)')

	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		info: '',
	})

	const [loading, setLoading] = useState(false)
	const [snackbar, setSnackbar] = useState({
		open: false,
		message: '',
		severity: 'success' as 'success' | 'error',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const showSnackbar = (message: string, severity: 'success' | 'error') => {
		setSnackbar({
			open: true,
			message,
			severity,
		})
	}

	const handleSubmit = async () => {
		if (!formData.name.trim() || !formData.phone.trim()) {
			showSnackbar('Поля "Имя" и "Телефон" обязательны', 'error')
			return
		}

		try {
			setLoading(true)
			const res = await fetch('http://localhost:3001/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`)
			}

			const result = await res.json()
			if (result.success) {
				showSnackbar(
					result.message || 'Сообщение отправлено успешно!',
					'success'
				)
				setFormData({ name: '', phone: '', info: '' })
			} else {
				showSnackbar(result.error || 'Произошла ошибка при отправке', 'error')
			}
		} catch (err) {
			console.error('❌ Ошибка подключения:', err)
			showSnackbar('Ошибка при отправке формы. Попробуйте еще раз.', 'error')
		} finally {
			setLoading(false)
		}
	}

	const handleCloseSnackbar = () => {
		setSnackbar(prev => ({ ...prev, open: false }))
	}

	return (
		<>
			<Box
				id='contacts'
				ref={servicesRef}
				component='section'
				sx={{
					minHeight: isMobile ? 'auto' : '30rem',
					background: 'linear-gradient(135deg, #F8F7F5 0%, #F1F0ED 100%)',
					position: 'relative',
					overflow: 'hidden',
					width: '100%',
					'&::before': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						background: `
							radial-gradient(circle at 20% 30%, rgba(140,3,3,0.03) 0%, transparent 50%),
							radial-gradient(circle at 80% 70%, rgba(219,190,46,0.03) 0%, transparent 50%)
						`,
					},
				}}
			>
				<Stack
					sx={{
						position: 'relative',
						zIndex: 2,
						padding: {
							xs: '2rem 1rem',
							sm: '2rem 1.5rem',
							md: '4rem 2rem',
						},
						gap: { xs: '2rem', md: '3rem' },
						flexDirection: { xs: 'column', lg: 'row' },
						alignItems: 'stretch',
						justifyContent: 'center',
						maxWidth: '1200px',
						margin: '0 auto',
						width: '100%',
						boxSizing: 'border-box',
					}}
				>
					{/* Левая часть - Информация */}
					<Stack
						sx={{
							width: '100%',
							maxWidth: '100%',
							flex: 1,
							gap: { xs: '1.5rem', md: '2rem' },
							overflow: 'hidden',
						}}
					>
						{/* Заголовок */}
						<Stack gap={{ xs: 1, md: 2 }}>
							<Stack
								direction='row'
								alignItems='center'
								gap={{ xs: 1, md: 2 }}
								sx={{
									flexDirection: { xs: 'column', sm: 'row' },
									alignItems: { xs: 'flex-start', sm: 'center' },
									width: '100%',
								}}
							>
								<CardMedia
									component='img'
									src='stars.svg'
									sx={{
										width: { xs: '28px', md: '32px' },
										height: { xs: '28px', md: '32px' },
										filter: 'drop-shadow(0 2px 4px rgba(219,190,46,0.3))',
										flexShrink: 0,
									}}
								/>
								<Box
									sx={{
										padding: { xs: '0.4rem 1rem', md: '0.5rem 1.5rem' },
										borderRadius: '12px',
										backgroundColor: '#F7E4AF',
										border: '1px solid rgba(140,3,3,0.1)',
										boxShadow: '0 4px 12px rgba(247,228,175,0.4)',
										width: { xs: '100%', sm: 'auto' },
										boxSizing: 'border-box',
									}}
								>
									<Typography
										sx={{
											fontFamily: '"Inter", sans-serif',
											fontWeight: '600',
											fontSize: { xs: '13px', md: '14px' },
											color: '#8C0303',
											letterSpacing: '0.5px',
											textAlign: { xs: 'center', sm: 'left' },
											wordWrap: 'break-word',
										}}
									>
										Свяжитесь с нами
									</Typography>
								</Box>
							</Stack>

							{/* Основной заголовок */}
							<Box sx={{ width: '100%', overflow: 'hidden' }}>
								<Typography
									sx={{
										fontFamily: '"Playfair Display", serif',
										fontWeight: '700',
										fontSize: {
											xs: '1.75rem',
											sm: '2rem',
											md: '2.5rem',
											lg: '3rem',
										},
										lineHeight: 1.1,
										background:
											'linear-gradient(135deg, #8C0303 0%, #DBBE2E 100%)',
										backgroundClip: 'text',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										textShadow: '0 4px 8px rgba(0,0,0,0.1)',
										wordWrap: 'break-word',
										overflowWrap: 'break-word',
									}}
								>
									Ваша история дружбы начинается здесь
								</Typography>
							</Box>

							{/* Описание */}
							<Typography
								sx={{
									fontFamily: 'PT Sans',
									fontWeight: '400',
									fontSize: { xs: '1rem', md: '1.125rem' },
									lineHeight: 1.6,
									color: '#00000099',
									mt: { xs: 0.5, md: 1 },
									wordWrap: 'break-word',
									overflowWrap: 'break-word',
								}}
							>
								Напишите или позвоните — мы расскажем о щенках, которые уже
								готовы к переезду, и о тех, кто скоро будет готов встретить вас.
							</Typography>
						</Stack>

						{/* Контакты */}
						<Stack gap={{ xs: 2, md: 3 }} sx={{ width: '100%' }}>
							<Stack
								direction='row'
								gap={{ xs: 1, md: 2 }}
								alignItems='flex-start'
								sx={{ width: '100%' }}
							>
								<Box
									sx={{
										padding: { xs: '0.5rem', md: '0.75rem' },
										backgroundColor: 'rgba(140,3,3,0.1)',
										borderRadius: '12px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										flexShrink: 0,
										minWidth: { xs: '40px', md: '48px' },
										height: { xs: '40px', md: '48px' },
									}}
								>
									<CardMedia
										component='img'
										src='Call2.svg'
										sx={{
											width: { xs: '20px', md: '32px' },
											height: { xs: '20px', md: '32px' },
											filter: 'drop-shadow(0 2px 4px rgba(140,3,3,0.3))',
										}}
									/>
								</Box>
								<Box sx={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
									<Typography
										sx={{
											fontFamily: '"Inter", sans-serif',
											fontWeight: '600',
											fontSize: { xs: '0.9rem', md: '1rem' },
											color: '#8C0303',
											mb: 0.5,
											wordWrap: 'break-word',
										}}
									>
										Телефон
									</Typography>
									<Typography
										component='a'
										href='tel:+375296395904'
										sx={{
											fontFamily: 'PT Sans',
											fontWeight: '400',
											fontSize: { xs: '0.9rem', md: '1.125rem' },
											color: '#000000CC',
											textDecoration: 'none',
											display: 'block',
											transition: 'all 0.3s ease',
											wordBreak: 'break-all',
											overflowWrap: 'break-word',
											'&:hover': {
												color: '#8C0303',
											},
										}}
									>
										+375 29 639-59-04
									</Typography>
								</Box>
							</Stack>

							<Stack
								direction='row'
								gap={{ xs: 1, md: 2 }}
								alignItems='flex-start'
								sx={{ width: '100%' }}
							>
								<Box
									sx={{
										padding: { xs: '0.5rem', md: '0.75rem' },
										backgroundColor: 'rgba(219,190,46,0.1)',
										borderRadius: '12px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										flexShrink: 0,
										minWidth: { xs: '40px', md: '48px' },
										height: { xs: '40px', md: '48px' },
									}}
								>
									<CardMedia
										component='img'
										src='Email.svg'
										sx={{
											width: { xs: '20px', md: '32px' },
											height: { xs: '20px', md: '32px' },
											filter: 'drop-shadow(0 2px 4px rgba(219,190,46,0.3))',
										}}
									/>
								</Box>
								<Box sx={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
									<Typography
										sx={{
											fontFamily: '"Inter", sans-serif',
											fontWeight: '600',
											fontSize: { xs: '0.9rem', md: '1rem' },
											color: '#8C0303',
											mb: 0.5,
											wordWrap: 'break-word',
										}}
									>
										Email
									</Typography>
									<Typography
										component='a'
										href='mailto:king.charles.spaniel.gomel@yandex.by'
										sx={{
											fontFamily: 'PT Sans',
											fontWeight: '400',
											fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.125rem' },
											color: '#000000CC',
											textDecoration: 'none',
											transition: 'all 0.3s ease',
											wordBreak: 'break-all',
											overflowWrap: 'break-word',
											'&:hover': {
												color: '#8C0303',
											},
										}}
									>
										king.charles.spaniel.gomel@yandex.by
									</Typography>
								</Box>
							</Stack>
						</Stack>
					</Stack>

					{/* Правая часть - Форма */}
					<Box
						sx={{
							width: '100%',
							maxWidth: '100%',
							flex: 1,
						}}
					>
						<Box
							sx={{
								backgroundColor: 'rgba(255,255,255,0.95)',
								backdropFilter: 'blur(10px)',
								borderRadius: { xs: '12px', md: '20px' },
								padding: { xs: '1.25rem', sm: '1.5rem', md: '2.5rem' },
								boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
								border: '1px solid rgba(255,255,255,0.5)',
								width: '100%',
								boxSizing: 'border-box',
							}}
						>
							<Typography
								sx={{
									fontFamily: '"Playfair Display", serif',
									fontWeight: 700,
									fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
									lineHeight: 1.2,
									color: '#8C0303',
									textAlign: 'center',
									mb: { xs: 2, md: 3 },
									textShadow: '0 2px 4px rgba(0,0,0,0.1)',
									wordWrap: 'break-word',
								}}
							>
								Получить консультацию
							</Typography>

							<Stack gap={2} sx={{ mb: { xs: 2, md: 3 }, width: '100%' }}>
								<TextField
									name='name'
									label='Имя*'
									variant='outlined'
									fullWidth
									value={formData.name}
									onChange={handleChange}
									disabled={loading}
									size={isMobile ? 'small' : 'medium'}
									sx={{
										'& .MuiOutlinedInput-root': {
											borderRadius: '8px',
											backgroundColor: 'rgba(248,247,245,0.5)',
											'&:hover fieldset': {
												borderColor: '#8C0303',
											},
											'&.Mui-focused fieldset': {
												borderColor: '#8C0303',
											},
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: '#8C0303',
										},
									}}
								/>
								<TextField
									name='phone'
									label='Телефон*'
									variant='outlined'
									fullWidth
									value={formData.phone}
									onChange={handleChange}
									disabled={loading}
									size={isMobile ? 'small' : 'medium'}
									sx={{
										'& .MuiOutlinedInput-root': {
											borderRadius: '8px',
											backgroundColor: 'rgba(248,247,245,0.5)',
											'&:hover fieldset': {
												borderColor: '#8C0303',
											},
											'&.Mui-focused fieldset': {
												borderColor: '#8C0303',
											},
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: '#8C0303',
										},
									}}
								/>
								<TextField
									name='info'
									label='Дополнительная информация'
									variant='outlined'
									fullWidth
									value={formData.info}
									onChange={handleChange}
									multiline
									rows={isMobile ? 2 : 4}
									disabled={loading}
									size={isMobile ? 'small' : 'medium'}
									sx={{
										'& .MuiOutlinedInput-root': {
											borderRadius: '8px',
											backgroundColor: 'rgba(248,247,245,0.5)',
											alignItems: 'flex-start',
											'&:hover fieldset': {
												borderColor: '#8C0303',
											},
											'&.Mui-focused fieldset': {
												borderColor: '#8C0303',
											},
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: '#8C0303',
										},
									}}
								/>
							</Stack>

							<Button
								fullWidth
								sx={{
									height: { xs: '2.5rem', md: '3.5rem' },
									backgroundColor: '#8C0303',
									borderRadius: '8px',
									fontFamily: '"Inter", sans-serif',
									fontWeight: '600',
									fontSize: { xs: '0.85rem', md: '1rem' },
									textTransform: 'none',
									color: '#FFFFFF',
									boxShadow: '0 4px 12px rgba(140,3,3,0.3)',
									transition: 'all 0.3s ease',
									'&:hover': {
										backgroundColor: '#a10505',
										transform: 'translateY(-1px)',
										boxShadow: '0 6px 20px rgba(140,3,3,0.4)',
										color: '#FFFFFF',
									},
									'&:disabled': {
										backgroundColor: '#cccccc',
										color: '#666666',
										transform: 'none',
										boxShadow: 'none',
									},
									minWidth: 'auto',
								}}
								onClick={handleSubmit}
								disabled={loading}
							>
								{loading ? 'Отправка...' : 'Получить консультацию'}
							</Button>
						</Box>
					</Box>
				</Stack>
			</Box>

			{/* Уведомления */}
			<Snackbar
				open={snackbar.open}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			>
				<Alert
					onClose={handleCloseSnackbar}
					severity={snackbar.severity}
					sx={{
						width: '90%',
						maxWidth: '400px',
						borderRadius: '8px',
						fontFamily: '"PT Sans", sans-serif',
						fontSize: { xs: '0.85rem', md: '1rem' },
						margin: { xs: '1rem', md: '0' },
					}}
				>
					{snackbar.message}
				</Alert>
			</Snackbar>
		</>
	)
}
