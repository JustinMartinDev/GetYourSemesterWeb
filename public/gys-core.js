//var instance = M.Tabs.init(document.getElementById("#tab"), options);
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#avatar-img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#avatar-input-file").change(function() {
    readURL(this);
});

