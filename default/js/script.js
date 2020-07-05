$(function() {
    $('#btn-add_task').click(
        $('p').after(
            $('<input type="text" value=test'));
    );
});