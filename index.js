document.addEventListener('DOMContentLoaded', function () {
    // Handle Slide Transitions
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;
    let isTransitioning = false;

    // Function to go to a specific slide
    function goToSlide(index) {
        if (isTransitioning || index < 0 || index >= slides.length) return;

        isTransitioning = true;

        // Remove "active" class from current slide
        slides[currentSlideIndex].classList.remove('active');

        // Update index and set new slide as active
        currentSlideIndex = index;
        slides[currentSlideIndex].classList.add('active');

        // Smoothly scroll to the new slide
        slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Reset transition state after a delay
        setTimeout(() => {
            isTransitioning = false;
        }, 800); // Matches the CSS transition duration
    }

    // Debounced scroll handler to prevent multiple rapid triggers
    let lastScrollTime = 0;
    function handleScroll(event) {
        const now = Date.now();
        if (now - lastScrollTime < 1000) return; // 1-second debounce
        lastScrollTime = now;

        if (event.deltaY > 0) {
            // Scroll down
            goToSlide(currentSlideIndex + 1);
        } else if (event.deltaY < 0) {
            // Scroll up
            goToSlide(currentSlideIndex - 1);
        }
    }

    // Function to handle keyboard navigation
    function handleKeydown(event) {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            goToSlide(currentSlideIndex + 1);
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            goToSlide(currentSlideIndex - 1);
        }
    }

    // Event listeners for scrolling and keyboard navigation
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeydown);

    // Initialize the first slide as active
    goToSlide(0);

    // Chart.js: Dataset for Slide 2 - Method of Contact in Q1 2024
    const whistleChartCanvas = document.getElementById('whistleChart');
    if (whistleChartCanvas) {
        const ctx = whistleChartCanvas.getContext('2d');

        // Dataset from CSV file for whistle-blowing methods of contact
        const whistleData = {
            labels: ['Online Reporting Form', 'Email', 'Telephone', 'Letter', 'Other'],
            datasets: [{
                label: 'Method of Contact (Q1 2024)',
                data: [148, 55, 48, 13, 34], // Data values extracted from CSV
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',   // Blue for Online Reporting Form
                    'rgba(75, 192, 192, 0.6)',   // Teal for Email
                    'rgba(255, 206, 86, 0.6)',   // Yellow for Telephone
                    'rgba(153, 102, 255, 0.6)',  // Purple for Letter
                    'rgba(255, 159, 64, 0.6)'    // Orange for Other
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };

        // Chart configuration for Pie Chart
        const config = {
            type: 'pie',
            data: whistleData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'right' // Legend on the right side of the chart
                    },
                    tooltip: {
                        enabled: true
                    }
                }
            }
        };

        // Render the chart
        const whistleChart = new Chart(ctx, config);
    }
});
    document.addEventListener('DOMContentLoaded', function () {

// Creating the Bar Chart for Psychological Safety Levels (Slide 6)
const safetyCanvas = document.getElementById('psychologicalSafetyChart');
if (safetyCanvas) {
    const ctx = safetyCanvas.getContext('2d');
    const safetyData = {
        labels: ['Psychological Safety Levels'],
        datasets: [
            {
                label: 'Team A',
                data: [85],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Team B',
                data: [65],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            },
            {
                label: 'Team C',
                data: [75],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            },
            {
                label: 'Team D',
                data: [40],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            },
            {
                label: 'Team E',
                data: [55],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };

    const safetyConfig = {
        type: 'bar',
        data: safetyData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100, // Assuming percentages
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    };
    new Chart(ctx, safetyConfig);
}
});
    