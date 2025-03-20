// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle && closeMenu && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
}

// Mouse Follower
const mouseFollower = document.querySelector('.mouse-follower');

if (mouseFollower) {
  // Initialize mouse position variables
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;
  let isMoving = false;
  let timeout;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    mouseFollower.style.opacity = '0.75';
    isMoving = true;
    
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      isMoving = false;
    }, 100);
  });

  document.addEventListener('mouseleave', () => {
    mouseFollower.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    mouseFollower.style.opacity = '0.75';
  });

  function updateFollower() {
    // Calculate the distance between current follower position and mouse position
    const dx = mouseX - followerX;
    const dy = mouseY - followerY;
    
    // Move the follower a percentage of the distance
    followerX += dx * 0.2;
    followerY += dy * 0.2;
    
    // Apply transformations
    mouseFollower.style.left = `${followerX}px`;
    mouseFollower.style.top = `${followerY}px`;
    
    if (isMoving) {
      mouseFollower.style.transform = 'translate(-50%, -50%) scale(0.75)';
      mouseFollower.style.opacity = '0.5';
    } else {
      mouseFollower.style.transform = 'translate(-50%, -50%) scale(1)';
      mouseFollower.style.opacity = '0.75';
    }
    
    requestAnimationFrame(updateFollower);
  }
  
  updateFollower();
}