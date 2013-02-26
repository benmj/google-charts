'use strict';

/* Controllers */

angular.module('googleCharts.controllers', ['googleCharts.directives']).controller('indexController', function indexController($scope, $rootScope) {
    $scope.removeChart = function(chartName) {
        $scope.charts = $scope.charts.filter(function(chart) {
            return chart.name != chartName;
        });
    };

    $scope.charts = [
       // https://code.google.com/apis/ajax/playground/?type=visualization#bar_chart
        {    
            name: 'Barchart',
            type: 'bar', 
            options: {
                 title:"Yearly Coffee Consumption by Country",
                 width:600, height:400, vAxis: {title: "Year"}, 
                 hAxis: {title: "Cups"}
            },
            data: [['Year', 'Austria', 'Bulgaria', 'Denmark', 'Greece'],
                    ['2003',  1336060,    400361,    1001582,   997974],
                ['2004',  1538156,    366849,    1119450,   941795],
                ['2005',  1576579,    440514,    993360,    930593],
                ['2006',  1600652,    434552,    1004163,   897127],
                ['2007',  1968113,    393032,    979198,    1080887],
                ['2008',  1901067,    517206,    916965,    1056036]
            ]
        },

        // https://code.google.com/apis/ajax/playground/?type=visualization#column_chart
        {   
            name: 'Column Chart', 
            type: 'column',
            options: {
                title:"Yearly Coffee Consumption by Country",
                    width:600, height:400,
                    hAxis: {title: "Year"}
            },
            data: [
                ['Year', 'Austria', 'Belgium', 'Czech Republic', 'Finland', 'France', 'Germany'],
                ['2003',  1336060,   3817614,       974066,       1104797,   6651824,  15727003],
                ['2004',  1538156,   3968305,       928875,       1151983,   5940129,  17356071],
                ['2005',  1576579,   4063225,       1063414,      1156441,   5714009,  16716049],
                ['2006',  1600652,   4604684,       940478,       1167979,   6190532,  18542843],
                ['2007',  1968113,   4013653,       1037079,      1207029,   6420270,  19564053],
                ['2008',  1901067,   6792087,       1037327,      1284795,   6240921,  19830493]
              ]
        },

        // https://code.google.com/apis/ajax/playground/?type=visualization#pie_chart
        { 
            name: 'Pie Chart',
            type: 'pie',
            data: [
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ],
            options: {
                title:"So, how was your day?"
            }
        },

        // https://code.google.com/apis/ajax/playground/?type=visualization#area_chart
        { 
            name: 'Area Chart',
            type: 'area',
            data: [
                ['Month',   'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda'],
                ['2004/05',    165,      938,         522,             998,           450],
                ['2005/06',    135,      1120,        599,             1268,          288],
                ['2006/07',    157,      1167,        587,             807,           397],
                ['2007/08',    139,      1110,        615,             968,           215],
                ['2008/09',    136,      691,         629,             1026,          366]
            ],
            options:  {
                title : 'Monthly Coffee Production by Country',
                isStacked: true,
                width: 600,
                height: 400,
                vAxis: {title: "Cups"},
                hAxis: {title: "Month"}
            }
        }
    ];
});

angular.module('googleCharts.controllers', ['googleCharts.directives']).controller('tableController', function indexContoller($scope, $rootScope) {
    $scope.arrayTables = [
        {
            data : [
                ['Month',   'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda'],
                ['2004/05',    165,      938,         522,             998,           450],
                ['2005/06',    135,      1120,        599,             1268,          288],
                ['2006/07',    157,      1167,        587,             807,           397],
                ['2007/08',    139,      1110,        615,             968,           215],
                ['2008/09',    136,      691,         629,             1026,          366]
            ],
            options : {
                showRowNumber: true
            }
        }
    ];
});