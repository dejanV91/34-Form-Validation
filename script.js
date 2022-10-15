let inputs = document.querySelectorAll("input");

let errors = {
    "ime_prezime" : [],
    "korisnicko_ime": [],
    "email" : [],
    "lozinka" : [],
    "ponovi_lozinku" : [] 
}

inputs.forEach((element) => {
    element.addEventListener("change", (e) => {
        let currentInput = e.target;
        let currentValue = currentInput.value;
        let inputName = currentInput.getAttribute("name");

        if (currentValue.length > 4) {
            console.log("top");
        } else {
            errors[inputName] = ["Nema dovoljno slova"];
        } 

        populateErrors()
    })
});

const populateErrors = () => {
    for (let key of Object.keys(errors)){
        let input = document.querySelector(`input[name = "${key}"]`);

    }
};