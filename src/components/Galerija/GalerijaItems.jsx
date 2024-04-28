const importAll = (r) => r.keys().map(r);

export const GalerijaItems = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
).map((image, index) => ({
  title: `Toplar${index + 1}`,
  image,
  besedilo: "Toplar",
}));
