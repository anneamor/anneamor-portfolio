document.addEventListener("DOMContentLoaded", function () {

  const pages =
    document.querySelectorAll(".margheritas-book-page");

  const prevButton =
    document.getElementById("margheritas-book-prev");

  const nextButton =
    document.getElementById("margheritas-book-next");

  const currentPageDisplay =
    document.getElementById("margheritas-book-current");

  const totalPageDisplay =
    document.getElementById("margheritas-book-total");


  // Stop if this page does not contain the book.
  if (
    pages.length === 0 ||
    !prevButton ||
    !nextButton ||
    !currentPageDisplay
  ) {
    return;
  }


  let currentPage = 0;


  // Automatically display total number of pages.
  if (totalPageDisplay) {
    totalPageDisplay.textContent = pages.length;
  }


  function updateBook() {

    pages.forEach(function (page, index) {

      page.classList.toggle(
        "active",
        index === currentPage
      );

    });


    currentPageDisplay.textContent =
      currentPage + 1;


    prevButton.disabled =
      currentPage === 0;


    nextButton.disabled =
      currentPage === pages.length - 1;

  }


  prevButton.addEventListener("click", function () {

    if (currentPage > 0) {

      currentPage--;

      updateBook();

    }

  });


  nextButton.addEventListener("click", function () {

    if (currentPage < pages.length - 1) {

      currentPage++;

      updateBook();

    }

  });


  updateBook();

});