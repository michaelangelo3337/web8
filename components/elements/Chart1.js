'use client'
import Highcharts from "highcharts/highstock"
import PieChart from "highcharts-react-official"

const options = {
    chart: {
        type: 'pie',
        plotBackgroundColor: null,
        backgroundColor: null,
        width: 490,
        height: 490,
    },
    title: {
        text: '',
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    credits: {
        enabled: false
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
        pie: {
            states: {
                inactive: {
                    opacity: 0.4
                }
            },
            borderWidth: 0,
            allowPointSelect: true,
            cursor: 'pointer', 
            dataLabels: {
                enabled: true,
                distance: -25,
                format: '',
                style: {
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 'bold',
                    color: '#fff',
                    textOutline: 'none'
                },
                background: {
                    enabled: false,

                },
                dropShadow: {
                    enabled: false,
                }
            }, 
            showInLegend: false,
        },
    }, 
    series: [{
        type: 'pie',
        innerSize: '60%',
        data: [{
            name: 'Team',
            y: 7.5,
            color: '#AFC5FF',
          }, {
            name: 'Staking',
            color: '#FDEBB3',
            y: 9.5
          },  {
            name: 'Advisors',
            color: '#ACF2C4',
            y: 10.0
          }, {
            name: 'Liquidity',
            color: '#CDBDF3',
            y: 12.0
          }, {
            name: 'Ecosystem',
            color: '#E89F8E',
            y: 16.33
          },  {
            name: 'Marketing',
            y: 16.33,
            color: '#6574EB',
          }, {
            name: 'Private Sale',
            y: 30.0,
            color: '#ACE5F2',
          }]
    }]
}

export default function Chart1() {
    return (
        <>
            <PieChart highcharts={Highcharts} options={options} id="container" />
        </>
    )
}
