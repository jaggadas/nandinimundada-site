// Asymmetric image blocks for the /play page.
// Each block sits on a 12-column grid. Tweak colStart / colSpan / rowStart /
// rowSpan to move and resize blocks. Mix big and small blocks to get a
// staggered, editorial feel.
//
// To use a real image, set src: "/your-image.jpg" (drop the file in /public).
// Otherwise a placeholder tile renders.
export const playBlocks = [
  {
    id: "p1",
    type: "image",
    colStart: 1,
    colSpan: 7,
    rowStart: 1,
    rowSpan: 4,
    caption: "Piece 01",
  },
  {
    id: "p2",
    type: "image",
    colStart: 9,
    colSpan: 4,
    rowStart: 2,
    rowSpan: 3,
    caption: "Piece 02",
  },
  {
    id: "p3",
    type: "image",
    colStart: 2,
    colSpan: 4,
    rowStart: 6,
    rowSpan: 3,
    caption: "Piece 03",
  },
  {
    id: "p4",
    type: "image",
    colStart: 7,
    colSpan: 6,
    rowStart: 5,
    rowSpan: 4,
    caption: "Piece 04",
  },
  {
    id: "p5",
    type: "image",
    colStart: 1,
    colSpan: 5,
    rowStart: 10,
    rowSpan: 3,
    caption: "Piece 05",
  },
  {
    id: "p6",
    type: "image",
    colStart: 7,
    colSpan: 4,
    rowStart: 10,
    rowSpan: 2,
    caption: "Piece 06",
  },
  {
    id: "p7",
    type: "image",
    colStart: 4,
    colSpan: 7,
    rowStart: 13,
    rowSpan: 4,
    caption: "Piece 07",
  },
  {
    id: "p8",
    type: "image",
    colStart: 1,
    colSpan: 3,
    rowStart: 14,
    rowSpan: 2,
    caption: "Piece 08",
  },
  {
    id: "p9",
    type: "image",
    colStart: 8,
    colSpan: 5,
    rowStart: 18,
    rowSpan: 3,
    caption: "Piece 09",
  },
  {
    id: "p10",
    type: "image",
    colStart: 1,
    colSpan: 6,
    rowStart: 19,
    rowSpan: 3,
    caption: "Piece 10",
  },
];
