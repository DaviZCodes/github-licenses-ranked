// 1 least strict - 14 most strict
// 1 most popular - 13 least popular

const licensesObj = [
  {
    name: "The Unlicense",
    path: "/unlicense",
    src: "https://choosealicense.com/licenses/unlicense/",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 14,
    popularity: 6,
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    path: "/cc0",
    src: "https://creativecommons.org/publicdomain/zero/1.0/",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 13,
    popularity: 12,
  },
  {
    name: "MIT License",
    path: "/mit",
    src: "https://opensource.org/license/mit/",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 12,
    popularity: 1,
  },
  {
    name: 'BSD 2-Clause "Simplified" License',
    path: "/bsd2",
    src: "https://imagej.net/licensing/bsd#:~:text=The%20Simplified%20BSD%20",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 11,
    popularity: 7,
  },
  {
    name: 'BSD 3-Clause "New" or "Revised" License',
    path: "/bsd3",
    src: "https://joinup.ec.europa.eu/licence/bsd-3-clause-new-or-revised-license",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 10,
    popularity: 5,
  },
  {
    name: "Boost Software License 1.0",
    path: "/bsl1",
    src: "https://www.boost.org/users/license.html",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 9,
    popularity: 13,
  },
  {
    name: "Apache License 2.0",
    path: "/al2",
    src: "https://www.apache.org/licenses/LICENSE-2.0",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 8,
    popularity: 3,
  },
  {
    name: "Eclipse Public License 2.0",
    path: "/epl2",
    src: "https://www.eclipse.org/legal/epl-2.0/",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 7,
    popularity: 11,
  },
  {
    name: "Mozilla Public License 2.0",
    path: "/mpl2",
    src: "https://www.mozilla.org/en-US/MPL/2.0/",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 6,
    popularity: 10,
  },
  {
    name: "GNU General Public License v2.0",
    path: "/gnugpl2",
    src: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 5,
    popularity: 2,
  },
  {
    name: "GNU Lesser General Public License v2.1",
    path: "/gnulgpl21",
    src: "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 4,
    popularity: 8,
  },
  {
    name: "GNU General Public License v3.0",
    path: "/gnugpl3",
    src: "https://www.gnu.org/licenses/gpl-3.0.en.html",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 3,
    popularity: 4,
  },
  {
    name: "GNU Affero General Public License v3.0",
    path: "/gnuagpl3",
    src: "https://www.gnu.org/licenses/agpl-3.0.en.html",
    image:
      "https://drive.google.com/uc?export=view&id=1wX5wN_7V_y09lkBYXL5sIhlg9sSOz_F9",
    description: "",
    strictness: 2,
    popularity: 9,
  },
  {
    name: "None",
    path: "/none",
    src: "https://choosealicense.com/no-permission/",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
    description: "",
    strictness: 1,
    popularity: "N/A",
  },
];

export { licensesObj };
