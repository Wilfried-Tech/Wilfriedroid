$ = (e) => document.querySelector(e)

new System.Events.PhoneTimeEvent().registerElement(document.querySelector('.status-bar-time')).addEventListener('phone-time', (e) => {
  e.target.innerText = e.time;
})

console.log(System);

new System.Events.PhoneBatteryEvent().registerElement($('.status-bar-battery')).addEventListener('phone-battery', (e) => {
  var v = $('.status-bar-battery-value');
  var c = $('.status-bar-battery-charge');
  $('.status-bar-battery-level').innerText = `${e.level}%`;
  c.style.display = e.charging ? 'block' : 'none';
  v.style = `width: ${e.level}%; background: ${e.charging? 'lime':e.level<=15? 'red': 'white'}`
})

$('body').onclick=function(arg) {
  alert(arg)
}

$('body').onclick()