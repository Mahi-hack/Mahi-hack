document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const searchForm = document.getElementById('search-form');
  const cityInput = document.getElementById('city-search');
  const citySuggestions = document.getElementById('city-suggestions');
  const cityChips = document.querySelectorAll('.city-chip');
  const cityLinks = document.querySelectorAll('.city-link');
  const featuredSalonsGrid = document.getElementById('featured-salons-grid');
  const searchResultsSection = document.getElementById('search-results-section');
  const searchResultsGrid = document.getElementById('search-results-grid');
  const searchCityElement = document.getElementById('search-city');
  const noResultsElement = document.getElementById('no-results');
  const serviceFilter = document.getElementById('service-filter');
  const priceFilter = document.getElementById('price-filter');
  const ratingFilter = document.getElementById('rating-filter');
  const resetFiltersBtn = document.getElementById('reset-filters');
  const salonModal = document.getElementById('salon-modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.close-btn');

  // State
  let currentCity = '';
  let currentSearchResults = [];
  let currentFilters = {
    service: '',
    price: '',
    rating: ''
  };

  // Initialize the page
  displayFeaturedSalons();

  // Event Listeners
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  mobileMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
    if (mobileMenu.classList.contains('open')) {
      mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

  // Search functionality
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const searchValue = cityInput.value.trim();
    if (searchValue) {
      searchSalons(searchValue);
      citySuggestions.innerHTML = '';
      citySuggestions.classList.remove('show');
    }
  });

  cityInput.addEventListener('input', function() {
    const searchValue = cityInput.value.trim().toLowerCase();
    
    if (searchValue.length > 0) {
      const filteredCities = cities.filter(city => 
        city.toLowerCase().includes(searchValue)
      );
      
      if (filteredCities.length > 0) {
        displayCitySuggestions(filteredCities);
      } else {
        citySuggestions.innerHTML = '';
      }
    } else {
      citySuggestions.innerHTML = '';
    }
  });

  cityChips.forEach(chip => {
    chip.addEventListener('click', function() {
      const city = this.getAttribute('data-city');
      cityInput.value = city;
      searchSalons(city);
    });
  });

  cityLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const city = this.getAttribute('data-city');
      cityInput.value = city;
      searchSalons(city);
      
      // Scroll to search results
      searchResultsSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Filter functionality
  serviceFilter.addEventListener('change', applyFilters);
  priceFilter.addEventListener('change', applyFilters);
  ratingFilter.addEventListener('change', applyFilters);

  resetFiltersBtn.addEventListener('click', resetFilters);

  // Modal functionality
  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', function(e) {
    if (e.target === salonModal) {
      closeModal();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && salonModal.classList.contains('open')) {
      closeModal();
    }
  });

  // Functions
  function displayFeaturedSalons() {
    const featuredSalons = salons.filter(salon => salon.featured);
    featuredSalonsGrid.innerHTML = '';

    featuredSalons.forEach(salon => {
      featuredSalonsGrid.appendChild(createSalonCard(salon));
    });
  }

  function searchSalons(city) {
    currentCity = city;
    const matchingSalons = salons.filter(salon => 
      salon.city.toLowerCase() === city.toLowerCase()
    );

    currentSearchResults = [...matchingSalons];
    
    displaySearchResults(matchingSalons);
    resetFilters();
    
    // Show search results section
    searchResultsSection.classList.remove('hidden');
    searchCityElement.textContent = city;
    
    // Scroll to search results
    searchResultsSection.scrollIntoView({ behavior: 'smooth' });
  }

  function displaySearchResults(results) {
    searchResultsGrid.innerHTML = '';
    
    if (results.length === 0) {
      noResultsElement.classList.remove('hidden');
    } else {
      noResultsElement.classList.add('hidden');
      
      results.forEach(salon => {
        searchResultsGrid.appendChild(createSalonCard(salon));
      });
    }
  }

  function displayCitySuggestions(suggestions) {
    citySuggestions.innerHTML = '';
    
    suggestions.forEach(city => {
      const suggestionElement = document.createElement('div');
      suggestionElement.classList.add('city-suggestion');
      suggestionElement.textContent = city;
      
      suggestionElement.addEventListener('click', function() {
        cityInput.value = city;
        citySuggestions.innerHTML = '';
        searchSalons(city);
      });
      
      citySuggestions.appendChild(suggestionElement);
    });
  }

  function createSalonCard(salon) {
    const card = document.createElement('div');
    card.classList.add('salon-card');
    card.dataset.id = salon.id;
    
    // Create salon categories array for filtering
    const serviceCategories = [...new Set(salon.services.map(service => service.category))];
    
    card.innerHTML = `
      <img class="salon-image" src="${salon.image}" alt="${salon.name}">
      <div class="salon-content">
        <h3 class="salon-name">${salon.name}</h3>
        <div class="salon-location">
          <i class="fas fa-map-marker-alt"></i>
          <span>${salon.address}, ${salon.city}</span>
        </div>
        <div class="salon-rating">
          <div class="stars">
            ${generateStars(salon.rating)}
          </div>
          <span class="review-count">(${salon.reviewCount} reviews)</span>
        </div>
        <div class="salon-price">
          <span>${salon.priceRange}</span>
        </div>
        <div class="salon-services">
          ${serviceCategories.slice(0, 3).map(category => `
            <span class="salon-service">${category}</span>
          `).join('')}
        </div>
        <div class="salon-footer">
          <button class="view-details">
            View Details <i class="fas fa-arrow-right"></i>
          </button>
          <button class="book-now">
            Book Now
          </button>
        </div>
      </div>
    `;
    
    // Event listeners for the card
    card.addEventListener('click', function() {
      openSalonModal(salon.id);
    });
    
    // Prevent event bubbling for the book now button
    const bookNowBtn = card.querySelector('.book-now');
    bookNowBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      window.location.href = `booking.html?salon=${salon.id}`;
    });
    
    return card;
  }

  function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
  }

  function applyFilters() {
    currentFilters = {
      service: serviceFilter.value,
      price: priceFilter.value,
      rating: ratingFilter.value
    };
    
    let filteredResults = [...currentSearchResults];
    
    // Filter by service category
    if (currentFilters.service) {
      filteredResults = filteredResults.filter(salon => 
        salon.services.some(service => service.category === currentFilters.service)
      );
    }
    
    // Filter by price range
    if (currentFilters.price) {
      filteredResults = filteredResults.filter(salon => 
        salon.priceRange === currentFilters.price
      );
    }
    
    // Filter by rating
    if (currentFilters.rating) {
      const minRating = parseFloat(currentFilters.rating);
      filteredResults = filteredResults.filter(salon => 
        salon.rating >= minRating
      );
    }
    
    displaySearchResults(filteredResults);
  }

  function resetFilters() {
    serviceFilter.value = '';
    priceFilter.value = '';
    ratingFilter.value = '';
    
    currentFilters = {
      service: '',
      price: '',
      rating: ''
    };
    
    displaySearchResults(currentSearchResults);
  }

  function openSalonModal(salonId) {
    const salon = salons.find(s => s.id === salonId);
    
    if (!salon) return;
    
    modalBody.innerHTML = `
      <div class="salon-detail">
        <div class="salon-detail-hero">
          <img class="salon-detail-image" src="${salon.image}" alt="${salon.name}">
          <div class="salon-detail-overlay">
            <h2 class="salon-detail-name">${salon.name}</h2>
            <div class="salon-detail-location">
              <i class="fas fa-map-marker-alt"></i>
              <span>${salon.address}, ${salon.city}</span>
            </div>
            <div class="salon-detail-rating">
              <div class="stars">
                ${generateStars(salon.rating)}
              </div>
              <span>(${salon.reviewCount} reviews)</span>
              <span class="salon-price ml-4">${salon.priceRange}</span>
            </div>
          </div>
        </div>
        
        <div class="salon-detail-content">
          <p class="salon-detail-description">${salon.description}</p>
          
          <div class="salon-detail-tabs">
            <div class="salon-detail-tab active" data-tab="services">Services</div>
            <div class="salon-detail-tab" data-tab="hours">Hours</div>
            <div class="salon-detail-tab" data-tab="reviews">Reviews</div>
          </div>
          
          <div class="salon-detail-tab-content active" data-tab="services">
            <div class="service-list">
              ${salon.services.map(service => `
                <div class="service-card">
                  <h4 class="service-name">${service.name}</h4>
                  <p class="service-description">${service.description}</p>
                  <div class="service-meta">
                    <div class="service-price">$${service.price}</div>
                    <div class="service-duration">${service.duration} min</div>
                  </div>
                  <button class="book-btn">Book Now</button>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="salon-detail-tab-content" data-tab="hours">
            <div class="hours-grid">
              ${Object.entries(salon.openingHours).map(([day, hours]) => `
                <div class="hours-day ${day === getCurrentDay() ? 'current-day' : ''}">
                  <div class="day-name">${capitalizeFirstLetter(day)}</div>
                  <div class="day-hours">${hours}</div>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="salon-detail-tab-content" data-tab="reviews">
            <p class="text-center py-8">Reviews coming soon!</p>
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners to tabs
    const tabs = modalBody.querySelectorAll('.salon-detail-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all tab contents
        const tabContents = modalBody.querySelectorAll('.salon-detail-tab-content');
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Show selected tab content
        const activeContent = modalBody.querySelector(`.salon-detail-tab-content[data-tab="${tabName}"]`);
        activeContent.classList.add('active');
      });
    });
    
    // Add event listeners to book buttons
    const bookButtons = modalBody.querySelectorAll('.book-btn');
    bookButtons.forEach((btn, index) => {
      btn.addEventListener('click', function() {
        window.location.href = `booking.html?salon=${salon.id}&service=${salon.services[index].id}`;
      });
    });
    
    // Open modal
    salonModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    salonModal.classList.remove('open');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      modalBody.innerHTML = '';
    }, 300);
  }

  // Helper functions
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getCurrentDay() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return days[new Date().getDay()];
  }
});