class FarmAnimal {

    constructor(name , img , talk){
        this.name=name
        this.img=img 
        
    }
    
    


}
 class cow extends FarmAnimal {

    constructor(name,img,talk){
        super(name , img)
        this.img = $(".cow").append(`<img src="${img}"/>`);
        this.talk= $(".cow").click(function(){
            alert(talk)
        });
        

    
    }
  

    
 }
 
 class dog extends FarmAnimal {

    constructor(name , img , talk){
        super(name,img)
        this.img = $(".dog").append(`<img src="${img}"/>`);
        this.talk= $(".dog").click(function(){
            alert(talk)
        });
    }

    
    
 }
 class haskey extends dog{
    constructor(name , img , talk ,type){
        super(name,img , talk)
        this.type=type
    }
    


 }
 
 class horse extends FarmAnimal {

    constructor(name , img , talk){
        super(name,img)
        this.img = $(".horse").append(`<img src="${img}"/>`);
        this.talk= $(".horse").click(function(){
            alert(talk)
        });
    }
}
    class arabichorse extends horse{
        constructor(name , img , talk, type){
            super(name,img . talk)
            this.type=type

    }
    
 }
 class camel extends FarmAnimal {

    constructor(name , img , talk){
        super(name,img)
        this.img = $(".camel").append(`<img src="${img}"/>`);
        this.talk= $(".camel").click(function(){
            alert(talk)
        });
    }
    }
    class chiken extends FarmAnimal {
        constructor(name , img , talk){
            super(name,img)
            this.img = $(".chiken").append(`<img src="${img}"/>`);
            this.talk= $(".chiken").click(function(){
                alert(talk)
            });
        }

    }
    

    
 
  var obj1 = new FarmAnimal("Farm" , "");
  var obj2 = new cow ("cow","https://i.imgur.com/SN7e0Dj.jpg?1","mooooh!!");
  var obj3 = new dog ( "dog" , "https://i.imgur.com/HkRIMj4.jpg","hohohoho!")
  var obj4 = new horse ( "horse","https://i.imgur.com/vMd3rvn.jpg","maahhaaa!")
  var obj5 = new camel ( "camel" , "https://i.imgur.com/dMftghn.jpg", "ooooooh!")
  var obj6 = new chiken("chiken" , "https://i.imgur.com/sWFbXv0.jpg?1" , "kokokoko")
//   console.log(obj2)


