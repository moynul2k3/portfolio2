/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    
    extend: {
      colors: {
        "body_clr": "#000E18",
        "text_clr": "#ADB5BD",
        'body_bg': 'rgba(0, 14, 24, 0.5)',
        'button_bg': 'rgba(155, 255, 255, 0.1)',
        'nav_bg': 'rgba(255, 255, 255, 0.1)',
        'header_bg': 'rgba(20, 0, 0, 0.5)',
        'img_bg': 'rgba(35,0,20, 0.8)',
        'bg_clr': 'rgba(100, 0, 0, 0.2)',
        'green_clr': 'rgba(0, 256, 0, 0.5)',
        'red_clr': 'rgba(150, 0, 0)',
      },
      fontSize: {
        "bold_txt": "27px",
        "link_txt": "16px"
      },
      borderRadius: {
      'box1': '100% 0% 0% 100% / 100% 84% 70% 100%',
      'box2': '30% 70% 70% 30% / 30% 30% 70% 70%',
      'box3': '52% 48% 32% 68% / 62% 53% 47% 38%',
      'box4': '100% 100% 0% 100% / 100% 100% 0% 0% ',
      'box5': '60% 60% 0 0 ',
      'lg_box1': '38% 62% 60% 40% / 36% 41% 59% 64% ',
      
      },
      height: {
        'boxh': '400px',
        'bg2': '550px',
        'bg': '500px',
        'round': '200px',
      },
      width: {
        'bg2': '550px',
        'bg': '500px',
        'boxw': '450px',
        'box_img': '650px',
        'round': '2000px',
        'line': '2px',
        'lg_box': '600px',
      },
      screens: {
        'lg': '1260px',
        'xl': '1600px',
      },
  
      keyframes: {
        'gradient-x': {
            '0%, 100%': {
                'background-size':'200% 200%',
                'background-position': 'right center'
            },
            '50%': {
                'background-size':'200% 200%',
                'background-position': 'left center'
            }
        },
        lg_box1: {
          from: {
            'bottom': '350px',
            transform: 'rotate(-3deg)'
          },
          '50%': {
            'bottom': '400px',
            transform: 'rotate(3deg)'
          },
          to: {
            'bottom': '350px',
            transform: 'rotate(-3deg)'
          },
        },
        lg_box2: {
          from: {
            'bottom': '-30px',
            transform: 'rotate(3deg)'
          },
          '50%': {
            'bottom': '0px',
            transform: 'rotate(-3deg)'
          },
          to: {
            'bottom': '-30px',
            transform: 'rotate(3deg)'
          },
        },
        lg_box3: {
          from: {
            'bottom': '-100px',
            transform: 'rotate(3deg)'
          },
          '50%': {
            'bottom': '-80px',
            transform: 'rotate(-3deg)'
          },
          to: {
            'bottom': '-100px',
            transform: 'rotate(3deg)'
          },
        },

        bg2: {
          from: {
            'border-radius': '30% 70% 70% 30% / 30% 30% 70% 70%',
          },
          '25%': {
            'border-radius': '100% 86% 100% 44% / 67% 100% 100% 100%',
          },
          '50%': {
            'border-radius': '57% 78% 55% 81% / 89% 60% 66% 45% ',
          },
          '75%': {
            'border-radius': '43% 57% 22% 78% / 74% 67% 33% 26% ',
          },
          to: {
            'border-radius': '30% 70% 70% 30% / 30% 30% 70% 70%',
          },
        },
        bg1: {
          from: {
            'border-radius': '57% 78% 55% 81% / 89% 60% 66% 45% ',
          },
          '25%': {
            'border-radius': '43% 57% 22% 78% / 74% 67% 33% 26% ',
          },
          '50%': {
            'border-radius': '30% 70% 70% 30% / 30% 30% 70% 70%',
          },
          '75%': {
            'border-radius': '100% 86% 100% 44% / 67% 100% 100% 100%',
          },
          to: {
            'border-radius': '57% 78% 55% 81% / 89% 60% 66% 45% ',
          },
        },
        bg_red: {
          from: {
            transform: 'translate3d(0, 0, 0)',
          },
          '25%': {
            transform: 'translate3d(150px, 400px, 0)',
          },
          '50%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '75%': {
            transform: 'translate3d(400px, 100px, 0px)',
            height: '600px',
            width: '600px',
          },
          to: {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        bg_green: {
          from: {
            transform: 'translate3d(150px, 400px, 0)',
          },
          '25%': {
            transform: 'translate3d(400px, 100px, 0px)',
          },
          '50%': {
            transform: 'translate3d(150px, 400px, 0)',
            height: '600px',
            width: '600px',
            
          },
          '75%': {
            transform: 'translate3d(0, 0, 0)',
          },
          to: {
            transform: 'translate3d(150px, 400px, 0)',
          },
        },
        bg_pink: {
          from: {
            transform: 'translate3d(400px, 100px, 0px)',
          },
          '25%': {
            transform: 'translate3d(0, 0, 0)',
            height: '600px',
            width: '600px',
          },
          '50%': {
            transform: 'translate3d(400px, 100px, 0px)',
          },
          '75%': {
            transform: 'translate3d(150px, 400px, 0)',
          },
          to: {
            transform: 'translate3d(400px, 100px, 0)',
          },
        },

        box: {
          from: {
            transform: 'translate3d(0, 0, 0)',
          },
          '30%': {
            transform: 'translate3d(5px, 5px, 0)',
          },
          '70%': {
            transform: 'translate3d(25px, -35px, 0)',
            width: '480px',
          },
          to: {
            transform: 'translate3d(0, 0, 0)',
          },
        }
      },
      animation: {
        gradient:'gradient-x 20s ease-in-out infinite',
        lg_box1: 'lg_box1 22s ease-in-out infinite',
        lg_box2: 'lg_box2 25s ease-in-out infinite',
        lg_box3: 'lg_box3 20s ease-in-out infinite',
        bg_clr: 'bg2 20s ease-in-out infinite',
        bg_img: 'bg1 20s ease-in-out infinite',
        box: 'box 5s ease-in-out infinite',
        bg_red: 'bg_red 20s ease-in-out infinite',
        bg_green: 'bg_green 20s ease-in-out infinite',
        bg_pink: 'bg_pink 20s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

