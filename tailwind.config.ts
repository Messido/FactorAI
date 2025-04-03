import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				factor: {
					red: "#ff1a3e",
					"red-light": "#ff3a5c",
					black: "#000000",
					"black-light": "#121212",
					"black-muted": "#222222",
					gray: "#888888",
					"gray-light": "#F6F6F7"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.9)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'blur-in': {
					'0%': {
						filter: 'blur(8px)',
						opacity: '0'
					},
					'100%': {
						filter: 'blur(0)',
						opacity: '1'
					}
				},
				'pulse-dot': {
					'0%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'50%': {
						transform: 'scale(1.3)',
						opacity: '0.8'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'pulse-dynamic': {
					'0%': {
						transform: 'scale(1)',
						filter: 'blur(0px)'
					},
					'25%': {
						transform: 'scale(1.5) translate(3px, -2px)',
						filter: 'blur(0.5px)'
					},
					'50%': {
						transform: 'scale(1.2) translate(-2px, 3px)',
						filter: 'blur(0px)'
					},
					'75%': {
						transform: 'scale(1.4) translate(-1px, -3px)',
						filter: 'blur(0.5px)'
					},
					'100%': {
						transform: 'scale(1)',
						filter: 'blur(0px)'
					}
				},
				'burst-dot': {
					'0%': {
						transform: 'scale(1)',
						filter: 'blur(0px)',
						textShadow: 'none'
					},
					'15%': {
						transform: 'scale(1.2)',
						filter: 'blur(0px)',
						textShadow: 
							'0 0 5px #e30613, ' +
							'0 15px 5px #e30613, ' +
							'15px 0 5px #e30613, ' +
							'0 -15px 5px #e30613, ' +
							'-15px 0 5px #e30613, ' +
							'10px 10px 5px #e30613, ' +
							'-10px 10px 5px #e30613, ' +
							'10px -10px 5px #e30613, ' +
							'-10px -10px 5px #e30613'
					},
					'30%': {
						transform: 'scale(1.4) rotate(5deg)',
						filter: 'blur(0.3px)',
						textShadow: 
							'0 0 8px #e30613, ' +
							'0 20px 8px #e30613, ' +
							'20px 0 8px #e30613, ' +
							'0 -20px 8px #e30613, ' +
							'-20px 0 8px #e30613, ' +
							'15px 15px 8px #e30613, ' +
							'-15px 15px 8px #e30613, ' +
							'15px -15px 8px #e30613, ' +
							'-15px -15px 8px #e30613'
					},
					'45%': {
						transform: 'scale(1.3) rotate(-3deg)',
						filter: 'blur(0.2px)',
						textShadow: 
							'0 0 6px #e30613, ' +
							'0 18px 6px #e30613, ' +
							'18px 0 6px #e30613, ' +
							'0 -18px 6px #e30613, ' +
							'-18px 0 6px #e30613, ' +
							'12px 12px 6px #e30613, ' +
							'-12px 12px 6px #e30613, ' +
							'12px -12px 6px #e30613, ' +
							'-12px -12px 6px #e30613'
					},
					'60%': {
						transform: 'scale(1.5) rotate(3deg)',
						filter: 'blur(0.3px)',
						textShadow: 
							'0 0 8px #e30613, ' +
							'0 22px 8px #e30613, ' +
							'22px 0 8px #e30613, ' +
							'0 -22px 8px #e30613, ' +
							'-22px 0 8px #e30613, ' +
							'16px 16px 8px #e30613, ' +
							'-16px 16px 8px #e30613, ' +
							'16px -16px 8px #e30613, ' +
							'-16px -16px 8px #e30613'
					},
					'75%': {
						transform: 'scale(1.2) rotate(-2deg)',
						filter: 'blur(0.2px)',
						textShadow: 
							'0 0 7px #e30613, ' +
							'0 16px 7px #e30613, ' +
							'16px 0 7px #e30613, ' +
							'0 -16px 7px #e30613, ' +
							'-16px 0 7px #e30613, ' +
							'12px 12px 7px #e30613, ' +
							'-12px 12px 7px #e30613, ' +
							'12px -12px 7px #e30613, ' +
							'-12px -12px 7px #e30613'
					},
					'90%': {
						transform: 'scale(1.1)',
						filter: 'blur(0.1px)',
						textShadow: 
							'0 0 4px #e30613, ' +
							'0 8px 4px #e30613, ' +
							'8px 0 4px #e30613, ' +
							'0 -8px 4px #e30613, ' +
							'-8px 0 4px #e30613, ' +
							'6px 6px 4px #e30613, ' +
							'-6px 6px 4px #e30613, ' +
							'6px -6px 4px #e30613, ' +
							'-6px -6px 4px #e30613'
					},
					'100%': {
						transform: 'scale(1)',
						filter: 'blur(0px)',
						textShadow: 'none'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
				'scale-in': 'scale-in 0.6s ease-out forwards',
				'blur-in': 'blur-in 0.6s ease-out forwards',
				'pulse-dot': 'pulse-dot 2.5s infinite ease-in-out',
				'pulse-dynamic': 'pulse-dynamic 3s infinite ease-in-out',
				'burst-dot': 'burst-dot 4s infinite ease-in-out'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
