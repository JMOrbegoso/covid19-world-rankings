import React from 'react';
import { Bar } from 'react-chartjs-2';
import type * as Chart from 'chart.js';
import './HorizontalBarChart.css';

type Props = {
	title: string;
	chartData: HorizontalBarChartData;
};

export type HorizontalBarChartData = {
	labels: string[];
	datasets: number[];
	datasetLabel: string;
	backgroundColor: string;
};

function convertToChartJsData(
	chartData: HorizontalBarChartData,
): Chart.ChartData {
	return {
		labels: chartData.labels,
		datasets: [
			{
				label: chartData.datasetLabel,
				data: chartData.datasets,
				backgroundColor: chartData.backgroundColor,
			},
		],
	};
}

const options: Chart.ChartOptions = {
	indexAxis: 'y',
	elements: {
		bar: {
			borderWidth: 0,
		},
	},
	responsive: true,
	animation: { duration: 3000 },
	maintainAspectRatio: false,
	scales: {
		x: {
			ticks: {
				display: true,
			},
		},
		y: {
			ticks: {
				display: true,
				autoSkip: false,
			},
		},
	},
	plugins: {
		title: {
			display: false,
		},
		legend: {
			display: true,
			position: 'bottom',
		},
		tooltip: {
			enabled: true,
		},
	},
};

export function HorizontalBarChart(props: Props): JSX.Element {
	const data = convertToChartJsData(props.chartData);

	return (
		<div className="horizontal-bar-chart-container">
			<h1 className="horizontal-bar-chart-title">{props.title}</h1>

			<div className="horizontal-bar-chart">
				<Bar data={data} options={options} />
			</div>
		</div>
	);
}
