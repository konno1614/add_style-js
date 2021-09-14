$(function () {
    /**
     * タブ切り替え
     */
    $('.js-tab-button').click(function () {
        var id = $(this).data('id')

        $('.js-tab-button:not([data-id="' + id + '"])').removeClass('active')
        $('.js-tab-button[data-id="' + id + '"]').addClass('active')

        $('.js-tab:not([data-id="' + id + '"])').attr('hidden', 'hidden')
        $('.js-tab[data-id="' + id + '"]').removeAttr('hidden')
    })
})
