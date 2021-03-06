import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	ChartData,
	ChartOptions,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import './LineChart.css';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

type Props = {
	title: string;
	chartData: LineChartData;
};

export type LineChartData = {
	labels: string[];
	datasets: {
		label: string;
		values: number[];
		color: string;
	}[];
};

function convertToChartJsData(
	chartData: LineChartData,
): ChartData<'line', number[], string> {
	return {
		labels: chartData.labels,
		datasets: chartData.datasets.map((dataset) => {
			return {
				label: dataset.label,
				data: dataset.values,
				backgroundColor: dataset.color,
				borderColor: dataset.color,
				fill: false,
			};
		}),
	};
}

const options: ChartOptions<'line'> = {
	indexAxis: 'x',
	responsive: true,
	animation: { duration: 3000 },
	maintainAspectRatio: false,
	scales: {
		x: {
			ticks: {
				display: true,
				autoSkip: true,
			},
		},
		y: {
			ticks: {
				display: true,
				autoSkip: true,
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

export function LineChart(props: Props): JSX.Element {
	const data = convertToChartJsData(props.chartData);

	return (
		<div className="line-chart-container">
			<h1 className="line-chart-title">{props.title}</h1>

			<div className="line-chart">
				<Line data={data} options={options} />
			</div>
		</div>
	);
}
