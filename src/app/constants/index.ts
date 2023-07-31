// 1 least strict - 14 most strict
// 1 most popular - 13 least popular

const licensesObj = [
  {
    name: "The Unlicense",
    path: "/unlicense",
    strictness: 1,
    popularity: 6,
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    path: "/cc0",
    strictness: 2,
    popularity: 12,
  },
  {
    name: "MIT License",
    path: "/mit",
    strictness: 3,
    popularity: 1,
  },
  {
    name: 'BSD 2-Clause \\"Simplified\\" License',
    path: "/bsd2",
    strictness: 4,
    popularity: 7,
  },
  {
    name: 'BSD 3-Clause \\"New" or "Revised"\\ Licensen',
    path: "/bsd3",
    strictness: 5,
    popularity: 5,
  },
  {
    name: "Boost Software License 1.0",
    path: "/bsl1",
    strictness: 6,
    popularity: 13,
  },
  {
    name: "Apache License 2.0",
    path: "/al2",
    strictness: 7,
    popularity: 3,
  },
  {
    name: "Eclipse Public License 2.0",
    path: "/epl2",
    strictness: 8,
    popularity: 11,
  },
  {
    name: "Mozilla Public License 2.0",
    path: "/mpl2",
    strictness: 9,
    popularity: 10,
  },
  {
    name: "GNU General Public License v2.0",
    path: "/gnugpl2",
    strictness: 10,
    popularity: 2,
  },
  {
    name: "GNU Lesser General Public License v2.1",
    path: "/gnulgpl21",
    strictness: 11,
    popularity: 8,
  },
  {
    name: "GNU General Public License v3.0",
    path: "/gnugpl3",
    strictness: 12,
    popularity: 4,
  },
  {
    name: "GNU Affero General Public License v3.0",
    path: "/gnuagpl3",
    strictness: 13,
    popularity: 9,
  },
  {
    name: "None",
    path: "/none",
    strictness: 14,
    popularity: null,
  },
];

export { licensesObj };
