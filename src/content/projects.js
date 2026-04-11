// Edit / add / remove projects here. Each entry powers one item on /work.
//
// Per-project knobs:
//   width:   "narrow" | "default" | "wide" | "full"  — controls horizontal size
//   aspect:  "1/1" | "4/5" | "4/3" | "16/9" | "21/9" — image aspect ratio
//   align:   "left" | "center" | "right"             — horizontal alignment
export const workProjects = [
  {
    slug: "project-one",
    title: "Project One",
    year: "2025",
    role: "Designer · Lead",
    tags: ["Branding", "Packaging"],
    description:
      "A short paragraph about the project — what it was, who it was for, and what role you played. Keep it tight: a sentence or two is plenty.",
    cover: null,
    width: "wide",
    aspect: "16/9",
    align: "center",
  },
  {
    slug: "project-two",
    title: "Project Two",
    year: "2024",
    role: "Illustrator",
    tags: ["Editorial", "Print"],
    description:
      "Another short description. The image for this one is taller, so it sits narrower on the page to vary the rhythm.",
    cover: null,
    width: "narrow",
    aspect: "4/5",
    align: "left",
  },
  {
    slug: "project-three",
    title: "Project Three",
    year: "2024",
    role: "Researcher",
    tags: ["Strategy", "Workshop"],
    description:
      "A third entry. Use the width and align fields to push items left or right and create asymmetry down the page.",
    cover: null,
    width: "default",
    aspect: "4/3",
    align: "right",
  },
  {
    slug: "project-four",
    title: "Project Four",
    year: "2023",
    role: "Art Direction",
    tags: ["Identity"],
    description:
      "A full-bleed image for visual impact. Switch any project to width: 'full' to break out edge-to-edge.",
    cover: null,
    width: "full",
    aspect: "21/9",
    align: "center",
  },
  {
    slug: "project-five",
    title: "Project Five",
    year: "2023",
    role: "Product Designer",
    tags: ["UI", "System"],
    description:
      "Square image for variety. Mix aspects across projects to keep the page feeling editorial.",
    cover: null,
    width: "default",
    aspect: "1/1",
    align: "center",
  },
];

// Edit / add / remove play / experiments here.
export const playProjects = [
  {
    slug: "play-one",
    title: "Play One",
    summary: "A short experiment, sketch, or side project.",
    cover: "/placeholder-4.svg",
  },
  {
    slug: "play-two",
    title: "Play Two",
    summary: "A short experiment, sketch, or side project.",
    cover: "/placeholder-5.svg",
  },
  {
    slug: "play-three",
    title: "Play Three",
    summary: "A short experiment, sketch, or side project.",
    cover: "/placeholder-6.svg",
  },
  {
    slug: "play-four",
    title: "Play Four",
    summary: "A short experiment, sketch, or side project.",
    cover: "/placeholder-7.svg",
  },
];
