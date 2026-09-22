/**
 * ROADLINK AUTO - Commercial Auto Transport & Vehicle Logistics Template
 * Main Application Logic & Interactivity
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Theme Management (Light / Dark Mode with Persistence)
     ========================================================================== */
  const THEME_STORAGE_KEY = 'roadlink_theme';
  const RTL_STORAGE_KEY = 'roadlink_rtl';
  const rootElement = document.documentElement;

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    rootElement.setAttribute('data-theme', theme);
    rootElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    // Update all toggle button icons and ARIA states (excluding RTL buttons)
    const toggleButtons = document.querySelectorAll('.theme-toggle-btn:not(.rtl-toggle-btn)');
    toggleButtons.forEach((btn) => {
      const icon = btn.querySelector('i');
      if (theme === 'dark') {
        btn.setAttribute('aria-label', 'Switch to light mode');
        btn.setAttribute('title', 'Switch to light mode');
        if (icon) {
          icon.className = 'bi bi-sun-fill text-warning';
        }
      } else {
        btn.setAttribute('aria-label', 'Switch to dark mode');
        btn.setAttribute('title', 'Switch to dark mode');
        if (icon) {
          icon.className = 'bi bi-moon-stars-fill text-primary';
        }
      }
    });
  }

  // Initialize Theme immediately
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Listen for OS system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_STORAGE_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* ==========================================================================
     1B. RTL (Right-To-Left) Layout Management
     ========================================================================== */
  function getPreferredRTL() {
    return localStorage.getItem(RTL_STORAGE_KEY) === 'true';
  }

  function applyRTL(isRTL) {
    if (isRTL) {
      rootElement.setAttribute('dir', 'rtl');
      rootElement.setAttribute('lang', 'ar');
      localStorage.setItem(RTL_STORAGE_KEY, 'true');
    } else {
      rootElement.removeAttribute('dir');
      rootElement.setAttribute('lang', 'en');
      localStorage.setItem(RTL_STORAGE_KEY, 'false');
    }

    const rtlButtons = document.querySelectorAll('.rtl-toggle-btn');
    rtlButtons.forEach((btn) => {
      const textSpan = btn.querySelector('.rtl-btn-text');
      if (textSpan) {
        textSpan.textContent = isRTL ? 'LTR' : 'RTL';
      }
      btn.setAttribute('aria-label', isRTL ? 'Switch to Left-to-Right layout' : 'Switch to Right-to-Left layout');
      btn.setAttribute('title', isRTL ? 'Switch to Left-to-Right layout' : 'Switch to Right-to-Left layout');
    });
  }

  // Initialize RTL immediately
  const initialRTL = getPreferredRTL();
  applyRTL(initialRTL);

  /* ==========================================================================
     2. DOM Content Loaded Initializations
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initThemeToggles();
    initRTLToggles();
    initStickyHeader();
    initActiveNavLinks();
    initBackToTop();
    initTrackingDemos();
    initQuoteCalculators();
    initAuthForms();
    initPasswordToggles();
    initGSAPAnimations();
    initComingSoonTimer();
    initKeyboardAccessibility();
    initDashboardControllers();
  });

  /* --------------------------------------------------------------------------
     Theme & RTL Toggle Listeners
     -------------------------------------------------------------------------- */
  function initThemeToggles() {
    const toggleButtons = document.querySelectorAll('.theme-toggle-btn:not(.rtl-toggle-btn)');
    toggleButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentTheme = rootElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
      });
    });
  }

  function initRTLToggles() {
    const rtlButtons = document.querySelectorAll('.rtl-toggle-btn');
    rtlButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentRTL = rootElement.getAttribute('dir') === 'rtl';
        applyRTL(!currentRTL);
      });
    });
  }

  /* --------------------------------------------------------------------------
     Sticky Header on Scroll
     -------------------------------------------------------------------------- */
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  /* --------------------------------------------------------------------------
     Active Page Navigation Highlighting
     -------------------------------------------------------------------------- */
  function initActiveNavLinks() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.site-header .nav-link, .site-header .dropdown-item');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;

      const linkPath = href.split('/').pop();
      if (linkPath === currentPath) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');

        // If child of a dropdown, highlight parent nav-item toggle
        const dropdownParent = link.closest('.dropdown');
        if (dropdownParent) {
          const toggle = dropdownParent.querySelector('.dropdown-toggle');
          if (toggle) toggle.classList.add('active');
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
     Back to Top Floating Button
     -------------------------------------------------------------------------- */
  function initBackToTop() {
    const backBtn = document.querySelector('.back-to-top');
    if (!backBtn) return;

    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 350) {
          backBtn.classList.add('is-visible');
        } else {
          backBtn.classList.remove('is-visible');
        }
      },
      { passive: true }
    );

    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --------------------------------------------------------------------------
     Shipment Tracking Demo (Fictional Demo: RL-2026-04821)
     -------------------------------------------------------------------------- */
  function initTrackingDemos() {
    const trackingForms = document.querySelectorAll('.shipment-tracking-form');
    if (!trackingForms.length) return;

    const demoDatabase = {
      'RL-2026-04821': {
        id: 'RL-2026-04821',
        status: 'In Transit',
        origin: 'Los Angeles Terminal #12, CA',
        destination: 'Dallas Logistics Super-Hub, TX',
        vehicle: '2024 Ford F-150 SuperCrew',
        transportType: 'Open 9-Car Hauler',
        carrierUnit: 'Carrier Unit #482 (Driver: J. Martinez)',
        eta: 'Oct 04, 2026 (Est. 2:00 PM - 5:00 PM)',
        lastUpdate: 'Departed Flagstaff, AZ inspection station • Highway speed normal',
        activeStep: 3, // 0: Confirmed, 1: Assigned, 2: Picked Up, 3: In Transit, 4: Delivery Sched, 5: Delivered
        progressWidth: '65%'
      }
    };

    trackingForms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input[name="tracking_number"]') || form.querySelector('.tracking-input');
        const resultContainer = document.querySelector('#trackingResultArea') || document.querySelector('.tracking-result-panel');

        if (!input || !input.value.trim()) {
          alert('Please enter a valid tracking number (e.g. RL-2026-04821).');
          return;
        }

        const queryId = input.value.trim().toUpperCase();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Locating Shipment...';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
          }

          // Render Tracking Display
          renderTrackingResult(queryId, demoDatabase['RL-2026-04821'], resultContainer);
        }, 400);
      });
    });
  }

  function renderTrackingResult(id, demoData, container) {
    if (!container) return;

    // Use query ID or fallback to standard demo record
    const data = {
      ...demoData,
      id: id || demoData.id
    };

    container.classList.remove('d-none');
    container.style.display = 'block';

    // Populate data fields
    const idEl = container.querySelector('.tracking-val-id');
    const statusEl = container.querySelector('.tracking-val-status');
    const originEl = container.querySelector('.tracking-val-origin');
    const destEl = container.querySelector('.tracking-val-dest');
    const vehicleEl = container.querySelector('.tracking-val-vehicle');
    const carrierEl = container.querySelector('.tracking-val-carrier');
    const etaEl = container.querySelector('.tracking-val-eta');
    const updateEl = container.querySelector('.tracking-val-update');
    const progressBar = container.querySelector('.timeline-progress-bar');

    if (idEl) idEl.textContent = data.id;
    if (statusEl) statusEl.textContent = data.status;
    if (originEl) originEl.textContent = data.origin;
    if (destEl) destEl.textContent = data.destination;
    if (vehicleEl) vehicleEl.textContent = data.vehicle;
    if (carrierEl) carrierEl.textContent = data.carrierUnit;
    if (etaEl) etaEl.textContent = data.eta;
    if (updateEl) updateEl.textContent = data.lastUpdate;
    if (progressBar) progressBar.style.width = data.progressWidth;

    // Highlight timeline nodes
    const steps = container.querySelectorAll('.timeline-step');
    steps.forEach((step, idx) => {
      step.classList.remove('completed', 'active');
      if (idx < data.activeStep) {
        step.classList.add('completed');
      } else if (idx === data.activeStep) {
        step.classList.add('active');
      }
    });

    // Smoothly scroll to tracking result
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* --------------------------------------------------------------------------
     Interactive Quote Calculators (Multi-step / Estimation)
     -------------------------------------------------------------------------- */
  function initQuoteCalculators() {
    const quoteForms = document.querySelectorAll('.roadlink-quote-form');
    if (!quoteForms.length) return;

    quoteForms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Check validity
        if (!form.checkValidity()) {
          e.stopPropagation();
          form.classList.add('was-validated');
          return;
        }

        form.classList.add('was-validated');

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalHtml = submitBtn ? submitBtn.innerHTML : '';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Calculating Route...';
        }

        // Gather basic data
        const pickupInput = form.querySelector('[name="pickup_location"]') || form.querySelector('#pickupLoc');
        const destInput = form.querySelector('[name="delivery_location"]') || form.querySelector('#destLoc');
        const transportRadio = form.querySelector('input[name="transport_type"]:checked');
        const transportType = transportRadio ? transportRadio.value : 'Open Carrier';

        const pickup = pickupInput ? pickupInput.value : 'Origin Terminal';
        const dest = destInput ? destInput.value : 'Destination Hub';

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHtml;
          }

          // Show Quote Result Modal or In-Page Card
          const modalEl = document.getElementById('quoteResultModal');
          if (modalEl && typeof bootstrap !== 'undefined' && bootstrap.Modal) {
            const modalTitle = modalEl.querySelector('.modal-quote-route');
            const modalEst = modalEl.querySelector('.modal-quote-price');
            const modalType = modalEl.querySelector('.modal-quote-type');

            if (modalTitle) modalTitle.textContent = `${pickup} → ${dest}`;
            if (modalType) modalType.textContent = transportType;
            if (modalEst) {
              modalEst.textContent = transportType.toLowerCase().includes('enclosed') ? '$1,480 - $1,720' : '$940 - $1,160';
            }

            const quoteModal = new bootstrap.Modal(modalEl);
            quoteModal.show();
          } else {
            // Fallback inline alert
            const alertArea = form.querySelector('.quote-alert-target') || form;
            const alertBox = document.createElement('div');
            alertBox.className = 'alert alert-success mt-3 alert-dismissible fade show';
            alertBox.innerHTML = `
              <strong><i class="bi bi-check-circle-fill me-2"></i>Instant Estimate Generated!</strong><br>
              Route: <strong>${pickup}</strong> to <strong>${dest}</strong> (${transportType})<br>
              Estimated Range: <strong>${transportType.toLowerCase().includes('enclosed') ? '$1,480 - $1,720' : '$940 - $1,160'}</strong><br>
              <small class="text-muted">A logistics specialist will verify exact carrier availability within 15 minutes.</small>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;
            form.prepend(alertBox);
          }
        }, 500);
      });
    });
  }

  /* --------------------------------------------------------------------------
     Authentication Forms (Login, Signup, Forgot Password - No Dashboard)
     -------------------------------------------------------------------------- */
  function initAuthForms() {
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!loginForm.checkValidity()) {
          loginForm.classList.add('was-validated');
          return;
        }

        const alertContainer = document.getElementById('authAlertArea');
        if (alertContainer) {
          alertContainer.innerHTML = `
            <div class="alert alert-info alert-dismissible fade show" role="alert">
              <strong><i class="bi bi-info-circle-fill me-2"></i>Frontend UI Demonstration Only</strong><br>
              Credentials verified in demonstration mode. In accordance with template specifications, there is no client dashboard.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;
          alertContainer.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Signup Form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pwd = signupForm.querySelector('#signupPassword');
        const confirmPwd = signupForm.querySelector('#confirmPassword');

        if (pwd && confirmPwd && pwd.value !== confirmPwd.value) {
          confirmPwd.setCustomValidity("Passwords don't match");
        } else if (confirmPwd) {
          confirmPwd.setCustomValidity('');
        }

        if (!signupForm.checkValidity()) {
          signupForm.classList.add('was-validated');
          return;
        }

        const alertContainer = document.getElementById('authAlertArea');
        if (alertContainer) {
          alertContainer.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong><i class="bi bi-check-circle-fill me-2"></i>Demo Account Created Successfully!</strong><br>
              Welcome to RoadLink Auto. You can now <a href="login.html" class="alert-link">proceed to the Login demonstration</a>.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;
          alertContainer.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Forgot Password Form
    const forgotForm = document.getElementById('forgotPasswordForm');
    if (forgotForm) {
      forgotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!forgotForm.checkValidity()) {
          forgotForm.classList.add('was-validated');
          return;
        }

        const emailInput = forgotForm.querySelector('input[type="email"]');
        const alertContainer = document.getElementById('authAlertArea');
        if (alertContainer && emailInput) {
          alertContainer.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong><i class="bi bi-envelope-check-fill me-2"></i>Password Reset Link Dispatched</strong><br>
              A demo recovery instructions email has been simulated for <strong>${emailInput.value}</strong>.
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          `;
          forgotForm.reset();
          forgotForm.classList.remove('was-validated');
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     Password Visibility Toggles
     -------------------------------------------------------------------------- */
  function initPasswordToggles() {
    const toggles = document.querySelectorAll('.password-toggle-btn');
    toggles.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId) || btn.closest('.input-group').querySelector('input');
        const icon = btn.querySelector('i');

        if (!input) return;

        if (input.type === 'password') {
          input.type = 'text';
          if (icon) icon.className = 'bi bi-eye-slash-fill';
          btn.setAttribute('aria-label', 'Hide password');
        } else {
          input.type = 'password';
          if (icon) icon.className = 'bi bi-eye-fill';
          btn.setAttribute('aria-label', 'Show password');
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     GSAP Subtle Reveal Animations (Respects prefers-reduced-motion)
     -------------------------------------------------------------------------- */
  function initGSAPAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof gsap === 'undefined') {
      // Reveal all without animation
      document.querySelectorAll('.gsap-reveal').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    // GSAP Scroll/Entrance reveal
    const reveals = document.querySelectorAll('.gsap-reveal');
    if (!reveals.length) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: 'power2.out',
                overwrite: 'auto'
              });
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      reveals.forEach((el) => observer.observe(el));
    } else {
      gsap.to('.gsap-reveal', { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 });
    }
  }

  /* --------------------------------------------------------------------------
     Coming Soon Live Countdown Timer
     -------------------------------------------------------------------------- */
  function initComingSoonTimer() {
    const timerContainer = document.getElementById('comingSoonTimer');
    if (!timerContainer) return;

    // Set target launch date (45 days in future)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 45);

    function updateCountdown() {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;

      if (diff <= 0) return;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const dEl = timerContainer.querySelector('.timer-days');
      const hEl = timerContainer.querySelector('.timer-hours');
      const mEl = timerContainer.querySelector('.timer-minutes');
      const sEl = timerContainer.querySelector('.timer-seconds');

      if (dEl) dEl.textContent = String(days).padStart(2, '0');
      if (hEl) hEl.textContent = String(hours).padStart(2, '0');
      if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
      if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* --------------------------------------------------------------------------
     Customer Dashboard Controllers
     -------------------------------------------------------------------------- */
  function initDashboardControllers() {
    // New Booking Request Form Simulation
    const bookingForm = document.querySelector('#bookingRequestForm');
    if (bookingForm) {
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const alertArea = document.querySelector('#dashboardAlertArea');
        const submitBtn = bookingForm.querySelector('button[type="submit"]');

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span> Submitting Booking...';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="bi bi-check-circle-fill me-1"></i> Submit Transport Booking';
          }

          if (alertArea) {
            alertArea.innerHTML = `
              <div class="alert alert-success alert-dismissible fade show border-0 shadow-sm mb-4" role="alert">
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill fs-4 me-3 text-success"></i>
                  <div>
                    <h6 class="fw-bold mb-1">Transport Booking Submitted Successfully!</h6>
                    <div class="small">Your transport request <strong>#RL-2026-90412</strong> has been logged into central dispatch. Carrier assignment in progress.</div>
                  </div>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            `;
            alertArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }

          bookingForm.reset();
        }, 1000);
      });
    }

    // Payment Simulation
    const payButtons = document.querySelectorAll('.pay-now-btn');
    payButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const invId = btn.getAttribute('data-invoice-id') || 'INV-8842';
        const invAmount = btn.getAttribute('data-invoice-amount') || '$1,250.00';
        const modalEl = document.querySelector('#paymentModal');
        if (modalEl) {
          const invIdEl = modalEl.querySelector('.modal-invoice-id');
          const invAmtEl = modalEl.querySelector('.modal-invoice-amount');
          if (invIdEl) invIdEl.textContent = invId;
          if (invAmtEl) invAmtEl.textContent = invAmount;
          if (typeof bootstrap !== 'undefined') {
            const modal = new bootstrap.Modal(modalEl);
            modal.show();
          }
        }
      });
    });

    const processPayForm = document.querySelector('#processPaymentForm');
    if (processPayForm) {
      processPayForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const payBtn = processPayForm.querySelector('button[type="submit"]');
        if (payBtn) {
          payBtn.disabled = true;
          payBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span> Processing Payment...';
        }

        setTimeout(() => {
          if (payBtn) {
            payBtn.disabled = false;
            payBtn.innerHTML = '<i class="bi bi-shield-check me-1"></i> Pay Now';
          }

          const modalEl = document.querySelector('#paymentModal');
          if (modalEl && typeof bootstrap !== 'undefined') {
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
          }

          const alertArea = document.querySelector('#dashboardAlertArea');
          if (alertArea) {
            alertArea.innerHTML = `
              <div class="alert alert-success alert-dismissible fade show border-0 shadow-sm mb-4" role="alert">
                <div class="d-flex align-items-center">
                  <i class="bi bi-shield-check fs-4 me-3 text-success"></i>
                  <div>
                    <h6 class="fw-bold mb-1">Payment Processed Successfully!</h6>
                    <div class="small">Receipt <strong>#RCP-2026-0491</strong> generated. A copy has been dispatched to your email.</div>
                  </div>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            `;
          }
        }, 1200);
      });
    }
  }

  /* --------------------------------------------------------------------------
     Keyboard Accessibility (ESC closes modals & collapse navs)
     -------------------------------------------------------------------------- */
  function initKeyboardAccessibility() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        // Close open mobile nav
        const openNav = document.querySelector('.navbar-collapse.show');
        if (openNav && typeof bootstrap !== 'undefined') {
          const bsCollapse = bootstrap.Collapse.getInstance(openNav);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  }
})();
