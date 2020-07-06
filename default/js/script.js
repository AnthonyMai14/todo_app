var arrayTask = [];

function Task(description, status) {
    this.description = description;
    this.status = status;
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

    //Add new task to list after keypress <ENTER> AND valid input
    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13 && 
            newTask.is(":visible") &&
            newTask.val() != null && newTask.val() != '') {

            var newTaskValue =  document.querySelector('#task-new-input').value;
            var numInArray = "arrNum" + (arrayTask.length);
            arrayTask.push(new Task(newTaskValue, 'incomplete'));

            //hide input text
            newTask.hide();
            //set newTask to null
            newTask.value = "";

            $('#task-exist').append(arrayTask[arrayTask.length-1].description);
            $('#task-exist').append('<br>');
        }

    });

});