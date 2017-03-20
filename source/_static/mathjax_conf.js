MathJax.Hub.Config({
   "HTML-CSS": {
        availableFonts: ["TeX"],
        scale: 90
   },
   TeX: {
    Macros: {
      RR: "{\\bf R}",
      bold: ["{\\bf #1}",1],
      Abs: ['\\left\\lvert #2 \\right\\rvert_{\\text{#1}}', 2, ""]
    }
  }
});