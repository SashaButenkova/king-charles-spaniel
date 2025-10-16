import React from 'react'
import { Box, CardMedia, Typography } from '@mui/material'
import { theme } from '../../../../../styles/themes'
import {
	HomeDeliveryLocationCards,
	type HomeDeliveryLocationCardsProps,
} from './home-delivery-location-cards/HomeDeliveryLocationCards'
import {
	DeliveryAdvantagesCards,
	type DeliveryAdvantagesCardsProps,
} from './delivery-advantages-cards/DeliveryAdvantagesCards'
import { motion, type Variants, easeOut } from 'framer-motion'

export const HomeDeliveryBlock: React.FC = () => {
	const locationCards: HomeDeliveryLocationCardsProps[] = [
		{ title: 'Беларусь', subtitle: `По всей территории республики` },
		{ title: 'Москва', subtitle: 'Москва \nи Московскую область' },
		{ title: 'Смоленск', subtitle: 'Смоленск \nи Смоленскую область' },
		{ title: 'Брянск', subtitle: 'Брянск \nи Брянскую область' },
		{ title: 'Калуга', subtitle: 'Калуга \nи Калужскую область' },
	]

	const advantagesCards: DeliveryAdvantagesCardsProps[] = [
		{
			index: 1,
			imageIcon: [{ src: 'heart.svg' }],
			title: 'Без стресса',
			subtitle: 'Щенок путешествует в комфорте, без страха и волнения',
			paragraph: 'Спокойный малыш',
		},
		{
			index: 2,
			imageIcon: [{ src: 'Shield.svg' }],
			title: 'Безопасность',
			subtitle: 'Профессиональное сопровождение и контроль здоровья в пути',
			paragraph: '100% гарантия',
		},
		{
			index: 3,
			imageIcon: [{ src: 'Clock.svg' }],
			title: 'Экономия времени',
			subtitle: 'Вам не нужно ехать к нам — мы сами привезём щенка домой',
			paragraph: 'Удобно для вас',
		},
	]

	const fadeInUp: Variants = {
		hidden: { opacity: 0, y: 24 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: easeOut },
		},
	}

	const fadeIn: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { duration: 0.6, ease: easeOut },
		},
	}

	const slideInLeft: Variants = {
		hidden: { opacity: 0, x: -30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: easeOut },
		},
	}

	const slideInRight: Variants = {
		hidden: { opacity: 0, x: 30 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: easeOut },
		},
	}

	const scaleIn: Variants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.4, ease: easeOut },
		},
	}

	const containerVariants: Variants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.12,
			},
		},
	}

	const textContainerVariants: Variants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	}

	// 🔥 Исправленный компонент для мобильного графика маршрута
	// 🔥 Исправленный компонент для мобильного графика маршрута
	const MobileRouteMap = () => (
		<Box
			sx={{
				display: { xs: 'block', md: 'none' },
				width: '100%',
				position: 'relative',
				py: 2,
				mb: 1,
			}}
		>
			{/* Основная линия маршрута */}
			<Box
				sx={{
					position: 'absolute',
					left: '50%',
					top: 0,
					bottom: 0,
					width: '3px',
					background: 'linear-gradient(180deg, #8C0303 0%, #DBBE2E 100%)',
					transform: 'translateX(-50%)',
					zIndex: 1,
				}}
			/>

			{/* Точки маршрута */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 4,
					position: 'relative',
					zIndex: 2,
				}}
			>
				{/* Беларусь - стартовая точка */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						position: 'relative',
						height: '70px',
					}}
				>
					{/* 🔥 Точка на линии */}
					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<Box
							sx={{
								width: 50,
								height: 50,
								borderRadius: '50%',
								background: 'linear-gradient(135deg, #8C0303 0%, #DBBE2E 100%)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								boxShadow: '0 4px 12px rgba(140,3,3,0.3)',
								zIndex: 3,
								marginBottom: 1,
							}}
						>
							<CardMedia
								component='img'
								src='RedLoc.svg'
								sx={{
									width: 25,
									height: 25,
									filter: 'brightness(0) invert(1)',
								}}
							/>
						</Box>
					</motion.div>
					{/* 🔥 Текст под точкой */}
					<Box sx={{ textAlign: 'center' }}>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInUp}
						>
							<Typography
								sx={{
									fontFamily: theme.typography.PTSans.fontFamily,
									fontWeight: 700,
									fontSize: '0.9rem',
									color: '#8C0303',
									background: 'rgba(255,255,255,0.9)',
									padding: '3px 10px',
									borderRadius: '20px',
									backdropFilter: 'blur(10px)',
									display: 'inline-block',
								}}
							>
								Беларусь
							</Typography>
						</motion.div>
					</Box>
				</Box>

				{/* Смоленск */}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						position: 'relative',
						height: '50px',
					}}
				>
					{/* 🔥 Текст слева */}
					<Box sx={{ flex: 1, textAlign: 'left', pl: 2, position: 'relative' }}>
						{/* 🔥 Пунктирная линия от точки к тексту */}
						<Box
							sx={{
								position: 'absolute',
								right: 0,
								top: '50%',
								width: 'calc(50% - 20px)',
								height: '1px',
								borderTop: '2px dashed #DBBE2E',
								opacity: 0.7,
								transform: 'translateY(-50%)',
							}}
						/>

						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={slideInLeft}
						>
							<Typography
								sx={{
									fontFamily: theme.typography.PTSans.fontFamily,
									fontWeight: 600,
									fontSize: '0.85rem',
									color: '#8C0303',
									background: 'rgba(255,255,255,0.9)',
									padding: '3px 10px',
									borderRadius: '20px',
									backdropFilter: 'blur(10px)',
									mb: 0.5,
									display: 'inline-block',
									position: 'relative',
									zIndex: 2,
								}}
							>
								Смоленск
							</Typography>
							<Typography
								sx={{
									fontSize: '0.65rem',
									color: '#666',
									display: 'block',
									position: 'relative',
									zIndex: 2,
								}}
							>
								Смоленская область
							</Typography>
						</motion.div>
					</Box>

					{/* 🔥 Точка на линии */}
					<Box
						sx={{
							position: 'absolute',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%, -50%)',
							zIndex: 3,
						}}
					>
						<motion.div
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Box
								sx={{
									width: 14,
									height: 14,
									borderRadius: '50%',
									background: '#DBBE2E',
									border: '2px solid white',
									boxShadow: '0 2px 6px rgba(219,190,46,0.4)',
								}}
							/>
						</motion.div>
					</Box>

					<Box sx={{ flex: 1 }} />
				</Box>

				{/* Брянск */}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						position: 'relative',
						height: '50px',
					}}
				>
					<Box sx={{ flex: 1 }} />

					{/* 🔥 Точка на линии */}
					<Box
						sx={{
							position: 'absolute',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%, -50%)',
							zIndex: 3,
						}}
					>
						<motion.div
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<Box
								sx={{
									width: 14,
									height: 14,
									borderRadius: '50%',
									background: '#DBBE2E',
									border: '2px solid white',
									boxShadow: '0 2px 6px rgba(219,190,46,0.4)',
								}}
							/>
						</motion.div>
					</Box>

					{/* 🔥 Текст справа */}
					<Box
						sx={{ flex: 1, textAlign: 'right', pr: 2, position: 'relative' }}
					>
						{/* 🔥 Пунктирная линия от точки к тексту */}
						<Box
							sx={{
								position: 'absolute',
								left: 0,
								top: '50%',
								width: 'calc(50% - 20px)',
								height: '1px',
								borderTop: '2px dashed #DBBE2E',
								opacity: 0.7,
								transform: 'translateY(-50%)',
							}}
						/>

						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={slideInRight}
						>
							<Typography
								sx={{
									fontFamily: theme.typography.PTSans.fontFamily,
									fontWeight: 600,
									fontSize: '0.85rem',
									color: '#8C0303',
									background: 'rgba(255,255,255,0.9)',
									padding: '3px 10px',
									borderRadius: '20px',
									backdropFilter: 'blur(10px)',
									mb: 0.5,
									display: 'inline-block',
									position: 'relative',
									zIndex: 2,
								}}
							>
								Брянск
							</Typography>
							<Typography
								sx={{
									fontSize: '0.65rem',
									color: '#666',
									display: 'block',
									position: 'relative',
									zIndex: 2,
								}}
							>
								Брянская область
							</Typography>
						</motion.div>
					</Box>
				</Box>

				{/* Калуга */}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						position: 'relative',
						height: '50px',
					}}
				>
					{/* 🔥 Текст слева */}
					<Box sx={{ flex: 1, textAlign: 'left', pl: 2, position: 'relative' }}>
						{/* 🔥 Пунктирная линия от точки к тексту */}
						<Box
							sx={{
								position: 'absolute',
								right: 0,
								top: '50%',
								width: 'calc(50% - 20px)',
								height: '1px',
								borderTop: '2px dashed #DBBE2E',
								opacity: 0.7,
								transform: 'translateY(-50%)',
							}}
						/>

						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={slideInLeft}
						>
							<Typography
								sx={{
									fontFamily: theme.typography.PTSans.fontFamily,
									fontWeight: 600,
									fontSize: '0.85rem',
									color: '#8C0303',
									background: 'rgba(255,255,255,0.9)',
									padding: '3px 10px',
									borderRadius: '20px',
									backdropFilter: 'blur(10px)',
									mb: 0.5,
									display: 'inline-block',
									position: 'relative',
									zIndex: 2,
								}}
							>
								Калуга
							</Typography>
							<Typography
								sx={{
									fontSize: '0.65rem',
									color: '#666',
									display: 'block',
									position: 'relative',
									zIndex: 2,
								}}
							>
								Калужская область
							</Typography>
						</motion.div>
					</Box>

					{/* 🔥 Точка на линии */}
					<Box
						sx={{
							position: 'absolute',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%, -50%)',
							zIndex: 3,
						}}
					>
						<motion.div
							initial={{ scale: 0 }}
							whileInView={{ scale: 1 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Box
								sx={{
									width: 14,
									height: 14,
									borderRadius: '50%',
									background: '#DBBE2E',
									border: '2px solid white',
									boxShadow: '0 2px 6px rgba(219,190,46,0.4)',
								}}
							/>
						</motion.div>
					</Box>

					<Box sx={{ flex: 1 }} />
				</Box>

				{/* Москва - конечная точка */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						position: 'relative',
						height: '70px',
					}}
				>
					{/* 🔥 Точка на линии */}
					<motion.div
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						<Box
							sx={{
								width: 60,
								height: 60,
								borderRadius: '50%',
								background: 'linear-gradient(135deg, #DBBE2E 0%, #8C0303 100%)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								boxShadow: '0 4px 12px rgba(219,190,46,0.4)',
								zIndex: 3,
								marginBottom: 1,
							}}
						>
							<CardMedia
								component='img'
								src='RedLoc.svg'
								sx={{
									width: 28,
									height: 28,
									filter: 'brightness(0) invert(1)',
								}}
							/>
						</Box>
					</motion.div>
					{/* 🔥 Текст под точкой */}
					<Box sx={{ textAlign: 'center' }}>
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={fadeInUp}
						>
							<Typography
								sx={{
									fontFamily: theme.typography.PTSans.fontFamily,
									fontWeight: 700,
									fontSize: '1rem',
									color: '#8C0303',
									background: 'rgba(255,255,255,0.9)',
									padding: '4px 12px',
									borderRadius: '20px',
									backdropFilter: 'blur(10px)',
									display: 'inline-block',
								}}
							>
								Москва
							</Typography>
							<Typography
								sx={{
									fontSize: '0.7rem',
									color: '#666',
									mt: 0.5,
								}}
							>
								Московская область
							</Typography>
						</motion.div>
					</Box>
				</Box>
			</Box>
		</Box>
	)

	return (
		<Box
			id='delivery'
			component='section'
			sx={{
				backgroundColor: '#F8F7F5',
				position: 'relative',
				overflow: 'hidden',
				py: { xs: '2rem', md: '5rem' },
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
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: { xs: '2rem', md: '3.5rem' },
					width: '100%',
					maxWidth: '1280px',
					margin: '0 auto',
					px: { xs: '1.25rem', sm: '2rem', md: '3rem' },
					alignItems: 'center',
					position: 'relative',
					zIndex: 2,
				}}
			>
				{/* Заголовок с анимацией */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={textContainerVariants}
					style={{ width: '100%' }}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: { xs: '0.6rem', md: '0.9rem' },
							alignItems: 'center',
							textAlign: 'center',
						}}
					>
						<motion.div variants={fadeInUp}>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									gap: { xs: '0.5rem', md: '0.75rem' },
									alignItems: 'center',
									justifyContent: 'center',
									flexWrap: 'wrap',
								}}
							>
								<motion.div
									variants={scaleIn}
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.2 }}
								>
									<CardMedia
										component='img'
										src='RedBus.svg'
										sx={{
											width: { xs: '28px', sm: '32px', md: '36px' },
											height: { xs: '28px', sm: '32px', md: '36px' },
										}}
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									<Typography
										sx={{
											fontFamily: "'Playfair Display', serif",
											fontWeight: 700,
											fontSize: { xs: '1.6rem', sm: '2rem', md: '2.4rem' },
											lineHeight: 1.2,
											background:
												'linear-gradient(135deg, #8C0303 0%, #DBBE2E 100%)',
											backgroundClip: 'text',
											WebkitBackgroundClip: 'text',
											WebkitTextFillColor: 'transparent',
										}}
									>
										Бесплатная доставка с заботой
									</Typography>
								</motion.div>
							</Box>
						</motion.div>

						<motion.div variants={fadeInUp}>
							<Typography
								sx={{
									fontFamily: theme.typography.PTSans,
									fontWeight: 400,
									fontSize: { xs: '0.95rem', md: '1.05rem' },
									lineHeight: 1.6,
									color: '#00000099',
									maxWidth: { xs: '95%', sm: '640px', md: '760px' },
								}}
							>
								Мы лично и бесплатно доставляем щенков по всей Беларуси, а также
								в Москву, Московскую, Смоленскую, Брянскую и Калужскую области.
							</Typography>
						</motion.div>
					</Box>
				</motion.div>

				{/* 🔥 Мобильная версия - график маршрута */}
				<Box sx={{ display: { xs: 'block', md: 'none' }, width: '100%' }}>
					<MobileRouteMap />
				</Box>

				{/* 🔥 ВЕРХНИЕ карточки локаций - ТОЛЬКО ДЛЯ ПК */}
				<Box sx={{ display: { xs: 'none', md: 'block' }, width: '100%' }}>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.25 }}
						variants={containerVariants}
						style={{ width: '100%' }}
					>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								gap: { xs: '1rem', sm: '1rem', md: '1.25rem' },
								justifyContent: 'center',
								alignItems: 'center',
								width: '100%',
								maxWidth: { xs: '360px', sm: '500px', md: '100%' },
								margin: '0 auto',
							}}
						>
							{locationCards.map((card, index) => (
								<motion.div
									key={index}
									variants={fadeInUp}
									whileHover={{
										y: -4,
										scale: 1.03,
										transition: { duration: 0.2 },
									}}
									style={{
										flex: {
											xs: '0 0 calc(50% - 0.375rem)',
											sm: '0 0 calc(33.333% - 0.667rem)',
											md: '0 0 auto',
										},
									}}
								>
									<HomeDeliveryLocationCards
										{...card}
										sx={{
											background: 'transparent',
											borderRadius: '12px',
											border: 'none',
											boxShadow: 'none',
											width: {
												xs: '100%',
												sm: '140px',
												md: '140px',
											},
											height: {
												xs: '95px',
												sm: '100px',
												md: '100px',
											},
											padding: {
												xs: '0.9rem',
												sm: '0.875rem',
												md: '1rem',
											},
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'center',
											textAlign: 'center',
											transition: 'all 0.25s ease',
											backgroundImage:
												'linear-gradient(135deg, rgba(140,3,3,0.05) 0%, rgba(219,190,46,0.05) 100%)',
											'&:hover': {
												backgroundImage:
													'linear-gradient(135deg, rgba(140,3,3,0.08) 0%, rgba(219,190,46,0.08) 100%)',
												boxShadow: '0 4px 12px rgba(140,3,3,0.1)',
											},
										}}
										titleSx={{
											fontSize: {
												xs: '0.9rem',
												sm: '0.9rem',
												md: '0.95rem',
											},
											fontWeight: 700,
											color: '#8C0303',
											textTransform: 'uppercase',
											mb: 0.25,
											lineHeight: 1.2,
										}}
										subtitleSx={{
											fontSize: {
												xs: '0.75rem',
												sm: '0.75rem',
												md: '0.78rem',
											},
											lineHeight: 1.3,
											whiteSpace: 'pre-line',
											color: '#666',
										}}
									/>
								</motion.div>
							))}
						</Box>
					</motion.div>
				</Box>

				{/* 🔥 Добавляем отступ между графиком и карточками преимуществ на мобильных */}
				<Box sx={{ display: { xs: 'block', md: 'none' }, height: '1rem' }} />

				{/* НИЖНИЕ карточки преимуществ с анимацией */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.25 }}
					variants={containerVariants}
					style={{ width: '100%' }}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', sm: 'row' },
							flexWrap: { xs: 'wrap', sm: 'nowrap' },
							alignItems: { xs: 'center', sm: 'stretch' },
							justifyContent: { xs: 'center', sm: 'space-between' },
							gap: { xs: '1.5rem', sm: '1.25rem' },
							width: '100%',
							maxWidth: '1100px',
							margin: '0 auto',
							transition: 'all 0.3s ease',
						}}
					>
						{advantagesCards.map((card, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								whileHover={{
									y: -3,
									scale: 1.02,
									transition: { duration: 0.2 },
								}}
								style={{
									width: '100%',
									display: 'flex',
									justifyContent: 'center',
									transition: 'transform 0.2s ease',
								}}
							>
								<DeliveryAdvantagesCards
									{...card}
									index={index}
									sx={{
										flexDirection: { xs: 'column', sm: 'row' },
										alignItems: { xs: 'center', sm: 'flex-start' },
										textAlign: { xs: 'center', sm: 'left' },
										border: '1px solid rgba(220,220,220,0.7)',
										boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
										borderRadius: '12px',
										width: { xs: '90%', sm: '100%' },
										maxWidth: { xs: '340px', sm: 'unset' },
										padding: { xs: '1.5rem 1rem', sm: '1rem 1.25rem' },
										background: '#fff',
										gap: { xs: '1rem', sm: '0.5rem' },
										transition: 'all 0.25s ease',
										'&:hover': {
											borderColor: 'rgba(140,3,3,0.3)',
											boxShadow: '0 4px 12px rgba(140,3,3,0.08)',
										},
									}}
								/>
							</motion.div>
						))}
					</Box>
				</motion.div>
			</Box>
		</Box>
	)
}
