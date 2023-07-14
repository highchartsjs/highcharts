Dashboards.board('container', {
    gui: {
        layouts: [{
            id: 'layout-1',
            rows: [{
                cells: [
                    { id: 'dashboard-col-0' },
                    { id: 'dashboard-col-1' }
                ]
            }]
        }]
    },
    components: [{
        cell: 'dashboard-col-0',
        title: 'Title line',
        type: 'Highcharts',
        chartOptions: {
            series: [{
                data: [1, 2, 3, 4]
            }]
        }
    }, {
        cell: 'dashboard-col-1',
        title: {
            text: 'Title bar',
            style: {
                fontSize: '20px',
                color: '#0000FF'
            }
        },
        type: 'Highcharts',
        chartOptions: {
            chart: {
                type: 'bar'
            },
            series: [{
                data: [1, 2, 3, 4]
            }]
        }
    }]
});