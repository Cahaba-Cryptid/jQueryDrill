$('#submitBtn').click(function () {
    event.preventDefault();
    let newLi = $('<li class="targetLi">' + $("#submitBox").val() + '</li>');
    newLi.appendTo('#targetUl');
    newLi.click(function () {
        newLi.css('color', randoRainbow());
        newLi.dblclick(function(){
            newLi.remove();
        });
    });
    //$("<h2 id='targerH2'>" + $("#submitBox").val() + "</h2>").appendTo('#targetDiv');
});

$('#submitBtn').attr('disabled', true);

$('#submitBox').keyup(function () {
    if ($('#submitBox').val().length != 0) {
        $('#submitBtn').attr('disabled', false);
    } else {
        $('#submitBtn').attr('disabled', true);
    }
});

$('body').append('<div id="targetDiv"></div>');

$('body').append('<ul id="targetUl"></ul>');

function randoRainbow() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
} 

