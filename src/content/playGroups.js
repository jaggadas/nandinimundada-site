// Each group on /play uses one of four "fun" layout variants:
//   "mosaic"  — single horizontal row, equal-width slots
//   "scatter" — masonry with polaroid-style rotation
//   "row"     — denser 4-column masonry
//   "stack"   — staggered vertical column with offsets
//
// Each entry in `images` can be:
//   - a string path: "/play/02/07.jpg"
//   - an object:     { src: "/play/02/07.jpg", full: true }
// `full: true` forces an image to span the full width of its group section.
const range = (n) =>
  Array.from({ length: n }, (_, i) => String(i + 1).padStart(2, "0"));

export const playGroups = [
  {
    id: "01",
    label: "01",
    layout: "mosaic",
    images: range(4).map((n) => `/play/01/${n}.jpg`),
  },
  {
    id: "02",
    label: "02",
    layout: "scatter",
    images: [
      ...range(6).map((n) => `/play/02/${n}.jpg`),
      { src: "/play/02/07.jpg", full: true },
    ],
  },
  {
    id: "03",
    label: "03",
    layout: "row",
    images: range(8).map((n) => `/play/03/${n}.jpg`),
  },
  {
    id: "04",
    label: "04",
    layout: "stack",
    rowFirst: 4,
    images: [
      "/play/04/01.jpg",
      "/play/04/02.jpg",
      "/play/04/03.jpg",
      "/play/04/04.jpg",
      "/play/04/05.jpg",
      { row: ["/play/04/07.jpg", "/play/04/08.jpg"] },
      { src: "/play/04/06.jpg", full: true },
    ],
  },
];
