const form = document.getElementById('form')


//PARTIE REGEX
function checkForm(event) {

    event.preventDefault()

    //déclaration de constantes qui récupèrent les inputs password
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    //regex qui précise que le mot de passe doit contenir  au moins {3} occurences de lettres de a-z et au moins {3} occurences de 0-9
    const regex = /[a-z]{3}[0-9]{3}/;
    //constante qui récupère la div qui affiche la non conformité du mot de passe 
    const alerten = document.getElementById('alertbox');

    //si le mot de passe ne respecte pas le regex ,
    if (!password.match(regex)) {
        //alors on affiche que c'est pas conforme
        alerten.style.color = 'red';
        alerten.innerText = 'le mot de passe nest pas conforme';

        //et si le mot de passe n'est pas le meme que le confirm,
    } else if (password !== passwordConfirm) {
        //alors on l'indique dans la div
        alerten.style.color = 'red';
        alerten.innerText = 'les mots de passe ne correspondent pas';
        //et si le mot de passe respecte le regex et est égal au confirm,     
    } else if (password.match(regex) && password === passwordConfirm) {
        //alors on envoie le formulaire
        alert("confirmer l'envoi du formulaire")
        form.submit();
    }


}


/*
const regex = /[A-Z]{1}[a-z]{5}[!@#$%^&*]{1}

doit contenir au moins {1} majuscule , au moins {5} minuscules et au moins {1} caractère spécial


{x} = doit contenir au minimum x occurences de la suite de caractères précédants
[a-z] = \
[A-Z] =  =  caractères de a à z en minuscule ou majuscule ou chiffres de 0 à 9
[0-9] = /

*/


//PARTIE CHUCK NORRIS


//on va choper la zone ou on afficheras les blagues
const jokeZone = document.getElementById('jokeZone');
//on chope l'api
const chuckAPI = 'https://api.chucknorris.io/jokes/random'

//on  crée la fonction qui va nous fetch l'api 
function chuckRefresh() {

    fetch(chuckAPI)
        .then((res) => res.json())
        .then(result => {
            //on assigne la blague récupérée à la div
            jokeZone.innerText = result.value
            //log du résultat pour check 
            console.log(result);





        })


}


chuckRefresh();