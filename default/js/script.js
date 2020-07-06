var arrayTask = [];

function Task(description, status) {
    this.description = description;
    this.status = status;

    status = false;
}

$(function() {
    var newTask = $('.task-new');

    //show input text 
    $('#btn-add_task').click(function(){
        newTask.show();
    }
    );
    
    // $('main').click(function(){
    //     newTask.hide();
    // });

    //only show false (i.e. active/incomplete) tasks
    // $('#menu-active').click(function() {
    //     $.each(arrayTask, function (index, description) {

    //     });
    // }));

    //only show true (i.e. completed) tasks
    // $('#menu-completed').click(function() {

    // });

    //Add new task to list after keypress <ENTER> AND valid input
    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13 && 
            newTask.is(":visible") &&
            newTask.val() != null && newTask.val() != '') {

            var newTaskValue =  document.querySelector('#task-new-input').value;
            var numInArray = "arrNum" + (arrayTask.length);
            arrayTask.push(new Task(newTaskValue, false));

            //hide input text
            newTask.hide();
            //set newTask to null
            newTask.value = "";
            
            var newTaskObj = arrayTask[arrayTask.length - 1];
            $('#task-exist').append('<div class="task-wrapper"><input type="checkbox" class="incomplete" id="' + newTaskObj + '"><label for="' + newTaskObj + '">' + newTaskObj.description + '</label><br>');
        }

    });

});