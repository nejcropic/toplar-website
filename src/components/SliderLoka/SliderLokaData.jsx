const images = require.context("../../images", false, /^\.\/p.*\.(jpg|jpeg)$/);

const imagePaths = images.keys().map(images);

const kascaImageNames = ["parkloka9", "parkloka10"];
const kozolecImageNames = [
  "parkLoka3",
  "parkloka11",
  "parkloka12",
  "parkloka13",
  "parkloka14",
  "parkloka15",
  "parkloka16",
  "parkloka17",
  "parkloka18",
  "parkloka19",
  "parkloka20",
];

const Kasca = imagePaths
  .filter((path) => kascaImageNames.some((name) => path.includes(name)))
  .map((image) => ({ image }));

const Kozolec = imagePaths
  .filter((path) => kozolecImageNames.some((name) => path.includes(name)))
  .map((image) => ({ image }));

const LokaSlike = imagePaths
  .filter(
    (path) =>
      !kascaImageNames.some((name) => path.includes(name)) &&
      !kozolecImageNames.some((name) => path.includes(name))
  )
  .map((image) => ({ image }));

export { Kasca, Kozolec, LokaSlike };
