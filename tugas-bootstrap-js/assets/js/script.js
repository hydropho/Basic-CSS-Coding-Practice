$(document).ready(function () {
    console.log("OK");

    $("#emailForm").submit(function (e) {
        e.preventDefault();
        const email = $("input", this).val();
        $(".alert").removeClass("d-none");
        $("strong", ".alert").text(email);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    $(".side-img a").click(function (e) {
        e.preventDefault();
        const newAttr = $("img", this).attr('src')
        $(".main-img img").attr('src', newAttr)
    });

    $(".desc-img button").click(function (e) {
        e.preventDefault();
        window.location.href = "shipping.html";
    });

    $("#form-checkout").submit(function (e) {
        e.preventDefault();

        // Take value
        const firstName = $("#firstName", this).val();
        const lastName = $("#lastName", this).val();
        const name = firstName + " " + lastName;
        const address = $("#address", this).val();

        // Change display
        $("#form-container").addClass("d-none");
        $("#checkout").removeClass("d-none");

        // Add value
        $("h5", "#checkout").text("Terimakasih, " + name);
        $("p", "#checkout").text("Paket akan dikirim ke " + address);
    });

    $("button", "#checkout").click(function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });
});


