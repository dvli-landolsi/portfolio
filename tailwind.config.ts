// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        // Gradient shift animation
        "gradient-shift": "gradient-shift 8s ease-in-out infinite alternate",
        // Bubbling circles animations with different delays
        "bubble-1": "bubble 15s linear infinite",
        "bubble-2": "bubble 10s linear infinite 2s",
        "bubble-3": "bubble 20s linear infinite 4s",
        "bubble-4": "bubble 12s linear infinite 1s",
        "bubble-5": "bubble 18s linear infinite 3s",
      },
      keyframes: {
        // Keyframes for the gradient shift
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        // Keyframes for the bubbling effect
        bubble: {
          "0%": { transform: "translateY(100vh) scale(0)", opacity: "0" },
          "50%": { opacity: "0.1" }, // Fade in slightly
          "100%": { transform: "translateY(-100%) scale(1.2)", opacity: "0" }, // Fade out and scale up
        },
      },
    },
  },
  plugins: [],
};
