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

	const containerVariants: Variants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.12,
			},
		},
	}

	return (
		<Box
			id='delivery'
			component='section'
			sx={{
				backgroundColor: '#FFFFFF',
				py: { xs: '3rem', md: '5rem' },
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: { xs: '2.5rem', md: '3.5rem' },
					width: '100%',
					maxWidth: '1280px',
					margin: '0 auto',
					px: { xs: '1.25rem', sm: '2rem', md: '3rem' },
					alignItems: 'center',
				}}
			>
				{/* Заголовок */}
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={fadeInUp}
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
							<CardMedia
								component='img'
								src='RedBus.svg'
								sx={{
									width: { xs: '28px', sm: '32px', md: '36px' },
									height: { xs: '28px', sm: '32px', md: '36px' },
								}}
							/>
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
						</Box>

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
							Мы лично и бесплатно доставляем щенков по всей Беларуси, а также в
							Москву, Московскую, Смоленскую, Брянскую и Калужскую области.
						</Typography>
					</Box>
				</motion.div>

				{/* ВЕРХНИЕ карточки локаций */}
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

				{/* НИЖНИЕ карточки преимуществ */}
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
