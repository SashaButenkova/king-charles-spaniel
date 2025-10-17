import {
	Box,
	type SxProps,
	type Theme,
	CardMedia,
	Stack,
	Typography,
} from '@mui/material'
import React from 'react'
import { theme } from '../../../../../../styles/themes'

export interface DeliveryAdvantagesCardsProps {
	index: number
	imageIcon: Array<{ src: string }>
	title: string
	subtitle: string
	paragraph: string
	sx?: SxProps<Theme>
	containerSx?: SxProps<Theme>
	iconSx?: SxProps<Theme>
	contentSx?: SxProps<Theme>
	titleContainerSx?: SxProps<Theme>
	titleSx?: SxProps<Theme>
	subtitleSx?: SxProps<Theme>
	paragraphSx?: SxProps<Theme>
}

export const DeliveryAdvantagesCards: React.FC<
	DeliveryAdvantagesCardsProps
> = ({
	imageIcon,
	title,
	subtitle,
	paragraph,
	index,
	sx,
	containerSx,
	iconSx,
	contentSx,
	titleContainerSx,
	titleSx,
	subtitleSx,
	paragraphSx,
}) => {
	return (
		<Box sx={{ ...sx }}>
			{/* Основной контейнер */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'row', sm: 'column' },
					alignItems: { xs: 'flex-start', sm: 'flex-start' },
					gap: { xs: '0.75rem', sm: '0.5rem' },
					width: '100%',
					...containerSx,
				}}
			>
				{/* Контейнер для иконки и заголовка на одной линии */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: { xs: 'row', sm: 'column' },
						alignItems: { xs: 'center', sm: 'flex-start' },
						gap: { xs: '0.5rem', sm: 0 },
						mb: { xs: 0, sm: '0.5rem' },
						...titleContainerSx,
					}}
				>
					{/* Иконка */}
					<Box
						sx={{
							width: { xs: '32px', sm: '48px' },
							height: { xs: '32px', sm: '48px' },
							minWidth: { xs: '32px', sm: '48px' },
							flexShrink: 0,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: { xs: '0.1rem', sm: 0 },
							...iconSx,
						}}
					>
						{imageIcon?.map((icon, i) => (
							<CardMedia
								key={i}
								component='img'
								src={icon.src}
								sx={{
									width: { xs: '20px', sm: '28px' },
									height: { xs: '20px', sm: '28px' },
								}}
							/>
						))}
					</Box>

					{/* Заголовок */}
					<Typography
						sx={{
							fontSize: { xs: '0.85rem', sm: '1rem' },
							fontWeight: { xs: 700, sm: 700 },
							lineHeight: { xs: 1.2, sm: 1.2 },
							color: '#8C0303',
							mb: 0,
							...titleSx,
						}}
					>
						{title}
					</Typography>
				</Box>

				{/* Остальной контент */}
				<Box
					sx={{
						flex: 1,
						display: 'flex',
						flexDirection: 'column',
						gap: { xs: '0.25rem', sm: '0.5rem' },
						width: '100%',
						...contentSx,
					}}
				>
					{/* Подзаголовок */}
					<Typography
						sx={{
							fontSize: { xs: '0.7rem', sm: '0.85rem' },
							lineHeight: { xs: 1.3, sm: 1.5 },
							color: '#666',
							mb: 0,
							...subtitleSx,
						}}
					>
						{subtitle}
					</Typography>

					{/* Параграф - 🔥 УБРАЛ marginTop: 'auto' для ПК версии */}
					<Typography
						sx={{
							fontSize: { xs: '0.65rem', sm: '0.8rem' },
							fontWeight: { xs: 600, sm: 600 },
							color: '#8C0303',
							background: 'rgba(140,3,3,0.05)',
							padding: { xs: '0.2rem 0.5rem', sm: '0.3rem 0.75rem' },
							borderRadius: '8px',
							alignSelf: { xs: 'flex-start', sm: 'flex-start' },
							// 🔥 УБРАЛ: mt: { xs: '0.25rem', sm: 'auto' } - теперь параграф внутри потока
							...paragraphSx,
						}}
					>
						{paragraph}
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}
