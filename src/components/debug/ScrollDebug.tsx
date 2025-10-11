// components/Debug/ScrollDebug.tsx
import { useEffect } from 'react'

export const ScrollDebug: React.FC = () => {
	useEffect(() => {
		if (process.env.NODE_ENV !== 'development') return

		const checkOverflow = () => {
			const overflowingElements: Element[] = []

			document.querySelectorAll('*').forEach(el => {
				const rect = el.getBoundingClientRect()
				const style = window.getComputedStyle(el)

				if (rect.right > window.innerWidth || rect.left < 0) {
					overflowingElements.push(el)
					console.warn('🚨 Элемент выходит за границы:', el)
					console.warn('Стили:', {
						width: style.width,
						maxWidth: style.maxWidth,
						padding: style.padding,
						margin: style.margin,
						position: style.position,
						left: style.left,
						right: style.right,
					})
				}
			})

			if (overflowingElements.length > 0) {
				console.log(
					`Найдено ${overflowingElements.length} элементов с горизонтальным скроллом`
				)
			}
		}

		// Проверяем после загрузки и ресайза
		const timer = setTimeout(checkOverflow, 1000)
		window.addEventListener('resize', checkOverflow)
		window.addEventListener('load', checkOverflow)

		return () => {
			clearTimeout(timer)
			window.removeEventListener('resize', checkOverflow)
			window.removeEventListener('load', checkOverflow)
		}
	}, [])

	return null
}

// Добавьте в App.tsx для отладки:
// {process.env.NODE_ENV === 'development' && <ScrollDebug />}
