import { autoChart } from '@antv/chart-advisor';

const data = [
  { f1: '2019-01', f2: 100 },
  { f1: '2019-02', f2: 300 },
  { f1: '2019-03', f2: 340 },
  { f1: '2019-04', f2: 330 },
];

autoChart(document.getElementById('container'), data, { toolbar: true, development: true });
