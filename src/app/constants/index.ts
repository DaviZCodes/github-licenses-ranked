// 1 least strict - 14 most strict
// 1 most popular - 13 least popular

const licensesObj = [
  {
    name: "The Unlicense",
    path: "/unlicense",
    src: "https://choosealicense.com/licenses/unlicense/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/PD-icon-black.svg/1200px-PD-icon-black.svg.png",
    description: "",
    strictness: 14,
    strictness_points: 10,
    popularity: 6,
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    path: "/cc0",
    src: "https://creativecommons.org/publicdomain/zero/1.0/",
    image:
      "https://c4.wallpaperflare.com/wallpaper/706/10/536/arte-pablo-picasso-pintura-wallpaper-preview.jpg",
    description: "",
    strictness: 13,
    strictness_points: 20,
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
    strictness_points: 25,
    popularity: 1,
  },
  {
    name: 'BSD 2-Clause "Simplified" License',
    path: "/bsd2",
    src: "https://imagej.net/licensing/bsd#:~:text=The%20Simplified%20BSD%20",
    image:
      "https://i.etsystatic.com/31369353/r/il/d172c5/4103900203/il_1588xN.4103900203_f9gt.jpg",
    description: "",
    strictness: 11,
    strictness_points: 25,
    popularity: 7,
  },
  {
    name: 'BSD 3-Clause "New" or "Revised" License',
    path: "/bsd3",
    src: "https://joinup.ec.europa.eu/licence/bsd-3-clause-new-or-revised-license",
    image:
      "https://i0.wp.com/www.thededicatedhouse.com/wp-content/uploads/2019/07/Heres-How-to-Create-a-Modern-House-Design-for-Your-New-Home.jpg?fit=2000%2C1500&ssl=1",
    description: "",
    strictness: 10,
    strictness_points: 25,
    popularity: 5,
  },
  {
    name: "Boost Software License 1.0",
    path: "/bsl1",
    src: "https://www.boost.org/users/license.html",
    image:
      "https://pm1.aminoapps.com/6391/b2863b97d6c2b7388abad71c902faa1ce2d021b2_00.jpg",
    description: "",
    strictness: 9,
    strictness_points: 25,
    popularity: 13,
  },
  {
    name: "Apache License 2.0",
    path: "/al2",
    src: "https://www.apache.org/licenses/LICENSE-2.0",
    image:
      "https://images05.military.com/sites/default/files/media/equipment/military-aircraft/ah-64-apache-longbow/2014/02/ah-64-apache-longbow_002.jpg",
    description: "",
    strictness: 8,
    strictness_points: 45,
    popularity: 3,
  },
  {
    name: "Eclipse Public License 2.0",
    path: "/epl2",
    src: "https://www.eclipse.org/legal/epl-2.0/",
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/230623142359-05-solar-eclipse-2017-file.jpg?c=original",
    description: "",
    strictness: 7,
    strictness_points: 55,
    popularity: 11,
  },
  {
    name: "Mozilla Public License 2.0",
    path: "/mpl2",
    src: "https://www.mozilla.org/en-US/MPL/2.0/",
    image:
      "https://assets-prod.sumo.prod.webservices.mozgcp.net/media/uploads/images/2019-10-22-22-36-41-1c7095.png",
    description: "",
    strictness: 6,
    strictness_points: 60,
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
    strictness_points: 70,
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
    strictness_points: 70,
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
    strictness_points: 70,
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
    strictness_points: 85,
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
    strictness_points: 100,
    popularity: "N/A",
  },
];

export { licensesObj };
