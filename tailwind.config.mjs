/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
                sans: ['Ubuntu', ...defaultTheme.fontFamily.sans]
			},
			// Set default transition durations and easing when using the transition utilities.
			transitionDuration: {
				DEFAULT: '300ms',
			},
			transitionTimingFunction: {
				DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
			},
			colors: {
				'loca': {
					DEFAULT: '#488e2a',
					'50': '#f1faeb',
					'100': '#e0f3d4',
					'200': '#c3e8ae',
					'300': '#9dd87e',
					'400': '#7bc655',
					'500': '#5cab37',
					'600': '#488e2a',
					'700': '#366823',
					'800': '#2e5420',
					'900': '#29481f',
					'950': '#12270c',
				},
				'shark': {
					DEFAULT: '#211e20',
					'50': '#f8f7f8',
					'100': '#f0eeef',
					'200': '#dddadc',
					'300': '#c0b9be',
					'400': '#9e929b',
					'500': '#82757f',
					'600': '#6a5f67',
					'700': '#574d54',
					'800': '#4a4248',
					'900': '#403a3e',
					'950': '#211e20',
				},
								
			},
			typography: (theme) => ({
				DEFAULT: {
				  css: {
					color: theme('colors.shark.950'),
					'--tw-prose-bold': theme('colors.shark.950'),
				  },
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
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
				'@media (prefers-reduced-motion: no-preference)': {
					'a': {
					  transition: 'color .3s ease-in-out',
					},
				},
				// Sizing utilities for sets in our bard (long form content).
        		// On small devices they're full width.
        		'.size-md, .size-lg, .size-xl, .size-2xl': {
					gridColumn: 'span 12 / span 12',
		  		},
				'@media screen(md)': {
					// Sizing utilities for sets in our bard (long form content).
					// On larger devices they go from medium to extra large.
					// (E.g. an image wider then text in an article.)
					'.size-md': {
						gridColumn: 'span 8 / span 8',
						gridColumnStart: '3',
					},
					'.size-lg': {
						gridColumn: 'span 8 / span 8',
						gridColumnStart: '3',
					},
					'.size-xl': {
						gridColumn: 'span 10 / span 10',
						gridColumnStart: '2',
					},
					'.size-2xl': {
						gridColumn: 'span 12 / span 12',
					},
				},
				'@media screen(lg)': {
					// Sizing utilities for sets in our bard (long form content).
					// On larger devices they go from medium to extra large.
					'.size-md': {
						gridColumn: 'span 6 / span 6',
						gridColumnStart: '4',
					},
					'.size-lg': {
						gridColumn: 'span 8 / span 8',
						gridColumnStart: '3',
					},
					'.size-xl': {
						gridColumn: 'span 10 / span 10',
						gridColumnStart: '2',
					},
					'.size-2xl': {
						gridColumn: 'span 12 / span 12',
					}
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
			'.active': {
				padding: theme('spacing.1'),
				color: theme('colors.shark.700'),
				borderBottom: theme('border.bottom.1'),
				textDecorationStyle: 'wavy',
				textDecorationLine: 'underline',
				textUnderlineOffset: '4px',
				textDecorationColor: theme('colors.loca.600')
			}
		}
		addComponents(components)
		}),
	],
}

