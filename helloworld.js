var Hello = (function () {
    function Hello(helloWorld) {
        this.helloWorld = helloWorld;
    }
    Hello.prototype.sayHello = function () {
        return "<h1>" + this.helloWorld + "</h1>";
    };
    return Hello;
}());
;
var oHello = new Hello("Hello, world!");
document.body.innerHTML = oHello.sayHello();
