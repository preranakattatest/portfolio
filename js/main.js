/**
 * Grunge Portfolio Theme - Interactive Scripts
 * Handles Accordions, Mobile Navigation, and Vinyl Disk Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initMobileNav();
  highlightActiveNav();
  initVinylCards();
  initLightbox();
});

/**
 * Fullscreen Lightbox for Case Study Images
 */
function initLightbox() {
  let modal = document.querySelector('.lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
      <button class="lightbox-close" aria-label="Close image">CLOSE [ESC]</button>
      <img class="lightbox-content" src="" alt="Enlarged view">
    `;
    document.body.appendChild(modal);
  }

  const modalImg = modal.querySelector('.lightbox-content');
  const closeBtn = modal.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    modalImg.src = src;
    modalImg.alt = alt || 'Enlarged project view';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Click on any clickable image or detail image
  document.addEventListener('click', (e) => {
    const target = e.target.closest('.clickable-image, .project-detail-image-box img, .photo-frame-inner img');
    if (target && target.src) {
      e.preventDefault();
      openLightbox(target.src, target.alt);
    }
  });

  closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/**
 * Accordion Functionality (Services, FAQ, Experience, Education)
 */
function initAccordions() {
  const triggers = document.querySelectorAll('.accordion-trigger');

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const parentItem = trigger.closest('.accordion-item');
      const isAlreadyActive = parentItem.classList.contains('active');

      // Optional: Close sibling accordions inside the same container
      const container = trigger.closest('.accordion-box');
      if (container) {
        const siblings = container.querySelectorAll('.accordion-item');
        siblings.forEach((sibling) => {
          if (sibling !== parentItem) {
            sibling.classList.remove('active');
            const siblingContent = sibling.querySelector('.accordion-content');
            if (siblingContent) siblingContent.style.maxHeight = null;
          }
        });
      }

      // Toggle current accordion
      if (isAlreadyActive) {
        parentItem.classList.remove('active');
        const content = parentItem.querySelector('.accordion-content');
        if (content) content.style.maxHeight = null;
      } else {
        parentItem.classList.add('active');
        const content = parentItem.querySelector('.accordion-content');
        if (content) {
          content.style.maxHeight = content.scrollHeight + 32 + 'px';
        }
      }
    });
  });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.textContent = 'MENU';
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      drawer.classList.add('open');
      toggleBtn.textContent = 'CLOSE [X]';
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  // Close drawer if clicking a link inside it
  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.textContent = 'MENU';
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Automatically highlight the active navigation link based on current URL
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (href !== 'index.html' && currentPath.includes(href)) {
      link.classList.add('active');
    }
  });
}

/**
 * Enhanced Touch/Mobile support for Vinyl Sleeve Cards
 */
function initVinylCards() {
  const vinylCards = document.querySelectorAll('.vinyl-card');
  vinylCards.forEach((card) => {
    card.addEventListener('touchstart', () => {
      // Small visual feedback on mobile
      card.classList.toggle('touched');
    }, { passive: true });
  });
}
