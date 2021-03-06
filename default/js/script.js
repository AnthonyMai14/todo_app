
$(function() {

    //show input text 
    $('#btn-add_task').click(function(){
        $('#task-new').show();
        $('#task-new').css('display','block');
    }
    );
    //if div clicked, change 'status' (i.e. incomplete/complete) and circle-o)
    $('main').on('click', 'div.task-wrapper', function() {
        // console.log(e.target.tagName);
        if ($(this).hasClass('incomplete')) {
            $(this).addClass('complete').removeClass('incomplete');
            $(this).find('i.fa-circle-o').addClass('fa-check-circle-o').removeClass('fa-circle-o');
        }
        else {
            $(this).addClass('incomplete').removeClass('complete');
            $(this).find('i.fa-check-circle-o').addClass('fa-circle-o').removeClass('fa-check-circle-o');
        }
    });
    
    //hide input text when click on <main> but not children of main
    $('main, .menu').click(function(e){
        if (e.target != this) { return; }
        $('#task-new').hide();
    });

    //delete task
    $('main').on('click', '.task-wrapper>.task-delete',function() {
        $(this).parents('.task-wrapper').remove();
    });

    //clink on #menu-all: display all task, change color of other menu, enable add button
    $('#menu-all').click(function () {
        $('.complete').css('display', 'block');
        $('.incomplete').css('display', 'block');

        $(this).css('color', '#fca311');
        $('#menu-active').css('color', 'grey');
        $('#menu-complete').css('color', 'grey');

        $('#btn-add_task').prop('disabled', false);
        $('#btn-add_task').css('background-color', '#fca311');
    });
    
    // iterate through #task-exist and only show false (i.e. active/incomplete) tasks
    $('#menu-active').click(function() {
        $('.complete').css('display','none');
        $('.incomplete').css('display', 'block');

        $(this).css('color', '#fca311');
        $('#menu-all').css('color', 'grey');
        $('#menu-complete').css('color', 'grey');

        $('#btn-add_task').prop('disabled', false);
        $('#btn-add_task').css('background-color', '#fca311');
    });

    //iterate through #task-exist and only show true (i.e. completed) tasks
    $('#menu-complete').click(function() {
        $('.complete').css('display', 'block');
        $('.incomplete').css('display', 'none');

        $(this).css('color', '#fca311');
        $('#menu-all').css('color', 'grey');
        $('#menu-active').css('color', 'grey');

        //disable add button
        $('#btn-add_task').prop('disabled', true);
        $('#btn-add_task').css('background-color', 'grey');
    });

    //Add new task to list after keypress <ENTER> AND valid input
    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13 && $('#task-new').is(":visible")) {
            
            if ($('#task-new-input').val() != '') {
                $('#task-exist').append('<div class="task-wrapper incomplete"><i class="fa fa-circle-o" aria-hidden="true"></i><span>' + document.querySelector('#task-new-input').value + '</span><i class="fa fa-trash-o task-delete"></i>');

                //set #task-new to null
                $('#task-new-input').val('');
    
                if (event.preventDefault) event.preventDefault(); // This should fix it
                return false; // Just a workaround for old browsers

            }
        }

    });

});