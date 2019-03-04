class FarmAnimal{
    constructor(name, image){
        this.name = name
        this.image = image
    }
    talk(lang){
        return lang
    }
}

class Cow extends FarmAnimal {
    constructor(name, image, color, location){
        super(name, image)
        this.color = color
        this.location = location
    }

}

class Chicken extends FarmAnimal{
    constructor(name, image, color){
        super(name, image)
        this.color = color
    }
    
}

class Hourse extends FarmAnimal{
    constructor(name, image, color){
        super(name, image)
        this.color = color
    }
}


var cow1 = new Cow("Milky", "https://cdn.britannica.com/s:300x300/55/174255-004-9A4971E9.jpg", "Brown", "India")
var cow2 = new Cow("Dutchi", "http://veeteelt.nl/sites/default/files/styles/news_default/public/boukje_0.jpg?itok=7RMpvnst", "white & Black", "Dutch")
var chicken1 = new Chicken("Chosho", "https://www.maxpixel.net/static/photo/1x/Chicken-Farm-Egg-Pinnate-Poultry-Hen-Free-Range-2687272.jpg", "White")
var chicken2 = new Chicken("cheeny", "https://cdn.pixabay.com/photo/2017/10/05/10/13/chicken-2818919_960_720.jpg", "Brown")
var hourse = new Hourse("Soundy", "https://i.imgur.com/sf9gBzL.jpg", "Diamond")
console.log(chicken1.talk("bag"))
$(document).ready(function(){

    $(".chicken1").attr("src",chicken1.image)
    .click(function(){
        alert(`name is ${chicken1.name} and sound is ${chicken1.talk("Bag Bag")} its color is ${chicken1.color}`)
    })
    $(".chicken2").attr("src",chicken1.image)
    .click(function(){
        alert(`name is ${chicken2.name} and sound is ${chicken2.talk("Bog Bog")} its color is ${chicken2.color}`)
    })
    $(".cow1").attr("src",cow1.image)
    .click(function(){
        alert(`name is ${cow1.name} and sound is ${cow1.talk("moo moo")} its color is ${cow1.color} and location is ${cow1.location}`)
    })
    $(".cow2").attr("src",cow2.image)
    .click(function(){
        alert(`name is ${cow2.name} and sound is ${cow2.talk("moo moo")} its color is ${cow2.color} and location is ${cow2.location}`)
    })
    $(".hourse").attr("src",hourse.image)
    .click(function(){
        alert(`name is ${hourse.name} and sound is ${hourse.talk("moo moo")} its color is ${hourse.color}`)
    })
})

