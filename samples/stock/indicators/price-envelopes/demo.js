(async () => {

    // Load the dataset
    const data = await fetch(
        'https://demo-live-data.highcharts.com/aapl-ohlc.json'
    ).then(response => response.json());

    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 2
        },

        title: {
            text: 'AAPL Stock Price'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                showInLegend: true
            }
        },

        series: [{
            type: 'ohlc',
            id: 'aapl',
            name: 'AAPL Stock Price',
            data: data
        }, {
            type: 'priceenvelopes',
            linkedTo: 'aapl'
        }]
    });
})();