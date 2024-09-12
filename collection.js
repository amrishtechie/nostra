document.addEventListener("DOMContentLoaded", function() {
    var inp = document.querySelector(".inputbox");
    var sbox = document.querySelector(".searchimages");
    var di = sbox.querySelectorAll("div");

    inp.addEventListener("keyup", function(event) {
        var etv = event.target.value.toUpperCase();

        di.forEach(function(item) {
            var pname = item.querySelector("p").textContent;
            if (pname.toUpperCase().indexOf(etv) === -1) {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        });
    });
});
