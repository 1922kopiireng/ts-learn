describe('IF statement', function (){
  it('should support in typescript', function (){

    const examValue = 90;

    if (examValue > 80)  {
      console.info("Good");
    }else if (examValue > 60){
      console.info("Nota Bad");
    }else {
      console.info("Try again"); 
    }

  });

  it('should support ternary operator', function (){
    const value = 80;
    const say = value >= 75 ?  "Congratulation" :  "Try Again";
    console.info(say);
  });

  it('should support switch statement', function (){

      function sayHello(name: string): string {
        switch (name) {
          case "Jefry":
            return "Hi Jefry";
          case "Budi":
            return "Hi Budi";       
          default:
            return " Hello";
        }

        console.info(sayHello("Jefry"));
        console.info(sayHello("Budi"));
        console.info(sayHello("Joko"));
        
      }
  });
})