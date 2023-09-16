
let depositValue = Number(prompt("Enter the value to deposit:"));
let withdrawValue = Number(prompt("Enter the value to withdraw:"));
let bank_name = prompt("Enter the name of the bank:");

let person = {
    personName: "Joe",
    last_name: "Bro",
    date_of_birth: "01.10.2000.",
    bank_accounts: [
        { name: "Swedbank", country: "Latvia", numberOfClients: 100000, balance: 2500000000 },
        { name: "UniCredit", country: "Italy", numberOfClients: 200000, balance: 3000000000 },
        { name: "DZ Bank", country: "Germany", numberOfClients: 500000, balance: 6000000000 }
    ],
    deposit: function () {
        if (bank_name === this.bank_accounts[0].name) {
            return this.bank_accounts[0].balance + depositValue
        }
        else if (bank_name === this.bank_accounts[1].name) {
            return this.bank_accounts[1].balance + depositValue
        }
        else if (bank_name === this.bank_accounts[2].name) {
            return this.bank_accounts[2].balance + depositValue
        }
        return 0;
    },
    withdraw: function () {
        if (bank_name === this.bank_accounts[0].name) {
            return this.bank_accounts[0].balance - withdrawValue
        }
        else if (bank_name === this.bank_accounts[1].name) {
            return this.bank_accounts[1].balance - withdrawValue
        }
        else if (bank_name === this.bank_accounts[2].name) {
            return this.bank_accounts[2].balance - withdrawValue
        }
        return 0;
    }
}

//console.log(person.bank_accounts);
console.log(person.deposit());
console.log(person.withdraw());



// function getAge() {
//     const dateOfBirth_element = this.document.getElementById("date_of_birth");
//     const input_value = dateOfBirth_element.value;
//     alert(input_value);
// }


// function onDone() {
//     const name_element = this.document.getElementById("name");
//     const input_value = name_element.value;
//     alert("Hello, " + input_value);
// }


// let person = {
//     name: "Paula",
//     lastName: "Miezāka",
//     getFullName: function() {
//         return this.name + " " + this.lastName; // using keywords THIS we can acess the current object from the inside
//     }
// }


// const my_person = {};
// my_person.name = "Paula";
// my_person.last_name = "Miezāka";
// my_person.full_name = function () {
//     return this.name + " " + this.last_name;
// }
