/**
 * Created by gsposito on 15/01/2015.
 */
'use strict';

var app;
app = angular.module('app',['ngRoute'])
    .config( function($routeProvider) {
        $routeProvider.when('/list',
            {
                templateUrl: 'view/listView/listView.html',
                controller: 'listViewController'
            }
        ).when('/add',
            {
                templateUrl: 'view/addView/addView.html',
                controller: 'addViewController'
            }
        );
    });
