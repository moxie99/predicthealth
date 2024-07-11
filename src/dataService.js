import Papa from 'papaparse';

export const fetchData = () => {
  return new Promise((resolve, reject) => {
    Papa.parse('/data.csv', {
      download: true,
      header: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};
