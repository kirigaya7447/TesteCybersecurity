function enviar(){
    var nome = document.getElementById("nome").value;
    var emailReceb = document.getElementById("email").value;

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    Email.send({
        SecureToken : "439b4b05-f6c0-45f4-83c7-43e5188179b6",
        To : 'cyberusmtst@gmail.com',
        From : "cyberusmtst@gmail.com",
        Subject : "Envio de dados pessoais",
        Body : "Seguem os dados coletados nesta busca:\n" + "Nome: " + nome + "\nE-mail: " + emailReceb
    }).then(
      message => alert(message)
      
    );


    //ECCF228E2B779150AAF080BDE356DFDD0AC7
    //439b4b05-f6c0-45f4-83c7-43e5188179b6
}