document.addEventListener('DOMContentLoaded', () => {
    const csvText = document.getElementById('csv-data').textContent.trim();
    const parsed = Papa.parse(csvText, {header: true, dynamicTyping: true});
    const rows = parsed.data.filter(r => r.date);
    const seriesNames = parsed.meta.fields.filter(f => f !== 'date');

    const select = document.getElementById('series-select');
    seriesNames.forEach(name => {
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        select.appendChild(opt);
    });

    let chart;
    const ctx = document.getElementById('chart').getContext('2d');

    function render(series) {
        const dataset = rows.map(r => ({x: r.date, y: r[series]}));
        if (chart) chart.destroy();
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: series,
                    data: dataset,
                    borderColor: 'steelblue',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 0
                }]
            },
            options: {
                parsing: false,
                scales: {
                    x: {
                        type: 'time',
                        time: {unit: 'day'},
                        title: {display: true, text: 'Date'}
                    },
                    y: {
                        title: {display: true, text: series}
                    }
                },
                plugins: {
                    zoom: {
                        zoom: {
                            wheel: {enabled: true},
                            pinch: {enabled: true},
                            mode: 'x'
                        },
                        pan: {enabled: true, mode: 'x'}
                    }
                }
            }
        });
    }

    render(seriesNames[0]);
    select.value = seriesNames[0];
    select.addEventListener('change', () => render(select.value));
});
