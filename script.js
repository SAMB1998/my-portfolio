 
function showProjects() {
    document.getElementById('projects').style.display = 'block'; // Shows the projects section
    document.getElementById('contact').style.display = 'none';   // Hides the contact section
}

function showContact() {
    document.getElementById('contact').style.display = 'block';  // Shows the contact section
    document.getElementById('projects').style.display = 'none';  // Hides the projects section
}
// Lorsque le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', function () {

    // Sélectionnez le formulaire
    var contactForm = document.getElementById('contact-form');
    
    // Fonction à exécuter lors de la soumission du formulaire
    contactForm.onsubmit = function(event) {
        // Empêcher le formulaire de soumettre normalement
        event.preventDefault();

        // Création d'un objet FormData à partir du formulaire
        var formData = new FormData(contactForm);

        // Affichez les valeurs du formulaire dans la console pour débogage
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ': ' + pair[1]);
        }

        // Ici, vous pouvez ajouter le code pour envoyer les données à un serveur
        // Par exemple, en utilisant fetch() ou XMLHttpRequest
        // ...
    };

});
// ...
// À l'intérieur de la fonction onsubmit, après avoir créé `formData` :

fetch('chemin/vers/votre/serveur', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    console.log(data); // Réponse du serveur
    // Afficher un message de réussite ou traiter la réponse comme nécessaire
})
.catch(error => {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
});
// Vous pouvez ajouter des contrôles JavaScript si vous voulez que le défilement s'arrête au survol, par exemple.
const sliderContainer = document.querySelector('.services-container');

sliderContainer.addEventListener('mouseover', () => {
    sliderContainer.style.animationPlayState = 'paused';
});

sliderContainer.addEventListener('mouseout', () => {
    sliderContainer.style.animationPlayState = 'running';
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Fonction pour gérer la soumission du formulaire
    function handleFormSubmit(e) {
        e.preventDefault(); // Empêche le formulaire de soumettre de manière traditionnelle

        // Création d'un objet FormData pour capturer les données du formulaire
        var formData = new FormData(e.target);

        // Conversion des données du formulaire en un objet
        var formObject = {};
        formData.forEach(function(value, key){
            formObject[key] = value;
        });

        // Affichage de l'objet de formulaire dans la console
        console.log('Form Data Submitted: ', formObject);

        // Ici, vous pourriez également envoyer les données du formulaire à un serveur
        // en utilisant `fetch` ou `XMLHttpRequest`.
    }

    // Sélection du formulaire par son ID et ajout de l'événement 'submit'
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', handleFormSubmit);
});

var app = new Vue({
    el: '#app',
    data: {
        // Vos données ici
    },
    methods: {
        // Vos méthodes ici
    }
});
data: {
    services: [
        { id: 1, title: "Full Stack Websites", description: "Je peux créer des sites web full stack grâce à NextJS et MongoDB." },
        { id: 2, title: "UI/UX Design", description: "Je peux créer des interfaces engageantes et conviviales avec Figma." },
        // Ajoutez d'autres services ici
    ]
}
 
 

