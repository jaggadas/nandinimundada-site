// Asymmetric home-page blocks. Each block sits on a 12-column grid.
// - colStart: 1..12 (which column the block begins at)
// - colSpan:  1..12 (how many columns it spans)
// - rowStart: 1..N  (which row the block begins at — rows stack vertically)
// - rowSpan:  1..N  (optional; defaults to 1)
// - type:     "text" | "image" | "headline"
// - align:    "left" (default) | "right" | "center"
//
// Tweak numbers to move blocks around. Remove / duplicate entries freely.
export const homeBlocks = [
  {
    id: "intro-headline",
    type: "headline",
    text: "A short line about the kind of work you do.",
    colStart: 2,
    colSpan: 8,
    rowStart: 1,
    align: "center",
  },

  {
    id: "project-1-image",
    type: "image",
    colStart: 2,
    colSpan: 4,
    rowStart: 2,
    rowSpan: 3,
    caption: "Project One · 2025",
  },
  {
    id: "project-1-text",
    type: "text",
    eyebrow: "Selected Work",
    title: "Project One",
    body: "A couple of sentences about this project — the problem, the approach, and the outcome. Edit in src/content/homeBlocks.js.",
    link: { label: "See more", href: "/work" },
    colStart: 7,
    colSpan: 5,
    rowStart: 3,
  },

  {
    id: "project-2-text",
    type: "text",
    eyebrow: "Case Study",
    title: "Project Two",
    body: "Another short description. This block sits to the left, with the image offset to the right of it.",
    link: { label: "See more", href: "/work" },
    colStart: 2,
    colSpan: 4,
    rowStart: 6,
  },
  {
    id: "project-2-image",
    type: "image",
    colStart: 7,
    colSpan: 5,
    rowStart: 5,
    rowSpan: 3,
    caption: "Project Two · 2024",
  },

  {
    id: "project-3-image",
    type: "image",
    colStart: 3,
    colSpan: 4,
    rowStart: 9,
    rowSpan: 3,
    caption: "Project Three · 2024",
  },
  {
    id: "project-3-text",
    type: "text",
    eyebrow: "Play",
    title: "Project Three",
    body: "A third block, this one closer to the center. Use this pattern to create a staggered visual rhythm down the page.",
    link: { label: "See more", href: "/play" },
    colStart: 8,
    colSpan: 4,
    rowStart: 10,
  },

  {
    id: "closing-headline",
    type: "headline",
    text: "Let's work together.",
    colStart: 2,
    colSpan: 10,
    rowStart: 13,
    align: "center",
  },
];
