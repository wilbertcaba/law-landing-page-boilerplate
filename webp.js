var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "dist/assets/media/images",            // Output folder
  PNGImages = "dist/assets/media/images/*.png",         // PNG images
  JPEGImages = "dist/assets/media/images/*.jpg";        // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 85 // Quality setting from 0 to 100
  })]
});