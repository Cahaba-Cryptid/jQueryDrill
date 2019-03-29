$('#submitBtn').click(function(){
    $('#targetDiv').append('<h2 id=targetH2>' + $('submitBox'.val()) + '</h2>');
});

$('#submitBtn').attr('disabled', true);

$('#submitBox').keyup(function () {
    if ($('#submitBox').val().length != 0)
        $('#submitBtn').attr('disabled', false);
    else
        $('#submitBtn').attr('disabled', true);
});

$('body').append('<div id="targetDiv"></div>');

