import React, { useState, useRef, useEffect } from 'react'
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
import { motion } from 'framer-motion'

export const HomeBanner: React.FC = () => {
	const { scrollToServices } = useScroll()
	const theme = useTheme()
	const locItems = ['Смоленск', 'Москва', 'Беларусь', 'Брянск', 'Калуга']

	// 🔥 Состояние для выбранного города
	const [selectedCity, setSelectedCity] = useState('Беларусь')
	const scrollContainerRef = useRef<HTMLDivElement>(null)
	const itemRefs = useRef<(HTMLDivElement | null)[]>([])

	// 🔥 Плавная функция для прокрутки к городу
	const scrollToCity = (city: string) => {
		const index = locItems.indexOf(city)
		if (index !== -1 && itemRefs.current[index] && scrollContainerRef.current) {
			setSelectedCity(city)

			const container = scrollContainerRef.current
			const item = itemRefs.current[index]

			if (!item) return

			// 🔥 Плавная прокрутка с вычислением позиции
			const containerRect = container.getBoundingClientRect()
			const itemRect = item.getBoundingClientRect()

			const scrollLeft = container.scrollLeft
			const itemOffsetLeft = item.offsetLeft
			const containerCenter = containerRect.width / 2
			const itemCenter = itemRect.width / 2

			// Целевая позиция для центрирования элемента
			const targetScroll = itemOffsetLeft - containerCenter + itemCenter

			// 🔥 Плавная анимация скролла
			const startTime = performance.now()
			const duration = 500 // 0.5 секунды
			const startScroll = scrollLeft

			const animateScroll = (currentTime: number) => {
				const elapsed = currentTime - startTime
				const progress = Math.min(elapsed / duration, 1)

				// 🔥 Easing функция для плавности
				const easeOutQuart = 1 - Math.pow(1 - progress, 4)

				container.scrollLeft =
					startScroll + (targetScroll - startScroll) * easeOutQuart

				if (progress < 1) {
					requestAnimationFrame(animateScroll)
				}
			}

			requestAnimationFrame(animateScroll)
		}
	}

	// 🔥 Функция для определения видимого элемента с оптимизацией
	const updateSelectedCityBasedOnScroll = () => {
		const container = scrollContainerRef.current
		if (!container) return

		const containerRect = container.getBoundingClientRect()
		const containerCenter = containerRect.left + containerRect.width / 2

		let closestItem = null
		let minDistance = Infinity

		itemRefs.current.forEach((item, index) => {
			if (item) {
				const itemRect = item.getBoundingClientRect()
				const itemCenter = itemRect.left + itemRect.width / 2
				const distance = Math.abs(itemCenter - containerCenter)

				// 🔥 Добавляем порог срабатывания
				if (distance < minDistance) {
					minDistance = distance
					closestItem = locItems[index % locItems.length]
				}
			}
		})

		// 🔥 Добавляем порог срабатывания
		if (closestItem && closestItem !== selectedCity && minDistance < 100) {
			setSelectedCity(closestItem)
		}
	}

	// 🔥 Эффект для отслеживания прокрутки с debounce
	useEffect(() => {
		const container = scrollContainerRef.current
		if (!container) return

		let scrollTimeout: NodeJS.Timeout

		const handleScroll = () => {
			// 🔥 Дебаунс для оптимизации
			if (scrollTimeout) clearTimeout(scrollTimeout)
			scrollTimeout = setTimeout(() => {
				updateSelectedCityBasedOnScroll()
			}, 50)
		}

		container.addEventListener('scroll', handleScroll)
		return () => {
			container.removeEventListener('scroll', handleScroll)
			if (scrollTimeout) clearTimeout(scrollTimeout)
		}
	}, [selectedCity])

	// Простые анимации без влияния на layout
	const fadeIn = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	}

	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<Box
			id='home'
			component='section'
			sx={{
				width: '100%',
				minHeight: { xs: 'auto', md: '40.75rem' },
				position: 'relative',
				overflow: 'hidden',

				// 🌈 Анимированный фон — только на мобильных
				background: {
					xs: `
				linear-gradient(120deg, #8C0303 0%, #A10505 40%, #DBBE2E 100%),
				radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 60%),
				radial-gradient(circle at 80% 20%, rgba(219,190,46,0.25) 0%, transparent 70%)
			`,
					md: `
				linear-gradient(135deg, #8C0303 0%, #A10505 40%, #DBBE2E 100%),
				radial-gradient(circle at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 60%),
				radial-gradient(circle at 80% 20%, rgba(219,190,46,0.2) 0%, transparent 70%)
			`,
				},

				backgroundSize: { xs: '200% 200%', md: 'auto' },
				backgroundBlendMode: 'overlay',
				animation: {
					xs: 'mobileGradientShift 12s ease-in-out infinite alternate',
					md: 'none',
				},

				'&::before': {
					content: '""',
					position: 'absolute',
					inset: 0,
					background:
						'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
				},

				// 🔥 Анимация переливающегося фона
				'@keyframes mobileGradientShift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' },
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
					<motion.div
						initial='hidden'
						animate='visible'
						variants={fadeInUp}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								gap: 2,
								alignItems: 'center',
								width: '100%',
								justifyContent: { xs: 'center', lg: 'flex-start' },
								mt: { xs: 6, sm: 2.5, md: 3 },
							}}
						>
							<motion.div
								animate={{
									x: [0, 5, 0, -3, 0],
									y: [0, -2, 0, 1, 0],
									rotate: [0, 2, 0, -1, 0],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									repeatType: 'reverse',
									ease: 'easeInOut',
								}}
								style={{
									marginTop: '-5px',
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
							</motion.div>
							<Typography
								sx={{
									fontFamily: 'PT Sans',
									fontWeight: 700,
									fontSize: { xs: '1.25rem', sm: '1.375rem', md: '1.5rem' },
									textShadow: '0 2px 4px rgba(0,0,0,0.2)',
									'& .free-text': {
										background:
											'linear-gradient(135deg, #FFD97D 0%, #DBBE2E 100%)',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										backgroundClip: 'text',
										fontWeight: 800,
										filter: 'drop-shadow(0 2px 4px rgba(219,190,46,0.5))',
									},
									'& .delivery-text': {
										color: '#DBBE2E',
									},
								}}
							>
								<span className='free-text'>Бесплатная</span>{' '}
								<span className='delivery-text'>доставка по:</span>
							</Typography>
						</Box>
					</motion.div>

					{/* Локации - Статичная карусель с выбором для мобильных */}
					<Box
						sx={{
							width: '100%',
							mt: { xs: 2, md: 3 },
							position: 'relative',
							display: { xs: 'block', md: 'none' },
						}}
					>
						<motion.div
							initial='hidden'
							animate='visible'
							variants={fadeIn}
							transition={{ duration: 0.6, delay: 0.3 }}
						>
							{/* Контейнер с градиентными индикаторами прокрутки */}
							<Box
								sx={{
									position: 'relative',
									'&::before, &::after': {
										content: '""',
										position: 'absolute',
										top: 0,
										bottom: 0,
										width: '20px',
										zIndex: 2,
										pointerEvents: 'none',
									},
									'&::before': {
										left: 0,
										background:
											'linear-gradient(90deg, rgba(140,3,3,0.2) 0%, transparent 100%)',
									},
									'&::after': {
										right: 0,
										background:
											'linear-gradient(270deg, rgba(140,3,3,0.2) 0%, transparent 100%)',
									},
								}}
							>
								<Box
									ref={scrollContainerRef}
									className='cities-scroll-container'
									sx={{
										display: 'flex',
										overflowX: 'auto',
										gap: 4,
										pb: 3,
										pt: 2,
										px: 2,
										scrollbarWidth: 'none',
										'&::-webkit-scrollbar': {
											display: 'none',
										},
										WebkitOverflowScrolling: 'touch',
										scrollBehavior: 'smooth',
										// 🔥 Улучшаем инерцию скролла
										webkitOverflowScrolling: 'touch',
										overscrollBehaviorX: 'contain',
										// Показываем часть следующего элемента
										paddingLeft: '10px',
										paddingRight: '10px',
										// Добавляем тень для индикации контента за пределами
										maskImage:
											'linear-gradient(90deg, transparent 0%, black 20%, black 80%, transparent 100%)',
										// 🔥 Улучшаем производительность
										willChange: 'transform',
										backfaceVisibility: 'hidden',
									}}
								>
									{/* Добавляем дубликаты для бесконечной прокрутки */}
									{[...locItems, ...locItems, ...locItems].map(
										(item, index) => {
											const originalIndex = index % locItems.length
											const originalItem = locItems[originalIndex]
											const isSelected = selectedCity === originalItem

											return (
												<motion.div
													key={`${item}-${index}`}
													ref={el => {
														itemRefs.current[index] = el
													}}
													initial={{ opacity: 0, scale: 0.8 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{
														delay: 0.3 + originalIndex * 0.1,
														duration: 0.4,
													}}
													style={{
														flex: '0 0 auto',
														display: 'flex',
														flexDirection: 'column',
														alignItems: 'center',
														cursor: 'pointer',
														padding: '8px 4px',
													}}
													onClick={() => scrollToCity(originalItem)}
												>
													<Box
														sx={{
															width: 70,
															height: 70,
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															padding: '10px',
															position: 'relative',
														}}
													>
														<motion.div
															animate={{
																scale: isSelected ? 1.3 : 1,
															}}
															transition={{
																duration: 0.3,
																ease: 'easeOut',
																layout: { duration: 0.3 },
															}}
															style={{
																display: 'flex',
																alignItems: 'center',
																justifyContent: 'center',
															}}
														>
															<CardMedia
																component='img'
																src='loc3.svg'
																sx={{
																	width: '100%',
																	height: '100%',
																	maxWidth: 50,
																	maxHeight: 50,
																	filter: isSelected
																		? 'drop-shadow(0 4px 8px rgba(219,190,46,0.8))'
																		: 'drop-shadow(0 2px 4px rgba(219,190,46,0.6))',
																	transition: 'all 0.3s ease',
																	'&:hover': {
																		transform: isSelected
																			? 'scale(1.1)'
																			: 'scale(1.05)',
																		filter:
																			'drop-shadow(0 4px 8px rgba(219,190,46,0.7))',
																	},
																}}
															/>
														</motion.div>
													</Box>
													<Typography
														sx={{
															mt: 2,
															fontFamily: 'PT Sans',
															fontWeight: 700,
															fontSize: isSelected ? '1.25rem' : '1rem',
															color: isSelected ? '#FFD97D' : '#fff',
															textShadow: '0 1px 2px rgba(0,0,0,0.3)',
															textAlign: 'center',
															whiteSpace: 'nowrap',
															transition: 'all 0.3s ease',
															padding: '4px 8px',
															borderRadius: '4px',
														}}
													>
														{originalItem}
													</Typography>
												</motion.div>
											)
										}
									)}
								</Box>
							</Box>

							{/* Индикатор прокрутки (кликабельные точки) */}
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									gap: 1.5,
									mt: 2,
									mb: 1,
								}}
							>
								{locItems.map((item, index) => (
									<Box
										key={index}
										onClick={() => scrollToCity(item)}
										sx={{
											width: 8,
											height: 8,
											borderRadius: '50%',
											background:
												selectedCity === item
													? '#DBBE2E'
													: 'rgba(255,255,255,0.3)',
											transition: 'all 0.3s ease',
											boxShadow:
												selectedCity === item
													? '0 0 8px rgba(219,190,46,0.6)'
													: 'none',
											cursor: 'pointer',
											'&:hover': {
												background:
													selectedCity === item
														? '#FFD97D'
														: 'rgba(255,255,255,0.5)',
												transform: 'scale(1.2)',
											},
										}}
									/>
								))}
							</Box>

							{/* Подсказка для пользователя */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1, duration: 0.5 }}
							>
								<Typography
									sx={{
										fontFamily: 'PT Sans',
										fontSize: '0.75rem',
										color: 'rgba(255,255,255,0.6)',
										textAlign: 'center',
										mt: 1,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										gap: 0.5,
									}}
								>
									<Box
										component='span'
										sx={{
											animation: 'bounceHorizontal 2s infinite',
											'@keyframes bounceHorizontal': {
												'0%, 100%': { transform: 'translateX(0)' },
												'50%': { transform: 'translateX(4px)' },
											},
										}}
									>
										←
									</Box>
									Прокрутите, чтобы увидеть больше городов
									<Box
										component='span'
										sx={{
											animation: 'bounceHorizontal 2s infinite',
											'@keyframes bounceHorizontal': {
												'0%, 100%': { transform: 'translateX(0)' },
												'50%': { transform: 'translateX(-4px)' },
											},
										}}
									>
										→
									</Box>
								</Typography>
							</motion.div>
						</motion.div>
					</Box>
					{/* Локации - Старый вид для ПК */}
					<List
						disablePadding
						sx={{
							display: { xs: 'none', md: 'flex' },
							flexWrap: { xs: 'wrap', sm: 'nowrap' },
							justifyContent: { xs: 'center', lg: 'space-between' },
							width: '100%',
							mt: { xs: 2, md: 3 },
							gap: { xs: 0, sm: 0 },
							animation: 'fadeIn 0.6s ease 0.3s both',
							'@keyframes fadeIn': {
								'0%': { opacity: 0 },
								'100%': { opacity: 1 },
							},
						}}
					>
						{locItems.map((item, index) => (
							<ListItem
								key={item}
								disablePadding
								sx={{
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center',
									pt: 0,
									pb: 0,
									order: { xs: index === 2 ? -1 : 0, lg: 0 },
									width: {
										xs: index === 2 ? '100%' : '25%',
										sm: 'auto',
										lg: 'auto',
									},
									boxSizing: 'border-box',
									mb: { xs: index === 2 ? 2.5 : 0, sm: 0, lg: 0 },
									animation: `fadeInUp 0.4s ease ${0.3 + index * 0.1}s both`,
									'@keyframes fadeInUp': {
										'0%': { opacity: 0, transform: 'translateY(20px)' },
										'100%': { opacity: 1, transform: 'translateY(0)' },
									},
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
					<motion.div
						initial='hidden'
						animate='visible'
						variants={fadeInUp}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
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
					</motion.div>

					{/* 🏅 Сертификаты */}
					<motion.div
						initial='hidden'
						animate='visible'
						variants={fadeInUp}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
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
									justifyContent: 'center',
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
									justifyContent: 'center',
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
					</motion.div>

					{/* Кнопка */}
					<motion.div
						initial='hidden'
						animate='visible'
						variants={fadeInUp}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
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
									background:
										'linear-gradient(135deg, #DBBE2E 0%, #F7E4AF 100%)',
									transform: {
										xs: 'scale(1.02)',
										sm: 'scale(1.05)',
										lg: 'scale(1.03)',
									},
									boxShadow: '0 8px 20px rgba(219,190,46,0.45)',
								},
							}}
						>
							<motion.div
								animate={{
									scale: [1, 1.1, 1],
									rotate: [0, -5, 5, -3, 0],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: 'reverse',
									ease: 'easeInOut',
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
							</motion.div>
							Получить консультацию
						</Button>
					</motion.div>
				</Box>

				{/* Картинки собак — Desktop */}
				<Box
					sx={{
						position: 'relative',
						flexShrink: 0,
						display: { xs: 'none', lg: 'block' },
					}}
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
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
					</motion.div>
				</Box>

				{/* Картинки собак — Mobile */}
				<Box
					sx={{
						position: 'relative',
						display: { xs: 'block', lg: 'none' },
						width: '100%',
						maxWidth: '400px',
						mt: 2,
					}}
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.6 }}
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
					</motion.div>
				</Box>
			</Box>
		</Box>
	)
}
