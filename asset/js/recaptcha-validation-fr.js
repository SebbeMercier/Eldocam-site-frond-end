function validateRecaptcha() {
    const response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("Veuillez compléter le reCAPTCHA avant de soumettre le formulaire.");
        return false;
    }
    return true;
}