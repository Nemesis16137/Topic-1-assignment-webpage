// Import stylesheets
import './style.css';

$('input').on('change', function () {
    var v = $(this).val();
    $('div').css('font-size', v + 'px')
    $('span').html(v);
});
