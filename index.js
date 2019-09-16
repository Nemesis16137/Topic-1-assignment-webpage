// Import stylesheets
import './style.css';
import $ from 'jquery';

$('input').on('change', function () {
    var v = $(this).val();
    $('div').css('font-size', v + 'px')
    $('span').html(v);
});

$('input').on('change', function () {
    var v = $(this).val();
    $('div').css('font-size', v + 'px')
    $('span').html(v);
});