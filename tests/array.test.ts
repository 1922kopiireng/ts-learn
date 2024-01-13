import { info } from "console";

describe('Array', () => { 
  it("should same with javascript", function(){
  
    const name: string [] = ["juki", "paijo", "paimin"];
    const values: number [] = [1,2,4];
    
    console.log(name);
    console.log(values);
  });

  it("should support readonly array", function () {

    const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);
    
    // hobbies[0] = "Main Game";
  })

  it ('should support tupple', function(){
    const person : readonly[string, string, number] = ["Jefry", "Kurniawan", 26];
    console.info(person);

    console.log(person[0]);
    console.log(person[1]);
    console.log(person[2]);
    
    // tidak bisa, karena read only
    // person[0] = "Budi";
    // hampir sama dengan array js tapi ada modifikasi dari ts

  });
 });