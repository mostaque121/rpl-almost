/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			md: '850px'
  		},
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(180deg, #008FFF 0%, #4AC4D0 100%)',
  			'custom-gradient-hover': 'linear-gradient(180deg, #4AB8E0 0%, #55D6E0 100%)'
  		},
  		boxShadow: {
  			'light-blue': '0 4px 8px rgba(173, 216, 230, 0.3)',
  			'darker-blue': '0 4px 8px rgba(0, 101, 140, 0.3)'
  		},
  		colors: {
  			navbar: '#4A5568',
  			topbar: '#2C7A7B',
  			copy: '#3A94D0',
  			'copy-2': '#55D6E0',
  			'light-blue': '#E0F7FA',
  			'light-blue-hover': '#B2EBF2',
  			'light-blue-active': '#80DEEA',
  			'light-blue-active-pro': '#6CCAD9',
  			'emerald-green': '#2E7D32',
  			coral: '#FF6F61',
  			'light-gray': '#F5F5F5',
  			'dark-gray': '#424242',
  			'light-gray-hover': '#E0E0E0',
  			'light-gray-active': '#BDBDBD',
  			'midnight-blue': '#002244',
  			aqua: '#00FFFF',
  			'sea-green': '#20B2AA',
  			'sunset-orange': '#FF4500',
  			lavender: '#E6E6FA',
  			sand: '#C2B280',
  			charcoal: '#333333',
  			rose: '#FF007F',
  			'soft-yellow': '#FFF9C4',
  			'sky-blue': '#87CEEB',
  			dark: {
  				background: '#121212',
  				secondary: '#1E1E1E',
  				navbar: '#181818',
  				text: '#E0E0E0',
  				muted: '#B0B0B0',
  				accent: '#1DB954'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
