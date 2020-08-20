//stopwatch js 

function Stopwatch(elem) {
    var time = 0; 
    var interval; 
    var offset;
    
    function update() {
      //console.log(this)
      if (this.isOn) {
            time += delta();
  
      }
    var formattedTime = timeFormatter(time);
      //console.log(formattedTime);
    elem.textContent = formattedTime;
    }
    
    function delta() {
      var now = Date.now();
      var timePassed = now - offset;
      offset = now;
      return timePassed;
    }
    
    //1234
    //minutes
    //seconds: 1
    // milliseconds: 234
    // 00 : 01: 234
    
    function timeFormatter(time) {
      var time = new Date(time)
      ;
      var minutes = time.getMinutes().toString();
      var seconds = time.getSeconds().toString();
      var milliseconds = time.getMilliseconds().toString();
   
      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }
      
      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }
      
      while (milliseconds.length < 3) {
        milliseconds = '00' + milliseconds;
      }
      
      return minutes + ' : ' + seconds + ' . ' + milliseconds;
      
    }
    
   // this.isOn = false;
    
    this.start = function() {
      //if (!this.isOn) {
        interval = setInterval(update.bind(this), 10);
        offset = Date.now();
        this.isOn = true;
      //}
      
     
    };
    
    this.stop = function() {
    // if (this.isOn) {
       clearInterval(interval);
       inverval = null;
       this.isOn = false;
      //}
     };
    
    this.reset = function() {
    //  if (!this.isOn) {
        time = 0;
        update();
      //}
    };
  
  }
  

  //watch.start();