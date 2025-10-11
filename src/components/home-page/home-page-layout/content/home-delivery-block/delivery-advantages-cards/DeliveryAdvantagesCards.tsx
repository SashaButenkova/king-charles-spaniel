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
	imageIcon: Array<{
		src: string
		sx?: SxProps<Theme>
	}>
	title: string
	subtitle: string
	paragraph: string
	sx?: SxProps<Theme>
}

export const DeliveryAdvantagesCards: React.FC<
	DeliveryAdvantagesCardsProps
> = ({ index, title, subtitle, imageIcon, paragraph, sx }) => {
	return (
		<Box
			component='section'
			className='Advantages-Box'
			sx={[
				{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
					alignItems: { xs: 'center', sm: 'flex-start' },
					textAlign: { xs: 'center', sm: 'left' },
					border: '1px solid rgba(0,0,0,0.1)',
					borderRadius: '12px',
					padding: { xs: '1.25rem 1rem', sm: '1rem 1.25rem' },
					backgroundColor: '#fff',
					gap: { xs: '0.75rem', sm: '0.5rem' },
					width: '100%',
				},
				...(Array.isArray(sx) ? sx : [sx]),
			]}
		>
			{/* Иконка */}
			<CardMedia
				component='img'
				src={imageIcon[0].src}
				sx={{
					width: { xs: 48, sm: 50 },
					height: { xs: 48, sm: 50 },
					marginBottom: { xs: '0.5rem', sm: 0 },
				}}
			/>

			{/* Контент */}
			<Stack
				sx={{
					width: '100%',
					gap: { xs: '0.5rem', sm: '0.75rem' },
					alignItems: { xs: 'center', sm: 'flex-start' },
					justifyContent: { xs: 'center', sm: 'flex-start' },
				}}
			>
				<Typography
					sx={{
						fontFamily: theme.typography.PTSerif.fontFamily,
						color: '#8C0303',
						fontWeight: 600,
						fontSize: { xs: '1.1rem', sm: '18px' },
						lineHeight: 1.3,
					}}
				>
					{title}
				</Typography>

				<Typography
					sx={{
						fontFamily: theme.typography.PTSans.fontFamily,
						fontWeight: 400,
						color: '#00000099',
						fontSize: { xs: '0.9rem', sm: '14px' },
						lineHeight: 1.5,
						maxWidth: '100%',
					}}
				>
					{subtitle}
				</Typography>

				<Box
					sx={{
						backgroundColor: '#F7E4AF',
						borderRadius: '8px',
						display: 'inline-flex',
						justifyContent: 'center',
						alignItems: 'center',
						padding: { xs: '0.4rem 0.9rem', sm: '0.25rem 0.5rem' },
						marginTop: { xs: '0.3rem', sm: 0 },
					}}
				>
					<Typography
						sx={{
							fontFamily: theme.typography.PTSans.fontFamily,
							color: '#8C0303',
							fontWeight: 600,
							fontSize: { xs: '0.9rem', sm: '16px' },
							lineHeight: 1.2,
							whiteSpace: 'nowrap',
						}}
					>
						{paragraph}
					</Typography>
				</Box>
			</Stack>
		</Box>
	)
}
