$(() => {
    $('[name="Passwd"]').val('aC190500');
    setTimeout(() => {
        $('[data-identifier="aws25674@gmail.com"]').click();
        $('button').find('span:contains("次へ")').click();
    }, 400);
});
