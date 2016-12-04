$(function() {

  $(document).ready(function() {

    // Build the chart
    Highcharts.chart('container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'INMATE RACE'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Race',
        colorByPoint: true,
        data: [{
          name: 'Asian',
          y: 1.5
        }, {
          name: 'Black',
          y: 37.8,
          sliced: true,
          selected: true
        }, {
          name: 'Native American',
          y: 2.1
        }, {
          name: 'White',
          y: 58.7


        }]
      }]
    });
  });
});
