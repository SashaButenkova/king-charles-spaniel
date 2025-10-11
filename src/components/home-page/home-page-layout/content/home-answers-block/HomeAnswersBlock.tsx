import {
	Box,
	Button,
	CardMedia,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import { theme } from '../../../../../styles/themes'

interface HomeAnswersBlockProps {}

export const HomeAnswersBlock: React.FC<HomeAnswersBlockProps> = ({}) => {
	const faqList = [
		{
			question: 'Какие документы идут вместе с щенком?',
			answer:
				'Каждому щенку мы передаём родословную, ветеринарный паспорт с отметками о прививках и номером чипа (щенок обязательно чипирован).',
		},
		{
			question: 'Делаете ли вы доставку щенков?',
			answer:
				'Питомник лично и бесплатно доставляет щенков по всей Беларуси, а также в регионы России — Смоленскую, Брянскую области, близлежащие территории Москвы и Московскую область. Мы заботимся о безопасности и комфорте малыша на всём пути.',
		},
		{
			question: 'Какие условия оплаты?',
			answer:
				'Оплата производится при получении щенка прямо у вас дома. Мы полностью доверяем нашим покупателям и уверены в их порядочности.',
		},
		{
			question: 'Как правильно подготовиться к появлению щенка дома?',
			answer:
				'Рекомендуем заранее подготовить уютное и безопасное место для щенка, приобрести необходимые принадлежности — миски для еды и воды, игрушки, лежак, средства ухода. К тому же каждому щенку прилагается полезная памятка с советами и рекомендациями, которая поможет вам быстро освоиться и начать счастливую совместную жизнь.',
		},
		{
			question: 'Предоставляете ли вы поддержку после покупки щенка?',
			answer:
				'Да, мы всегда на связи с нашими покупателями и готовы помочь советом по телефону или через мессенджеры в любое время.',
		},
	]

	// Функции для обработки кликов по кнопкам
	const handleCallUs = () => {
		window.open('tel:+375296395904', '_self')
	}

	const handleWhatsApp = () => {
		const phoneNumber = '375296395904'
		const message = encodeURIComponent(
			'Здравствуйте! У меня есть вопрос по поводу щенков кавалер кинг чарльз спаниеля.'
		)
		window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
	}

	return (
		<Box
			id='faq'
			component='section'
			className='General-Answers-Box'
			sx={{
				minHeight: { xs: 'auto', md: '72.75rem' },
				background: 'linear-gradient(135deg, #F8F7F5 0%, #F1F0ED 100%)',
				position: 'relative',
				overflow: 'hidden',
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: `
						radial-gradient(circle at 10% 20%, rgba(140,3,3,0.03) 0%, transparent 50%),
						radial-gradient(circle at 90% 80%, rgba(219,190,46,0.03) 0%, transparent 50%)
					`,
				},
			}}
		>
			{/* Заголовок блока - выровнен по центру */}
			<Box
				className='Header-Answers-Stack'
				sx={{
					position: 'relative',
					zIndex: 2,
					paddingBlockStart: { xs: '2rem', md: '3rem' },
					gap: { xs: '0.75rem', md: '1rem' },
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					maxWidth: '1200px',
					margin: '0 auto',
					paddingX: { xs: '1rem', sm: '1.5rem', md: '2rem' },
				}}
			>
				<Box
					className='Header-Answers-Title-Stack'
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						gap: { xs: 1, md: 2 },
						padding: { xs: '0.4rem 1rem', md: '0.5rem 1.5rem' },
						backgroundColor: '#F7E4AF',
						borderRadius: { xs: '8px', md: '12px' },
						border: '1px solid rgba(140,3,3,0.1)',
						boxShadow: '0 4px 12px rgba(247,228,175,0.4)',
					}}
				>
					<CardMedia
						component='img'
						src='question.svg'
						sx={{
							width: { xs: '20px', md: '24px' },
							height: { xs: '20px', md: '24px' },
							filter: 'drop-shadow(0 2px 4px rgba(140,3,3,0.2))',
						}}
					/>
					<Typography
						sx={{
							fontFamily: '"Inter", sans-serif',
							fontWeight: '600',
							fontSize: { xs: '12px', md: '14px' },
							letterSpacing: '-0.01em',
							color: '#8C0303',
						}}
					>
						Часто задаваемые вопросы
					</Typography>
				</Box>

				<Box
					className='Header-Answers-SubTitle-Stack'
					sx={{
						textAlign: 'center',
						px: { xs: 1, sm: 0 },
					}}
				>
					<Typography
						sx={{
							fontFamily: '"Playfair Display", serif',
							fontWeight: '700',
							fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
							lineHeight: 1.1,
							background: 'linear-gradient(135deg, #DBBE2E 0%, #8C0303 100%)',
							backgroundClip: 'text',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							textShadow: '0 4px 8px rgba(0,0,0,0.1)',
						}}
					>
						Ответы на популярные вопросы
					</Typography>
				</Box>

				<Box
					className='Header-Answers-Paragraph-Stack'
					sx={{
						textAlign: 'center',
						maxWidth: { xs: '100%', sm: '500px', md: '600px' },
						px: { xs: 1, sm: 0 },
					}}
				>
					<Typography
						sx={{
							fontFamily: theme.typography.PTSans,
							fontWeight: '400',
							fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
							lineHeight: { xs: 1.5, md: 1.6 },
							color: '#00000099',
						}}
					>
						Собрали самые частые вопросы от будущих владельцев. Если не нашли
						ответ — свяжитесь с нами для персональной консультации.
					</Typography>
				</Box>
			</Box>

			{/* Аккордеоны - одинаковой ширины и по центру */}
			<Box
				className='Main-Services-Stack'
				sx={{
					position: 'relative',
					zIndex: 2,
					paddingBlockStart: { xs: '1.5rem', md: '2.5rem' },
					gap: { xs: '1rem', md: '1.5rem' },
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%',
					maxWidth: '71.625rem',
					margin: '0 auto',
					paddingX: { xs: '1rem', sm: '1.5rem', md: '2rem' },
					paddingBottom: { xs: '2rem', md: 0 },
				}}
			>
				{faqList.map((faq, index) => (
					<Accordion
						key={index}
						sx={{
							width: '100%',
							maxWidth: '71.625rem',
							backgroundColor: '#FFFFFF',
							borderRadius: { xs: '12px !important', md: '16px !important' },
							boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
							border: '1px solid rgba(140,3,3,0.1)',
							transition: 'all 0.3s ease',
							'&:before': { display: 'none' },
							'&.MuiAccordion-root': {
								borderRadius: { xs: '12px', md: '16px' },
							},
							'&:hover': {
								boxShadow: '0 8px 30px rgba(140,3,3,0.12)',
								transform: { xs: 'translateY(-1px)', md: 'translateY(-2px)' },
							},
							'&.Mui-expanded': {
								margin: '0 !important',
								boxShadow: '0 8px 30px rgba(140,3,3,0.15)',
							},
						}}
					>
						<AccordionSummary
							expandIcon={
								<ExpandMoreIcon
									sx={{
										color: '#8C0303',
										fontSize: { xs: '1.5rem', md: '2rem' },
									}}
								/>
							}
							sx={{
								padding: { xs: '1rem 1.25rem', md: '1.5rem 2rem' },
								minHeight: 'auto !important',
								'& .MuiAccordionSummary-content': {
									margin: '0 !important',
								},
								'&.Mui-expanded': {
									minHeight: 'auto !important',
									borderBottom: '1px solid rgba(140,3,3,0.1)',
									backgroundColor: 'rgba(140,3,3,0.02)',
								},
							}}
						>
							<Typography
								sx={{
									fontFamily: '"Playfair Display", serif',
									fontWeight: '600',
									fontSize: { xs: '1rem', sm: '1.125rem', md: '1.375rem' },
									lineHeight: { xs: 1.4, md: 1.3 },
									color: '#8C0303',
									pr: { xs: 2, md: 0 },
								}}
							>
								{faq.question}
							</Typography>
						</AccordionSummary>

						<AccordionDetails
							sx={{
								padding: { xs: '1.25rem 1.25rem 1.5rem', md: '2rem' },
								backgroundColor: 'rgba(248,247,245,0.5)',
							}}
						>
							<Typography
								sx={{
									fontFamily: '"PT Sans", sans-serif',
									fontWeight: '400',
									fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
									lineHeight: { xs: 1.5, md: 1.6 },
									color: '#000000CC',
								}}
							>
								{faq.answer}
							</Typography>
						</AccordionDetails>
					</Accordion>
				))}
			</Box>

			{/* Блок "Остались вопросы?" - выровнен по центру и одинаковой ширины */}
			<Box
				className='Footer-Answers-Box'
				sx={{
					position: 'relative',
					zIndex: 2,
					paddingBlockStart: { xs: '1rem', md: '2rem' },
					paddingBlockEnd: { xs: '2rem', md: '3rem' },
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					px: { xs: '1rem', sm: '1.5rem', md: '2rem' },
					boxSizing: 'border-box',
				}}
			>
				<Box
					className='Footer-Answers-Stack'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: { xs: '1rem', md: '1.25rem' },
						width: '100%',
						maxWidth: '72rem',
						borderRadius: { xs: '16px', md: '20px' },
						backgroundColor: '#FFFFFF',
						boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
						border: '1px solid rgba(255,255,255,0.5)',
						padding: { xs: '1.5rem', md: '2.5rem' },
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
					}}
				>
					<Typography
						sx={{
							fontFamily: '"Playfair Display", serif',
							fontWeight: '700',
							fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
							color: '#8C0303',
							lineHeight: 1.2,
						}}
					>
						Остались вопросы?
					</Typography>

					<Typography
						sx={{
							fontFamily: '"PT Sans", sans-serif',
							fontWeight: '400',
							fontSize: { xs: '0.875rem', sm: '0.95rem', md: '1rem' },
							lineHeight: { xs: 1.4, md: 1.5 },
							color: '#00000099',
							maxWidth: { xs: '100%', sm: '460px', md: '600px' },
							px: { xs: 1, sm: 0 },
						}}
					>
						Мы с радостью ответим на любые ваши вопросы и поможем выбрать
						идеального щенка для вашей семьи.
					</Typography>

					<Box
						className='Footer-Answers-Buttons-Stuck'
						sx={{
							display: 'flex',
							flexDirection: { xs: 'column', sm: 'row' },
							gap: { xs: '0.75rem', sm: 2 },
							paddingTop: { xs: '0.75rem', md: '1rem' },
							width: { xs: '100%', sm: 'auto' },
							flexWrap: 'wrap',
							justifyContent: 'center',
						}}
					>
						<Button
							onClick={handleCallUs}
							sx={{
								minWidth: { xs: '100%', sm: '14rem' },
								height: { xs: '2.75rem', md: '3rem' },
								backgroundColor: '#8C0303',
								borderRadius: { xs: '8px', md: '12px' },
								boxShadow: '0 4px 12px rgba(140,3,3,0.3)',
								transition: 'all 0.3s ease',
								'&:hover': {
									backgroundColor: '#a10505',
									transform: { xs: 'translateY(-1px)', md: 'translateY(-2px)' },
									boxShadow: '0 6px 20px rgba(140,3,3,0.4)',
								},
							}}
						>
							<Typography
								sx={{
									fontFamily: '"Inter", sans-serif',
									fontWeight: '600',
									fontSize: { xs: '0.85rem', md: '0.9rem' },
									color: '#FFFFFF',
									textTransform: 'none',
								}}
							>
								Позвоните нам
							</Typography>
						</Button>

						<Button
							onClick={handleWhatsApp}
							sx={{
								minWidth: { xs: '100%', sm: '18rem' },
								height: { xs: '2.75rem', md: '3rem' },
								borderRadius: { xs: '8px', md: '12px' },
								border: '2px solid #8C0303',
								backgroundColor: 'transparent',
								transition: 'all 0.3s ease',
								'&:hover': {
									backgroundColor: 'rgba(140, 3, 3, 0.04)',
									transform: { xs: 'translateY(-1px)', md: 'translateY(-2px)' },
									boxShadow: '0 4px 12px rgba(140,3,3,0.1)',
								},
							}}
						>
							<Typography
								sx={{
									fontFamily: '"Inter", sans-serif',
									fontWeight: '600',
									fontSize: { xs: '0.85rem', md: '0.9rem' },
									color: '#8C0303',
									textTransform: 'none',
								}}
							>
								Написать в WhatsApp
							</Typography>
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
