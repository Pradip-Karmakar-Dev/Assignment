
// Sales Chart 
const weeksLabels = [
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday',
'Sunday'
];

const salesData = {
labels: weeksLabels,
datasets: [{
    label: 'Sales',
    backgroundColor: 'black',
    borderColor: '#623cfa',
    data: [323, 167, 450, 609, 90, 68, 500],
}]
};

const config = {
type: 'line',
data: salesData,
options: {}
};

const saleChart = new Chart(
    document.getElementById('salesChart'),
    config
);

// Traffic Chart

const trafficTypes = [
    'Search Engine',
    'Direct Click',
    'Bookmark Click',
    'Social Media',
];

const trafficData = {
labels: trafficTypes,
datasets: [{
    label: 'Traffic Chart',
    data: [1890, 1409, 530, 790],
    backgroundColor: ['blue', 'green', 'red', 'yellow'],
}],
};

const createTrafficChart = {
type: 'doughnut',
data: trafficData,
};

const trafficChart = new Chart(
    document.getElementById('trafficChart'), createTrafficChart
);