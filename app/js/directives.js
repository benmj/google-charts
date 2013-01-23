'use strict';

/* Directives */


angular.module('googleCharts.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive("googleChart", function() {
      return {
          scope: {
              chart: '=',
          },
          restrict: 'A',
          link: function(scope, element, attrs) {
              // Figure 
              var type = scope.chart.type;
              // bar --> BarChart, for ex.
              var chartFunc = type[0].toUpperCase() + type.slice(1) + 'Chart';

              // Draw
              var canvas = new google.visualization[chartFunc]( element[0]);
              var data = google.visualization.arrayToDataTable(scope.chart.data);
              canvas.draw(data, scope.chart.options);
          }
        };
  });
