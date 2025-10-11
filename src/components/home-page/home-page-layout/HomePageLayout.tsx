import { Box, Container } from '@mui/material'
import * as React from 'react'
import { HomeHeader } from '../home-header/HomeHeader'
import { HomeBanner } from './content/home-banner-block/HomeBanner'
import { HomeHistoryBlock } from './content/home-history-block/HomeHistoryBlock'
import { HomeDeliveryBlock } from './content/home-delivery-block/HomeDeliveryBlock'
import { HomeAnswersBlock } from './content/home-answers-block/HomeAnswersBlock'
import { HomeModalBlock } from './content/home-modal-block/HomeModalBlock'
import { HomeFooter } from '../home-footer/HomeFooter'
import { ScrollProvider } from '../../../context/ScrollContext'
export const HomePageLayout: React.FC = () => {
	return (
		<Box
			sx={{
				width: '100%',
				maxWidth: '100%',
				minHeight: '100vh',
				overflowX: 'hidden',
				position: 'relative',
			}}
		>
			<ScrollProvider>
				<HomeHeader />
				<HomeBanner />
				<HomeHistoryBlock />
				<HomeDeliveryBlock />
				<HomeAnswersBlock />
				<HomeModalBlock />
				<HomeFooter />
			</ScrollProvider>
		</Box>
	)
}
