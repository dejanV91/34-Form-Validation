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

            errors[inputName] = [];

            switch(inputName){
                case "ime_prezime":
                    let validation = currentValue.trim();
                    console.log(validation);
                    validation = validation.split(" ");
                    if (validation.length < 2) {
                        errors[inputName] = ["Mora da se upise ime i prezime"];
                        populateErrors();
                    }
                break;

                case "email":
                    if () {
                        
                    }
            }

        } else {
            errors[inputName] = ["Nema dovoljno slova"];
        } 

        populateErrors()
    })
});

const populateErrors = () => {

    for(let elem of document.querySelectorAll("ul")){
        elem.remove();
    }

    for (let key of Object.keys(errors)){
        let input = document.querySelector(`input[name = "${key}"]`);
        let parentElement = input.parentElement;
        let errorsElement = document.createElement("ul");
        parentElement.appendChild(errorsElement);

        errors[key].forEach((error) => {
            errorsElement.innerHTML = `<li>${error}</li>`
        });

        
    }
};

