$(document).ready(function () {
    
    $('#pBtn').click(function () {
            $('.porbtn').toggleClass('partyInvite');
        })

    $('#pBtn').click(function () {
        
        $('.partyInvite').after('<p class="addon">Let\'s party. Join us at the famous Saint Rocke in hermosa beach to celebrate 50 weird years. Enjoy a few hours of some of our favorite rock,dance funk, and pop songs. Played by the group of some of LA\'s finest session musicians. Eat, drink, eat, drink some more. Bang your head. Shake your booty. See you there. <br> - Chris & Kimm</p>')

            $('.porbtn').toggleClass('partyInvite');
    })

});