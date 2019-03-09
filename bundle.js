class FarmAnimal {
    constructor(name, img, talk) {
        this.name = name
        this.img = img
        this.talk = talk
    }
    // talk() {
    //     return "" + talk
    // }
}
class Cow extends FarmAnimal {
    constructor(name, img, talk, ) {
        super(name, img, talk)
    }
}
class TexasLonghorn extends Cow {
    constructor(name, img, talk) {
        super(name, img, talk)
    }
}
class Horse extends FarmAnimal {
    constructor(name, img, talk) {
        super(name, img, talk)
    }
}
class Pony extends Horse {
    constructor(name, img, talk) {
        super(name, img, talk)
    }
}

var chicken = new FarmAnimal("Chicken", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVH_-e2ZkXJ3YexkZ7Uzsy6qegU3vV7khbMn5nd6eumay30TkvLQ", "cluck, cackle")
var sheep = new FarmAnimal("Sheep", "https://i.pinimg.com/originals/6a/a5/94/6aa5940c04905952bc7d6cd61b5cd4e1.jpg", "cbè bè")
var goat = new FarmAnimal("Goat", "https://t3.ftcdn.net/jpg/01/14/39/78/240_F_114397891_DV5T7tPPlmDatmFw15mljHNW2He9loFp.jpg", "baa, baa")
var texasLonghorn = new TexasLonghorn("TexasLonghorn", "http://clipart-library.com/img/1201231.jpg", "moo, moo")
var pony = new Pony("Pony", "https://i.ebayimg.com/thumbs/images/m/mh72BAo2kPYxjI9DVr-2vdQ/s-l225.jpg", "neigh, neigh")
function clicked(id) {
    switch (id) {
        case "chicken":
            $("#animal").append(`<img class = "animal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVH_-e2ZkXJ3YexkZ7Uzsy6qegU3vV7khbMn5nd6eumay30TkvLQ" style="bottom: 50px; left : 50px;"  onclick="alertTalk(chicken)">`)
            document.getElementById("chicken").disabled = true;
            break;

        case "sheep":
            $("#animal").append(`<img class = "animal" src  ="https://i.pinimg.com/originals/6a/a5/94/6aa5940c04905952bc7d6cd61b5cd4e1.jpg" style="bottom: 200px; right : 270px;" onclick="alertTalk(sheep)"/>`)
            document.getElementById("sheep").disabled = true;
            break;

        case "goat":
            $("#animal").append(`<img class = "animal" src  ="https://t3.ftcdn.net/jpg/01/14/39/78/240_F_114397891_DV5T7tPPlmDatmFw15mljHNW2He9loFp.jpg" style="bottom: 200px; right : 70px;" onclick="alertTalk(goat)"/>`)
            document.getElementById("goat").disabled = true;
            break;

        case "texasLonghorn":
            $("#animal").append(`<img class = "animal" src  ="http://clipart-library.com/img/1201231.jpg" style="bottom: 50px; right : 370px;" onclick="alertTalk(texasLonghorn)"/>`)
            document.getElementById("texasLonghorn").disabled = true;
            break;

        case "pony":
            $("#animal").append(`<img class = "animal" src="https://i.ebayimg.com/thumbs/images/m/mh72BAo2kPYxjI9DVr-2vdQ/s-l225.jpg" style="bottom: 60px; right :150px;" onclick="alertTalk(pony)"/>`)
            document.getElementById("pony").disabled = true;
            break;
    }
}

function alertTalk(id){
  alert(id.talk+"");
}