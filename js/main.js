// this is all pretty much from ChatGPT 

// text elements to be animated typing
const elements = document.querySelectorAll('.type-animation');

// start typing animation when an element is visible
function startTypingAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const text = entry.target.textContent.trim();
            entry.target.textContent = '';
            type(entry.target, text);
            observer.unobserve(entry.target); // Stop observing once text is visible
        }
    });
}

// Intersection Observer setup for each element
elements.forEach(element => {
    const observer = new IntersectionObserver(startTypingAnimation);
    console.log(element)
    observer.observe(element);
});

// actual typing animation
function type(element, text) {
    let index = 0;
    function typeChar() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeChar, 85); // Adjust typing speed here
        }
    }
    typeChar();
}


// smooth scrolling to sections without #id-name at end of url path
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default behavior (scrolling to anchor)

            const targetId = this.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId); // Get target section element

            if (targetSection) {
                // Scroll to target section with smooth behavior
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

