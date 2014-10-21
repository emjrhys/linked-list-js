$(document).ready(function() {
    var list = new LinkedList();

    function draw() {
        var display = "[";
    
        for (var i = 0; i < list.length; i++) {
            display += " &nbsp;" + list.peek(i).elem;
        }
        display += " &nbsp;]";

        $(".list").html(display);
    }

    draw();
    
    $(".add").click(function() {
        var idx = $(".addindex").val();
        list.insert($(".toinsert").val(), idx);
        draw();
    });

    $(".remove").click(function() {
        var idx = $(".toremove").val();
        list.remove(idx);
        draw();
    });
});
