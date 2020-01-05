$(document).ready(function () {

    $('#pBtn').click(function () {
        
        $('.addon').toggle("ease in",function(){
            console.log('added message')

        });

    })
})