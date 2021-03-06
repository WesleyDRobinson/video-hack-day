
app.controller("RecordCtrl",
    function ($scope, $rootScope, $firebaseArray) {
        $rootScope.videos = []; 

        $rootScope.$on('record mode', function() {
          var embedding = ZiggeoApi.Embed.embed("#ziggeo_recorder", {width:320, height:240, hide_rerecord_on_snapshots:true, rerecordings:0, limit:5, perms:["forbidswitch", "forbidrerecord"], disable_first_screen:true});


    	ZiggeoApi.Events.on("ready_to_record", function (data) {
	    	jQuery('.video-recorder-dashboard-under').css("display", "none");
	    	jQuery('.video-recorder-dashboard').css("display", "none");
			setTimeout(function() {
				jQuery('.video-recorder-dashboard-under').css("display", "initial");
				embedding.record(); 
			}, 8000);
    	});

        ZiggeoApi.Events.on("submitted", function (data) {
            var ref = new Firebase("https://burning-fire-1005.firebaseio.com/videos");

            var myArr = $firebaseArray(ref);
            $rootScope.$broadcast('chat mode');
            myArr.$add({user: $rootScope.authData.uid, token: data.video.token}).then(function(ref) {
                var id = ref.key();
                console.log("added record with id " + id);
                myArr.$indexFor(id); // returns location in the array

                var users = [];
                myArr.forEach(function(video, i) {
                  if(users.indexOf(video.user) === -1) {
                    jQuery('#video_list').append("<li style='float: left; margin: 10px'><ziggeo ziggeo-video=" + video.token + " ziggeo-width=320 ziggeo-height=240></ziggeo></li>");
                    users.push(video.user);
                  }
                });
                jQuery('#ziggeo_recorder').hide();
            });
        });        
        });
    }
);
