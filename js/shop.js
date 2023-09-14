
  // Initialize the cart array to store the products
  let cart = [];

  // Add event listeners to the "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
  });

  // Function to handle adding a product to the cart
  function addToCart(event) {
    event.preventDefault();
    const productCard = event.target.closest('.product-card');
    const productId = productCard.getAttribute('data-product-id');
    const productName = productCard.querySelector('h3').textContent;
    const productPriceText = productCard.querySelector('p').textContent;

    // Extract the numeric value of the price from the text
    const productPrice = parseFloat(productPriceText.split(':')[1].trim().replace('$', ''));

    // Create an object for the product
    const product = {
      id: productId,
      name: productName,
      price: productPrice,
    };

    // Add the product to the cart array
    cart.push(product);

    // Optionally, display a confirmation message
    alert(`${productName} has been added to the cart.`);

    // You can now access the cart array and use the product details as needed
    console.log(cart);
  }

  // JavaScript to handle the cart pane
  const viewCartLink = document.getElementById("viewCartLink");
  const cartPane = document.querySelector(".cart-pane");
  const cartContent = document.querySelector(".cart-content");

  viewCartLink.addEventListener("click", () => {
    openCartPane();
  });

  function openCartPane() {
    cartPane.style.right = "0";
    document.body.style.overflow = "hidden"; // Prevent scrolling
    updateCartContent();
  }

  function closeCartPane() {
    cartPane.style.right = "-300px"; // Hide the cart pane by moving it outside the viewport
    document.body.style.overflow = "auto"; // Enable scrolling again
  }
  
  function updateCartContent() {
    // Clear existing cart items before adding new ones
    cartContent.innerHTML = "";

    // Add cart items to the cart pane
    cart.forEach((item) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.innerHTML = `
        <p>${item.name}</p>
        <p>Price: $${item.price}</p>
        <hr>
      `;
      cartContent.appendChild(cartItemDiv);
    });
  }

