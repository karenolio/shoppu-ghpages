$(document).ready(function() {

function addListItem() { /*when you add an item to the list*/
    
     var write = $('#newItem').val(); /*get the values of form elements */
     var list = $('#itemList'); /*in #bottom - this holds the list of items entered in #newItem*/
     var item = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + write + '</span><button class="delete">&#x2717</button></li>'); /*dingbats - first is check; second is check*/
     var newItem = $("#newItem");

    /* if (write.length === 0  || write.length > 33) {
        return false;
    }*/
    
    list.append(item); /*append check and X marks to #itemList*/
    $(newItem).val(''); /*get val for input*/
}

function deleteItem() {

    $(this).parent().remove();
}

function highlightItem() { /*item changes color after you click check mark*/

    $(this).parent().toggleClass('highlight');
}

$(function() { /*IS THIS FUNCTION CALLING ON THAT FIRST FUNCTION OR IS THIS AN ENTIRELY NEW ONE?*/

    var add = $('#addItem'); /*the plus sign is #addItem*/
    var newItem = $('#newItem'); /*the form*/
    var list = $('#itemList'); 
    
    add.on('click', addListItem);
    list.on('click', '.checkbox', highlightItem);
    list.on('click', '.delete', deleteItem);
    newItem.on('keypress', function (e) {
        if (e.which == 13) {
            addListItem();
        }
    });
});

});

