import { it } from "node:test";
import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";


describe('Interface', function(){
  it('should support in typescript', function(){

    const seller: Seller = {
      id: 1,
      name: 'Toko ABC',
      nib: "234258888",
      npwp: "1234557688"
    };

    seller.name = "Toko Jefry";

    console.info(seller);
  });

  it('should support function typescript', function(){
    
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    }

    expect(add(2,2)).toBe(4);
  });

  it('should support indexable interface', function (){

    interface StringArray {
      [index: number]:string
    }

    const names : StringArray = ["Jefry", "Kurniawan", "Marzuki"];
    console.info(names);
  });

  it('should support  indexable for non number index', function(){

    interface StringDictionary {
      [key: string] : string 
    }

    const dictionary:  StringDictionary = {
      "name" : "Jefry",
      "address": "Indonesia"
    };

    expect(dictionary["name"]).toBe("Jefry");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  it('should support extends interface', function (){

    const employee : Employee = {
      id: "1",
      name: "Jefry",
      division: "IT"
    };

    console.info(employee);
    
    const manager: Manager = {
      id: "2",
      name: "Kurniawan",
      division: "IT",
      numberOfEmployees: 10
    };

    console.info(manager);
  });

  it('should support function in interface', function(){

    const person : Person ={
      name: "Jefry",
      sayHello: function (name:string): string {
        return `Hello${name}, my name is ${this.name}`;
      }
    }

    console.info(person.sayHello("Budi"));
  });

  it('should support  intersection types', function (){

    interface HasName {
      name: string
    }

    interface HasId {
      id:string
    }

    type Domain = HasId & HasName;

    const domain : Domain = {
      id : "1",
      name: "Jefry"
    };

    console.info(domain);
  });

  it('should support type assisertions', function (){

    const person: any = {
      name: "Jefry",
      age: 26
    }

    const person2 : Person = person as Person;
    // person2.sayHello("Budi");

    console.info(person2);
    

  })

})