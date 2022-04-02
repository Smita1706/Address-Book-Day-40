let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
const addressRegex = RegExp('^[a-zA-Z0-9#,]{4,}$');
const cityStateRegex = RegExp('^[a-zA-Z]{4,}$');
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp('^\\d{2}(\\s{1}\\d{10})$');
const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

class Contact {

    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "FIRST NAME is Incorrect ";
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "LAST NAME is Incorrect ";
    }

    get address() {
        return this._address;
    }
    set address(address) {
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "ADDRESS is Incorrect";
    }
    get city() {
        return this._city;
    }
    set city(city) {
        if (cityStateRegex.test(city))
            this._city = city;
        else
            throw "CITY is Incorrect";
    }
    get state() {
        return this._state;
    }

    set state(state) {
        if (cityStateRegex.test(state))
            this._state = state;
        else
            throw "STATE is Incorrect";
    }
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "ZIP is Incorrect";
    }
    get phoneNumber() {
        return this._phoneNo;
    }
    set phoneNumber(phoneNumber) {
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNo = phoneNumber;
        else
            throw "PHONE NUMBER is Incorrect";
    }
    get email() {
        return this._email;
    }
    set email(email) {
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "EMAIL ADDRESS is Incorrect";
    }
}

try{
let contact1 = new Contact("Riya", "Jadhav", "Hadapsar", "Pune","Maharashtra", 412207, '91 9988776655', "riya@gmail.com");
console.log(contact1);
}catch(e){
    console.log(e);
}