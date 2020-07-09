var arrayTask = [];
var tempHTML = "";

function Task(description, status) {
    this.description = description;
    this.status = status;

    status = false;
}

// if (arrayTask.length !== 0) {
//     $.each(arrayTask, function (indexObj) {
//         var newTaskID = "arrNum" + indexObj;
//         tempHTML = "bob";
//         tempHTML = '<div class="task-wrapper' + newTaskID + '"><input type="checkbox" class="';
//         tempHTML += (index.status === false) ? "incomplete " : "complete ";
//         tempHTML += (newTaskID + '"><label for="' + newTaskID + '">' + indexObj.description + '</label><img src="default/img/trashIcon.png" class="task-delete"></div>');
//         alert("tempHTML");

//     });
//     $('#task-exist').append(tempHTML);
// }

$(function() {
    var newTask = $('.task-new');

    //show input text 
    $('#btn-add_task').click(function(){
        newTask.show();
    }
    );

    $('input[type=checkbox]checked').each(function() {
        this.addClass('complete').removeClass('incomplete');
    });

    $('input[type=checkbox]unchekced').each(function () {
        this.addClass('incomplete').removeClass('complete');
    });
    
    //hide input text when click on <main> but not children of main
    $('main').click(function(e){
        if (e.target != this) { return; }
        newTask.hide();
    });

    //delete task
    $('.task-wrapper > .task-delete').click(function(e) {
        this.parentElement.remove();
    });
        //retrieve ID
        //delete div
        //delete that index from the array

    $('#menu-all').click(function () {
        $('.completed').parentElement.css('display', 'show');
        $('.incomplete').parentElement.css('display', 'show');
    });
    
    // iterate through #task-exist and only show false (i.e. active/incomplete) tasks
    $('#menu-active').click(function() {
        $('.completed').parentElement.css('display','hide');
        $('.incomplete').parentElement.css('display', 'show');
    });

    //iterate through #task-exist and only show true (i.e. completed) tasks
    $('#menu-completed').click(function() {
        $('.completed').parentElement.css('display', 'show');
        $('.incomplete').parentElement.css('display', 'hide');
    });

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
            //set .task-new to null
            $('.task-new').val('');
            
            var newTaskID = "arrNum" + (arrayTask.length - 1);
            var newTaskObj = arrayTask[arrayTask.length - 1];
            $('#task-exist').append('<div class="task-wrapper ' + newTaskID + '"><input type="checkbox" class="incomplete ' + newTaskID + '"><label for="' + newTaskID + '">' + newTaskObj.description + '</label><img src="default/img/trashIcon.png" class="task-delete ' + newTaskID + '">');

            if (event.preventDefault) event.preventDefault(); // This should fix it
            return false; // Just a workaround for old browsers
        }

    });

});