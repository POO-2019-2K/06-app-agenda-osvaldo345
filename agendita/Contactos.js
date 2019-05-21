export default class Contactos {
    constructor(name, cel, birthday, correo) {
        this._name =  name.toUpperCase();
        this._cel = cel;
        this._birthday = birthday;
        this._correo = correo;

    }

    get name(){
        return this._name;
    }

    get cel(){
        return this._cel;
    }
    
    get correo(){
        return this._correo;
    }

    getBirthdayAsString(){
        let d = this._birthday.getDate()+ "/" + this._birthday.getMonth() + "/" + this._birthday.getFullYear();
        return d;
    }

    get birthday(){
        return this._birthday;
    }

////////////////////calculo de la edad//////////////////////////////
    getAge() {
        let oneDay= (24*60*60*1000);
        let oneYear = oneDay * 365;
        let differenceMs = Math.abs(new Date() - this._birthday);
        return Math.round(differenceMs / oneYear);
        }
}