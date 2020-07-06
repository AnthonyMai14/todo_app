var array_task = [];
$(function() {
    var newTask = $('.task-new');

    $('#btn-add_task').click(function(){
        newTask.show();
    }
    );
    
    // $('main').click(function(){
    //     newTask.hide();
    // });

    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13 && newTask.is(":visible")) {
            alert(document.querySelector('#task-new-input').value);
        }
    });
});