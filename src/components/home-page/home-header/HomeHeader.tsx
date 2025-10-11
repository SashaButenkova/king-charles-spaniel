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
		<Box
			sx={{
				width: '100vw',
				height: '100vh',
				background: 'linear-gradient(180deg, #8C0303 0%, #C84A1F 100%)',
				color: '#fff',
				display: 'flex',
				flexDirection: 'column',
				padding: '1rem 0.8rem',
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
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						gap: 1,
						cursor: 'pointer',
						filter: 'drop-shadow(0 0 8px rgba(255,217,125,0.6))',
						animation: 'glowPulse 4s ease-in-out infinite',
						transition: 'transform 0.2s ease',
						'&:active': { transform: 'scale(0.98)' },
						'@keyframes glowPulse': {
							'0%': { filter: 'drop-shadow(0 0 4px rgba(255,217,125,0.4))' },
							'50%': { filter: 'drop-shadow(0 0 12px rgba(255,217,125,0.8))' },
							'100%': { filter: 'drop-shadow(0 0 4px rgba(255,217,125,0.4))' },
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
						sx={{ width: 28, height: 32 }}
					/>
					<Box>
						<Typography
							sx={{
								fontFamily: 'PT Serif',
								fontWeight: 700,
								fontSize: '0.95rem',
							}}
						>
							Кавалеры
						</Typography>
						<Typography
							sx={{ color: '#FFD97D', fontSize: '0.78rem', fontWeight: 600 }}
						>
							Беларуси
						</Typography>
					</Box>
				</Box>

				<IconButton onClick={handleDrawerToggle} sx={{ color: '#fff', p: 0.5 }}>
					<CloseIcon sx={{ fontSize: 22 }} />
				</IconButton>
			</Box>

			{/* Навигация */}
			<List sx={{ mb: 1, flexGrow: 1 }}>
				{menuItems.map(item => (
					<ListItem
						key={item.id}
						onClick={() => handleScrollToSection(item.id)}
						sx={{
							padding: '0.6rem 0',
							borderBottom: '1px solid rgba(255,255,255,0.12)',
							cursor: 'pointer',
							'&:hover': { backgroundColor: 'rgba(255,255,255,0.06)' },
						}}
					>
						<ListItemText
							primary={item.label}
							sx={{
								'& .MuiListItemText-primary': {
									color: '#fff',
									fontFamily: '"Inter", sans-serif',
									fontWeight: 500,
									fontSize: '0.98rem',
									textAlign: 'center',
								},
							}}
						/>
					</ListItem>
				))}
			</List>

			{/* Иконка вызова */}
			<Box
				sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', mb: 1 }}
			>
				<IconButton
					href='tel:+375296395904'
					sx={{
						backgroundColor: '#FFD97D',
						width: 56,
						height: 56,
						borderRadius: '50%',
						boxShadow: '0 6px 18px rgba(255,217,125,0.25)',
						animation: 'callPulse 3s ease-in-out infinite',
						'&:hover': {
							backgroundColor: '#FFE8A1',
							boxShadow: '0 8px 26px rgba(255,217,125,0.35)',
							transform: 'translateY(-2px)',
						},
						'@keyframes callPulse': {
							'0%': { boxShadow: '0 4px 12px rgba(255,217,125,0.25)' },
							'50%': { boxShadow: '0 10px 28px rgba(255,217,125,0.45)' },
							'100%': { boxShadow: '0 4px 12px rgba(255,217,125,0.25)' },
						},
					}}
				>
					<CardMedia
						component='img'
						src='Call2.svg'
						sx={{ width: 26, height: 26 }}
					/>
				</IconButton>
			</Box>
		</Box>
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
					backdropFilter: 'blur(10px)',
					boxShadow: scrolled
						? '0 6px 22px rgba(0,0,0,0.22)'
						: '0 2px 10px rgba(0,0,0,0.08)',
					transition:
						'height 0.28s ease, background 0.28s ease, box-shadow 0.28s ease',
					height: scrolled
						? { xs: '48px', md: '50px' }
						: { xs: '40px', md: '60px' },
					justifyContent: 'center',
					zIndex: 1300,
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
						px: { xs: 1, md: 2 },
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
							transition: 'transform 0.28s ease, filter 0.28s ease',
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
								width: { xs: 30, md: scrolled ? 34 : 40 },
								height: { xs: 32, md: scrolled ? 38 : 44 },
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
										transition: 'width 0.28s ease',
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
							transition: 'all 0.22s ease',
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
							right: '3.2rem',
							width: 40,
							height: 40,
							borderRadius: '50%',
							backgroundColor: 'rgba(255,255,255,0.08)',
							border: '1px solid rgba(255,255,255,0.18)',
							backdropFilter: 'blur(6px)',
							filter: 'drop-shadow(0 0 8px rgba(255,217,125,0.6))',
							animation: 'glowPulse 4s ease-in-out infinite',
							transition: 'transform 0.18s ease, box-shadow 0.18s ease',
							'&:hover': {
								transform: 'scale(1.08)',
								filter: 'drop-shadow(0 0 16px rgba(255,217,125,0.95))',
							},
						}}
					>
						<CardMedia
							component='img'
							src='Call2.svg'
							alt='Позвонить'
							sx={{ width: 22, height: 22 }}
						/>
					</Box>

					<IconButton
						onClick={handleDrawerToggle}
						sx={{
							display: { xs: 'flex', md: 'none' },
							color: '#fff',
							position: 'absolute',
							right: '0.8rem',
						}}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			<Drawer
				variant='temporary'
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{ keepMounted: true }}
				sx={{
					display: { xs: 'block', md: 'none' },
					'& .MuiDrawer-paper': {
						width: '100vw',
						background: 'transparent',
						boxShadow: 'none',
					},
				}}
			>
				{drawer}
			</Drawer>
		</>
	)
}
