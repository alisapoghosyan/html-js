var chrt = document.getElementById("chartId").getContext("2d");
var chrt2 = document.getElementById("chartId2").getContext("2d");
let data = {
  labels: ["date", "date", "date", "date", "date", "date", "date", "date"],
  datasets: [{
      label: "online tutorial subjects",
      data: [1800, 2000, 1700, 1500, 1600, 1400, 1250 , 1500, 1200, 1000, 800, 1100, 700, 640, 800, 450, 300, 350, 100, 150, 200, 50, 0],
      backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'lightblue', 'gold'],
      borderColor: '#2A94CB',
      borderWidth: 2,
      pointRadius: 0,
  }],
}
let options = {
  responsive: true,
  plugins: {
    legend: {
        display: false,
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
  },            
}

var chartId = new Chart(chrt, {
  type: 'line',
  data: data,
  options: options
});

var chartId2 = new Chart(chrt2, {
  type: 'line',
  data: data,
  options: options
});



function onComplete (test, symbol) {
	const chart = test;
	const ctx = chart.ctx;
	let xAxis = chart.scales.x;
	let yAxis = chart.scales.y;
	ctx.font = '12px';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillStyle = "#9E9E9E"
	chart.data.datasets.forEach((dataset, i) => {
		const meta = chart.getDatasetMeta(i);
		if (!meta.hidden) {
			meta.data.forEach((bar, index) => {
				const data = dataset.data[index];
				ctx.fillText(data + `${symbol}`, bar.x+15, bar.y+1 );
			});
		}
	});
}

let horizontalChartLabels = ['Manchester - Tank 2 (Diesel)', 'Manchester - Tank 2 (Diesel)', 'Liverpool - Tank 1 (HVO)', 'Gatwick - Tank 1 (Diesel)', 'Bolton - Tank 3 (Diesel)']


new Chart(document.getElementById('horizontal-chart'), {
  type: 'bar',
  data: {
    labels: horizontalChartLabels,
    datasets: [{
      data: [3, 6, 14, 24, 31],
			backgroundColor: [
				'#F2496A',
				'#FF0833',
				'#FFA000',
				'#1C8DC7',
				'#1C8DC7',
			],			
    }],
  },
  options: {
		indexAxis: 'y',
		responsive: true,
		barPercentage: 0.3,
    layout: {
      padding: {
        bottom: 60
      }
    },
		plugins: {
			tooltip: {
				enabled: false
			},
			legend: {
					display: false,
			},		
		},		
    scales: {
      x: {
				display: true,
				ticks: {
					callback: function(value, index, ticks) {
						if (value) {
							return  value + 'H';
						} else {
							return "Now"
						}
					},
					color: "#9E9E9E",
				},
				grid: {
					color: function() {
						return "#E5E5E5"
					}
				}				
			},
			y: {
				ticks: {
					display: false,
				},
				grid: {
					display: false
				},		
			},						
    },
		animation: {
			onComplete: function () {
				onComplete(this,'H')		
			} 
  	}
	}
});

let newVal = 0
let percentageData = [110, 1245, 1234, 24541, 512]
new Chart(document.getElementById('horizontal-chart2'), {
  type: 'bar',
  data: {
    labels: horizontalChartLabels,
    datasets: [{
      data: [90, 75, 52, 37, 18],
			backgroundColor: '#1C8DC7',			
    }],
  },
  options: {
		indexAxis: 'y',
		responsive: true,
		barPercentage: 0.3,
    layout: {
      padding: {
        bottom: 60
      }
    },
		plugins: {
			tooltip: {
				enabled: false
			},
			legend: {
					display: false,
			},		
		},		
    scales: {
      x: {
				display: true,
				ticks: {
					// Include a dollar sign in the ticks
					max: 100,
					callback: function(value, index, ticks) {
						return value + "%"
					},
					color: "#9E9E9E",
				},
				grid: {
					color: function() {
						return "#E5E5E5"
					}
				}				
			},
			y: {
				ticks: {
					display: false,
				},
				grid: {
					display: false
				},		
			},						
    },
		animation: {
			onComplete: function() {
				const chart = this;
				const ctx = chart.ctx;
				let xAxis = chart.scales.x;
				let yAxis = chart.scales.y;
				ctx.font = '12px';
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillStyle = "#9E9E9E"
				chart.data.datasets.forEach((dataset, i) => {
					const meta = chart.getDatasetMeta(i);
					if (!meta.hidden) {
						meta.data.forEach((bar, index) => {
							const data = percentageData[index];
							ctx.fillText(data + 'L', bar.x+25, bar.y+1 );
						});
					}
				});				
			},		
  	}
	}
});


new Chart(document.getElementById('horizontal-chart3'), {
  type: 'bar',
  data: {
    labels: horizontalChartLabels,
    datasets: [{
      data: [26, 20, 14, 12, 10],
			backgroundColor: [
				'#FF0833',
				'#FFA000',
				'#FFA000',
				'#1C8DC7',
				'#1C8DC7',
			],			
    }],
  },
  options: {
		indexAxis: 'y',
		responsive: true,
		barPercentage: 0.3,
    layout: {
      padding: {
        bottom: 60
      }
    },
		plugins: {
			tooltip: {
				enabled: false
			},
			legend: {
					display: false,
			},		
		},		
    scales: {
      x: {
				display: true,
				ticks: {
					max: 100,
					callback: function(value, index, ticks) {
						return value + "H"
					},
					color: "#9E9E9E",
				},
				grid: {
					color: function() {
						return "#E5E5E5"
					}
				}				
			},
			y: {
				ticks: {
					display: false,
				},
				grid: {
					display: false
				},		
			},						
    },
		animation: {
			onComplete: function () {
				onComplete(this,'H')		
			} 	
  	}
	}
});




