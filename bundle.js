class Animal{

    constructor(name, img, sound){
        this.name = name
        this.img = img
        this.sound = sound
    }

    mikSound(){
        return this.sound
    }
}

class Horse extends Animal{

    constructor(name, img, sound){
        super(name, img, sound)
        this.name = name
        this.img = img
        this.sound = sound
    }
}

class Arabian extends Horse{

    constructor(name, img, sound){
        super(name, img, sound)
        this.name = name
        this.img = img
        this.sound = sound
    }    
}

$(document).ready(function(){
    var arabianHorse = new Arabian("Shab", "https://freepngimage.com/content/uploads/images/arabian-horse-4202.png", "hhhhhhrrrr")

    var e =   document.createElement("ArabianHorse")
    var img = document.createElement("img")
    img.setAttribute("src", arabianHorse.img)
    
    e.appendChild(img)
    document.querySelector(".animals").appendChild(e)

    e.addEventListener("click", function(){
        alert(arabianHorse.mikSound())
    })
})