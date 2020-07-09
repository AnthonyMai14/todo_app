
$(function() {

    //show input text 
    $('#btn-add_task').click(function(){
        $('.task-new').show();
        $('.task-new').css('display','inline');
    }
    );
    //if div clicked, change 'status' (i.e. incomplete/complete) and circle-o)
    $('main').on('click', 'div.task-wrapper', function() {
        // console.log(e.target.tagName);
        if ($(this).hasClass('incomplete')) {
            $(this).addClass('complete').removeClass('incomplete');
            $(this).find('i').addClass('fa-check-circle-o').removeClass('fa-circle-o');
        }
        else {
            $(this).addClass('incomplete').removeClass('complete');
            $(this).find('i').addClass('fa-circle-o').removeClass('fa-check-circle-o');
        }
    });
    
    //hide input text when click on <main> but not children of main
    $('main').click(function(e){
        if (e.target != this) { return; }
        $('.task-new').hide();
    });

    //delete task
    $('.task-wrapper > .task-delete').focus(function() {
        $(this).parentElement.remove();
    });

    $('#menu-all').click(function () {
        $('.completed').css('display', 'block');
        $('.incomplete').css('display', 'block');
    });
    
    // iterate through #task-exist and only show false (i.e. active/incomplete) tasks
    $('#menu-active').click(function() {
        $('.completed').css('display','none');
        $('.incomplete').css('display', 'block');
    });

    //iterate through #task-exist and only show true (i.e. completed) tasks
    $('#menu-completed').click(function() {
        $('.completed').css('display', 'block');
        $('.incomplete').css('display', 'none');
    });

    //Add new task to list after keypress <ENTER> AND valid input
    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 13 && $('.task-new').is(":visible")) {
            
            if ($('#task-new-input').val() != '') {
                $('#task-exist').append('<div class="task-wrapper incomplete"><i class="fa fa-circle-o" aria-hidden="true"></i><span>' + document.querySelector('#task-new-input').value + '</span><img src="default/img/trashIcon.png" class="task-delete">');

                //hide input text
                $('.task-new').hide();
                //set .task-new to null
                $('#task-new-input').val('');
    
                if (event.preventDefault) event.preventDefault(); // This should fix it
                return false; // Just a workaround for old browsers

            }
        }

    });

});