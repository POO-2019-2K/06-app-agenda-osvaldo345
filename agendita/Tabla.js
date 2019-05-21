export default class Tabla {
    constructor(tableAgenda){
        this._tableAgenda = tableAgenda;
    }

    addContacto(Contacto) {
        let row = this._tableAgenda.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellCel = row.insertCell(1);
        let cellBirthday = row.insertCell(2);
        let cellAge = row.insertCell(3);
        let cellCorreo = row.insertCell(4);

        cellName.innerHTML = Contacto.name;
        cellCel.innerHTML = Contacto.Cel;
        cellBirthday.innerHTML = Contacto.getBirthdayAsString();
        cellAge.innerHTML = Contacto.getAge();
        cellCorreo.innerHTML = Contacto.Correo;
    }
}