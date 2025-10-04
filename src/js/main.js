/* ==========================================================================
   BASE JAVASCRIPT FOR STUDIO BRAZA WEBSITE
   ========================================================================== */

// Import CSS styles
import '../styles/main.css';

class StudioBrazaApp {
  constructor() {
    this.mobileMenu = null;
    this.contactModal = null;
    this.faqItems = [];
    this.carousel = null;
    this.navbar = null;
    
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }

  initializeComponents() {
    console.log('Initializing Studio Braza components...');
    
    // Remove loading screen
    this.hideLoadingScreen();
    
    // Initialize all components
    this.initMobileMenu();
    this.initContactModal();
    this.initFAQ();
    this.initCarousel();
    this.initSmoothScrolling();
    this.initNavbarScroll();
    this.initFormValidation();
    this.initAnimations();
  this.initMagneticButtons();
  this.initButtonRipple();
  this.initPortfolioTilt();
  this.initScrollProgress();
  this.initRevealOnScroll();
  this.initHeroFX();
  this.initCheckoutButtons();
  this.initCMP();
  this.initFooterScroll();
  this.initStickyCTA();
    
    console.log('All components initialized successfully');
  }

  /* ==========================================================================
     LOADING SCREEN
     ========================================================================== */

  hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      // Add hidden class for smooth transition
      loadingScreen.classList.add('loading-screen--hidden');
      
      // Remove from DOM after transition completes
      setTimeout(() => {
        loadingScreen.remove();
      }, 500); // Match CSS transition duration
    }
  }

  /* ==========================================================================
     MOBILE MENU
     ========================================================================== */

  initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const menuButtonClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu?.querySelectorAll('a');

    if (!menuButton || !mobileMenu) return;

    // Open mobile menu
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.add('mobile-menu--active');
      document.body.style.overflow = 'hidden';
    });

    // Close mobile menu
    const closeMobileMenu = () => {
      mobileMenu.classList.remove('mobile-menu--active');
      document.body.style.overflow = '';
    };

    if (menuButtonClose) {
      menuButtonClose.addEventListener('click', closeMobileMenu);
    }

    // Close when clicking on links
    menuLinks?.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close when clicking overlay
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        closeMobileMenu();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('mobile-menu--active')) {
        closeMobileMenu();
      }
    });
  }

  /* ==========================================================================
     CONTACT MODAL
     ========================================================================== */

  initContactModal() {
    const modal = document.getElementById('contact-modal');
    const openButtons = document.querySelectorAll('[data-contact-modal]');
    const closeButton = modal?.querySelector('.modal__close');

    if (!modal) return;

    const openModal = () => {
      modal.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal.classList.remove('modal--active');
      document.body.style.overflow = '';
    };

    // Open modal buttons
    openButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
      });
    });

    // Close modal
    closeButton?.addEventListener('click', closeModal);

    // Close when clicking overlay
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('modal--active')) {
        closeModal();
      }
    });
  }

  /* ==========================================================================
     FAQ ACCORDION
     ========================================================================== */

  initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    console.log('FAQ items found:', faqItems.length);

    faqItems.forEach((item, index) => {
      const trigger = item.querySelector('.faq-item__trigger');
      const content = item.querySelector('.faq-item__content');

      if (!trigger || !content) {
        console.warn(`FAQ item ${index} missing trigger or content`);
        return;
      }

      // Set initial state
      content.style.maxHeight = '0';

      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`FAQ item ${index} clicked`);
        
        const isActive = item.classList.contains('faq-item--active');

        // Close all FAQ items
        faqItems.forEach((otherItem, otherIndex) => {
          otherItem.classList.remove('faq-item--active');
          const otherContent = otherItem.querySelector('.faq-item__content');
          const otherTrigger = otherItem.querySelector('.faq-item__trigger');
          
          if (otherContent) {
            otherContent.style.maxHeight = '0';
          }
          if (otherTrigger) {
            otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (!isActive) {
          item.classList.add('faq-item--active');
          content.style.maxHeight = content.scrollHeight + 'px';
          trigger.setAttribute('aria-expanded', 'true');
          console.log(`FAQ item ${index} opened, height: ${content.scrollHeight}px`);
        } else {
          trigger.setAttribute('aria-expanded', 'false');
          console.log(`FAQ item ${index} closed`);
        }
      });
    });
  }

  /* ==========================================================================
     IMAGE CAROUSEL
     ========================================================================== */

  initCarousel() {
    // This will be implemented when Swiper.js is loaded
    // For now, we'll create a basic carousel functionality
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    // Check if Swiper is available
    if (typeof Swiper !== 'undefined') {
      this.carousel = new Swiper('.carousel .swiper', {
        slidesPerView: 1,
        spaceBetween: 16,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        },
      });
    }
  }

  /* ==========================================================================
     SMOOTH SCROLLING
     ========================================================================== */

  initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href') || '';

        // Ignore plain '#', empty, or consent management link
        if (href === '#' || href.trim() === '' || link.id === 'manage-consent-link' || link.matches('[data-cmp]')) {
          return; // let other handlers run
        }

        // Only handle if there's a valid target in the DOM
        if (href.startsWith('#')) {
          const targetId = href;
          if (targetId.length <= 1) return; // invalid selector '#'
          const targetElement = document.querySelector(targetId);
          if (!targetElement) return;

          e.preventDefault();
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, { passive: false });
    });
  }

  /* ==========================================================================
     NAVBAR SCROLL EFFECT
     ========================================================================== */

  initNavbarScroll() {
    const navbar = document.querySelector('.header');
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        navbar.classList.add('header--scrolled');
      } else {
        navbar.classList.remove('header--scrolled');
      }

      // Hide/show navbar on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        navbar.classList.add('header--hidden');
      } else {
        navbar.classList.remove('header--hidden');
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick);
  }

  /* ==========================================================================
     FORM VALIDATION
     ========================================================================== */

  initFormValidation() {
    const forms = document.querySelectorAll('.contact-form');

    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit(form);
      });

      // Real-time validation
      const inputs = form.querySelectorAll('.form-input, .form-textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => this.clearFieldError(input));
      });
    });
  }

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMessage = '';

    // Remove existing error
    this.clearFieldError(field);

    // Required field validation
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'Este campo é obrigatório';
    }

    // Email validation
    if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Por favor, insira um email válido';
      }
    }

    // Phone validation (basic)
    if (type === 'tel' && value) {
      const phoneRegex = /^[\d\s\(\)\-\+]+$/;
      if (!phoneRegex.test(value) || value.length < 10) {
        isValid = false;
        errorMessage = 'Por favor, insira um telefone válido';
      }
    }

    if (!isValid) {
      this.showFieldError(field, errorMessage);
    }

    return isValid;
  }

  showFieldError(field, message) {
    field.classList.add('form-input--error');
    
    let errorElement = field.parentNode.querySelector('.form-error');
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.className = 'form-error';
      field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
  }

  clearFieldError(field) {
    field.classList.remove('form-input--error');
    const errorElement = field.parentNode.querySelector('.form-error');
    if (errorElement) {
      errorElement.remove();
    }
  }

  async handleFormSubmit(form) {
    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    let isFormValid = true;

    // Validate all fields
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      this.showFormStatus(form, 'error', 'Por favor, corrija os erros no formulário');
      return;
    }

    // Show loading state
    const submitButton = form.querySelector('.button--primary');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    try {
      // Simulate form submission (replace with actual implementation)
      await this.submitForm(form);
      
      this.showFormStatus(form, 'success', 'Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
      
      // Close modal if form is in modal
      const modal = form.closest('.modal');
      if (modal) {
        setTimeout(() => {
          modal.classList.remove('modal--active');
          document.body.style.overflow = '';
        }, 2000);
      }
      
    } catch (error) {
      this.showFormStatus(form, 'error', 'Erro ao enviar mensagem. Tente novamente.');
    } finally {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  }

  async submitForm(form) {
    // Simulate API call - replace with actual form submission logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random success/failure for demo
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Simulated error'));
        }
      }, 1500);
    });
  }

  showFormStatus(form, type, message) {
    let statusElement = form.querySelector('.form-status');
    if (!statusElement) {
      statusElement = document.createElement('div');
      statusElement.className = 'form-status';
      form.appendChild(statusElement);
    }

    statusElement.className = `form-status form-status--${type}`;
    statusElement.textContent = message;
    statusElement.style.display = 'block';

    // Auto-hide success messages
    if (type === 'success') {
      setTimeout(() => {
        statusElement.style.display = 'none';
      }, 5000);
    }
  }

  /* ==========================================================================
     ANIMATIONS
     ========================================================================== */

  initAnimations() {
    // Check if AOS (Animate On Scroll) is available
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
      });
    } else {
      // Fallback: Simple intersection observer for fade-in animations
      this.initSimpleAnimations();
    }
  }

  /* ========================================================================
     MAGNETIC BUTTONS
     ======================================================================== */
  initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn--magnetic');
    if (!magneticButtons.length) return;

    const strength = 18; // px

    magneticButtons.forEach((btn) => {
      // Ensure inner wrapper exists
      let inner = btn.querySelector('.btn__inner');
      if (!inner) {
        inner = document.createElement('span');
        inner.className = 'btn__inner';
        // move children into inner
        while (btn.firstChild) inner.appendChild(btn.firstChild);
        btn.appendChild(inner);
      }

      let frame;

      const onMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const moveX = (relX - rect.width / 2) / (rect.width / 2) * strength;
        const moveY = (relY - rect.height / 2) / (rect.height / 2) * strength;

        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          inner.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
      };

      const onLeave = () => {
        cancelAnimationFrame(frame);
        inner.style.transform = 'translate(0, 0)';
      };

      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
    });
  }

  /* ========================================================================
     BUTTON RIPPLE EFFECT
     ======================================================================== */
  initButtonRipple() {
    const buttons = document.querySelectorAll('.btn.btn--primary, .btn.btn--secondary');
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.className = 'btn__ripple';
        const rect = btn.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  /* ========================================================================
     PORTFOLIO TILT EFFECT
     ======================================================================== */
  initPortfolioTilt() {
    const items = document.querySelectorAll('.portfolio__item');
    if (!items.length) return;

    const maxTilt = 6; // degrees
    const damp = 0.12; // smoothing

    items.forEach((el) => {
      let rx = 0, ry = 0, vx = 0, vy = 0;
      let rafId;

      const animate = () => {
        rx += (vx - rx) * damp;
        ry += (vy - ry) * damp;
        el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
        rafId = requestAnimationFrame(animate);
      };

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;   // 0..1
        const py = (e.clientY - rect.top) / rect.height;  // 0..1
        vx = (0.5 - py) * maxTilt; // X tilt (vertical movement)
        vy = (px - 0.5) * maxTilt; // Y tilt (horizontal movement)
        if (!rafId) animate();
      };

      const onLeave = () => {
        vx = 0; vy = 0;
        // smooth back to 0 then stop
        const end = () => {
          if (Math.abs(rx) < 0.05 && Math.abs(ry) < 0.05) {
            cancelAnimationFrame(rafId);
            rafId = null;
            el.style.transform = '';
            return;
          }
          rafId = requestAnimationFrame(end);
        };
        if (!rafId) end();
      };

      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  initSimpleAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, observerOptions);

    // Observe elements that should animate
    const animatedElements = document.querySelectorAll(
      '.service-card, .portfolio-item, .process-step, .faq-item, .cta__content > *'
    );

    animatedElements.forEach(el => observer.observe(el));
  }

  /* ========================================================================
     SCROLL PROGRESS BAR
     ======================================================================== */
  initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${progress}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ========================================================================
     REVEAL-ON-SCROLL (fallback sem AOS)
     ======================================================================== */
  initRevealOnScroll() {
    if (typeof AOS !== 'undefined') return; // já coberto pelo AOS
    const targets = document.querySelectorAll('.js-reveal');
    if (!targets.length) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    targets.forEach(t => io.observe(t));
  }

  /* ========================================================================
     HERO FX (typewriter + one-off title glow)
     ======================================================================== */
  initHeroFX() {
    const title = document.querySelector('.hero__title');
    const typer = document.querySelector('.js-typewriter');
    if (!title || !typer) return;

    const text = typer.getAttribute('data-type-text') || typer.textContent.trim();
    const speed = 28; // ms per char
    const delayBefore = 200; // ms before start

    // Observer to start only when hero enters viewport
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          title.classList.add('aos-animate'); // trigger one-time glow CSS
          this.runTypewriter(typer, text, speed, delayBefore);
          io.disconnect();
        }
      });
    }, { threshold: 0.6 });

    io.observe(title);
  }

  runTypewriter(el, text, speed, delay = 0) {
    el.textContent = '';
    const chars = Array.from(text);
    let i = 0;
    setTimeout(() => {
      const step = () => {
        if (i < chars.length) {
          el.textContent += chars[i++];
          setTimeout(step, speed);
        }
      };
      step();
    }, delay);
  }

  /* ========================================================================
     CHECKOUT (PayPal)
     ======================================================================== */
  initCheckoutButtons() {
    // Mapear URLs reais do PayPal aqui (substitua pelos seus links PayPal)
    const PAYPAL_CHECKOUT = {
      essencial: 'https://www.paypal.com/ncp/payment/PBL5G3ZM7CDB2',
      performance: 'https://www.paypal.com/ncp/payment/8HDTGDWHPXRZJ',
      pro: 'https://www.paypal.com/ncp/payment/9ZMB26ZKJWTLL',
    };

    const buttons = document.querySelectorAll('[data-plan]');
    if (!buttons.length) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const plan = btn.getAttribute('data-plan');
        const url = PAYPAL_CHECKOUT[plan];
        if (!url) return;
        e.preventDefault();
        window.location.href = url;
      });
    });
  }

  /* ========================================================================
     CMP + Google Consent Mode v2
     ======================================================================== */
  initCMP() {
    // Consent Mode defaults (deny) before any tag
    const w = window; const gtag = w.gtag || function(){(w.dataLayer=w.dataLayer||[]).push(arguments)}; w.gtag = gtag;
    gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });

    const KEY = 'sb_consent_v1';
    const banner = document.getElementById('cmp-banner');
    const manageLink = document.getElementById('manage-consent-link');

    const applyState = (state) => {
      const granted = state === 'granted';
      gtag('consent', 'update', {
        ad_storage: granted ? 'granted' : 'denied',
        analytics_storage: granted ? 'granted' : 'denied',
        ad_user_data: granted ? 'granted' : 'denied',
        ad_personalization: granted ? 'granted' : 'denied'
      });
      try { localStorage.setItem(KEY, JSON.stringify({ state, ts: Date.now() })); } catch (_) {}
    };

    const saved = (() => { try { return JSON.parse(localStorage.getItem(KEY)); } catch(_) { return null; } })();
    if (!saved) {
      banner?.removeAttribute('hidden');
    } else {
      applyState(saved.state);
    }

    banner?.querySelector('[data-cmp="accept-all"]').addEventListener('click', () => {
      applyState('granted');
      banner.setAttribute('hidden', '');
    });
    banner?.querySelector('[data-cmp="reject-all"]').addEventListener('click', () => {
      applyState('denied');
      banner.setAttribute('hidden', '');
    });

    manageLink?.addEventListener('click', (e) => {
      e.preventDefault();
      banner?.removeAttribute('hidden');
    });

    // Expose minimal API
    window.__cmp = {
      open(){ banner?.removeAttribute('hidden'); },
      accept(){ applyState('granted'); banner?.setAttribute('hidden',''); },
      reject(){ applyState('denied'); banner?.setAttribute('hidden',''); }
    };
  }

  /* ========================================================================
     FOOTER H SCROLL (thin scrollbar + arrows)
     ======================================================================== */
  initFooterScroll() {
    const footer = document.querySelector('.footer');
    const content = document.querySelector('.footer__content');
    const leftBtn = document.querySelector('.footer__scroll-btn--left');
    const rightBtn = document.querySelector('.footer__scroll-btn--right');
    if (!footer || !content) return;

    const updateOverflow = () => {
      const hasOverflow = content.scrollWidth > content.clientWidth + 2; // tolerância
      footer.classList.toggle('footer--overflow', hasOverflow);
      if (!hasOverflow) return;
      // Mostrar/ocultar conforme posição
      const atStart = content.scrollLeft <= 2;
      const atEnd = content.scrollLeft + content.clientWidth >= content.scrollWidth - 2;
      if (leftBtn) leftBtn.style.opacity = atStart ? '0.35' : '1';
      if (rightBtn) rightBtn.style.opacity = atEnd ? '0.35' : '1';
    };

    const smoothScrollBy = (delta) => {
      content.scrollBy({ left: delta, behavior: 'smooth' });
      // chamar update depois de um pequeno atraso
      setTimeout(updateOverflow, 220);
    };

    leftBtn?.addEventListener('click', () => smoothScrollBy(-200));
    rightBtn?.addEventListener('click', () => smoothScrollBy(200));

    content.addEventListener('scroll', () => updateOverflow(), { passive: true });
    window.addEventListener('resize', () => updateOverflow());
    // init
    updateOverflow();
  }

  /* ========================================================================
     STICKY CTA BAR
     ======================================================================== */
  initStickyCTA() {
    const bar = document.getElementById('sticky-cta');
    if (!bar) return;

    const closeBtn = bar.querySelector('.sticky-cta__close');
    const cmpBanner = document.getElementById('cmp-banner');
    let dismissed = false;
    let shown = false;

    const isSmall = window.matchMedia('(max-width: 480px)').matches;
    const showAt = isSmall ? 0.2 : 0.35; // show earlier on small screens

    const canShow = () => !dismissed && !shown && (!cmpBanner || cmpBanner.hasAttribute('hidden'));

    const tryShow = () => {
      if (canShow()) {
        bar.classList.add('sticky-cta--visible');
        shown = true;
      }
    };

    const onScroll = () => {
      if (dismissed || shown) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) : 0;
      if (progress >= showAt) tryShow();
    };

  window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchmove', onScroll, { passive: true });
    window.addEventListener('touchstart', onScroll, { passive: true });
    // run once
    onScroll();

    // Ensure immediate visibility on mobile at load (if CMP não está visível)
    if (isSmall) tryShow();

    // Se CMP estiver visível, aguarda ser fechado para exibir a barra
    if (cmpBanner && !cmpBanner.hasAttribute('hidden')) {
      const mo = new MutationObserver(() => {
        if (cmpBanner.hasAttribute('hidden')) {
          tryShow();
          mo.disconnect();
        }
      });
      mo.observe(cmpBanner, { attributes: true, attributeFilter: ['hidden'] });
    }

    closeBtn?.addEventListener('click', () => {
      dismissed = true;
      bar.classList.remove('sticky-cta--visible');
    });

    // Short-page fallback: if pouco conteúdo para rolar, exibe após breve atraso
    const shortPage = (document.documentElement.scrollHeight - window.innerHeight) < 200;
    if (shortPage) {
      setTimeout(tryShow, 1200);
    }

    // Mobile fallback: se não apareceu até 4s, forçar uma vez
    if (isSmall) {
      // early nudge for mobile: show shortly after load
      setTimeout(() => { if (!shown && !dismissed) tryShow(); }, 600);
      setTimeout(() => { if (!shown && !dismissed) tryShow(); }, 4000);
    }
  }
}

// Initialize the application
const app = new StudioBrazaApp();

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = StudioBrazaApp;
}