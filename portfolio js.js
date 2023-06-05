const anchorLinks = [
  ...document.querySelectorAll('a[href^="#home"]'),
  ...document.querySelectorAll('a[href^="#about"]'),
  ...document.querySelectorAll('a[href^="#portfolio"]'),
  ...document.querySelectorAll('a[href^="#contact"]')
];

anchorLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href');
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000; 

  let start = null;

  function animation(currentTime) {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}


    
    const images = [
    'https://drive.google.com/uc?export=view&id=1POLcPsMpbinp7pL4Ca6Lxqpi5Lq8mU5v',
    'https://drive.google.com/uc?export=view&id=1PO7QgCAKP9oH2EFK1h_EHz1OPNk5mEiG',
    'https://drive.google.com/uc?export=view&id=1PObEzS69BOvFMEZRhNVHhyAyZ-U1wA00',
    'https://drive.google.com/uc?export=view&id=1PPFr3v7ETjtEQ6EcbsVpCBPCupvG-zLg',
    'https://drive.google.com/uc?export=view&id=1PV-ajSFZkKzYi89ujZ7rpCZsCQeG-ijR',
  ];
  
  let currentIndex = 0;
  const imageElement = document.getElementById('current-image');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  
  function updateImageWithTransition() {
    imageElement.style.opacity = 0;
  
    setTimeout(function() {
      updateImage();
      imageElement.style.opacity = 1;
    }, 300);
  }
  
  function updateImage() {
    imageElement.src = images[currentIndex];
  }
  
  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    updateImageWithTransition();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateImageWithTransition();
  });
  
  updateImage();

  function showModal(imageSrc) {
      const modal = document.getElementById('modal');
      const modalImage = document.getElementById('modalImage');

      modalImage.src = imageSrc;
      modal.style.display = 'flex';
    }

    function hideModal() {
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
    }

    function showModalImage() {
      const modalImage = document.getElementById('modalImage');
      modalImage.style.opacity = 1;
    }