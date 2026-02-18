document.addEventListener("DOMContentLoaded", function() {
            // Typed JS
            if(document.getElementById('units')){
                var typed = new Typed('#units', {
                    strings: ['Optimize Your Brand Visibility.', 'Your Sky is Limitless.', 'We Bridge the Gap.'],
                    typeSpeed: 40,
                    backSpeed: 20,
                    startDelay: 1000,
                    loop: true,
                    showCursor: true
                });
            }

            // GSAP Animations
            gsap.registerPlugin(ScrollTrigger);

            // Intro Reveal
            gsap.from(".reveal-text", {
                scrollTrigger: { trigger: ".intro-section", start: "top 80%" },
                y: 50, opacity: 0, duration: 1, ease: "power3.out"
            });
            gsap.from(".reveal-image", {
                scrollTrigger: { trigger: ".intro-section", start: "top 80%" },
                x: 50, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out"
            });

            // Division Blocks Reveal
            gsap.utils.toArray('.reveal-block').forEach((block, i) => {
                gsap.from(block, {
                    scrollTrigger: { trigger: block, start: "top 85%" },
                    y: 60, opacity: 0, duration: 0.8, ease: "power2.out"
                });
            });
        });