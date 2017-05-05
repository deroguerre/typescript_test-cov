class Hello {
    constructor(public helloWorld: string) { }
    sayHello() {
        return "<h1>" + this.helloWorld + "</h1>";
    }
};

var oHello = new Hello("Hello, world!");
    
document.body.innerHTML = oHello.sayHello();