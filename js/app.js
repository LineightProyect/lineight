$(document).foundation()

$(document).ready(function () {
    $("[alt='www.000webhost.com']").remove();
});


$('[data-toggle-dia]').click(function (ev) {
    const panel = $(this).data('toggleDia')
    $('#services-tabs').foundation('selectTab', panel)
})

const $offCanvas = $('#offCanvas')
$offCanvas.find('li').click(function (ev) {
    $offCanvas.foundation('close')
})
