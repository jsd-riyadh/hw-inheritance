class farmAnimal {
    constructor(name, imge) {

        this.name = name
        this.imge = imge
    }
}

class cow extends farmAnimal {

    constructor(name, imge, sound) {
        super(name, imge)
        this.imge = $(".cow").append('<img src="https://i2-prod.mirror.co.uk/incoming/article9456387.ece/ALTERNATES/s615/Holstein-dairy-cow-at-Bega-NSW.jpg"/>')
        this.sound = $(".cow").click(function () {
            $(".sound").get(0).play();
            alert('mooooao!');
        });
    }
}


class rooster extends farmAnimal {

    constructor(name, imge, sound) {
        super(name, imge)
        this.imge = $(".rooster").append('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT92i5VHW1gJSbUSIF-3jP9-Ql2jl7CNCF6ON4jIFMblN0lM_BW"/>')
        this.sound = $(".rooster").click(function () {
            $(".roostersound").get(0).play();
            alert("cococooo!");
        });
    }
}




var coww = new cow("lolo", "", "moo")
console.log(coww)
var farmrooster= new rooster("deek","","cococoooo")
console.log(farmrooster)