function validateRecaptcha() {
    const response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("Vul de reCAPTCHA in voordat je het formulier verzendt.");
        return false; // Empêche l'envoi du formulaire
    }
    return true;
}