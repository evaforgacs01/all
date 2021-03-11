interface name {
    firstName: string;
    lastName: string;
    [propname: string]: string;

}

interface printFn {
    (nameParam: name): void;
}

class Greeter {
    fullName: string = "";
    skills: Array<{ name: string, point: number }> = [
        { name: "programming", point: 3 }

    ];
    readonly skill: string;

    constructor(nameObj: name, skill: string = "programming") {
        this.fullName = `${nameObj.lastName} ${nameObj.firstName}`;
        this.skill = skill;

    }
    greet() {
        return `Hello my name is ${this.fullName}.`;
    }
}
let nameParam: name = { lastName: 'Cserko', firstName: 'Jozsef', age: "22" };


const printGreeting: printFn = function (nameParam) {
    let g: Greeter = new Greeter(
        nameParam,
        "dancing"
    );
    document.body.innerHTML = g.greet();
}
printGreeting(nameParam)


























