import React from 'react';
import { Text, View, ScrollView} from 'react-native';
import { Link } from 'react-router-native';
import ChartView from 'react-native-highcharts';

import Touchable from '../../components/Touchable/Touchable';

import styles from './Graph.style';

const Highcharts='Highcharts';
const conf1 = {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
                
                // set up the updating of the chart each second
                const series = this.series[0];
                setInterval(function () {
                    const x = (new Date()).getTime(); // current time
                    const y = Math.random();
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        }
    },
    title: {
        text: 'График 1'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            const data = [];
            const time = (new Date()).getTime();
            
            for (let i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
};

const conf2 = {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
    },
    title: {
        text: 'График 2'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            const data = [];
            const time = (new Date()).getTime();
            
            for (let i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random()
                });
            }
            return data;
        }())
    }]
};

export default class Graph extends React.Component {
    renderContent() {
        return (
            <View style={styles.graphContainer}>
                <View style={styles.graph}>
                    <ChartView style={styles.chart} config={conf1} />
                </View>
                <View style={styles.graph}>
                    <ChartView style={styles.chart} config={conf2} />
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Дашборд</Text>
                <ScrollView style={styles.content}>
                    {this.renderContent()}
                </ScrollView>
                <Link component={Touchable} to="/calibration/video" style={styles.back}>
                    <Text style={styles.backText}>Назад</Text>
                </Link>
            </View>
        );
    }
}
