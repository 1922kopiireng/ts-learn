import { it } from "node:test";
describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: 'Toko ABC',
            nib: "234258888",
            npwp: "1234557688"
        };
        seller.name = "Toko Jefry";
        console.info(seller);
    });
    it('should support function typescript', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', function () {
        const names = ["Jefry", "Kurniawan", "Marzuki"];
        console.info(names);
    });
    it('should support  indexable for non number index', function () {
        const dictionary = {
            "name": "Jefry",
            "address": "Indonesia"
        };
        expect(dictionary["name"]).toBe("Jefry");
        expect(dictionary["address"]).toBe("Indonesia");
    });
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "Jefry",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Kurniawan",
            division: "IT",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: "Jefry",
            sayHello: function (name) {
                return `Hello${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Budi"));
    });
    it('should support  intersection types', function () {
        const domain = {
            id: "1",
            name: "Jefry"
        };
        console.info(domain);
    });
    it('should support type assisertions', function () {
        const person = {
            name: "Jefry",
            age: 26
        };
        const person2 = person;
        // person2.sayHello("Budi");
        console.info(person2);
    });
});
