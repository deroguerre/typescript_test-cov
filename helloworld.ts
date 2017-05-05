class Hello {
    constructor(public helloWorld: string) { }
    sayHello() {
        return this.helloWorld;
    }
};

var oHello = new Hello("Hello, world!");
    
//document.body.innerHTML = oHello.sayHello();