import P69Util from '@paulio/p69-util'

const blood_red_scale = [
	'#3D3505',
	'#592B09',
	'#731010', // Base
	'#9B4D6A',
	'#C18CB3',
	'#E2CDE5',
]

const jet_blue_scale = [
	'#310A5D',
	'#181387',
	'#1e55af', // Base
	'#57ACC8',
	'#92DED5',
	'#CFF2E1',
]

const grey_scale = [
	'#444444',
	'#666666',
	'#888888', // Base
	'#A8A8A8',
	'#C8C8C8',
	'#E7E7E7',
]

const colors = {
	// Very light
	ice_cream: '#fafafa',
	very_light_sky_blue: '#e7f5ff',
	light_sky_purple: '#d2d2e6',

	// Light
	rosy_red: '#ff9191',
	burly_wood: '#deb887',
	burly_wood_50: '#deb88788',
	light_grey: '#dddddd',
	lightish_grey: '#bbbbbb',
	jet_set_blue: '#92DED5',

	// Mid
	jet_blue: '#1e55af',
	jet_blue_50: '#1e55af88',
	blood_red: '#731010',
	blood_red_50: '#73101088',
	mid_grey: '#888888',

	// Dark
	dark_grey: '#1d1d20',
	dark_navy: '#050a23',

	// Very dark
	dark_navy_grey: '#050a3c',
	very_dark_grey: '#121212',
}

const font = {
	size: {
		// https://utopia.fyi/type/calculator?c=320,14,1.2,1600,18,1.25,6,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
		xs: 'clamp(0.60rem, calc(0.58rem + 0.09vw), 0.67rem)',
		sm: 'clamp(0.75rem, calc(0.71rem + 0.18vw), 0.89rem)',
		md: 'clamp(0.94rem, calc(0.88rem + 0.31vw), 1.19rem)',
		lg: 'clamp(1.17rem, calc(1.07rem + 0.51vw), 1.58rem)',
		xl: 'clamp(1.47rem, calc(1.30rem + 0.81vw), 2.11rem)',
		'2xl': 'clamp(1.83rem, calc(1.59rem + 1.23vw), 2.81rem)',
		'3xl': 'clamp(2.29rem, calc(1.92rem + 1.83vw), 3.75rem)',
		'4xl': 'clamp(2.86rem, calc(2.33rem + 2.67vw), 5.00rem)',
		'5xl': 'clamp(3.58rem, calc(2.80rem + 3.86vw), 6.66rem)',
	},
	family: {
		nunito: ['Nunito', 'sans-serif', 'Helvetica', 'Verdana'],
	},
}

const spaces = {
	xxs: 4, // px
	xs: 8,
	sm: 16,
	md: 32,
	lg: 64,
	xl: 128,
}

const baseTheme = {
	font,
	color: P69Util.colorMap(colors, {
		formats: ['', 'raw'],
		defaultFormat: 'hex',
	}),
	space: P69Util.sizeMap(spaces, {
		formats: ['', 'px'],
		defaultFormat: 'rem',
	}),
}

const lightTheme = {
	theme: {
		bg: colors.ice_cream,
		text: colors.very_dark_grey,
		strong: colors.jet_blue,
		link: colors.jet_blue,
		border: colors.dark_grey,
	},
}

const darkTheme = {
	theme: {
		bg: colors.dark_grey,
		text: colors.ice_cream,
		strong: colors.burly_wood,
		link: colors.rosy_red,
		border: colors.mid_grey,
	},
}

const newVariableGenerator = (theme) => {
	return (prefix = '') => P69Util.generateVariables(theme, { prefix })
}

export default {
	variables: {
		base: newVariableGenerator(baseTheme),
		light: newVariableGenerator(lightTheme),
		dark: newVariableGenerator(darkTheme),
	},
}
