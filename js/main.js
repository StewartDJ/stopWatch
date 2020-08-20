
var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);
function start() {

toggleBtn.textContent = 'Stop';
toggleBtn.classList.toggle("btn-danger")
watch.start(); 
}

function stop() {
toggleBtn.textContent = "Start"; 
toggleBtn.classList.toggle("btn-success")
watch.stop();
}
  
toggleBtn.addEventListener('click', function() {
  watch.isOn ? stop() : start();
  
}); 
    
resetBtn.addEventListener('click', function() {
  
  watch.reset();
});