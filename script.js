const ecran = document.getElementById('ecran');
const boutons = document.querySelectorAll('button');

boutons.forEach(bouton => {

    bouton.addEventListener('click', () => {

        if (bouton.id === 'egal') {

            ecran.value = eval(ecran.value);

        } else if (bouton.id === 'clear') {

            ecran.value = '';

        } else if (bouton.id === 'delete') {

            ecran.value = ecran.value.slice(0, -1);

        } else {

            ecran.value += bouton.innerText;

        }

    });

});