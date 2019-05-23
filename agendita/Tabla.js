import Contactos from "./Contactos.js";

export default class Tabla {
    constructor(tableAgenda){
        this._tableAgenda = tableAgenda;
        this._taller2 = [];
        this._initTables2();
    }

    _initTables2() {
        //localStorage.removeItem("taller2");
        let taller2 = JSON.parse(localStorage.getItem("taller2"));
        if(!taller2) {
        return;
        }
        taller2.forEach( (Contacto, index) => {
        console.log(Contacto);
        Contacto.birthday = new Date(Contacto.birthday);
        this._addContacto(new Contactos(Contacto));
        });
    }

    _addEditDeleteToRow(row, Contacto) {
        let btnDelete = document.createElement("input");
        btnDelete.type = "button";
        btnDelete.value = 'Eliminar';
        btnDelete.className = 'btn btn-danger';
    
        row.cells[5].innerHTML = '';
        row.cells[5].appendChild(btnDelete);
        btnDelete.addEventListener('click', () => {
            this._editRow(row, Contacto);
        });
    }
    
    _addContacto(Contacto) {
        let row = this._tableAgenda.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellCel = row.insertCell(1);
        let cellBirthday = row.insertCell(2);
        let cellAge = row.insertCell(3);
        let cellCorreo = row.insertCell(4);
        row.insertCell(5);


        cellName.innerHTML = Contacto.name;
        cellCel.innerHTML = Contacto.cel;
        cellBirthday.innerHTML = Contacto.getBirthdayAsString();
        cellAge.innerHTML = Contacto.getAge();
        cellCorreo.innerHTML = Contacto.correo;
        this._addEditDeleteToRow(row, Contacto);

        let objContacto = {
            name: Contacto.name,
            cel: Contacto.cel,
            birthday: Contacto.birthday,
            correo: Contacto.correo,
        }
            this._taller2.push(objContacto);
    }
    
_findCorreo(correo){
    let found = -1

    this._taller2.forEach((Contacto, index)=>{
        if(Contacto.correo === correo){
            found = index;
            return;
        }
    });
    return found;
}



addEmployee2(Contacto) {
    let found = this._findCorreo(Contacto.correo);
    if (found >= 0){
        swal.fire({
            type: "error",
            tittle: "error",
            text: "esta persona ya esta registrada"
        });
        return;
    }
    this._addContacto(Contacto);
    localStorage.setItem("taller2", JSON.stringify(this._taller2));
    console.log(localStorage.getItem("taller2"));
}

}