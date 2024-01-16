// Es6 class
class Test{
    constructor(height, width){
        this.h = height;
        this.w = width;
    }
    }
    
    /*
     * class are template for creating class
     * class are same like function
     * for creating class  insted function keyword uses class key word
     * will add property in to class using constrocter() keyword
     * assigen vlaue using new key word
     */
    
    
    const test1 = new Test(5,8)
    
    // console.log(test1);
    
    
    // methods inside of class
    
    class Car{
        constructor(name){
            this.brand = name;
        }
    
        present(){
            return 'my car is ' + this.brand;
        }
    }
    
    // const myCar = new Car('ford');
    
    // console.log(myCar.present());
    
    
    // inheritance in  class
    
    /* it uses for inherit eall charectorstics from 
    one class to anothor class
    
    using extends keyword for create inherite 
    
    super() method using for calling methods from old class
    */
    
    
    class Model extends Car{
        constructor(name, mod){
            super(name);
            this.model = mod;
        }
    
        show(){
            return `${this.present()} and model is ${this.model}`    }
    }
    
    
    const myCar = new Model('ford', 'figo');
    
    console.log(myCar.show());
    
    
    