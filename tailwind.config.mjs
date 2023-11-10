/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans]
			},
		},
	},
	plugins: [
		plugin(function({ addBase }) {
			addBase({
			  ':root': {
				// Fluid typography from 1 rem to 1.2 rem with fallback to 16px.
				fontSize: '100%',
				'font-size': 'clamp(1rem, 1.6vw, 1.2rem)',
				// Safari resize fix.
				minHeight: '0vw',
			  },
			  // Used to hide alpine elements before being rendered.
			  '[x-cloak]': {
				display: 'none !important'
			  },
			})
		  }),
		plugin(function({ addComponents, theme }) {
		const components = {
			// The main wrapper for all sections on our website. Has a max width and is centered.
			'.fluid-container': {
			width: '100%',
			maxWidth: theme('screens.xl'),
			marginLeft: 'auto',
			marginRight: 'auto',
			// Use safe-area-inset together with default padding for Apple devices with a notch.
			paddingLeft: `calc(env(safe-area-inset-left, 0rem) + ${theme('padding.8')})`,
			paddingRight: `calc(env(safe-area-inset-right, 0rem) + ${theme('padding.8')})`,
			},
			// The outer grid where all block builder blocks are a child of. Spreads out all blocks
			// vertically with a uniform space between them.
			'.outer-grid': {
			width: '100%',
			display: 'grid',
			rowGap: theme('spacing.12'),
			paddingTop: theme('spacing.12'),
			paddingBottom: theme('spacing.12'),
			// If the last child of the outer grid is full width (e.g. when it has a full width
			// colored background), give it negative margin bottom to get it flush to your
			// sites footer.
			'&>*:last-child:is([class~="w-full"])': {
				marginBottom: `-${theme('spacing.12')}`,
			},
			},
			'@media screen(md)': {
			// Larger vertical spacing between blocks on larger screens.
			'.outer-grid': {
				rowGap: theme('spacing.16'),
				paddingTop: theme('spacing.16'),
				paddingBottom: theme('spacing.16'),
				'&>*:last-child:is([class~="w-full"])': {
				marginBottom: `-${theme('spacing.16')}`,
				},
			},
			},
			'@media screen(lg)': {
			// Larger horizontal padding on larger screens.
			'.fluid-container': {
				// Use safe-area-inset together with default padding for Apple devices with a notch.
				paddingLeft: `calc(env(safe-area-inset-left, 0rem) + ${theme('padding.12')})`,
				paddingRight: `calc(env(safe-area-inset-right, 0rem) + ${theme('padding.12')})`,
			},
			// Larger vertical spacing between blocks on larger screens.
			'.outer-grid': {
				rowGap: theme('spacing.24'),
				paddingTop: theme('spacing.24'),
				paddingBottom: theme('spacing.24'),
				'&>*:last-child:is([class~="w-full"])': {
				marginBottom: `-${theme('spacing.24')}`,
				},
			},
			},
		}
		addComponents(components)
		}),
	],
}
