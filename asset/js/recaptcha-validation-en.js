function validateRecaptcha() {
    const response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("Please complete the reCAPTCHA before submitting the form.");
        return false; // Empêche l'envoi du formulaire
    }
    return true;
}