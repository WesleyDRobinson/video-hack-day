
app.controller("RecordCtrl",
    function ($scope) {
    	var embedding = ZiggeoApi.Embed.embed("#ziggeo_recorder", {width:320, height:240, hide_rerecord_on_snapshots:true, rerecordings:0, limit:5, perms:["forbidswitch", "forbidrerecord"], disable_first_screen:true});


    	ZiggeoApi.Events.on("ready_to_record", function (data) {
	    	$('.video-recorder-dashboard-under').css("display", "none");
	    	$('.video-recorder-dashboard').css("display", "none");
			setTimeout(function() {
				$('.video-recorder-dashboard-under').css("display", "initial");
				embedding.record(); 
			}, 8000);
    	});

        ZiggeoApi.Events.on("submitted", function (data) {
            alert("Submitted a new video with token '" + data.video.token + "'!");
        });        
    }
);