class FarmAnimal {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    talk(sound) {
        alert(sound);
    }

}
function createDiv(id, img){
    var result = getRandomPosition()
        $('.aminal').append(`<div id="${id}" ><img  style="width:100px; hight:100px; position: absolute; left:${result[0]}px; top:${result[1]}px;" src="${img}" /></div>`);
}
function getRandomPosition() {
	var randomX = Math.floor(Math.random()*600);
	var randomY = Math.floor(Math.random()*600);
	return [randomX,randomY];
}

class Cow extends FarmAnimal {
    constructor(name, img) {
        super(name, img);
        this.id = name + Math.floor(Math.random() * 1000);
        createDiv(this.id, img)
        $(`#${this.id}`).click(function(){
            FarmAnimal.prototype.talk("mooo!")
        });
    }
}

class Angus extends Cow {
    constructor(name, img){
        super(name, img);
        this.type = "Angus"
    }
}

class TexasLonghorn extends Cow {
    constructor(name, img){
        super(name, img);
        this.type = "Angus"
    }
}
class Cat extends FarmAnimal {
    constructor(name, img) {
        super(name, img);
        this.id = name + Math.floor(Math.random() * 1000);
        createDiv(this.id, img)
        $(`#${this.id}`).click(function(){
            FarmAnimal.prototype.talk("mawo!")
        });
    }
}

class Aegean extends Cat{
    constructor(name, img){
        super(name, img);
        this.type = "Aegean"
    }
}


class Burmilla extends Cat{
    
    constructor(name, img){
        super(name, img);
        this.type = "Burmilla"
    }
}
class Dog extends FarmAnimal {
    constructor(name, img) {
        super(name, img);
        this.id = name + Math.floor(Math.random() * 1000);
        createDiv(this.id, img)
        $(`#${this.id}`).click(function(){
            FarmAnimal.prototype.talk("hooohooo")
        });
    }
}

class Horse extends FarmAnimal {
    constructor(name, img) {
        super(name, img);
        this.id = name + Math.floor(Math.random() * 1000);
        createDiv(this.id, img)
        $(`#${this.id}`).click(function(){
            FarmAnimal.prototype.talk("huhaahh!")
        });
    }
}

class Duck extends FarmAnimal {
    constructor(name, img) {
        super(name, img);
        this.id = name + Math.floor(Math.random() * 1000);
        createDiv(this.id, img)
        $(`#${this.id}`).click(function(){
            FarmAnimal.prototype.talk("Wak!")
        });
    }
}

var cow1 = new Angus("cow1", "https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg")
var cow2 = new TexasLonghorn("cow2", "https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg")
var cat1 = new Burmilla("cat", "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500")
var cat2 = new Aegean("cat", "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500")
var duck = new Duck("Duck", "https://cdn-images-1.medium.com/max/1200/1*eFjpoz8lhNKyd8XcSWv2OA.jpeg")
var dog = new Dog("dog", "https://www.what-dog.net/Images/faces2/scroll001.jpg")
var horse = new Horse("horse", "https://cdn.pixabay.com/photo/2013/10/17/20/59/horse-197199__340.jpg")