$(function () {

    // show or hide delivery address in registration form
    $("#sameAddress").click(function() {
        if($(this).prop("checked")) {
            $("#deliveryAddressInformation").removeClass("d-none");
            $(".delivery-address").attr("disabled", false);
        } else {
            $("#deliveryAddressInformation").addClass("d-none");
            $(".delivery-address").attr("disabled", true);            
        }
    });
});