// Create animated particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Navigation function (you'll need to implement the actual routing)
function navigateToTech(tech) {
    // Replace this with your actual navigation logic
    window.location.href = `tech/${encodeURIComponent(tech)}.html`;    
}

// Add hover sound effect (optional)
document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Optional: Add subtle hover sound
        // new Audio('hover-sound.mp3').play();
    });
});

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', createParticles);

// Add some interactive animations
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.tech-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);

        if (distance < 200) {
            const strength = (200 - distance) / 200;
            card.style.transform = `translateX(${x * strength * 0.1}px) translateY(${y * strength * 0.1}px) scale(${1 + strength * 0.05})`;
        } else {
            card.style.transform = '';
        }
    });
});