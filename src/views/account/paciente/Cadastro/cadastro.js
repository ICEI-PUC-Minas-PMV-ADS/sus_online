const btn = document.querySelector("#btn-submit");

btn.addEventListener("click", function (fullForm) {

    fullForm.preventDefault();
    alert("Preencha o formulário");

    const Name = document.querySelector("#name");
    const valueName = Name.value;

    const CPF = document.querySelector("#cpf");
    const valueCPF = CPF.value;

    const RG = document.querySelector("#rg");
    const valueRG = RG.value;

    const DtNasc = document.querySelector("#dtnasc");
    const valueDtNasc = DtNasc.value;

    const CNS = document.querySelector("#cns");
    const valueCNS = CNS.value;

    const NomeMae = document.querySelector("#nome-mae");
    const valueNomeMae = NomeMae.value;

    const Endereco = document.querySelector("#endereco");
    const valueEndereco = Endereco.value;

    const CEP = document.querySelector("#cep");
    const valueCEP = CEP.value;

    const N = document.querySelector("#nº");
    const valueN = N.value;

    const Tel = document.querySelector("#tel");
    const valueTel = Tel.value;

    const Email = document.querySelector("#email");
    const valueEmail = Email.value;

    const Senha = document.querySelector("#senha");
    const valueSenha = Senha.value;

    const ConfSenha = document.querySelector("#confsenha");
    const valueConfSenha = ConfSenha.value;

    const PhotoUrl = document.querySelector("#photoUrl");
    const valuePhotoUrl = PhotoUrl.value;

    const print = {
        Name: valueName,
        CPF: valueCEP,
        RG: valueRG,
        DtNasc: valueDtNasc,
        CNS: valueCNS,
        NomeMae: valueNomeMae,
        Endereco: valueEndereco,
        CEP: valueCEP,
        N: valueN,
        Tel: valueTel,
        Email: valueEmail,
        Senha: valueSenha,
        ConfSenha: valueConfSenha,
        PhotoUrl: valuePhotoUrl,

    }

    console.log(print);

});