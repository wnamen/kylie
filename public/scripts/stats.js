
$(document).ready(function() {

  var emailsReceivedCanvas = document.getElementById("emails-received-canvas").getContext("2d");
  var emailsSentCanvas = document.getElementById("emails-sent-canvas").getContext("2d");
  var responseTimeCanvas = document.getElementById("response-time-canvas").getContext("2d");
  var emailsToMeetingCanvas = document.getElementById("email-to-meeting-canvas").getContext("2d");

  var emailsReceivedChart = new Chart(emailsReceivedCanvas, {
      type: 'line',
      data: {
        labels: ["M", "", "", "", "", "", "S"],
        datasets: [{
          data: [12, 19, 14, 10, 4, 7, 2],
          borderColor: "rgba(75,192,192,1)"
        },
        {
        data: [2, 29, 5, 5, 2, 3, 10],
        backgroundColor: "rgba(255,153,0,0.4)"
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
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
        datasets: [{
          data: [12, 19, 14, 10, 4, 7, 2],
          borderColor: "rgba(75,192,192,1)"
        },
        {
        data: [2, 29, 5, 5, 2, 3, 10],
        backgroundColor: "rgba(255,153,0,0.4)"
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
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
              data: [12, 19],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
                  return tooltipItem.yLabel;
            }
          }
        },
          scales: {
            xAxes: [{
              barPercentage: 1,
              categoryPercentage:0.5,
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

  var emailsToMeetingChart = new Chart(emailsToMeetingCanvas, {
    type: 'bar',
    data: {
        labels: ["", ""],
        datasets: [{
            data: [12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function(tooltipItem) {
                return tooltipItem.yLabel;
          }
        }
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
