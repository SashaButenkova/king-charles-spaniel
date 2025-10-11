import { Box, CardMedia, Stack, Typography } from '@mui/material'
import type { SxProps, Theme } from '@mui/material'

import React from 'react'
import { useTheme } from '@mui/material/styles'

export interface HomeDeliveryLocationCardsProps {
	title: string
	subtitle: string
	sx?: SxProps<Theme>
	titleSx?: SxProps<Theme> // ← добавляем это
	subtitleSx?: SxProps<Theme> // ← и это
}

export const HomeDeliveryLocationCards: React.FC<
	HomeDeliveryLocationCardsProps
> = ({ title, subtitle }) => {
	const theme = useTheme()

	return (
		<Box
			component='section'
			className='Delivery-Columns-Box'
			sx={{
				display: 'flex',
				borderRadius: '20px',
				//boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.25)',
				width: '213px',
				height: '213px',
			}}
		>
			<Stack
				className='Delivery-Columns-Loc-Box'
				direction='column'
				spacing='1.25rem'
				sx={{
					alignItems: 'center',
					width: '10.813rem',
					height: '10.188rem',
					paddingBlock: '1.563rem',
					paddingInline: '1.25rem',
				}}
			>
				<CardMedia
					component='img'
					src='RedLoc.svg'
					sx={{
						width: '60px',
						height: '60px',
					}}
				></CardMedia>
				<Stack
					className='Delivery-Columns-LocCity-Box'
					sx={{
						gap: '0.75rem',
						alignItems: 'center',
						height: '5.188rem',
					}}
				>
					<Typography
						sx={{
							fontFamily: theme.typography.PTSans.fontFamily,
							fontWeight: '400',
							fontSize: '18px',
							lineHeight: '100%',
							color: '#8C0303',
						}}
					>
						{title}
					</Typography>
					<Stack>
						<Typography
							sx={{
								fontFamily: theme.typography.PTSans.fontFamily,
								fontWeight: '400',
								fontSize: '16px',
								lineHeight: '24px',
								color: '#00000099',
								textAlign: 'center',
								whiteSpace: 'pre-line',
							}}
						>
							{subtitle}
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	)
}
