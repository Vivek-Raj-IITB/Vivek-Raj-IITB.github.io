// ==================== 
// Navigation & Scroll Effects
// ==================== 

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ==================== 
// Active Navigation Link on Scroll
// ==================== 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
    
    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== 
// Scroll to Top Button
// ==================== 
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== 
// Smooth Scroll for All Links
// ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#" or if it's the scroll indicator
        if (href === '#' || href.length <= 1) {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== 
// Contact Form Removed - Replaced with Hobbies Section
// ==================== 
// Contact form has been replaced with a hobbies section showcasing
// personal interests: Swimming, Gym, and Walking along beaches

// ==================== 
// Intersection Observer for Animations
// ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.project-card, .experience-card, .skill-category, .timeline-item, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==================== 
// Dynamic Year in Footer
// ==================== 
const currentYear = new Date().getFullYear();
const footer = document.querySelector('.footer p');
if (footer) {
    footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
}

// ==================== 
// Typing Effect for Hero Section (Optional Enhancement)
// ==================== 
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect
// window.addEventListener('load', () => {
//     const subtitle = document.querySelector('.hero-subtitle');
//     const originalText = subtitle.textContent;
//     typeWriter(subtitle, originalText, 50);
// });

// ==================== 
// Gallery Modal (Optional Enhancement)
// ==================== 
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const modal = document.createElement('div');
        modal.classList.add('gallery-modal');
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <img src="${img.src}" alt="${img.alt}">
                <button class="modal-close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Add styles for modal
        const style = document.createElement('style');
        style.innerHTML = `
            .gallery-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
            }
            .modal-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
                z-index: 10001;
            }
            .modal-content img {
                max-width: 100%;
                max-height: 90vh;
                border-radius: 10px;
            }
            .modal-close {
                position: absolute;
                top: -40px;
                right: 0;
                background: none;
                border: none;
                color: white;
                font-size: 3rem;
                cursor: pointer;
                transition: transform 0.3s ease;
            }
            .modal-close:hover {
                transform: scale(1.1);
            }
        `;
        document.head.appendChild(style);
        
        // Close modal
        const closeModal = () => {
            modal.remove();
            style.remove();
            document.body.style.overflow = 'auto';
        };
        
        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    });
});

// ==================== 
// Preloader (Optional)
// ==================== 
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});

// ==================== 
// LeetCode Stats Fetcher
// ==================== 
async function fetchLeetCodeStats() {
    const username = 'deevek_world';
    const statsContainer = document.getElementById('leetcode-stats-mini');
    
    if (!statsContainer) return; // Element not found
    
    // Try to fetch both profile and contest data
    try {
        // Fetch profile data (total solved, ranking)
        const profileResponse = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        
        if (!profileResponse.ok) {
            throw new Error('Profile API failed');
        }
        
        const profileData = await profileResponse.json();
        
        // Fetch contest rating
        const contestResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`);
        let contestRating = 'N/A';
        let topPercentage = 'N/A';
        
        if (contestResponse.ok) {
            const contestData = await contestResponse.json();
            contestRating = contestData.contestRating ? Math.round(contestData.contestRating) : 'N/A';
            topPercentage = contestData.contestTopPercentage ? contestData.contestTopPercentage.toFixed(2) + '%' : 'N/A';
        }
        
        // Combine data
        const combinedData = {
            ...profileData,
            contestRating: contestRating,
            topPercentage: topPercentage
        };
        
        displayLeetCodeStatsMini(combinedData);
        
    } catch (error) {
        // Fallback to other APIs if primary fails
        const fallbackApis = [
            `https://alfa-leetcode-api.onrender.com/${username}`,
            `https://leetcode-api-faisalshohag.vercel.app/${username}`
        ];
        
        for (let apiUrl of fallbackApis) {
            try {
                const response = await fetch(apiUrl);
                
                if (!response.ok) continue;
                
                const data = await response.json();
                
                if (data && (data.totalSolved !== undefined || data.solvedProblem !== undefined)) {
                    // Try to get contest rating and top percentage
                    try {
                        const contestResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`);
                        if (contestResponse.ok) {
                            const contestData = await contestResponse.json();
                            data.contestRating = contestData.contestRating ? Math.round(contestData.contestRating) : 'N/A';
                            data.topPercentage = contestData.contestTopPercentage ? contestData.contestTopPercentage.toFixed(2) + '%' : 'N/A';
                        }
                    } catch (e) {
                        data.contestRating = 'N/A';
                        data.topPercentage = 'N/A';
                    }
                    
                    displayLeetCodeStatsMini(data);
                    return;
                }
            } catch (err) {
                continue;
            }
        }
        
        showLeetCodeError();
    }
}

function displayLeetCodeStatsMini(data) {
    const statsContainer = document.getElementById('leetcode-stats-mini');
    
    if (!statsContainer) return;
    
    // Handle different API response formats
    const totalSolved = data.totalSolved || data.solvedProblem || 0;
    const ranking = data.ranking || data.rank || 'N/A';
    
    // Get contest rating (not acceptance rate)
    let rating = 'N/A';
    if (data.contestRating) {
        rating = Math.round(data.contestRating);
    } else if (data.rating) {
        rating = Math.round(data.rating);
    }
    
    // Get top percentage
    const topPercentage = data.topPercentage || 'N/A';
    
    const html = `
        <div class="leetcode-grid-2x2">
            <div class="leetcode-stat-box">
                <i class="fas fa-check-circle stat-icon"></i>
                <div class="stat-value">${totalSolved}</div>
                <div class="stat-label">Solved</div>
            </div>
            <div class="leetcode-stat-box">
                <i class="fas fa-trophy stat-icon"></i>
                <div class="stat-value">${typeof ranking === 'number' ? '#' + ranking.toLocaleString() : ranking}</div>
                <div class="stat-label">Rank</div>
            </div>
            <div class="leetcode-stat-box">
                <i class="fas fa-star stat-icon"></i>
                <div class="stat-value">${rating}</div>
                <div class="stat-label">Rating</div>
            </div>
            <div class="leetcode-stat-box">
                <i class="fas fa-chart-line stat-icon"></i>
                <div class="stat-value">${topPercentage}</div>
                <div class="stat-label">Top</div>
            </div>
        </div>
        <a href="https://leetcode.com/deevek_world" target="_blank" class="leetcode-link">
            <i class="fas fa-external-link-alt"></i> Profile
        </a>
    `;
    
    statsContainer.innerHTML = html;
}

function showLeetCodeError() {
    const statsContainer = document.getElementById('leetcode-stats-mini');
    if (!statsContainer) return;
    
    statsContainer.innerHTML = `
        <div class="leetcode-error">
            <small>Stats unavailable</small>
            <a href="https://leetcode.com/deevek_world" target="_blank" class="leetcode-link">
                <i class="fas fa-external-link-alt"></i> View Profile
            </a>
        </div>
    `;
}

// Fetch LeetCode stats when page loads
window.addEventListener('load', () => {
    fetchLeetCodeStats();
});

// ==================== 
// Console Message
// ==================== 
console.log('%c Welcome to My Portfolio! ', 'background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Looking for a developer? Let\'s connect! ', 'color: #6366f1; font-size: 14px; padding: 5px;');

