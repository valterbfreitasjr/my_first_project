function alertPage(phrase) {
    var name = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var contato = document.getElementById("contato").value;
    console.log(name);
    console.log(email);
    console.log(contato);
    alert(phrase + ' ' + name);
}