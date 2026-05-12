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

  // REMOVE SINGLE CART ITEM

  const removeButtons = document.querySelectorAll(".remove");

  removeButtons.forEach(button => {

    button.addEventListener("click", () => {

      // FIND PARENT CART ITEM
      const cartItem = button.closest(".cart-item");

      // REMOVE ITEM
      cartItem.remove();

      // UPDATE CART COUNT
      updateCartCount();

    });

  });


  // REMOVE ALL ITEMS
  const removeAllBtn = document.querySelector(".remove-all");

  if (removeAllBtn) {

    removeAllBtn.addEventListener("click", () => {

      const allItems = document.querySelectorAll(".cart-item");

      allItems.forEach(item => {
        item.remove();
      });

      updateCartCount();

    });

  }


  // SAVE FOR LATER
  const saveButtons = document.querySelectorAll(".save");

  saveButtons.forEach(button => {

    button.addEventListener("click", () => {

      button.innerHTML = "Saved ✓";

      button.style.background = "#d1ffe0";
      button.style.color = "green";

    });

  });


  // MOVE TO CART BUTTON
  const moveButtons = document.querySelectorAll(".saved-card button");

  moveButtons.forEach(button => {

    button.addEventListener("click", () => {

      button.innerHTML = "Added ✓";

      button.style.background = "#0d6efd";
      button.style.color = "white";

    });

  });


  // APPLY COUPON
  const couponBtn = document.querySelector(".coupon-input button");

  if (couponBtn) {

    couponBtn.addEventListener("click", () => {

      const couponInput = document.querySelector(".coupon-input input");

      if (couponInput.value.trim() === "") {

        alert("Please enter a coupon code");

      } else {

        alert("Coupon Applied Successfully!");

      }

    });

  }


  // CHECKOUT BUTTON
  const checkoutBtn = document.querySelector(".checkout-btn");

  if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {

      alert("Proceeding to Checkout...");

    });

  }



  // QUANTITY CHANGE
  const quantitySelects = document.querySelectorAll(".item-right select");

  quantitySelects.forEach(select => {

    select.addEventListener("change", () => {

      alert("Quantity Updated");

    });

  });


  // BACK TO SHOP
  const backShopBtn = document.querySelector(".back-shop");

  if (backShopBtn) {

    backShopBtn.addEventListener("click", () => {

      window.location.href = "index.html";

    });

  }



  // SHOP NOW BUTTON
  const shopNowBtn = document.querySelector(".discount-banner button");

  if (shopNowBtn) {

    shopNowBtn.addEventListener("click", () => {

      alert("Redirecting to offers...");

    });

  }



});
