document.addEventListener('DOMContentLoaded', () => {
  const data = [
    {
      id: 1,
      title: "Way of the Wolf",
      description: "Jordan Belfort—immortalized by Leonardo DiCaprio in the hit movie The Wolf of Wall Street—reveals the step-by-step sales and persuasion system...",
      photo: "images/book1.jpg"
    },
    {
      id: 2,
      title: "Basic Economics",
      description: "Basic Economics is a citizen's guide to economics, written for those who want to understand how the economy works but have no interest in jargon or equations...",
      photo: "images/book2.jpg"
    },
    {
      id: 3,
      title: "Getting to Yes",
      description: "Since its original publication nearly thirty years ago, Getting to Yes has helped millions of people learn a better way to negotiate...",
      photo: "images/book3.jpg"
    },
    {
      id: 4,
      title: "Economics in One Lesson",
      description: "A million copy seller, Henry Hazlitt’s classic primer is an essential guide to the basics of economic theory...",
      photo: "images/book4.jpg"
    },
    {
      id: 5,
      title: "Foster",
      description: "An international bestseller and one of The Times’ “Top 50 Novels Published in the 21st Century...",
      photo: "images/book5.jpg"
    },
    {
      id: 6,
      title: "Small Things Like These",
      description: "Small Things Like These is award-winning author Claire Keegan's landmark new novel...",
      photo: "images/book6.jpg"
    },
    {
      id: 7,
      title: "So Late in the Day",
      description: "From Booker Prize Finalist and bestselling author of 'pitch perfect' Small Things Like These, comes a triptych of stories...",
      photo: "images/book7.jpg"
    }
  ];

  const carousel = document.querySelector('.carousel');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const pagination = document.querySelector('.pagination');
  let currentIndex = 0;
  let visibleCards = 1;

  const updateCardWidth = () => document.querySelector('.card')?.offsetWidth + parseInt(getComputedStyle(document.querySelector('.card')).marginRight) || 240;

  const updateVisibleCards = () => {
    const containerWidth = document.querySelector('.carousel-container').offsetWidth;
    const cardWidth = updateCardWidth();
    visibleCards = Math.floor(containerWidth / cardWidth);
  };

  const updatePagination = () => {
    pagination.innerHTML = '';
    const totalDots = Math.ceil(data.length / visibleCards);
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.classList.add('dot');
      if (i === Math.floor(currentIndex / visibleCards)) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i * visibleCards;
        updateCarousel();
      });
      pagination.appendChild(dot);
    }
  };

  const updateCarousel = () => {
    const cardWidth = updateCardWidth();
    carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    updatePagination();
  };

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${item.photo}" alt="${item.title}">
      <div class="card-content">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
      </div>
    `;
    carousel.appendChild(card);
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % data.length;
    updateCarousel();
  });

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    updateCarousel();
  });

  window.addEventListener('resize', () => {
    updateVisibleCards();
    updateCarousel();
  });

  updateVisibleCards();
  updateCarousel();

  setInterval(() => {
    currentIndex = (currentIndex + 1) % data.length;
    updateCarousel();
  }, 3000);
});


