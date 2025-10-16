import React, { useState, useEffect } from 'react'
import {
	AppBar,
	Box,
	CardMedia,
	Toolbar,
	Typography,
	Drawer,
	List,
	ListItem,
	ListItemText,
	IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { AnimatePresence, motion } from 'framer-motion'

export const HomeHeader: React.FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	const menuItems = [
		{ label: 'Главная', id: 'home' },
		{ label: 'О нас', id: 'about' },
		{ label: 'Доставка', id: 'delivery' },
		{ label: 'FAQ', id: 'faq' },
	]

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleScrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
		setMobileOpen(false)
	}

	const handleDrawerToggle = () => setMobileOpen(prev => !prev)

	// ========== Drawer (мобильное меню) ==========
	const drawer = (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.25, ease: 'easeOut' }} // 🔥 Ускорено
			style={{
				width: '100vw',
				height: '100vh',
				color: '#fff',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
				paddingLeft: 'env(safe-area-inset-left)',
				paddingRight: 'env(safe-area-inset-right)',
				paddingTop: 'env(safe-area-inset-top)',
				paddingBottom: 'env(safe-area-inset-bottom)',
			}}
		>
			{/* Само меню с градиентом (фон меню) */}
			<Box
				sx={{
					width: '100%',
					height: '100%',
					background:
						'linear-gradient(180deg, rgba(140,3,3,0.98) 0%, rgba(200,74,31,0.95) 100%)',
					backdropFilter: 'blur(6px)',
					color: '#fff',
					display: 'flex',
					flexDirection: 'column',
					padding: { xs: '1.2rem 0.9rem', sm: '1rem 0.8rem' },
					boxSizing: 'border-box',
					paddingTop: 'calc(1.2rem + env(safe-area-inset-top, 0px))',
					paddingBottom: 'calc(1.2rem + env(safe-area-inset-bottom, 0px))',
					paddingLeft: 'calc(0.9rem + env(safe-area-inset-left, 0px))',
					paddingRight: 'calc(0.9rem + env(safe-area-inset-right, 0px))',
				}}
			>
				{/* Верхняя строка */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						mb: 1,
						mt: 'env(safe-area-inset-top) ? 0.5rem : 0',
					}}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: -4 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ duration: 0.3, ease: 'easeOut' }} // 🔥 Ускорено
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								gap: 1.2,
								cursor: 'pointer',
								filter: 'drop-shadow(0 0 10px rgba(255,217,125,0.7))',
								animation: 'glowPulse 4s ease-in-out infinite',
								mt: 0.6,
								transition: 'transform 0.15s ease', // 🔥 Ускорено
								'&:active': { transform: 'scale(0.98)' },
								'@keyframes glowPulse': {
									'0%': {
										filter: 'drop-shadow(0 0 6px rgba(255,217,125,0.4))',
									},
									'50%': {
										filter: 'drop-shadow(0 0 16px rgba(255,217,125,0.9))',
									},
									'100%': {
										filter: 'drop-shadow(0 0 6px rgba(255,217,125,0.4))',
									},
								},
							}}
							onClick={() => {
								setMobileOpen(false)
								window.scrollTo({ top: 0, behavior: 'smooth' })
							}}
						>
							<CardMedia
								component='img'
								src='Vector 10.svg'
								sx={{
									width: 42,
									height: 46,
									filter: 'drop-shadow(0 0 8px rgba(255,217,125,0.6))',
									transition: 'transform 0.25s ease', // 🔥 Ускорено
									'&:hover': { transform: 'scale(1.05)' },
								}}
							/>
						</Box>
					</motion.div>

					<IconButton
						onClick={handleDrawerToggle}
						sx={{
							color: '#fff',
							p: 0.5,
							minWidth: 44,
							minHeight: 44,
							transition: 'transform 0.15s ease', // 🔥 Добавлено
							'&:active': { transform: 'scale(0.9)' },
						}}
					>
						<CloseIcon sx={{ fontSize: 22 }} />
					</IconButton>
				</Box>

				{/* Навигация */}
				<List
					sx={{
						mb: 1,
						flexGrow: 1,
						mt: 2,
						paddingBottom: 'env(safe-area-inset-bottom) ? 1rem : 0',
					}}
				>
					{menuItems.map((item, idx) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 20 }} // 🔥 Добавлен exit
							transition={{
								delay: 0.08 + idx * 0.04, // 🔥 Ускорено
								duration: 0.22, // 🔥 Ускорено
								ease: 'easeOut',
							}}
						>
							<ListItem
								onClick={() => handleScrollToSection(item.id)}
								sx={{
									padding: '0.8rem 0',
									borderBottom: '1px solid rgba(255,255,255,0.12)',
									cursor: 'pointer',
									'&:hover': { backgroundColor: 'rgba(255,255,255,0.06)' },
									minHeight: 56,
									transition: 'background-color 0.2s ease', // 🔥 Добавлено
								}}
							>
								<ListItemText
									primary={item.label}
									sx={{
										'& .MuiListItemText-primary': {
											color: '#fff',
											fontFamily: '"Inter", sans-serif',
											fontWeight: 500,
											fontSize: '1.08rem',
											textAlign: 'center',
											transition: 'color 0.2s ease', // 🔥 Добавлено
										},
									}}
								/>
							</ListItem>
						</motion.div>
					))}
				</List>

				{/* Иконка вызова */}
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						mt: 'auto',
						mb: 1,
						paddingBottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))',
					}}
				>
					<IconButton
						href='tel:+375296395904'
						sx={{
							backgroundColor: '#FFD97D',
							width: 64,
							height: 64,
							borderRadius: '50%',
							boxShadow: '0 8px 22px rgba(255,217,125,0.28)',
							position: 'relative',
							overflow: 'visible',
							animation: 'callPulse 3s ease-in-out infinite',
							transition: 'all 0.25s ease', // 🔥 Ускорено
							'&:hover': {
								backgroundColor: '#FFE8A1',
								boxShadow: '0 10px 30px rgba(255,217,125,0.36)',
								transform: 'translateY(-2px)',
							},
							'&:active': {
								transform: 'translateY(0) scale(0.95)', // 🔥 Добавлено
							},
							'@keyframes callPulse': {
								'0%': {
									boxShadow: '0 0 10px rgba(255,217,125,0.3)',
									transform: 'scale(1)',
								},
								'50%': {
									boxShadow: '0 0 30px rgba(255,217,125,0.6)',
									transform: 'scale(1.06)',
								},
								'100%': {
									boxShadow: '0 0 10px rgba(255,217,125,0.3)',
									transform: 'scale(1)',
								},
							},
						}}
					>
						<CardMedia
							component='img'
							src='Call2.svg'
							sx={{
								width: 30,
								height: 30,
								filter: 'drop-shadow(0 0 6px rgba(255,217,125,0.8))',
								animation: 'phoneShake 2s infinite ease-in-out',
								'@keyframes phoneShake': {
									'0%, 100%': { transform: 'rotate(0deg)' },
									'10%, 30%, 50%, 70%, 90%': { transform: 'rotate(-15deg)' },
									'20%, 40%, 60%, 80%': { transform: 'rotate(15deg)' },
								},
							}}
						/>

						<Box
							sx={{
								position: 'absolute',
								inset: 0,
								borderRadius: '50%',
								border: '2px solid rgba(255,217,125,0.5)',
								animation: 'ringExpand 2.5s ease-out infinite',
								pointerEvents: 'none',
								'@keyframes ringExpand': {
									'0%': { transform: 'scale(1)', opacity: 0.8 },
									'70%': { transform: 'scale(1.8)', opacity: 0 },
									'100%': { transform: 'scale(1.8)', opacity: 0 },
								},
							}}
						/>
					</IconButton>
				</Box>
			</Box>
		</motion.div>
	)

	// ========== AppBar ==========
	return (
		<>
			<AppBar
				position='fixed'
				sx={{
					display: { xs: mobileOpen ? 'none' : 'flex', md: 'flex' },
					background: scrolled
						? 'linear-gradient(180deg, rgba(140,3,3,0.85) 0%, rgba(200,80,30,0.6) 100%)'
						: 'linear-gradient(180deg, rgba(140,3,3,0.55) 0%, rgba(200,80,30,0.35) 100%)',
					backdropFilter: { xs: 'blur(10px)', md: 'none' },
					boxShadow: scrolled
						? '0 6px 22px rgba(0,0,0,0.22)'
						: '0 2px 10px rgba(0,0,0,0.08)',
					transition:
						'height 0.25s ease, background 0.25s ease, box-shadow 0.25s ease', // 🔥 Ускорено
					height: scrolled
						? { xs: '48px', md: '50px' }
						: { xs: '56px', md: '60px' },
					justifyContent: 'center',
					zIndex: 1300,
					paddingLeft: { xs: 'env(safe-area-inset-left)', md: 0 },
					paddingRight: { xs: 'env(safe-area-inset-right)', md: 0 },
					paddingTop: { xs: 'env(safe-area-inset-top)', md: 0 },
					minHeight: {
						xs: 'calc(48px + env(safe-area-inset-top))',
						md: '50px',
					},
				}}
			>
				<Toolbar
					sx={{
						width: '100%',
						maxWidth: '1200px',
						margin: '0 auto',
						minHeight: '0 !important',
						position: 'relative',
						display: 'flex',
						alignItems: 'center',
						paddingLeft: {
							xs: 'max(1rem, env(safe-area-inset-left, 0px))',
							md: 2,
						},
						paddingRight: {
							xs: 'max(1rem, env(safe-area-inset-right, 0px))',
							md: 2,
						},
						height: {
							xs: scrolled
								? 'calc(48px + env(safe-area-inset-top, 0px))'
								: 'calc(56px + env(safe-area-inset-top, 0px))',
							md: scrolled ? '50px' : '60px',
						},
					}}
				>
					{/* ЛОГОТИП */}
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: { xs: 0.8, md: 1 },
							cursor: 'pointer',
							transform: scrolled ? 'scale(0.92)' : 'scale(1)',
							transition: 'transform 0.25s ease, filter 0.25s ease', // 🔥 Ускорено
							filter: 'drop-shadow(0 0 10px rgba(255,217,125,0.6))',
							animation: 'glowPulse 4s ease-in-out infinite',
							'@keyframes glowPulse': {
								'0%': { filter: 'drop-shadow(0 0 6px rgba(255,217,125,0.35))' },
								'50%': {
									filter: 'drop-shadow(0 0 14px rgba(255,217,125,0.8))',
								},
								'100%': {
									filter: 'drop-shadow(0 0 6px rgba(255,217,125,0.35))',
								},
							},
						}}
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						<CardMedia
							component='img'
							src='Vector 10.svg'
							alt='Логотип Кавалеры Беларуси'
							sx={{
								width: { xs: scrolled ? 30 : 36, md: scrolled ? 34 : 40 },
								height: { xs: scrolled ? 32 : 38, md: scrolled ? 38 : 44 },
								transition: 'width 0.15s ease, height 0.15s ease', // 🔥 Ускорено
							}}
						/>
						<Typography
							sx={{
								display: { xs: 'none', sm: 'block' },
								fontFamily: 'PT Serif',
								fontWeight: 700,
								fontSize: { md: scrolled ? '1rem' : '1.12rem' },
								color: '#FFD97D',
								textShadow: '0 0 8px rgba(255,217,125,0.8)',
							}}
						>
							Кавалеры&nbsp;Беларуси
						</Typography>
					</Box>

					{/* Меню ПК */}
					<Box
						sx={{
							position: 'absolute',
							left: '50%',
							transform: 'translateX(-50%)',
							display: { xs: 'none', md: 'flex' },
							gap: '2.2rem',
							alignItems: 'center',
						}}
					>
						{menuItems.map((item, idx) => (
							<Box
								component='a'
								key={idx}
								href={`#${item.id}`}
								onClick={e => {
									e.preventDefault()
									handleScrollToSection(item.id)
								}}
								sx={{
									fontFamily: '"Inter", sans-serif',
									fontWeight: 500,
									fontSize: '1rem',
									color: '#fff',
									textDecoration: 'none',
									position: 'relative',
									py: 0.3,
									transition: 'color 0.2s ease', // 🔥 Ускорено
									'&:hover': {
										color: '#FFD97D',
										'&::after': { width: '100%' },
									},
									'&::after': {
										content: '""',
										position: 'absolute',
										bottom: -6,
										left: 0,
										width: 0,
										height: 2,
										backgroundColor: '#FFD97D',
										transition: 'width 0.25s ease', // 🔥 Ускорено
									},
								}}
							>
								{item.label}
							</Box>
						))}
					</Box>

					{/* Телефон (ПК) */}
					<Box
						component='a'
						href='tel:+375296395904'
						sx={{
							display: { xs: 'none', md: 'flex' },
							flexDirection: 'row',
							alignItems: 'center',
							gap: 1,
							position: 'absolute',
							right: { xs: 12, md: '2rem' },
							textDecoration: 'none',
							color: '#fff',
							fontFamily: 'PT Sans',
							fontWeight: 600,
							fontSize: '1rem',
							padding: '0.35rem 0.8rem',
							borderRadius: '8px',
							backgroundColor: 'rgba(255,255,255,0.08)',
							border: '1px solid rgba(255,255,255,0.14)',
							backdropFilter: 'blur(6px)',
							transition: 'all 0.2s ease', // 🔥 Ускорено
							'&:hover': {
								color: '#FFD97D',
								backgroundColor: 'rgba(255,255,255,0.14)',
								boxShadow: '0 6px 18px rgba(255,217,125,0.12)',
							},
						}}
					>
						<CardMedia
							component='img'
							src='Call2.svg'
							sx={{ width: 20, height: 20 }}
						/>
						<Typography sx={{ fontSize: '0.98rem' }}>
							+375 (29) 639-59-04
						</Typography>
					</Box>

					{/* Телефон и меню (мобилка) */}
					<Box
						component='a'
						href='tel:+375296395904'
						sx={{
							display: { xs: 'flex', md: 'none' },
							alignItems: 'center',
							justifyContent: 'center',
							position: 'absolute',
							right: {
								xs: 'calc(4.0rem + env(safe-area-inset-right, 0px))',
								md: '4.8rem',
							},
							transition: 'all 0.25s ease', // 🔥 Ускорено
							minWidth: 44,
							minHeight: 44,
							'&:hover': {
								transform: 'scale(1.12)',
							},
						}}
					>
						<motion.div
							animate={{
								scale: [1, 1.1, 1],
								rotate: [0, -5, 5, 0],
							}}
							transition={{
								duration: 2,
								repeat: Infinity,
								repeatType: 'reverse',
								ease: 'easeInOut',
							}}
						>
							<CardMedia
								component='img'
								src='Call2.svg'
								alt='Позвонить'
								sx={{
									width: scrolled ? 20 : 24,
									height: scrolled ? 20 : 24,
									filter: 'brightness(0) invert(1)',
									transition: 'width 0.25s ease, height 0.25s ease', // 🔥 Ускорено
								}}
							/>
						</motion.div>
					</Box>

					<IconButton
						onClick={handleDrawerToggle}
						sx={{
							display: { xs: 'flex', md: 'none' },
							color: '#fff',
							position: 'absolute',
							right: {
								xs: 'calc(0.8rem + env(safe-area-inset-right, 0px))',
								md: '0.8rem',
							},
							width: 44,
							height: 44,
							minWidth: 44,
							minHeight: 44,
							transition: 'transform 0.15s ease', // 🔥 Добавлено
							'&:active': { transform: 'scale(0.9)' },
							'& .MuiSvgIcon-root': {
								fontSize: 28,
							},
						}}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			{/* Мобильное меню с полупрозрачным размытым фоном */}
			<AnimatePresence>
				{mobileOpen && (
					<>
						{/* Полупрозрачный + размытый фон */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 0.55 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.1, ease: 'easeOut' }} // 🔥 Ускорено
							style={{
								position: 'fixed',
								inset: 0,
								background: 'rgba(0,0,0,0.5)',
								backdropFilter: 'blur(8px)',
								WebkitBackdropFilter: 'blur(8px)',
								zIndex: 1298,
								paddingLeft: 'env(safe-area-inset-left)',
								paddingRight: 'env(safe-area-inset-right)',
								paddingTop: 'env(safe-area-inset-top)',
								paddingBottom: 'env(safe-area-inset-bottom)',
							}}
							onClick={() => setMobileOpen(false)}
						/>

						{/* Drawer */}
						<Drawer
							variant='temporary'
							open={mobileOpen}
							onClose={handleDrawerToggle}
							ModalProps={{
								keepMounted: true,
								closeAfterTransition: true, // 🔥 Добавлено
							}}
							sx={{
								display: { xs: 'block', md: 'none' },
								zIndex: 1299,
								'& .MuiDrawer-paper': {
									width: '100vw',
									background: 'transparent',
									boxShadow: 'none',
									paddingLeft: 'env(safe-area-inset-left)',
									paddingRight: 'env(safe-area-inset-right)',
									paddingTop: 'env(safe-area-inset-top)',
									paddingBottom: 'env(safe-area-inset-bottom)',
								},
							}}
						>
							{drawer}
						</Drawer>
					</>
				)}
			</AnimatePresence>
		</>
	)
}
