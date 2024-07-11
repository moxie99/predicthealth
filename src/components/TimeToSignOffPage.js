// src/components/TimeToSignOffPage.js

import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import Filter from './Filter';
import { fetchData } from '../dataService';

const TimeToSignOffPage = () => {
  const [data, setData] = useState([]);
  const [clinicFilter, setClinicFilter] = useState('All');
  const [providerFilter, setProviderFilter] = useState('All');

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  const clinics = ['All', ...new Set(data.map((item) => item.Clinic))];
  const providers = ['All', ...new Set(data.map((item) => item.Provider))];

  const filteredData = data.filter((item) => {
    return (
      (clinicFilter === 'All' || item.Clinic === clinicFilter) &&
      (providerFilter === 'All' || item.Provider === providerFilter)
    );
  });

  // Example: Generating chart data and options
  const chartData = {
    labels: filteredData.map((item) => item.TimeOfDay),
    datasets: [
      {
        label: 'Number of Notes Signed Off',
        data: filteredData.map((item) => item.NumberOfNotesSignedOff),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Notes Signed Off',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time of Day',
        },
      },
    },
  };

  return (
    <div>
      <h2>Time to Sign Off</h2>
      <Filter
        options={clinics}
        selected={clinicFilter}
        onSelect={setClinicFilter}
      />
      <Filter
        options={providers}
        selected={providerFilter}
        onSelect={setProviderFilter}
      />
      <Chart data={chartData} options={chartOptions} />
    </div>
  );
};

export default TimeToSignOffPage;
