/* ========================================
   WHINNY & MANE BRAND GUIDE BOOK
======================================== */

const whinnyBrandSpreads = [

  {
    left: 2,
    right: 3,
    label: "Pages 2–3"
  },

  {
    left: 4,
    right: 5,
    label: "Pages 4–5"
  },

  {
    left: 6,
    right: 7,
    label: "Pages 6–7"
  },

  {
    left: 8,
    right: 9,
    label: "Pages 8–9"
  },

  {
    left: 10,
    right: null,
    label: "Page 10"
  }

];


const whinnyBookStage =
  document.getElementById(
    "whinny-book-stage"
  );


const whinnyCoverView =
  document.getElementById(
    "whinny-cover-view"
  );


const whinnySpreadView =
  document.getElementById(
    "whinny-spread-view"
  );


const whinnyLeftPage =
  document.getElementById(
    "whinny-left-page"
  );


const whinnyRightPage =
  document.getElementById(
    "whinny-right-page"
  );


const whinnyBookPrevious =
  document.getElementById(
    "whinny-book-previous"
  );


const whinnyBookNext =
  document.getElementById(
    "whinny-book-next"
  );


const whinnyBookStatus =
  document.getElementById(
    "whinny-book-status"
  );


let whinnyBookIsOpen = false;

let currentWhinnySpread = 0;


/* ========================================
   BUILD IMAGE PATH
======================================== */

function getWhinnyGuidePage(pageNumber) {

  const formattedPage =
    String(pageNumber).padStart(2, "0");

  return (
    "../images/projects/" +
    "whinny_mane_brand_guide-" +
    formattedPage +
    ".png"
  );

}


/* ========================================
   SHOW CLOSED COVER
======================================== */

function showWhinnyBookCover() {

  whinnyBookIsOpen = false;


  whinnyBookStage.classList.remove(
    "is-open"
  );

  whinnyBookStage.classList.add(
    "is-closed"
  );


  whinnyCoverView.classList.remove(
    "is-hidden"
  );


  whinnySpreadView.classList.remove(
    "is-visible"
  );


  whinnySpreadView.setAttribute(
    "aria-hidden",
    "true"
  );


  whinnyBookStatus.textContent =
    "Cover";


  whinnyBookPrevious.disabled = true;


  whinnyBookNext.disabled = false;

  whinnyBookNext.textContent =
    "Open Book →";

}


/* ========================================
   DISPLAY SPREAD
======================================== */

function displayWhinnySpread(index) {

  if (
    index < 0 ||
    index >= whinnyBrandSpreads.length
  ) {
    return;
  }


  whinnyBookIsOpen = true;

  currentWhinnySpread = index;


  const spread =
    whinnyBrandSpreads[index];


  whinnySpreadView.classList.add(
    "is-turning"
  );


  window.setTimeout(function () {


    /* LEFT PAGE */

    whinnyLeftPage.src =
      getWhinnyGuidePage(
        spread.left
      );

    whinnyLeftPage.alt =
      "Whinny and Mane brand guide page " +
      spread.left;



    /* RIGHT PAGE */

    if (spread.right) {

      whinnyRightPage.src =
        getWhinnyGuidePage(
          spread.right
        );


      whinnyRightPage.alt =
        "Whinny and Mane brand guide page " +
        spread.right;


      whinnyRightPage
        .parentElement
        .classList
        .remove("is-empty");

    } else {

      whinnyRightPage
        .removeAttribute("src");


      whinnyRightPage.alt = "";


      whinnyRightPage
        .parentElement
        .classList
        .add("is-empty");

    }



    /* OPEN BOOK */

    whinnyBookStage.classList.remove(
      "is-closed"
    );


    whinnyBookStage.classList.add(
      "is-open"
    );


    whinnyCoverView.classList.add(
      "is-hidden"
    );


    whinnySpreadView.classList.add(
      "is-visible"
    );


    whinnySpreadView.setAttribute(
      "aria-hidden",
      "false"
    );


    whinnyBookStatus.textContent =
      spread.label;


    whinnyBookPrevious.disabled =
      false;



    /* LAST PAGE */

    if (
      currentWhinnySpread ===
      whinnyBrandSpreads.length - 1
    ) {

      whinnyBookNext.disabled =
        true;


      whinnyBookNext.textContent =
        "End of Guide";

    } else {

      whinnyBookNext.disabled =
        false;


      whinnyBookNext.textContent =
        "Next →";

    }


    whinnySpreadView.classList.remove(
      "is-turning"
    );


  }, 180);

}


/* ========================================
   PREVIOUS
======================================== */

if (whinnyBookPrevious) {

  whinnyBookPrevious.addEventListener(
    "click",
    function () {

      if (!whinnyBookIsOpen) {
        return;
      }


      if (currentWhinnySpread === 0) {

        showWhinnyBookCover();

      } else {

        displayWhinnySpread(
          currentWhinnySpread - 1
        );

      }

    }
  );

}


/* ========================================
   NEXT
======================================== */

if (whinnyBookNext) {

  whinnyBookNext.addEventListener(
    "click",
    function () {

      if (!whinnyBookIsOpen) {

        displayWhinnySpread(0);

        return;

      }


      if (
        currentWhinnySpread <
        whinnyBrandSpreads.length - 1
      ) {

        displayWhinnySpread(
          currentWhinnySpread + 1
        );

      }

    }
  );

}


/* START CLOSED */

if (
  whinnyBookStage &&
  whinnyCoverView &&
  whinnySpreadView
) {

  showWhinnyBookCover();

}