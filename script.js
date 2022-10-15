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

                    let sumLetters = 0;
                    let numberLetters = validation.split("");
                    numberLetters.forEach((letters)=>{
                        if(letters !== " "){
                            sumLetters += letters.length;
                        }
                    })

                    validation = validation.split(" ");
                    if (validation.length < 2) {
                        errors[inputName] = ["Mora da se upise ime i prezime"];
                    }
                    if(sumLetters < 5){
                        errors[inputName] = ["Mora da ima najmanje 5 karaktera"];
                    }
                break;

                case "email":
                    if (!validateEmail(currentValue)) {
                        errors[inputName] = ["Email nije dobar"]
                    }
                break;

                case "ponovi_lozinku":
                    let lozinka = document.querySelector("input[name='lozinka']").value;
                    if (currentValue !== lozinka) {
                        errors[inputName] = ["Ponovljena lozinka nije ista kao lozinka"];
                    }
                break;
            }

        } else {
            errors[inputName] = ["Mora da ima najmanje 5 karaktera"];
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


const validateEmail = (email) => {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true
    }else{
        return false
    }
};
