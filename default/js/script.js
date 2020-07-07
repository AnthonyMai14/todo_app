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
    
    //hide input text when click on <main> but not children of main
    $('main').click(function(e){
        if (e.target != this) { return; }
        newTask.hide();
    });

    //iterate through #task-exist and only show false (i.e. active/incomplete) tasks
    // $('#menu-active').click(function() {
    //     $.each(arrayTask, function (index, description) {

    //     });
    // }));

    //iterate through #task-exist and only show true (i.e. completed) tasks
    // $('#menu-completed').click(function() {

    // });

    //Add new task to list after keypress <ENTER> AND valid input
    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13 && 
            newTask.is(":visible") &&
            newTask.val() != null && newTask.val() != '') {

            var newTaskValue =  document.querySelector('#task-new-input').value;
            arrayTask.push(new Task(newTaskValue, false));

            //hide input text
            newTask.hide();
            //set newTask to null
            newTask.value = "";
            
            var newTaskID = "arrNum" + (arrayTask.length - 1);
            var newTaskObj = arrayTask[arrayTask.length - 1];
            $('#task-exist').append('<div class="task-wrapper ' + newTaskID + '"><input type="checkbox" class="incomplete ' + newTaskID + '"><label for="' + newTaskID + '">' + newTaskObj.description + '</label><img src="default/img/trashIcon.png" class="task-delete">');
        }

    });

});