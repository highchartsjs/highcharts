const chart = Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    xAxis: {
        categories: ['Apples', 'Pears', 'Bananas', 'Oranges']
    },
    accessibility: {
        enabled: false
    },
    title: {
        text: 'Highcharts with rounded corners'
    },
    plotOptions: {
        series: {
            borderRadius: '50%',
            borderWidth: 2,
            borderColor: '#666',
            dataLabels: {
                enabled: true
            },
            stacking: 'normal'
        }
    },
    series: [{
        data: [50, -50, 500, -90],
        name: 'Norway'
    }, {
        data: [50, 250, 260, -50],
        name: 'Sweden'
    }, {
        data: [150, 20, 30, -120],
        name: 'Denmark'
    }],
    colors: ['#d7bfff', '#af80ff', '#5920b9', '#48208b']
});


document.querySelectorAll('button.corner-radius').forEach(btn => {
    btn.addEventListener(
        'click',
        () => {
            chart.update({
                plotOptions: {
                    series: {
                        borderRadius: btn.dataset.value
                    }
                }
            });
        }
    );
});

document.querySelectorAll('button.chart-type').forEach(btn => {
    btn.addEventListener(
        'click',
        () => {
            chart.update({
                chart: {
                    type: btn.dataset.value
                }
            });
        }
    );
});
