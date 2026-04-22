document.addEventListener('DOMContentLoaded', () => {
    const cakeWrapper = document.getElementById('cakeWrapper');
    const messageCard = document.getElementById('messageCard');
    const celebrateMoreBtn = document.getElementById('celebrateMore');
    const candles = document.querySelectorAll('.candle');
    
    let isBlown = false;

    // Handle Cake Click
    cakeWrapper.addEventListener('click', () => {
        if (!isBlown) {
            blowOutCandles();
        } else {
            triggerConfetti();
        }
    });

    // Handle Celebrate More Button
    celebrateMoreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        triggerConfetti();
    });

    function blowOutCandles() {
        isBlown = true;
        
        // Extinguish candles
        candles.forEach((candle, index) => {
            setTimeout(() => {
                candle.classList.add('extinguished');
            }, index * 200);
        });

        // Trigger massive confetti
        triggerConfetti(true);

        // Show message card
        setTimeout(() => {
            messageCard.classList.add('visible');
            messageCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 800);
    }

    function triggerConfetti(massive = false) {
        const count = massive ? 200 : 100;
        const defaults = {
            origin: { y: 0.7 },
            zIndex: 1000
        };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }
});
