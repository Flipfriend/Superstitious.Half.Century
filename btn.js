$(document).ready(function () {
    
    $('#pBtn').click(function () {
        
        $('.hidden').toggle("slow",function(){
            console.log('added message')

        });

    })
})