// Attend que le contenu de la page soit chargé
document.addEventListener("DOMContentLoaded", function() {
    // Vérifie si la boîte de dialogue de bienvenue a déjà été affichée
    if (!localStorage.getItem('welcomeShown')) {
        // Affiche la boîte de dialogue de bienvenue
        alert("Bienvenue sur Taqwa Shop ! Nous sommes là pour vous aider. N'hésitez pas à nous contacter si vous avez des questions.");
        // Marque la boîte de dialogue de bienvenue comme déjà affichée
        localStorage.setItem('welcomeShown', true);
    }
});
