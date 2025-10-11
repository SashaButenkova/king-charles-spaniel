import {
	CardMedia,
	Typography,
	type SxProps,
	type Theme,
	Stack,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { theme } from '../../../../../../styles/themes'

type ImageIcon = {
	src: string
	sx?: SxProps<Theme>
}

export interface HomeHistoryCardProps {
	index: number
	title: string
	subtitle: string
	iconImages: ImageIcon[]
	titleSX?: SxProps<Theme>
	sx?: SxProps<Theme> // ← добавляем это
	backgroundElement?: React.ReactNode // ← добавляем это
	badge?: {
		// ← добавляем это
		text: string
		color: string
		bgColor: string
	}
	cardSx?: SxProps<Theme> // ← добавляем это для карточки
}

export const HomeHistoryCard: React.FC<HomeHistoryCardProps> = ({
	index,
	title,
	subtitle,
	iconImages,

	titleSX,
}) => {
	return (
		<Box
			id='about'
			component='section'
			className='Columns-Box'
			sx={{
				display: 'flex',
				backgroundColor: '#FFFFFF',
				border: 'solid #0000001F 2px',
				gap: 0,
				borderRadius: '15px',
				width: '17rem',
				height: index === 1 || index === 2 ? '8.125rem' : '8.875rem',
			}}
		>
			{iconImages.map((img, i) => (
				<CardMedia
					key={i}
					component='img'
					src={img.src}
					sx={img.sx}
				></CardMedia>
			))}
			<Stack
				direction='column'
				sx={{
					gap: '.75rem',
					width: '11.25rem',
					height: '5.625rem',
					paddingBlockStart: '0.938rem',
				}}
			>
				<Typography
					sx={{
						color: '#8C0303',
						fontFamily: theme.typography.specialTypography.fontFamily,
						...titleSX,
					}}
				>
					{title}
				</Typography>
				<Typography
					sx={{
						...theme.typography.historyTypography,
						fontSize: '16px',
						lineHeight: '18px',
						letterSpacing: 0,
					}}
				>
					{subtitle}
				</Typography>
			</Stack>
		</Box>
	)
}
