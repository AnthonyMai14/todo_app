var arrayTask = [];

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
            arrayTask.push('<input type="checkbox" class="incomplete" name="' + numInArray + '"> <label for="' + numInArray + '">' + newTaskValue + '</label><br>');
            
            alert(arrayTask[0]);

            //hide input text
            newTask.hide();
            //set newTask to null
            newTask.val('');

            for (var i = 0; i < arrayTask.length; ++i) {
                $('main').append(arrayTask[i]);
            }
        }

    });

});