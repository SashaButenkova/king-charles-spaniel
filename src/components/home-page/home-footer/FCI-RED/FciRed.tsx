import React from 'react'
import { Box, CardMedia } from '@mui/material'

export const FciRed: React.FC = ({}) => {
	return (
		<Box
			className='FCI-Box'
			component='section'
			sx={{
				position: 'relative',
				width: { xs: '16px', sm: '20px' },
				height: { xs: '16px', sm: '20px' },
				minWidth: '16px',
			}}
		>
			{/* Основной круг */}
			<CardMedia
				component='img'
				src='/FCI-Red-Banner/circle2-red.svg'
				sx={{
					width: '100%',
					height: '100%',
				}}
			/>

			{/* Второй круг */}
			<CardMedia
				component='img'
				src='/FCI-Red-Banner/circle4.svg'
				sx={{
					position: 'absolute',
					width: '90%',
					height: '90%',
					top: '5%',
					right: '5%',
				}}
			/>

			{/* Третий круг */}
			<CardMedia
				component='img'
				src='/FCI-Red-Banner/circle6.svg'
				sx={{
					position: 'absolute',
					width: '65%',
					height: '65%',
					top: '17.5%',
					right: '17.5%',
				}}
			/>

			{/* Эллипсы */}
			<CardMedia
				component='img'
				src='/FCI-Red-Banner/ellipse8.svg'
				sx={{
					position: 'absolute',
					width: '44%',
					height: '60%',
					top: '20%',
					right: '25.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/ellipse10.svg'
				sx={{
					position: 'absolute',
					width: '19.4%',
					height: '59%',
					top: '20%',
					right: '38%',
				}}
			/>

			{/* Пути и линии */}
			<CardMedia
				component='img'
				src='/FCI-Red-Banner/path12.svg'
				sx={{
					position: 'absolute',
					width: '69%',
					height: '18.85%',
					top: '42.5%',
					right: '15%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/line14.svg'
				sx={{
					position: 'absolute',
					width: '55%',
					top: '32.5%',
					right: '22.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/line16.svg'
				sx={{
					position: 'absolute',
					width: '48%',
					top: '69.5%',
					right: '25%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/path18.svg'
				sx={{
					position: 'absolute',
					width: '8%',
					height: '9.5%',
					top: '85.5%',
					right: '45%',
				}}
			/>

			{/* Буквы FCI */}
			<CardMedia
				component='img'
				src='/FCI-Red-Banner/F.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '12.5%',
					top: '47.5%',
					right: '46.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/C.svg'
				sx={{
					position: 'absolute',
					width: '12.5%',
					height: '12.5%',
					top: '47.5%',
					right: '40%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/I.svg'
				sx={{
					position: 'absolute',
					width: '2.5%',
					height: '11.9%',
					top: '47.5%',
					right: '35%',
				}}
			/>

			{/* Внешние буквы - FEDERATION CYNOLOGIQUE INTERNATIONALE */}
			<CardMedia
				component='img'
				src='/FCI-Red-Banner/Fsmall.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '83%',
					right: '40%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/E1.svg'
				sx={{
					position: 'absolute',
					width: '10.5%',
					height: '10.5%',
					top: '78%',
					right: '37.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/D.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '73%',
					right: '32%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/E2.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '70%',
					right: '26%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/R.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '64%',
					right: '24.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/A1.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '58.5%',
					right: '22%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/T1.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '55%',
					right: '19.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/I2.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '5%',
					top: '51%',
					right: '19.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/O1.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '45%',
					right: '19.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/N2.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '36%',
					right: '19.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/C1.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '29%',
					right: '22.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/Y.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '22.5%',
					right: '27%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/N3.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '17.5%',
					right: '30%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/O2.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '13%',
					right: '37.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/L1.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '8%',
					right: '44%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/O3.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '10%',
					right: '47.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/G.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '7.5%',
					right: '55%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/I4.svg'
				sx={{
					position: 'absolute',
					width: '3.75%',
					height: '10%',
					top: '7.5%',
					right: '56%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/Q.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '5.5%',
					right: '62.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/U.svg'
				sx={{
					position: 'absolute',
					width: '7.5%',
					height: '7.5%',
					top: '10.5%',
					right: '65.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/E4.svg'
				sx={{
					position: 'absolute',
					width: '7.5%',
					height: '7.5%',
					top: '12.5%',
					right: '71%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/I3.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '15%',
					right: '75%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/N4.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '17.5%',
					right: '80%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/T2.svg'
				sx={{
					position: 'absolute',
					width: '9%',
					height: '9%',
					top: '21.5%',
					right: '87%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/E3.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '27%',
					right: '90%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/R1.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '34%',
					right: '93%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/N1.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '41%',
					right: '93.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/A2.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '46.5%',
					right: '94%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/T.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '52%',
					right: '92.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/I1.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '56%',
					right: '90%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/O.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '61%',
					right: '89%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/N.svg'
				sx={{
					position: 'absolute',
					width: '13%',
					height: '13%',
					top: '67.5%',
					right: '87.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/A.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '71%',
					right: '80%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/L.svg'
				sx={{
					position: 'absolute',
					width: '10%',
					height: '10%',
					top: '75.5%',
					right: '76.5%',
				}}
			/>

			<CardMedia
				component='img'
				src='/FCI-Red-Banner/E.svg'
				sx={{
					position: 'absolute',
					width: '15%',
					height: '15%',
					top: '76%',
					right: '74.5%',
				}}
			/>
		</Box>
	)
}
