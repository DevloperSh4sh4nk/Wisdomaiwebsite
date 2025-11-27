document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive FAQ Section
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // Close all other open FAQs
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Open the clicked one if it wasn't already open
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Mega Menu Logic
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const megaMenuOverlay = document.querySelector('.mega-menu-overlay');
    const megaMenu = document.querySelector('.mega-menu');
    const closeMegaMenu = document.querySelector('.close-mega-menu');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            megaMenuOverlay.style.display = 'block';
            megaMenu.classList.add('active');
        });
    }

    if (closeMegaMenu) {
        closeMegaMenu.addEventListener('click', () => {
            megaMenuOverlay.style.display = 'none';
            megaMenu.classList.remove('active');
        });
    }

    if (megaMenuOverlay) {
        megaMenuOverlay.addEventListener('click', () => {
            megaMenuOverlay.style.display = 'none';
            megaMenu.classList.remove('active');
        });
    }

    // Modal Logic
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');
    const enquireBtns = document.querySelectorAll('.enquire-btn');
    const closeModalBtn = document.querySelector('.close-modal');

    const openModal = () => {
        modalOverlay.style.display = 'block';
        modal.style.display = 'block';
    };

    const closeModal = () => {
        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
    };

    enquireBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeModal);
    }

    // Enquiry Form Submission
    const enquiryForm = document.querySelector('.enquiry-form form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your enquiry! We will get back to you soon.');
            enquiryForm.reset();
            closeModal();
        });
    }

});

    const track = document.querySelector('.review-track');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let index = 0;
    const totalCards = 6;
    const visibleCards = 3;
    const cardWidth = 390; // card + gap

    function moveSlider() {
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    next.addEventListener('click', () => {
        index++;
        if (index > totalCards - visibleCards) index = 0;
        moveSlider();
    });

    prev.addEventListener('click', () => {
        index--;
        if (index < 0) index = totalCards - visibleCards;
        moveSlider();
    });

    // Auto Slide
    setInterval(() => {
        index++;
        if (index > totalCards - visibleCards) index = 0;
        moveSlider();
    }, 4000);
