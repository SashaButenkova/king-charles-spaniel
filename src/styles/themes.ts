import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
	interface Theme {
		myCustomStyles: {
			certificateDisplay: React.CSSProperties
			placeholdersDisplay: React.CSSProperties
			footerIconsDisplay: React.CSSProperties
		}
	}

	interface ThemeOptions {
		myCustomStyles?: {
			certificateDisplay?: React.CSSProperties
			placeholdersDisplay?: React.CSSProperties
			footerIconsDisplay?: React.CSSProperties
		}
	}

	interface TypographyVariants {
		specialTypography: React.CSSProperties
		certificateTypography: React.CSSProperties
		historyTypography: React.CSSProperties
		deliveryTypography: React.CSSProperties
		PTSerif: React.CSSProperties
		PTSans: React.CSSProperties
		FontSize48: React.CSSProperties
		FontSize14: React.CSSProperties
		FontSize16: React.CSSProperties
		answerTypography: React.CSSProperties
		modalTypographyTitle: React.CSSProperties
		modalTypographySubTitle: React.CSSProperties
		modalTypographyContacts: React.CSSProperties
		modalTypographyContactsTitle: React.CSSProperties
		placeholderNameTypography: React.CSSProperties
		inputPlaceholderTypography: React.CSSProperties
		footerIconsTypography: React.CSSProperties
		footerContactTitleTypography: React.CSSProperties
		footerContactParagraphTypography: React.CSSProperties
		footerContactHeaderTypography: React.CSSProperties

		// Добавляем мобильные варианты
		specialTypographyMobile: React.CSSProperties
		certificateTypographyMobile: React.CSSProperties
		deliveryTypographyMobile: React.CSSProperties
		answerTypographyMobile: React.CSSProperties
		modalTypographySubTitleMobile: React.CSSProperties
	}

	interface TypographyVariantsOptions {
		specialTypography?: React.CSSProperties
		certificateTypography?: React.CSSProperties
		historyTypography?: React.CSSProperties
		deliveryTypography?: React.CSSProperties
		PTSerif?: React.CSSProperties
		PTSans?: React.CSSProperties
		FontSize48?: React.CSSProperties
		FontSize14?: React.CSSProperties
		FontSize16?: React.CSSProperties
		answerTypography?: React.CSSProperties
		modalTypographyTitle?: React.CSSProperties
		modalTypographySubTitle?: React.CSSProperties
		modalTypographyContacts?: React.CSSProperties
		modalTypographyContactsTitle?: React.CSSProperties
		placeholderNameTypography?: React.CSSProperties
		inputPlaceholderTypography?: React.CSSProperties
		footerIconsTypography?: React.CSSProperties
		footerContactTitleTypography?: React.CSSProperties
		footerContactParagraphTypography?: React.CSSProperties
		footerContactHeaderTypography?: React.CSSProperties

		// Мобильные варианты
		specialTypographyMobile?: React.CSSProperties
		certificateTypographyMobile?: React.CSSProperties
		deliveryTypographyMobile?: React.CSSProperties
		answerTypographyMobile?: React.CSSProperties
		modalTypographySubTitleMobile?: React.CSSProperties
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		specialTypography: true
		certificateTypography: true
		historyTypography: true
		deliveryTypography: true
		PTSerif: true
		PTSans: true
		FontSize48: true
		FontSize14: true
		FontSize16: true
		answerTypography: true
		modalTypographyTitle: true
		modalTypographySubTitle: true
		modalTypographyContacts: true
		modalTypographyContactsTitle: true
		placeholderNameTypography: true
		inputPlaceholderTypography: true
		footerIconsTypography: true
		footerContactTitleTypography: true
		footerContactParagraphTypography: true
		footerContactHeaderTypography: true

		// Мобильные варианты
		specialTypographyMobile: true
		certificateTypographyMobile: true
		deliveryTypographyMobile: true
		answerTypographyMobile: true
		modalTypographySubTitleMobile: true
	}
}

export const theme = createTheme({
	myCustomStyles: {
		certificateDisplay: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			gap: '.7rem',
		},
		placeholdersDisplay: {
			height: '2.5rem',
			borderRadius: '5px',
			backgroundColor: '#8C03030D',
			marginBlockStart: '.25rem',
			paddingInlineStart: '1.125rem',
		},
		footerIconsDisplay: {
			flexDirection: 'row',
			justifyContent: 'space-around',
			alignItems: 'center',
			borderRadius: '8px',
			border: '1px solid #0000001F',
			backgroundColor: '#F7E4AF',
			height: '100%',
		},
	},

	typography: {
		fontFamily: '"Inter", sans-serif',

		// Базовые утилитарные классы
		PTSerif: {
			fontFamily: 'PT Serif',
		},
		PTSans: {
			fontFamily: 'PT Sans',
		},
		FontSize14: {
			fontSize: '14px',
		},
		FontSize48: {
			fontSize: '48px',
		},
		FontSize16: {
			fontSize: '16px',
		},

		// Десктоп версии (основные)
		specialTypography: {
			fontSize: '64px',
			fontWeight: '400',
			fontFamily: 'PT Serif',
			color: '#FFFFFF',
			lineHeight: '58px',
			letterSpacing: '-.07em',
			wordSpacing: '.4rem',
		},
		certificateTypography: {
			fontFamily: 'PT Sans',
			fontWeight: '700',
			fontSize: '14px',
			color: '#FFFFFF',
		},
		historyTypography: {
			fontFamily: 'PT Sans',
			fontSize: '24px',
			lineHeight: '23px',
			color: '#00000099',
			letterSpacing: '-.03em',
		},
		deliveryTypography: {
			fontFamily: 'PT Serif',
			fontWeight: '400',
			fontSize: '48px',
			lineHeight: '58px',
			color: '#DBBE2E',
			letterSpacing: '-.05em',
		},
		answerTypography: {
			fontFamily: 'PT Serif',
			fontWeight: '400',
			fontSize: '48px',
			lineHeight: '58px',
			letterSpacing: '-.05em',
		},
		modalTypographyTitle: {
			fontFamily: '"Inter", sans-serif',
			fontWeight: '600',
			fontSize: '16px',
			color: '#8C0303',
			lineHeight: '100%',
			letterSpacing: '-.01em',
		},
		modalTypographySubTitle: {
			fontFamily: 'PT Serif',
			fontWeight: '400',
			fontSize: '48px',
			lineHeight: '58px',
			letterSpacing: '-.05em',
			color: '#DBBE2E',
		},
		modalTypographyContactsTitle: {
			fontFamily: 'PT Sans',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '18px',
			color: '#8C0303',
			letterSpacing: '-.03em',
		},
		modalTypographyContacts: {
			fontFamily: 'PT Sans',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '18px',
			color: '#00000099',
		},
		placeholderNameTypography: {
			fontFamily: 'PT Sans',
			fontWeight: '400',
			fontSize: '15px',
			lineHeight: '16px',
			letterSpacing: '-.03em',
		},
		inputPlaceholderTypography: {
			fontFamily: '"Montserrat", sans-serif',
			fontWeight: 500,
			fontSize: '15px',
			lineHeight: '16px',
			letterSpacing: '-0.03em',
			paddingBlockStart: '1.8rem',
		},
		footerIconsTypography: {
			fontFamily: 'PT Sans',
			fontWeight: '400',
			fontSize: '12px',
			lineHeight: '23px',
			color: '#8C0303',
		},
		footerContactHeaderTypography: {
			fontFamily: 'PT Serif',
			fontWeight: '400',
			fontSize: '20px',
			letterSpacing: '-.03em',
			color: '#8C0303',
		},
		footerContactTitleTypography: {
			fontFamily: 'PT Sans',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '18px',
			letterSpacing: '.04em',
			color: '#8C0303',
		},
		footerContactParagraphTypography: {
			fontFamily: 'PT Sans',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '18px',
			letterSpacing: '.06em',
			color: '#00000099',
		},

		// Мобильные версии
		specialTypographyMobile: {
			fontSize: '32px',
			fontWeight: '400',
			fontFamily: 'PT Serif',
			color: '#FFFFFF',
			lineHeight: '1.2',
			letterSpacing: '-.07em',
			wordSpacing: '.4rem',
		},
		certificateTypographyMobile: {
			fontFamily: 'PT Sans',
			fontWeight: '700',
			fontSize: '12px',
			color: '#FFFFFF',
		},
		deliveryTypographyMobile: {
			fontFamily: 'PT Serif',
			fontWeight: '400',
			fontSize: '32px',
			lineHeight: '1.2',
			color: '#DBBE2E',
			letterSpacing: '-.05em',
		},
		answerTypographyMobile: {
			fontFamily: 'PT Serif',
			fontWeight: '400',
			fontSize: '32px',
			lineHeight: '1.2',
			letterSpacing: '-.05em',
		},
		modalTypographySubTitleMobile: {
			fontFamily: 'PT Serif',
			fontWeight: '400',
			fontSize: '32px',
			lineHeight: '1.2',
			letterSpacing: '-.05em',
			color: '#DBBE2E',
		},
	},
})
