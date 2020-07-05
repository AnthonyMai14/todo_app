var array_task = [];
$(function() {
    var newTask = $('.task-new');

    $('#btn-add_task').click(function(){
        newTask.show();
    }
    );
    
    $('main').click(function(){
        newTask.hide();
    });

    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            alert('You pressed a "enter" key in somewhere');
        }
    });
});