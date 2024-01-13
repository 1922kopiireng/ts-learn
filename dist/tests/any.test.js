"use strict";
describe('Any', function () {
    it('should support in typescript', function () {
        const person = {
            id: 1,
            name: "Jefry Kurniawan",
            age: 26
        };
        person.age = 31;
        person.address = "Indonesia";
        console.info(person);
    });
});
