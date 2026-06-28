document.addEventListener("DOMContentLoaded", function () {

    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(btn => {
        btn.addEventListener("click", function () {

            const panel = this.nextElementSibling;

            // schließen wenn offen
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }

        });
    });

    /* SEARCH */
    const searchInput = document.getElementById("search");
    const rules = document.querySelectorAll(".rule");

    searchInput.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        rules.forEach(rule => {
            rule.style.display = rule.innerText.toLowerCase().includes(value)
                ? "block"
                : "none";
        });
    });

    /* ACCEPT BUTTON */
    const acceptBtn = document.getElementById("acceptBtn");

    if (acceptBtn) {

        acceptBtn.addEventListener("click", function () {
            this.innerText = "✔ Regelwerk akzeptiert";
            this.style.background = "#2e7d32";
            this.disabled = true;

            localStorage.setItem("rulesAccepted", "true");
        });

        if (localStorage.getItem("rulesAccepted") === "true") {
            acceptBtn.innerText = "✔ Bereits akzeptiert";
            acceptBtn.style.background = "#2e7d32";
            acceptBtn.disabled = true;
        }
    }

});