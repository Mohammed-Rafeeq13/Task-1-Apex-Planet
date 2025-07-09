// Task 1: Basic JavaScript for Interactivity
// Objective: Implement simple interactions using JavaScript
// Actions: Create a button that triggers an alert message when clicked

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Task 1: JavaScript loaded successfully!');
    
    // Get references to DOM elements
    const interactiveBtn = document.getElementById('interactive-btn');
    const message = document.getElementById('message');
    
    // Check if elements exist
    if (interactiveBtn && message) {
        // Add click event listener to the button
        interactiveBtn.addEventListener('click', function() {
            // Show alert message
            alert('Hello! This is a JavaScript alert message!');
            
            // Toggle the visibility of the message
            if (message.classList.contains('hidden')) {
                message.classList.remove('hidden');
                interactiveBtn.textContent = 'Hide Message';
            } else {
                message.classList.add('hidden');
                interactiveBtn.textContent = 'Click Me!';
            }
            
            // Log to console
            console.log('Button clicked! Message visibility toggled.');
        });
        
        // Add hover effects with JavaScript
        interactiveBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            console.log('Button hovered');
        });
        
        interactiveBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log(`Scrolled to section: ${targetId}`);
            }
        });
    });
    
    // Add a simple animation when page loads
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add current time display
    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        
        // Create time display if it doesn't exist
        let timeDisplay = document.getElementById('current-time');
        if (!timeDisplay) {
            timeDisplay = document.createElement('div');
            timeDisplay.id = 'current-time';
            timeDisplay.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                background: rgba(0,0,0,0.8);
                color: white;
                padding: 10px;
                border-radius: 5px;
                font-family: monospace;
                font-size: 14px;
                z-index: 1000;
            `;
            document.body.appendChild(timeDisplay);
        }
        
        timeDisplay.textContent = `Current Time: ${timeString}`;
    }
    
    // Update time every second
    updateTime();
    setInterval(updateTime, 1000);
    
    // Add a simple counter for button clicks
    let clickCount = 0;
    
    if (interactiveBtn) {
        const originalClickHandler = interactiveBtn.onclick;
        
        interactiveBtn.addEventListener('click', function() {
            clickCount++;
            console.log(`Button has been clicked ${clickCount} times`);
            
            // Update button text to show click count after 3 clicks
            if (clickCount >= 3) {
                setTimeout(() => {
                    if (message.classList.contains('hidden')) {
                        interactiveBtn.textContent = `Clicked ${clickCount} times!`;
                    }
                }, 100);
            }
        });
    }
    
    console.log('All JavaScript functionality initialized successfully!');
});
