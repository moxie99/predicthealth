import React from 'react';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
const Chart = ({
  clinicStateCount,
  options,
  providerCount,
  encounterCountByMonth,
}) => {
  console.log(clinicStateCount);
  return (
    <div className='App'>
      <div className='dataCard clinicStateCard'>
        <Bar
          data={{
            labels: Object.keys(clinicStateCount),
            datasets: [
              {
                label: 'Clinic State Count',
                data: Object.values(clinicStateCount),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: 'Clinic State Count',
              },
            },
          }}
        />
      </div>

      <div className='dataCard providerCard'>
        <Doughnut
          data={{
            labels: Object.keys(providerCount),
            datasets: [
              {
                label: 'Provider Count',
                data: Object.values(providerCount),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: 'Provider Count',
              },
            },
          }}
        />
      </div>

      <div className='dataCard encounterCard'>
        <Line
          data={{
            labels: Object.keys(encounterCountByMonth),
            datasets: [
              {
                label: 'Encounter Count by Month',
                data: Object.values(encounterCountByMonth),
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: 'Encounter Count by Month',
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
