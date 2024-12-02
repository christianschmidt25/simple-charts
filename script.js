const ctx = document.getElementById('barChart'); // Create barChart variable as ctx

new Chart(
    ctx, {
        type: 'bar', // Creating a Bar Chart here
        data: {
            labels: ['Cade Cunningham', 'Jimmy Butler', 'Jalen Brunson'], // X-axis labels
            datasets: [
                {
                    label: 'MVP Votes',
                    data: [21, 4, 7],
                    backgroundColor: ['rgb(0,0,255, 0.5)', 'rgb(255,0,0, 0.5)', 'rgb(0,255,0, 0.5)'],
                    borderColor: ['rgb(0,0,255)', 'rgb(255,0,0)', 'rgb(0,255,0)'],
                    borderWidth: 3.5
                }
            ]
        }
    }
)