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
        if (keycode === 13 && 
            newTask.is(":visible") &&
            newTask.val() != null && newTask.val() != '') {

            var newTaskValue =  document.querySelector('#task-new-input').value;
            array_task.push(newTaskValue);
            

            //hide input text
            newTask.hide();
        }

    });
});