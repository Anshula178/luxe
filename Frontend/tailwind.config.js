module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      colors: {
        "primary-orange": "#FE6B00",
        "secondary-orange": "#F3EFE9",
        "primary-black": "#24201f",
      },
      fontFamily: {
        outfitThin: ["outfit-thin"], 
        outfitLight: ["outfit-light"], 
        outfitBold: ["outfit-bold"], 
        outfitBlack: ["outfit-Black"], 
        outfitSemiBold: ["outfit-semiBold"], 
        outfitRegular: ["outfit-regular"], 
        outfitMedium: ["outfit-medium"], 
      },
    },

  },
  plugins: [],
}