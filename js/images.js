(function () {
  const images = [
    {
      src: "IMG_7687-min.jpg",
      alt: "Mixed acrylic paint, gauche, and spray paint",
    },
    {
      src: "IMG_7688-min.jpg",
      alt: "Colored pencil",
    },
    {
      src: "IMG_7689-min.jpg",
      alt: "Oil pastel",
    },
    {
      src: "IMG_7690-min.jpg",
      alt: "Mixed charcoal and colored pencil",
    },
    {
      src: "IMG_7691-min.jpg",
      alt: "Mixed pencil, charcoal, and colored pencil",
    },
    {
      src: "IMG_7694-min.jpg",
      alt: "Acrylic paint",
    },
    {
      src: "KH1-min.jpg",
      alt: "Mixed charcoal and chalk pastel",
    },
    {
      src: "KH12-min.jpg",
      alt: "Acrylic paint",
    },
    {
      src: "KH5-min.jpg",
      alt: "Mixed watercolor and ink",
    },
    {
      src: "KH22-min.jpg",
      alt: "Pencil and graphite",
    },
    {
      src: "KH18-min.jpg",
      alt: "Mixed chalk pastel and colored pencil",
    },
    {
      src: "KH9-min.jpg",
      alt: "Colored pencil",
    },
    {
      src: "KH2-min.jpg",
      alt: "Mixed collage and pencil",
    },
    {
      src: "KH3-min.jpg",
      alt: "Collage",
    },
    {
      src: "KH4-min.jpg",
      alt: "Pencil and graphite",
    },
    {
      src: "KH23-min.jpg",
      alt: "Mixed media",
    },
  ];
  let counter = 0;

  let sectionHTML = "";
  while (counter < images.length) {
    sectionHTML += `<div class="row">`;
    for (let index = 0; index < 4; index++) {
      const image = images[counter];

      sectionHTML += `<div class="col-md-3 col-sm-6">
            <div class="work-thumb">
              <a href="images/${image.src}" class="image-popup">
                <img
                  src="images/${image.src}"
                  class="img-responsive"
                />
              </a>
            </div>
            <h4>${image.alt}</h4>
          </div>`;

      counter += 1;
    }

    sectionHTML += `</div>`;
  }

  document.getElementById("images-fine").innerHTML += sectionHTML;
})();

(function () {
  const images = [
    {
      src: "digital_art_min/Figure 1-min.png",
    },
    {
      src: "digital_art_min/Figure 19-min.png",
    },
    {
      src: "digital_art_min/Figure 5-min.png",
    },
    {
      src: "digital_art_min/Figure 4-min.png",
    },
    {
      src: "digital_art_min/Figure 6-min.png",
    },
    {
      src: "digital_art_min/Figure 7-min.png",
    },
    {
      src: "digital_art_min/Figure 2-min.png",
    },
    {
      src: "digital_art_min/Figure 9-min.png",
    },
    {
      src: "digital_art_min/Figure 10-min.png",
    },
    {
      src: "digital_art_min/Figure 11-min.png",
    },
    {
      src: "digital_art_min/Figure 8-min.png",
    },
    {
      src: "digital_art_min/Figure 17-min.png",
    },
    {
      src: "digital_art_min/Figure 15-min.png",
    },
    {
      src: "digital_art_min/Figure 18-min.png",
    },
    {
      src: "digital_art_min/Figure 13-min.png",
    },
    {
      src: "digital_art_min/Figure 16-min.png",
    },
  ];
  let counter = 0;

  let sectionHTML = "";
  while (counter < images.length) {
    sectionHTML += `<div class="row">`;
    for (let index = 0; index < 4; index++) {
      const image = images[counter];

      sectionHTML += `<div class="col-md-3 col-sm-6">
              <div class="work-thumb">
                <a href="images/${image.src}" class="image-popup">
                  <img
                    src="images/${image.src}"
                    class="img-responsive"
                  />
                </a>
              </div>
            </div>`;

      counter += 1;
    }

    sectionHTML += `</div>`;
  }

  document.getElementById("images-digital").innerHTML += sectionHTML;
})();
