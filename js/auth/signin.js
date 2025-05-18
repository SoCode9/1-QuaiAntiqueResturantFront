const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    //Ici, il faudra appeler l'API pour vérifier les identifiants en BDD

    if (mailInput.value = "test@mail.com" && passwordInput.value == "Test1234!") {

        const token = "lafbwEafbiflIEBFfqiflBfEFlfbö+"; //Il faudra récupérer le vrai token
        setToken(token); //Fonction pour placer le tocken dans un cookie
        //placer ce tocken en cookie


        setCookie(RoleCookieName, "admin", 7); // Set the role cookie for 7 days

        // Redirection vers la page d'accueil
        window.location.replace("/");
    }
    else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}