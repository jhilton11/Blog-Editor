function execute() {
    console.log("executing......");
    $("#undo").click(function() {
        document.execCommand("undo", false, "");
        console.log("undo clicked");
    });

    $("#redo").click(function() {
        document.execCommand("redo", false, "");
        console.log("redo clicked");
    });

    $("#bold").click(function() {
        document.execCommand("bold", false, "");
        console.log("bold clicked");
    });

    $("#italic").click(function() {
        document.execCommand("italic", false, "");
        console.log("italic clicked");
    });
    
    $("#underline").click(function() {
        document.execCommand("underline", false, "");
        console.log("underline clicked");
    });

    $("#strikethrough").click(function() {
        document.execCommand("strikeThrough", false, "");
        console.log("strikethrough clicked");
    });

    $("#justifyleft").click(function() {
        document.execCommand("justifyLeft", false, "");
        console.log("Justify left clicked");
    });

    $("#justifyright").click(function() {
        document.execCommand("justifyRight", false, "");
        console.log("Justify right clicked");
    });

    $("#justifycenter").click(function() {
        document.execCommand("justifyCenter", false, "");
        console.log("Justify right clicked");
    });

    $("#h1").click(function() {
        document.execCommand("formatBlock", false, "H1");
        console.log("H1 clicked");
    });

    $("#h2").click(function() {
        document.execCommand("formatBlock", false, "H2");
        console.log("H1 clicked");
    });

    $("#superscript").click(function() {
        document.execCommand("superscript", false, "");
        console.log("Superscript clicked");
    });

    $("#subscript").click(function() {
        document.execCommand("subscript", false, "");
        console.log("Subscript clicked");
    });

    $("#insertunorderedlist").click(function() {
        document.execCommand("insertUnorderedList", false, "");
        console.log("Insert Ul clicked");
    });

    $("#insertorderedlist").click(function() {
        document.execCommand("insertOrderedList", false, "");
        console.log("Insert Ol clicked");
    });
}

function echo() {
    var editor = document.getElementById("editor");
    var echodiv = document.getElementById("echodiv");
    console.log(editor.innerHTML);
    echodiv.innerHTML = editor.innerHTML;
}