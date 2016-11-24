// Write your Javascript code.
$(document)
    .ready(function () {
        //login js
        $('.ui.selection.dropdown').dropdown();
        $('.ui.menu .ui.dropdown').dropdown({
            on: 'hover'
        });

        //adimn js
        $('.ui.accordion')
            .accordion({
                selector: {
                    trigger: '.title'
                }
            });
    });
