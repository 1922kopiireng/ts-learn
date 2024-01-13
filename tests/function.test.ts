describe('Function', function (){
  it('should support of typescript', function(){

    function sayHello(name: string): string {
      return`Hello ${name}`;
    }

    expect(sayHello("Jefry")).toBe("Hello Jefry");

    function prinHello(name:string): void {
      console.info(`Hello ${name}`);
    }
    prinHello("Jefry")

  });

  it('should support default value', function(){
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }
    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Jefry")).toBe("Hello Jefry");
  })

  it('should support rest parameter', function (){
    function sum(...values:number[]): number {
      let total = 0;
      for (const value of values){
        total += value;
      }
      return total;
    }

    expect(sum(1,2,3,4,5)).toBe(15);
  });

  it('should support optional parameter', function (){
    function sayHello(firstName: string, lastname? : string): string {
      if (lastname) {
        return `Hello${firstName} ${lastname}`;
      }else {
        return `Hello${firstName}`;
      }
    }

    expect(sayHello("Jefry")).toBe("Hello jefry");
    expect(sayHello("Jefry", "Kurniawan")).toBe("Hello Jefry Kurniawan");
  });

  it('should support function overloading', function(){

    function callMe (value:number): number;
    function callMe (value:string): string;
    function callMe (value:any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      }else if(typeof value === "number"){
        return value * 10;
      }
    }

    expect(callMe(10)).toBe(108);
    expect(callMe("Jefry")).toBe("JEFRY");
  });

  it('should function as parameter', function (){
    
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name:string):string{
      return name.toUpperCase();
    }

    expect(sayHello("Jefry", toUpper)).toBe("Hello JEFRY");

    // anonymous funciton
    expect(sayHello("Jefry", function(name:string):string {
      return name.toUpperCase();
    })).toBe("Hello JEFRY");

    // arrow function
    expect(sayHello("Jefry", (name:string):string => name.toUpperCase())).toBe("Hello JEFRY");

  })

});