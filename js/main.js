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

// Helper function to fetch with timeout
async function fetchWithTimeout(url, timeout = 8000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
}

async function fetchLeetCodeStats() {
    const username = 'deevek_world';
    const statsContainer = document.getElementById('leetcode-stats-mini');
    
    if (!statsContainer) return; // Element not found
    
    // Try multiple APIs in parallel (race to fastest response)
    const apis = [
        {
            name: 'alfa-leetcode',
            url: `https://alfa-leetcode-api.onrender.com/${username}`,
            contestUrl: `https://alfa-leetcode-api.onrender.com/${username}/contest`
        },
        {
            name: 'leetcode-stats',
            url: `https://leetcode-stats-api.herokuapp.com/${username}`,
            contestUrl: `https://alfa-leetcode-api.onrender.com/${username}/contest`
        },
        {
            name: 'faisalshohag',
            url: `https://leetcode-api-faisalshohag.vercel.app/${username}`,
            contestUrl: `https://alfa-leetcode-api.onrender.com/${username}/contest`
        }
    ];
    
    // Create promises for all APIs with individual error handling
    const apiPromises = apis.map(async (api) => {
        const profileResponse = await fetchWithTimeout(api.url, 10000);
        
        if (!profileResponse.ok) {
            throw new Error('API response not ok');
        }
        
        const profileData = await profileResponse.json();
        
        if (!profileData || (profileData.totalSolved === undefined && profileData.solvedProblem === undefined)) {
            throw new Error('Invalid data');
        }
        
        // Try to fetch contest data
        let contestRating = 'N/A';
        let topPercentage = 'N/A';
        
        try {
            const contestResponse = await fetchWithTimeout(api.contestUrl, 5000);
            if (contestResponse.ok) {
                const contestData = await contestResponse.json();
                contestRating = contestData.contestRating ? Math.round(contestData.contestRating) : 'N/A';
                topPercentage = contestData.contestTopPercentage ? contestData.contestTopPercentage.toFixed(2) + '%' : 'N/A';
            }
        } catch (contestError) {
            // Contest data is optional
        }
        
        return {
            ...profileData,
            contestRating: contestRating,
            topPercentage: topPercentage
        };
    });
    
    // Use Promise.any if available, otherwise fallback to sequential
    try {
        let data;
        
        if (typeof Promise.any === 'function') {
            // Modern browsers: try all APIs in parallel, use first success
            data = await Promise.any(apiPromises);
        } else {
            // Fallback for older browsers: try sequentially
            for (let promise of apiPromises) {
                try {
                    data = await promise;
                    break;
                } catch (e) {
                    continue;
                }
            }
        }
        
        if (data) {
            displayLeetCodeStatsMini(data);
        } else {
            showLeetCodeError();
        }
    } catch (error) {
        // All APIs failed
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

// ==================== 
// Contributions Calculator
// ==================== 
function calculateContributions() {
    // Calculate from January 1, 2022 to today
    const startDate = new Date('2022-01-01');
    const today = new Date();
    
    // Calculate days
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Calculate lines written (500 lines per day)
    const linesWritten = diffDays * 500;
    
    // Calculate years (for features delivered)
    const yearsDiff = today.getFullYear() - startDate.getFullYear();
    const monthsDiff = today.getMonth() - startDate.getMonth();
    const totalYears = yearsDiff + (monthsDiff / 12);
    
    // Calculate features delivered (2 per year)
    const productsDelivered = Math.floor(totalYears * 2);
    
    // Format and display
    const linesElement = document.getElementById('lines-written');
    const productsElement = document.getElementById('products-delivered');
    
    if (linesElement) {
        // Format lines (e.g., 750,000 or 750K)
        if (linesWritten >= 1000000) {
            linesElement.textContent = (linesWritten / 1000000).toFixed(1) + 'M+';
        } else if (linesWritten >= 1000) {
            linesElement.textContent = Math.floor(linesWritten / 1000) + 'K+';
        } else {
            linesElement.textContent = linesWritten.toLocaleString() + '+';
        }
    }
    
    if (productsElement) {
        productsElement.textContent = productsDelivered + '+';
    }
}

// Fetch LeetCode stats and calculate contributions when page loads
window.addEventListener('load', () => {
    fetchLeetCodeStats();
    calculateContributions();
});

// ==================== 
// Console Message
// ==================== 
console.log('%c Welcome to My Portfolio! ', 'background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Looking for a developer? Let\'s connect! ', 'color: #6366f1; font-size: 14px; padding: 5px;');

