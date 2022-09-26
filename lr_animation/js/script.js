const submit = document.getElementById("enter");

submit.addEventListener("click", function(e) {
    //modal.show();
    //return confirm('Дійсно відправити цю форму?');
    if (confirm("Дійсно відправити цю форму?")){}
    else {
    alert("Дані не надіслано");
}
});

