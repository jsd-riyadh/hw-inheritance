console.log("Test ");

class FarmAnimal{

    constructor(name, img, animalSound){
        this.name = name;
        this.img = img;
        this.animalSound = animalSound;
    }

    talk(){
        return this.animalSound;
    }
}

class Cow extends FarmAnimal{

    constructor(name, img, animalSound){
        super(name, img, animalSound);
        this.name = name;
        this.img = img;
        this.animalSound = animalSound;
    }
}

class Angus extends Cow{

    constructor(name, img, animalSound){
        super(name, img, animalSound);
        this.name = name;
        this.img = img;
        this.animalSound = animalSound;
    }
}

class Hereford extends Cow{
    
    constructor(name, img, animalSound){
        super(name, img, animalSound);
        this.name = name;
        this.img = img;
        this.animalSound = animalSound;
    }
}

class Chicken extends FarmAnimal{

    constructor(name, img, animalSound){
        super(name, img, animalSound);
        this.name = name;
        this.img = img;
        this.animalSound = animalSound;
    }
}

class Sheep extends FarmAnimal{

    constructor(name, img, animalSound){
        super(name, img, animalSound);
        this.name = name;
        this.img = img;
        this.animalSound = animalSound;
    }
}

class Horse extends FarmAnimal{

    constructor(name, img, animalSound){
        super(name, img, animalSound);
        this.name = name;
        this.img = img;
        this.animalSound = animalSound;
    }
}

class Arabian extends Horse{

    constructor(name, img, animalSound){
        super(name, img, animalSound);
        this.name = name;
        this.img = img;
        this.animalSound = animalSound;
    }    
}

class Burguete extends Horse{

    constructor(name, img, animalSound){
        super(name, img, animalSound);
        this.name = name;
        this.img = img;
        this.animalSound = animalSound;
    }    
}

class Llama extends FarmAnimal{

    constructor(name, img, animalSound){
        super(name, img, animalSound);
        this.name = name;
        this.img = img;
        this.animalSound = animalSound;
    }
}


$(document).ready(function(){
    // var div = document.getElementsByClassName(".container-fluid farm");
    var rand = Math.floor(Math.random() * 100);
    console.log(rand);
    
    var animal = new Cow("Molly", "https://www.ucdavis.edu/sites/default/files/home-site/blogs/one-health/blog-posts/2018/cow-field-one-health-uc-davis.jpg", "mooooooooooo");
    var element = document.createElement("img");
    element.setAttribute("src", `${animal.img}`);
    element.style.position = 'relative';
    element.style.top = rand + "px";
    element.style.height = "200px";
    element.style.width = "200px";
    element.addEventListener("click", function(){
        alert(animal.talk())
    })
    console.log(element);
    
    document.querySelector(".animals").appendChild(element);
    console.log(animal);
    




})