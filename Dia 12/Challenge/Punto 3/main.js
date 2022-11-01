
class Pizza {
    constructor() {
        this.tomate = false;
        this.queso = false;
        this.masafina = false;
        this.anana = false;
        this.bacon = false;
        this.otrosIngredientes = [];
    }

    setTomate() {
        this.tomate = true;
        return this;
    }
    setQueso() {
        this.queso = true;
        return this;
    }
    setMasafina() {
        this.masafina = true;
        return this;
    }
    setAnana() {
        this.anana = true;
        return this;
    }
    setBacon() {
        this.bacon = true;
        return this;
    }
    addOtrosIngredientes(ingredientes) {
        this.otrosIngredientes.push(ingredientes);
        return this;
    }

    build() {
        return {
            tomate: this.tomate,
            queso: this.queso,
            masafina: this.masafina,
            anana: this.anana,
            bacon: this.bacon,
            otrosIngredientes: this.otrosIngredientes,
        };
    }
}

let pizza = new Pizza().build();

let pizza2 = new Pizza().setBacon().setMasafina().setQueso();

console.log(pizza);
console.log(pizza2);



// class Pizzeria {
//   constructor() {
//     this.pizza = [];
//     console.log("Pedido realizado");
//   }

//   Construct() {
//     for (var all in this.structure) {

//       let builder = new ConcreteBuilder();

//       builder.BuildPart(this.structure[all]);

//       builder.GetResult();
//     }
//   }
// }

// class hacerPizza {
//     pizza;
//     queso;
//     tomate;
//     anana;
//     masaFina;
//     constructor(pizza) {
//         this.pizza = pizza;
//         this.queso = false;
//         this.tomate = false;
//         this.anana = false;
//         this.masaFina = false;
//     }

//   BuildPart() {

//   }
// }
// class ConcreteBuilder extends hacerPizza {

//   constructor(pizza, queso, tomate, anana, masaFina) {
//     super(pizza, queso, tomate, anana, masaFina);

//     facade.log("ConcreteBuilder class created");
//   }

//   BuildPart(rawmaterial) {
//     facade.log("ConcreteBuilder BuildPart()");

//     var material = rawmaterial;

//     this.product = new Product(material);
//   }

//   GetResult() {
//     facade.log(JSON.stringify(this.product));

//     return this.product;
//   }
// }
// class Product {
//   constructor(material) {
//     this.data = material;
//   }
// }

// function init_Builder() {
//   let pizzeria = new Pizzeria();

//   pizzeria.Construct();
// }