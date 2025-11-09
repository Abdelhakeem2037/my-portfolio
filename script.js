document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    var mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            var menu = document.getElementById('mobile-menu');
            if (menu) {
                menu.classList.toggle('hidden');
            }
        });
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (!href) return;
            var target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            var mobile = document.getElementById('mobile-menu');
            if (mobile) {
                mobile.classList.add('hidden');
            }
        });
    });

    // CTA button actions
    var ctaAbout = document.getElementById('cta-about');
    if (ctaAbout) {
        ctaAbout.addEventListener('click', function () {
            var about = document.querySelector('#about');
            if (about) about.scrollIntoView({ behavior: 'smooth' });
        });
    }

    var ctaContact = document.getElementById('cta-contact');
    if (ctaContact) {
        ctaContact.addEventListener('click', function () {
            var contact = document.querySelector('#contact');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Animate skill bars on scroll
    var skillsSection = document.getElementById('skills');
    var skillBars = document.querySelectorAll('.skill-fill');

    function animateSkills() {
        skillBars.forEach(function (bar) {
            bar.style.width = bar.style.width; // Trigger transition
        });
    }

    var skillsAnimated = false;
    window.addEventListener('scroll', function () {
        if (
            !skillsAnimated &&
            skillsSection &&
            window.scrollY > skillsSection.offsetTop - window.innerHeight + 100
        ) {
            animateSkills();
            skillsAnimated = true;
        }
    });

    // Intersection Observer for animations
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-bg').forEach(function (section) {
        observer.observe(section);
    });

    // Add icons from Lucide
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}); 