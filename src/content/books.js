// Books are flipbook viewers. Each book points at a folder of page images
// in /public/books/<slug>/ named 01.jpg, 02.jpg, etc.

const range = (n) =>
  Array.from({ length: n }, (_, i) => String(i + 1).padStart(2, "0"));

export const books = [
  {
    slug: "nurosync",
    title: "Nurosync",
    subtitle: "A book project",
    pageAspect: 0.71, // ~5:7 portrait
    pages: range(52).map((n) => `/books/nurosync/${n}.jpg`),
  },
  {
    slug: "justalittlemagic",
    title: "Just a Little Magic",
    subtitle: "A book project",
    pageAspect: 1, // square pages (split from 2-up spreads)
    // The last image (49) is the front cover — moved to the front.
    // Image 48 is the actual last page — stays at the end of the sequence.
    pages: [
      "/books/justalittlemagic/49.jpg",
      ...range(48).map((n) => `/books/justalittlemagic/${n}.jpg`),
    ],
  },
];
