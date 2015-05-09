'use strict';

angular.module('Orange2Orange')
	.controller("RecordCtrl", [function($scope) {

	console.log("??");

	ZiggeoApi.Events.on("submitted", function (data) {
		alert("Submitted a new video with token '" + data.video.token + "'!");
	});
]});