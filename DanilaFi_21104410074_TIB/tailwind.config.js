// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
    theme: { 
      extend: {
        colors: {
        // Configure your color palette here
          dlcolor :{
          DEFAULT : '#3B82F6',
          dark: '#1E3A8A'
        }
      },
    },
  },

  variants: {
    extend: {
      display: ['group-hover'],
      borderwidth: ['group-hover']
    },
  },

  plugins: [],
}