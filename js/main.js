/**
 * Grunge Portfolio Theme - Interactive Scripts
 * Handles Accordions, Mobile Navigation, and Vinyl Disk Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initAccordions();
  initMobileNav();
  highlightActiveNav();
  initVinylCards();
});

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
