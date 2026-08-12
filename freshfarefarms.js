/* ========================================
   FRESH FARE FARMS BRAND BOOK
======================================== */

const freshFareBookSpreads = [
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [10, 11],
  [12, 13],
  [14, 15],
  [16, 17],
  [18, 19],
  [20, 21]
];


const freshFareBookStage =
  document.getElementById("freshfare-book-stage");

const freshFareCoverView =
  document.getElementById("freshfare-cover-view");

const freshFareSpreadView =
  document.getElementById("freshfare-spread-view");

const freshFareLeftPage =
  document.getElementById("freshfare-left-page");

const freshFareRightPage =
  document.getElementById("freshfare-right-page");

const freshFareBookPrevious =
  document.getElementById("freshfare-book-previous");

const freshFareBookNext =
  document.getElementById("freshfare-book-next");

const freshFareBookStatus =
  document.getElementById("freshfare-book-status");


let freshFareBookOpen = false;
let freshFareCurrentSpread = 0;


function freshFarePagePath(page) {
  return (
    "../images/projects/" +
    "farm_fresh_brand_style_guide" +
    page +
    ".png"
  );
}


function showFreshFareCover() {
  freshFareBookOpen = false;

  freshFareCoverView.classList.remove("is-hidden");
  freshFareSpreadView.classList.remove("is-visible");

  freshFareSpreadView.setAttribute(
    "aria-hidden",
    "true"
  );

  freshFareBookStatus.textContent = "Cover";

  freshFareBookPrevious.disabled = true;

  freshFareBookNext.disabled = false;
  freshFareBookNext.textContent = "Open Book →";
}


function displayFreshFareSpread(index) {

  if (
    index < 0 ||
    index >= freshFareBookSpreads.length
  ) {
    return;
  }

  freshFareBookOpen = true;
  freshFareCurrentSpread = index;

  const spread =
    freshFareBookSpreads[index];

  freshFareSpreadView.classList.add(
    "is-turning"
  );


  window.setTimeout(function () {

    freshFareLeftPage.src =
      freshFarePagePath(spread[0]);

    freshFareLeftPage.alt =
      "Fresh Fare Farms brand guide page " +
      spread[0];


    freshFareRightPage.src =
      freshFarePagePath(spread[1]);

    freshFareRightPage.alt =
      "Fresh Fare Farms brand guide page " +
      spread[1];


    freshFareCoverView.classList.add(
      "is-hidden"
    );

    freshFareSpreadView.classList.add(
      "is-visible"
    );

    freshFareSpreadView.setAttribute(
      "aria-hidden",
      "false"
    );


    freshFareBookStatus.textContent =
      "Pages " +
      spread[0] +
      "–" +
      spread[1];


    freshFareBookPrevious.disabled = false;


    if (
      index ===
      freshFareBookSpreads.length - 1
    ) {
      freshFareBookNext.disabled = true;
      freshFareBookNext.textContent =
        "End of Guide";
    } else {
      freshFareBookNext.disabled = false;
      freshFareBookNext.textContent =
        "Next →";
    }


    freshFareSpreadView.classList.remove(
      "is-turning"
    );

  }, 180);
}


if (
  freshFareBookPrevious &&
  freshFareBookNext
) {

  freshFareBookPrevious.addEventListener(
    "click",
    function () {

      if (!freshFareBookOpen) {
        return;
      }

      if (freshFareCurrentSpread === 0) {
        showFreshFareCover();
      } else {
        displayFreshFareSpread(
          freshFareCurrentSpread - 1
        );
      }

    }
  );


  freshFareBookNext.addEventListener(
    "click",
    function () {

      if (!freshFareBookOpen) {
        displayFreshFareSpread(0);
        return;
      }

      if (
        freshFareCurrentSpread <
        freshFareBookSpreads.length - 1
      ) {
        displayFreshFareSpread(
          freshFareCurrentSpread + 1
        );
      }

    }
  );


  showFreshFareCover();
}



/* ========================================
   DESIGN EVOLUTION
======================================== */

const freshFareDrafts = [
  {
    src: "../images/projects/farm_fresh_draft.jpg",
    alt: "Initial Fresh Fare Farms campaign draft",
    title: "Initial concept",
    description:
      "The first draft established the overall campaign direction and initial relationship between imagery, message, and brand elements."
  },

  {
    src: "../images/projects/farm_fresh_draft_2.jpg",
    alt: "Second Fresh Fare Farms campaign draft",
    title: "Refined direction",
    description:
      "The second draft develops the visual hierarchy and brings the imagery, campaign message, and brand treatment into a more cohesive composition."
  },

  {
    src: "../images/projects/farm_fresh_draft_final.jpg",
    alt: "Final Fresh Fare Farms campaign advertisement",
    title: "Final design",
    description:
      "The final advertisement resolves the campaign hierarchy and establishes the visual system carried into the social and digital campaign pieces."
  }
];


const freshFareDraftImage =
  document.getElementById(
    "freshfare-draft-image"
  );

const freshFareDraftTitle =
  document.getElementById(
    "freshfare-draft-title"
  );

const freshFareDraftDescription =
  document.getElementById(
    "freshfare-draft-description"
  );

const freshFareDraftButtons =
  document.querySelectorAll(
    "[data-draft]"
  );


function displayFreshFareDraft(index) {

  const draft = freshFareDrafts[index];

  if (!draft || !freshFareDraftImage) {
    return;
  }


  freshFareDraftImage.classList.add(
    "is-changing"
  );


  window.setTimeout(function () {

    freshFareDraftImage.src = draft.src;
    freshFareDraftImage.alt = draft.alt;

    freshFareDraftTitle.textContent =
      draft.title;

    freshFareDraftDescription.textContent =
      draft.description;


    freshFareDraftImage.classList.remove(
      "is-changing"
    );

  }, 180);


  freshFareDraftButtons.forEach(
    function (button) {

      button.classList.toggle(
        "active",
        Number(button.dataset.draft) === index
      );

    }
  );
}


freshFareDraftButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        displayFreshFareDraft(
          Number(button.dataset.draft)
        );

      }
    );

  }
);



/* ========================================
   SOCIAL CAROUSEL
======================================== */

const freshFareSocialSlides = [
  {
    src:
      "../images/projects/farm_fresh_carousel1.png",
    alt:
      "Fresh Fare Farms social carousel slide 1"
  },

  {
    src:
      "../images/projects/farm_fresh_carousel2.png",
    alt:
      "Fresh Fare Farms social carousel slide 2"
  },

  {
    src:
      "../images/projects/farm_fresh_carousel3.png",
    alt:
      "Fresh Fare Farms social carousel slide 3"
  }
];


const freshFareCarousel =
  document.querySelector(
    ".freshfare-carousel"
  );

const freshFareCarouselImage =
  document.getElementById(
    "freshfare-carousel-image"
  );

const freshFareCarouselPrevious =
  document.getElementById(
    "freshfare-carousel-previous"
  );

const freshFareCarouselNext =
  document.getElementById(
    "freshfare-carousel-next"
  );

const freshFareCarouselStatus =
  document.getElementById(
    "freshfare-carousel-status"
  );

const freshFareDots =
  document.querySelectorAll(
    ".freshfare-dot"
  );


let freshFareCurrentSlide = 0;


function displayFreshFareSlide(index) {

  freshFareCurrentSlide =
    (
      index +
      freshFareSocialSlides.length
    ) %
    freshFareSocialSlides.length;


  const slide =
    freshFareSocialSlides[
      freshFareCurrentSlide
    ];


  freshFareCarouselImage.classList.add(
    "is-changing"
  );


  window.setTimeout(function () {

    freshFareCarouselImage.src =
      slide.src;

    freshFareCarouselImage.alt =
      slide.alt;


    freshFareCarouselStatus.textContent =
      "Slide " +
      (freshFareCurrentSlide + 1) +
      " of " +
      freshFareSocialSlides.length;


    freshFareDots.forEach(
      function (dot, dotIndex) {

        dot.classList.toggle(
          "active",
          dotIndex === freshFareCurrentSlide
        );

      }
    );


    freshFareCarouselImage.classList.remove(
      "is-changing"
    );

  }, 180);
}


if (
  freshFareCarouselPrevious &&
  freshFareCarouselNext
) {

  freshFareCarouselPrevious.addEventListener(
    "click",
    function () {

      displayFreshFareSlide(
        freshFareCurrentSlide - 1
      );

    }
  );


  freshFareCarouselNext.addEventListener(
    "click",
    function () {

      displayFreshFareSlide(
        freshFareCurrentSlide + 1
      );

    }
  );

}


freshFareDots.forEach(
  function (dot) {

    dot.addEventListener(
      "click",
      function () {

        displayFreshFareSlide(
          Number(dot.dataset.slide)
        );

      }
    );

  }
);


if (freshFareCarousel) {

  freshFareCarousel.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "ArrowLeft") {
        displayFreshFareSlide(
          freshFareCurrentSlide - 1
        );
      }

      if (event.key === "ArrowRight") {
        displayFreshFareSlide(
          freshFareCurrentSlide + 1
        );
      }

    }
  );

}


displayFreshFareSlide(0);