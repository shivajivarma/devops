!function(){function t(){function n(t,e){s=s.concat(RFB.messages.keyEvent(t,e))}var o=e.shift(),s=[],i=o.charCodeAt(),c=-1!=='!@#$%^&*()_+{}:"<>?~|'.indexOf(o),r=XK_Shift_L;c&&n(r,1),n(i,1),n(i,0),c&&n(r,0),rfb._sock.send(s),e.length>0&&setTimeout(t,10)}var e=prompt("Enter text to be sent to console").split("");t()}();
