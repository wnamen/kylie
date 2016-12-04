
$(document).ready(function() {

  var container_width = (25 * $(".booked.inner-meeting-container .card").length) + 'em';
  var container_width = (25 * $(".pending.inner-meeting-container .card").length) + 'em';

  $(".booked.inner-meeting-container").css("width", container_width);
  $(".pending.inner-meeting-container").css("width", container_width);

  var emailsReceivedCanvas = document.getElementById("emails-received-canvas").getContext("2d");
  var emailsSentCanvas = document.getElementById("emails-sent-canvas").getContext("2d");
  var responseTimeCanvas = document.getElementById("response-time-canvas").getContext("2d");
  var emailsToMeetingCanvas = document.getElementById("email-to-meeting-canvas").getContext("2d");

  var emailsReceivedChart = new Chart(emailsReceivedCanvas, {
      type: 'line',
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
          {
            data: [12, 19, 14, 10, 4, 7, 2],
            borderColor: "rgba(40,195,181,1)",
            backgroundColor: "rgba(40,195,181,0.2)"
          },
        {
          data: [2, 29, 5, 5, 2, 3, 10],
          borderColor: "rgba(100,115,130,0)",
          backgroundColor: "rgba(100,115,130,0.1)"
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.yLabel;
            }
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
            },
          }],
          yAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              beginAtZero:true,
              display: false
            }
          }]
        }
      }
  });

  var emailsSentChart = new Chart(emailsSentCanvas, {
      type: 'line',
      data: {
        labels: ["M", "", "", "", "", "", "S"],
        datasets: [
          {
            data: [12, 19, 14, 10, 4, 7, 2],
            borderColor: "rgba(251,97,93,1)",
            backgroundColor: "rgba(251,97,93,0.2)"
          },
          {
            data: [2, 29, 5, 5, 2, 3, 10],
            borderColor: "rgba(100,115,130,0)",
            backgroundColor: "rgba(100,115,130,0.1)"
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.yLabel;
            }
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
            },
          }],
          yAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              beginAtZero:true,
              display: false
            }
          }]
        }
      }
  });

  var responseTimeChart = new Chart(responseTimeCanvas, {
      type: 'bar',
      data: {
        labels: ["", ""],
        datasets: [{
          data: [19, 10],
          backgroundColor: [
              'rgba(100,115,130,0.2)',
              'rgba(40,195,181,0.2)'
          ],
          borderColor: [
              'rgba(100,115,130,1)',
              'rgba(40,195,181,1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [{
            barPercentage: 1,
            categoryPercentage:0.5,
            gridLines: {
              display: false,
            },
            time: {
              unit: 'hours'
            }
          }],
          yAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              beginAtZero:true,
              display: false
            }
          }]
        },
        animation: {
          onComplete: function () {

            var ctx = this.chart.ctx;
            console.log(this.chart);
            console.log(ctx);
            ctx.font = 'Verdana';
            ctx.fontColor = '#666';
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";

            this.data.datasets.forEach(function (dataset) {
              dataset.data.forEach(function (bar,idx) {
                console.log(bar);
                var model = dataset._meta[Object.keys(dataset._meta)[0]].bar[idx]._model;
                ctx.fillText(bar, bar.x, bar.y - 5);
              });
            })
          }
        }
      }
  });

  var emailsToMeetingChart = new Chart(emailsToMeetingCanvas, {
    type: 'bar',
    data: {
      labels: ["", ""],
      datasets: [{
        data: [19, 10],
        backgroundColor: [
          'rgba(100,115,130,0.2)',
          'rgba(127,93,252,0.2)'
        ],
        borderColor: [
          'rgba(100,115,130,1)',
          'rgba(127,93,252,1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          barPercentage: 1,
          categoryPercentage:0.5,
          gridLines: {
            display: false
          },
        }],
        yAxes: [{
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            beginAtZero:true,
            display: false
          }
        }]
      }
    }
  });

})
