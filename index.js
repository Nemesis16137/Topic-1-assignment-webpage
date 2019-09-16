// Import stylesheets
import './style.css';
import $ from 'jquery';

$('#slider').on('change', function () {
    var v = $(this).val();
    $('div').css('font-size', v + 'px')
    $('span').html(v);
});

$('#slider2').on('change', function () {
    var v = $(this).val();
    $('.images').css('max-width', v + '%')
    $('span').html(v);
});