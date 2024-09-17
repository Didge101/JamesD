<script>
    document.addEventListener('scroll', function() {
        const parallax = document.querySelectorAll('.parallax');

        parallax.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const yPos = -(window.scrollY * speed / 100);
            layer.style.transform = `translateY(${yPos}px)`;
        });
    });
</script>
