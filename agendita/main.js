import Tabla from "./Tabla.js";
import Contactos from "./Contactos.js";

class Main {
    constructor() {
        this._agenda = new Tabla(document.querySelector("#agenda"));

        document.querySelector("#btnAdd").addEventListener("click",() => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if (form.checkValidity() === true) {
            
            let name = document.querySelector("#name").value;
            let cel = document.querySelector("#cel").value;
            let sBirthday = document.querySelector("#birthday").value;
            sBirthday = sBirthday.split('-');

        
            let birthday = new Date(sBirthday[0], sBirthday[1], sBirthday[2]);

            let correo = document.querySelector("#correo").value;




            let Contacto = new Contactos(name, cel, birthday, correo);

            this._agenda.addContacto(Contacto);
            }
        });
    }


}

new Main(); 