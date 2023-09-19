
let bank_name1 = (prompt("Enter the name of the bank to deposit:")).toLowerCase();
let depositValue = Number(prompt("Enter the value to deposit:"));

let bank_name2 = prompt("Enter the name of the bank to withdraw:").toLowerCase();
let withdrawValue = Number(prompt("Enter the value to withdraw:"));

let person = {
    personName: "Joe",
    last_name: "Bro",
    date_of_birth: new Date(2000, 10, 1),
    bank_accounts: [
        { name: "swedbank", country: "Latvia", numberOfClients: 100000, balance: 2500000000 },
        { name: "unicredit", country: "Italy", numberOfClients: 200000, balance: 3000000000 },
        { name: "dz bank", country: "Germany", numberOfClients: 500000, balance: 6000000000 }
    ],

    depositUniversal: function (name, value) {
        for (let i = 0; i < this.bank_accounts.length; i++) {
            if (this.bank_accounts[i].name === name) {
                this.bank_accounts[i].balance += value;
                return 0;
            }
        }
        return 1;
    },

    withdrawUniversal: function (name, value) {
        for (let i = 0; i < this.bank_accounts.length; i++) {
            if (this.bank_accounts[i].name === name) {
                this.bank_accounts[i].balance -= value;
                return 0;
            }
        }
        return 1;
    },

    getAge: function (birthdate) {
        const today = new Date();
        const age = today.getFullYear() - birthdate.getFullYear() - (today.getMonth() < birthdate.getMonth() 
        || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
        return age;
    }

}


person.depositUniversal(bank_name1, depositValue);
person.withdrawUniversal(bank_name2, withdrawValue);
console.log(person.bank_accounts);
console.log(person.getAge(person.date_of_birth));






// deposit: function (name, value) {
    //     if (name === this.bank_accounts[0].name) {
    //         this.bank_accounts[0].balance += value
    //     }
    //     else if (name === this.bank_accounts[1].name) {
    //         this.bank_accounts[1].balance += value
    //     }
    //     else if (name === this.bank_accounts[2].name) {
    //         this.bank_accounts[2].balance += value
    //     }
    //     return 0; 
    //  },   

    // withdraw: function (name, value) {
    //     if (name === this.bank_accounts[0].name) {
    //         this.bank_accounts[0].balance -= value
    //     }
    //     else if (name === this.bank_accounts[1].name) {
    //         this.bank_accounts[1].balance -= value
    //     }
    //     else if (name === this.bank_accounts[2].name) {
    //         this.bank_accounts[2].balance -= value
    //     }
    //     return 0;
    // }
    
    // person.deposit(bank_name1,depositValue);
    // person.withdraw(bank_name2,withdrawValue);