<script>
    document.addEventListener('scroll', function() {
        const parallaxElements = document.querySelectorAll('.parallax');

        parallaxElements.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const yPos = -(window.pageYOffset * speed / 100);
            layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });
    });

    // Remove background-attachment entirely and rely on JS for parallax
    window.onload = function() {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(layer => {
            layer.style.backgroundAttachment = 'scroll';
        });
    };
const songClip = document.getElementById('song-clip');
const hoverImage = document.getElementById('hover-image');

// Hover event for playing the clip
hoverImage.addEventListener('mouseenter', () => {
    songClip.currentTime = 0; // Reset to the start
    songClip.play();
    setTimeout(() => {
        songClip.pause(); // Pause after 10 seconds
    }, 10000); // 10 seconds
});

hoverImage.addEventListener('mouseleave', () => {
    songClip.pause(); // Pause when mouse leaves
});

// Pause audio when the tab is not active
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        songClip.pause(); // Pause if the document is hidden
    }
});

</script>
