// WAIT UNTIL PAGE LOADS
document.addEventListener("DOMContentLoaded", () => {

  // SEARCH BUTTON ALERT
  const searchBtn = document.querySelector(".search-box button");

  if (searchBtn) {

    searchBtn.addEventListener("click", () => {

      alert("Searching products...");

    });

  }


  // WISHLIST / FAVORITE TOGGLE

  const wishlistButtons = document.querySelectorAll(".wishlist, .fav");

  wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

      if (button.innerHTML === "♡") {

        button.innerHTML = "♥";
        button.style.color = "red";

      } else {

        button.innerHTML = "♡";
        button.style.color = "#0d6efd";

      }

    });

  });


  // REMOVE FILTER TAGS
  const filterTags = document.querySelectorAll(".filter-tags span");

  filterTags.forEach(tag => {

    tag.addEventListener("click", () => {

      tag.style.display = "none";

    });

  });


  // PRODUCT VIEW SWITCH
  const gridView = document.querySelector(".view-icons span:first-child");
  const listView = document.querySelector(".view-icons span:last-child");

  const productsGrid = document.querySelector(".products-grid");

  // GRID VIEW
  if (gridView && productsGrid) {

    gridView.addEventListener("click", () => {

      productsGrid.style.display = "grid";
      productsGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
      productsGrid.style.gap = "20px";

    });

  }

  // LIST VIEW
  if (listView && productsGrid) {

    listView.addEventListener("click", () => {

      productsGrid.style.display = "flex";
      productsGrid.style.flexDirection = "column";
      productsGrid.style.gap = "20px";

    });

  }


  // PAGINATION ACTIVE BUTTON
  const pageButtons = document.querySelectorAll(".pages span");

  pageButtons.forEach(button => {

    button.addEventListener("click", () => {

      pageButtons.forEach(btn => {

        btn.classList.remove("active");

      });

      button.classList.add("active");

    });

  });



  // ADD TO CART BUTTON
  const addCartBtn = document.querySelector(".add-cart-btn");

  if (addCartBtn) {

    addCartBtn.addEventListener("click", () => {

      alert("Product added to cart!");

    });

  }


  // PRODUCT SIZE DROPDOWN
  const sizeSelect = document.querySelector(".size-select select");

  if (sizeSelect) {

    sizeSelect.addEventListener("change", () => {

      console.log("Selected Size:", sizeSelect.value);

    });

  }



  // PRODUCT IMAGE SWITCHER

  const mainImage = document.querySelector(".main-image img");
  const smallImages = document.querySelectorAll(".small-images img");

  if (mainImage && smallImages.length > 0) {

    smallImages.forEach(image => {

      image.addEventListener("click", () => {

        mainImage.src = image.src;

      });

    });

  }

  // NEWSLETTER SUBSCRIPTION
  const subscribeBtn = document.querySelector(".newsletter-form button");

  if (subscribeBtn) {

    subscribeBtn.addEventListener("click", () => {

      alert("Subscribed successfully!");

    });

  }

});
