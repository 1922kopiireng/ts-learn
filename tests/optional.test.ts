describe('Optional parameter', function(){
  it('should  support null and undefined', function(){
    
    function sayHello(name?: string | null){
      if (name) {
        console.info(`Hello ${name}`);
        
      }else{
        console.info('Hello');
        
      }
    }
    sayHello("Jefry");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);

  });
});