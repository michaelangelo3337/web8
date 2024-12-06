'use client'

import { useEffect } from 'react';

const DonutProgress = () => {
    useEffect(() => {
        const handleAppearance = () => {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(progressBar => {
                const progressContent = progressBar.querySelector('.progress-content');
                const progressNumberMark = progressBar.querySelector('.progress-number-mark');

                const percentage = parseFloat(progressBar.getAttribute('data-percentage'));

                // Animate progress content
                progressContent.style.width = percentage + '%';

                // Animate progress number mark
                const animateProgressNumberMark = (num) => {
                    const data = Math.round(num * 10) / 10;
                    //progressNumberMark.querySelector('.percent').innerHTML = data + '%';
                    progressNumberMark.style.left = percentage + '%';
                };

                let count = 0;
                const interval = setInterval(() => {
                    animateProgressNumberMark(count);
                    count++;
                    if (count > percentage || count > 100) clearInterval(interval);
                }, 30);
            });
        };

        const handleScroll = () => {
            const contentProgressBox = document.querySelector('.content-progress-box');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        handleAppearance();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(contentProgressBox);
        };

        handleScroll();

        return () => {
            // Clean up logic if needed
        };
    }, []);

    return (
        <div className="content-progress-box">
            {/* Your progress bars JSX */}
        </div>
    );
};

export default DonutProgress;


