const products = [
  {
    id: 1,
    name: "MacBook Pro 14",
    brand: "Apple",
    price: 999.99,
    category: "Laptops",
    image: "https://via.placeholder.com/300",
    rating: 4.8,
    stock: 15,
    description: "Latest Apple M2 chip, 14-inch Retina display",
  },
  {
    id: 2,
    name: "Dell XPS 13",
    brand: "Dell",
    price: 899.99,
    category: "Laptops",
    image: "https://via.placeholder.com/300",
    rating: 4.7,
    stock: 23,
    description: "13-inch 4K display, Intel i7, 16GB RAM",
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 999.99,
    category: "Smartphones",
    image: "https://via.placeholder.com/300",
    rating: 4.9,
    stock: 42,
    description: "A17 Pro chip, 48MP camera system",
  },
  {
    id: 4,
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    price: 899.99,
    category: "Smartphones",
    image: "https://via.placeholder.com/300",
    rating: 4.8,
    stock: 38,
    description: "6.8-inch Dynamic AMOLED, AI features",
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 349.99,
    category: "Audio",
    image: "https://via.placeholder.com/300",
    rating: 4.9,
    stock: 50,
    description: "Noise cancelling headphones with 30hr battery",
  },
  {
    id: 6,
    name: "AirPods Pro",
    brand: "Apple",
    price: 249.99,
    category: "Audio",
    image: "https://via.placeholder.com/300",
    rating: 4.7,
    stock: 65,
    description: "Active noise cancellation, spatial audio",
  },
  {
    id: 7,
    name: "PS5 Console",
    brand: "Sony",
    price: 499.99,
    category: "Gaming",
    image: "https://via.placeholder.com/300",
    rating: 4.9,
    stock: 10,
    description: "Next-gen gaming console with 4K support",
  },
  {
    id: 8,
    name: "Logitech G Pro X",
    brand: "Logitech",
    price: 129.99,
    category: "Gaming",
    image: "https://via.placeholder.com/300",
    rating: 4.6,
    stock: 45,
    description: "Wireless gaming headset with DTS audio",
  },
  {
    id: 9,
    name: 'Samsung 49" Odyssey',
    brand: "Samsung",
    price: 899.99,
    category: "Gaming",
    image: "https://via.placeholder.com/300",
    rating: 4.7,
    stock: 18,
    description: "49-inch curved gaming monitor, 240Hz",
  },
  {
    id: 10,
    name: "iPad Pro 12.9",
    brand: "Apple",
    price: 799.99,
    category: "Accessories",
    image: "https://via.placeholder.com/300",
    rating: 4.8,
    stock: 25,
    description: "12.9-inch Liquid Retina XDR display",
  },
  {
    id: 11,
    name: "Logitech MX Master 3",
    brand: "Logitech",
    price: 99.99,
    category: "Accessories",
    image: "https://via.placeholder.com/300",
    rating: 4.7,
    stock: 55,
    description: "Advanced wireless mouse for productivity",
  },
  {
    id: 12,
    name: "Samsung Galaxy Watch 6",
    brand: "Samsung",
    price: 299.99,
    category: "Accessories",
    image: "https://via.placeholder.com/300",
    rating: 4.6,
    stock: 30,
    description: "Advanced health tracking, sleep monitoring",
  },
  {
    id: 13,
    name: "Sony WF-1000XM4",
    brand: "Sony",
    price: 279.99,
    category: "Audio",
    image: "https://via.placeholder.com/300",
    rating: 4.8,
    stock: 40,
    description: "Wireless noise cancelling earbuds",
  },
  {
    id: 14,
    name: 'Dell 27" 4K Monitor',
    brand: "Dell",
    price: 449.99,
    category: "Accessories",
    image: "https://via.placeholder.com/300",
    rating: 4.5,
    stock: 22,
    description: "27-inch 4K USB-C monitor",
  },
  {
    id: 15,
    name: "Logitech G915",
    brand: "Logitech",
    price: 249.99,
    category: "Gaming",
    image: "https://via.placeholder.com/300",
    rating: 4.7,
    stock: 28,
    description: "Wireless mechanical gaming keyboard",
  },
];

// Apply Filters

function applyFilters() {
  // main filter
  let filtered = products;
  const searchTerm = document.getElementById("searchInput").value;
  filtered = searchProducts(filtered, searchTerm);

  // end of search term

  // filter by category

  const category = document.getElementById("categorySelect").value;
  filtered = searchCategory(filtered, category);

  // filter by brand

  const brand = document.getElementById('brandSelect').value
  filtered = searchBrand(filtered, brand)

  // sort all levels

 const sortBy = document.getElementById('sortSelect').value
  if (sortBy === 'priceLow') {
    filtered.sort ((a, b) => a.price - b.price)
  }

  else if (sortBy === 'priceHigh') {
    filtered.sort ((a, b) => b.price - a.price)
  }

  else if (sortBy === 'rating') {
    filtered.sort ((a, b) => b.rating - a.rating)
  }

  else if (sortBy === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name))
  }


  renderProducts(filtered);
}

  // filter by category
  function searchCategory(products, category) {
    if(!category) return products;

    //implement category filtering
    return products.filter(product => product.category === category)
  }

  // filter by brand
  function searchBrand(products, brand) {
    if(!brand) return products

    //implement brand filtering
    return products.filter(product => product.brand === brand)
  }

// Search Filter

function searchProducts(products, searchTerm) {
  if (!searchTerm) return products;

  //process each search term
  searchTerm = searchTerm.toLowerCase().trim();
  console.log(searchTerm);
  const searchWords = searchTerm.split(" ").filter((word) => word.length > 0);
  console.log(searchWords);

  // return products

  return products.filter((product) => {
    const productText = [
      product.name,
      product.description,
      product.category,
      product.brand,
    ]
      .join(" ")
      .toLowerCase();

    // check if all search words match the product
    return searchWords.every((word) => productText.includes(word));
  });
}

// Render all products

function renderProducts(productsToShow) {
  const container = document.getElementById("productsContainer");
  const productCount = document.getElementById("productCount");

  //displays product count
  productCount.innerHTML = productsToShow.length;

  //create HTML strings for all products
  let html = "";
  for (i = 0; i < productsToShow.length; i++) {
    const product = productsToShow[i];
    html += `
            <div class = "product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <p class="rating">${product.rating}</p>
                <p class="stock">${product.stock}</p>
                <p class="description">${product.description}</p>
            </div>
        `;
  }
  container.innerHTML = html;
}
renderProducts(products); // passing an array of objects as parameters
