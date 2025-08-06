const tockenCookieName = "accesstoken";
const RoleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");
const apiURL = "http://127.0.0.1:8000/api/";
const BACKEND_URL = "http://127.0.0.1:8000";

signoutBtn.addEventListener("click", signout);

function getRole() {
    return getCookie(RoleCookieName);
}

function signout() {
    // Effacer le cookie du token
    eraseCookie(tockenCookieName);
    eraseCookie(RoleCookieName);
    window.location.reload();
}

function setToken(token) {
    setCookie(tockenCookieName, token, 7); // Set the token cookie for 7 days)

}

function getToken() {
    return getCookie(tockenCookieName);
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (const element of ca) {
        let c = element;
        while (c.startsWith(' ')) c = c.substring(1, c.length);
        if (c.startsWith(nameEQ)) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function isConnected() {
    if (getToken() == null || getToken == undefined) {
        return false;
    }
    else {
        return true;
    }
}



/**
 * disconnected
 * connected (admin ou client)
 *      - admin
 *      - client
 */
function showAndHideElementsForRoles() {
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll("[data-show]");

    allElementsToEdit.forEach(element => {
        switch (element.dataset.show) {
            case 'disconnected':
                if (userConnected) {
                    element.classList.add("d-none"); //BS display none
                }
                break;
            case 'connected':
                if (!userConnected) {
                    element.classList.add("d-none"); //BS display none
                }
                break;
            case 'admin':
                if (!userConnected || role != "admin") {
                    element.classList.add("d-none"); //BS display none
                }
                break;
            case 'client':
                if (!userConnected || role != "client") {
                    element.classList.add("d-none"); //BS display none
                }
                break;
        }
    })
}



function sanitizeHtml(text) {
    const tempHtml = document.createElement('div');
    tempHtml.textContent = text;
    return tempHtml.innerHTML; //sert de récupérer contenu du div au format texte assaini
}


function getInfosUser() {
    let myHeaders = new Headers();
    myHeaders.append("X-AUTH-TOKEN", getToken());

    let requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    fetch(apiURL + "account/me", requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log("Impossible de récupérer les infos utilisateur");
            }
        })
        .then(result => {
            return result;

        })
        .catch(error => {
            console.error("Erreur lors de la récupération des infos utilisateur", error);
        });
}

