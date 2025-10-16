import React from 'react'
import { Box, Typography } from '@mui/material'

interface HomeHistoryCardProps {
	icon: React.ReactNode
	title: string
	text: string
	bgColor?: string
	border?: boolean
}

export const HomeHistoryCard: React.FC<HomeHistoryCardProps> = ({
	icon,
	title,
	text,
	bgColor = '#fff',
	border = true,
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: { xs: 2, md: 3 },
				padding: { xs: 2.5, sm: 3, md: 3.5 },
				background: bgColor,
				borderRadius: '20px',
				boxShadow: border ? '0 0 10px rgba(0,0,0,0.05)' : 'none',
				border: border ? '1px solid rgba(0,0,0,0.05)' : 'none',
				transition: 'transform 0.3s ease, box-shadow 0.3s ease',
				height: { xs: 'auto', md: '150px' },
				'&:hover': {
					transform: 'translateY(-5px)',
					boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
				},
			}}
		>
			{/* Иконка */}
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					minWidth: { xs: 50, md: 60 },
					minHeight: { xs: 50, md: 60 },
					borderRadius: '16px',
					backgroundColor: 'rgba(140,3,3,0.08)',
					flexShrink: 0,
				}}
			>
				<Box sx={{ fontSize: { xs: 28, md: 34 }, color: '#8C0303' }}>
					{icon}
				</Box>
			</Box>

			{/* Текст */}
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
				<Typography
					sx={{
						color: '#8C0303',
						fontSize: { xs: '1rem', md: '1.1rem' },
						fontWeight: 700,
						lineHeight: 1.3,
						fontFamily: '"Inter", sans-serif',
					}}
				>
					{title}
				</Typography>

				<Typography
					sx={{
						color: '#444',
						fontSize: { xs: '0.9rem', md: '1rem' },
						lineHeight: 1.4,
						fontFamily: '"PT Sans", sans-serif',
					}}
				>
					{text}
				</Typography>
			</Box>
		</Box>
	)
}
