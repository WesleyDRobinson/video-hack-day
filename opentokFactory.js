app.value('apiKey', '45232992');
app.value('sessionId', '2_MX40NTIzMjk5Mn5-MTQzMTE5MjY3MTEzMH5ibThhT1ZIU1BLU0d4bml3aXB1UUZmUmF-fg');
app.value('token', 'T1==cGFydG5lcl9pZD00NTIzMjk5MiZzaWc9ZTMwNmY0MDg4MzkzNGYyOGUzZjRjYWM2NzA5MDY5OTY0Njc5OTBiYzpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTJfTVg0ME5USXpNams1TW41LU1UUXpNVEU1TWpZM01URXpNSDVpYlRoaFQxWklVMUJMVTBkNGJtbDNhWEIxVVVabVVtRi1mZyZjcmVhdGVfdGltZT0xNDMxMTk5ODAyJm5vbmNlPTAuNDM3NDk1NDY1MTQ4NDA5NTM=');

app.directive('videoChat', function(opentokFactory) {
  return {
    restrict: 'E',
    templateUrl: 'vchat.html',
    link: function(scope) {
      scope.$on('chat mode', function() {
        opentokFactory.init(function(err, session) {
          session.publish("ot-publisher");
          scope.OTsession = session;
          session.on("streamCreated", function(event) {
            // streamContainer is a DOM element
            scope.streams = opentokFactory.streams();
            session.emit("OTLayout");
          });
          
        });
        scope.streams = opentokFactory.streams();
      });

      scope.$on('logout', function() {
        if(scope.OTsession) scope.OTsession.disconnect();
      });
      scope.$on('record mode', function() {
        if(scope.OTsession) scope.OTsession.disconnect();
      });
    }
  };
});

app.factory('opentokFactory', function(apiKey, sessionId, token, OTSession) {
  return {
  
    init: function(cb) {
      return OTSession.init(apiKey, sessionId, token, cb);
    },
    streams: function() {
      return OTSession.streams;
    }
  };

  
});
