const importAll = (r) => r.keys().map(r);

const allImages = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

const filterImagesByFirstLetter = (images, letter) => {
  return images.filter((image) => {
    // Extract the filename from the image path and check the first letter
    const filename = image.split("/").pop();
    return filename.toLowerCase().startsWith(letter.toLowerCase());
  });
};

export const GalerijaItemsT = filterImagesByFirstLetter(allImages, "t").map(
  (image, index) => ({
    title: `Toplar${index + 1}`,
    image,
    besedilo: "Toplar",
  })
);

export const GalerijaItemsP = filterImagesByFirstLetter(allImages, "p").map(
  (image, index) => ({
    title: `Toplar${index + 1}`,
    image,
    besedilo: "Toplar",
  })
);

export const GalerijaItemsH = filterImagesByFirstLetter(allImages, "h").map(
  (image, index) => ({
    title: `Toplar${index + 1}`,
    image,
    besedilo: "Toplar",
  })
);
