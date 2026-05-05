// Books are flipbook viewers. Each book points at a folder of page images
// in /public/books/<slug>/ named 01.jpg, 02.jpg, etc.

const range = (n) =>
  Array.from({ length: n }, (_, i) => String(i + 1).padStart(2, "0"));

export const books = [
  {
    slug: "nurosync",
    title: "Nurosync",
    subtitle: "A book project",
    pages: range(52).map((n) => `/books/nurosync/${n}.jpg`),
  },
  {
    slug: "justalittlemagic",
    title: "Just a Little Magic",
    subtitle: "A book project",
    pages: range(25).map((n) => `/books/justalittlemagic/${n}.jpg`),
  },
];
