'use strict';

angular.module('sampleApp')
	.controller("RecordCtrl", function($scope) {
	ZiggeoApi.Events.on("submitted", function (data) {
		alert("Submitted a new video with token '" + data.video.token + "'!");
	});
});