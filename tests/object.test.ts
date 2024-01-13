describe ('Object', function () {
  it ('should support', function () {
    
    const person: {id:string, name: string, hobbies?: string[]} = {
      id: "1",
      name: "Jefry"
    };

    console.log(person);

    person.id = "2";
    person.name = "Kurniawan";
    // person.description = "a";

    console.log(person);
    
    
  })
})