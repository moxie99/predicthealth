// src/components/GeneralMetricsPage.js

import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import Filter from './Filter';
import { fetchData } from '../dataService';

const GeneralMetricsPage = () => {
  const [data, setData] = useState([]);
  const [clinicFilter, setClinicFilter] = useState('All');
  const [providerFilter, setProviderFilter] = useState('All');

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  const clinics = ['All', ...new Set(data.map((item) => item.clinicName))];
  const providers = [
    'All',
    ...new Set(data.map((item) => item.providerFullName)),
  ];

  console.log(data, '????++++|||||');
  const filteredData = data.filter((item) => {
    return (
      (clinicFilter === 'All' || item.clinicName === clinicFilter) &&
      (providerFilter === 'All' || item.providerFullName === providerFilter)
    );
  });

  // Example: Generating chart data and options

  const chartData = {
    labels: filteredData.map((item) => item.clinicState),
    datasets: [
      {
        label: 'Number of Cases',
        data: filteredData.map((item) => item.NumberOfCases),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
          text: 'Number of Cases',
        },
      },
      x: {
        title: {
          display: true,
          text: 'City',
        },
      },
    },
  };

  console.log(clinics);
  return (
    <div>
      <h2>General Practice Metrics</h2>
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
      {/* <Chart data={chartData} options={chartOptions} /> */}
    </div>
  );
};

export default GeneralMetricsPage;
