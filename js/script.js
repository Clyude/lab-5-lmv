document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const status = form.querySelector(".form-status");
            if (status) {
                status.textContent = "Дані форми відправлено. Ми зв'яжемося з вами найближчим часом.";
            }

            form.reset();
        });
    });
});
