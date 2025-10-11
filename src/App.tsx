import { Box } from '@mui/material'
import * as React from 'react'
import { HomePageLayout } from './components/home-page/home-page-layout/HomePageLayout'
import { Route, Routes } from 'react-router-dom'
import { GlobalStyles } from '@mui/material'

export const App: React.FC = () => {
	return (
		<Box
			sx={{
				width: '100%',
				maxWidth: '100%',
				overflowX: 'hidden',
				position: 'relative',
			}}
		>
			<GlobalStyles
				styles={{
					'*': {
						boxSizing: 'border-box',
					},
					'html, body': {
						margin: 0,
						padding: 0,
						width: '100%',
						maxWidth: '100%',
						overflowX: 'hidden',
						fontFamily: '"Inter", sans-serif',
					},
					'#root': {
						width: '100%',
						maxWidth: '100%',
						overflowX: 'hidden',
					},
					// Предотвращаем горизонтальную прокрутку
					'img, svg, video, canvas, audio, iframe, embed, object': {
						maxWidth: '100%',
						height: 'auto',
					},
					// Для длинных слов и текста
					'p, h1, h2, h3, h4, h5, h6, span, div, a': {
						wordWrap: 'break-word',
						overflowWrap: 'break-word',
					},
					// Убираем стандартные стили кнопок
					button: {
						maxWidth: '100%',
					},
					// Убираем стандартные стили списков
					'ul, ol': {
						paddingLeft: '1rem',
						margin: 0,
					},
					// Мобильная оптимизация
					'@media (max-width: 768px)': {
						body: {
							fontSize: '14px',
						},
						h1: {
							fontSize: '2em',
						},
					},
				}}
			/>
			<React.StrictMode>
				<Routes>
					<Route path='/' element={<HomePageLayout />} />
				</Routes>
			</React.StrictMode>
		</Box>
	)
}
