var launch = '03/03/2017';

$(function() {
    timeRemaining(launch);
    $('#game-table').DataTable();
});

function timeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60  % 60));
    var hours = Math.floor( t/(1000*60*60) % 24);
    var days = Math.floor ( t/(1000*60*60*24) );
    console.log($('#count').text());
    $('#count').text('Days: ' + days + ' Hours: ' + hours);
    console.log('Days: ' + days + ' Hours: ' + hours);
}