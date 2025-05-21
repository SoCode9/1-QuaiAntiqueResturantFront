const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");
const formSignin = document.getElementById("signinForm");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    let dataForm = new FormData(formSignin);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json"); //souhaite envoyer du JSON, cf documentation api

    const raw = JSON.stringify({
        "username": dataForm.get("email"),
        "password": dataForm.get("mdp")
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(apiURL + "login", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                mailInput.classList.add("is-invalid");
                passwordInput.classList.add("is-invalid");
            }
        })
        .then(result => {
            const token = result.apiToken; // Récupération du token, selon documentation API
            setToken(token); //Fonction pour placer le tocken dans un cookie
            //placer ce tocken en cookie

            setCookie(RoleCookieName, result.roles[0], 7); // Set the role cookie for 7 days

            // Redirection vers la page d'accueil
            window.location.replace("/");
        })
        .catch((error) => console.error(error));
}