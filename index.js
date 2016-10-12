var duration = { d: 40, h: 1, m: 1, s: 5 },
    sf = 120,
    maxD = 2,
    maxH = 24,
    maxM = 60, 
    maxS = 60;

setInterval(function() {
  $('.d').html(duration.d);
  $('.h').html(duration.h);
  $('.m').html(duration.m)
    .attr('data-t', duration.m - 1);
  $('.s').html(duration.s)
    .attr('data-t', duration.s - 1);
  duration.s--;
  $('.s').addClass('flip');
  $('.m').removeClass('flip');
  $('.id .circle').css('stroke-dashoffset', sf-(duration.d*(sf/maxD)));
  $('.ih .circle').css('stroke-dashoffset', sf-(duration.h*(sf/maxH)));
  $('.im .circle').css('stroke-dashoffset', sf-(duration.m*(sf/maxM)));
  $('.is .circle').css('stroke-dashoffset', sf-(duration.s*(sf/maxS)));
  if (duration.s === 58) {
    $('.m').addClass('flip');
  }
  if (duration.s === 0) {
    duration.m--;
    duration.s = 59;
    if (duration.m === 0) {
      duration.h--;
      duration.m = 59
    }
  }
}, 1000);
