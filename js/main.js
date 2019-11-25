'use strict'
var names = ['bag.jpg',
'banana.jpg',
'bathroom.jpg',
'boots.jpg',
'breakfast.jpg',
'bubblegum.jpg',
'chair.jpg',
'cthulhu.jpg',
'dog-duck.jpg',
'dragon.jpg',
'pen.jpg',
'pet-sweep.jpg',
'scissors.jpg',
'shark.jpg',
'sweep.png',
'tauntaun.jpg',
'unicorn.jpg',
'usb.gif',
'water-can.jpg',
'wine-glass.jpg'];

function Product(name){
    this.name = name ;
    this.imagePath = `img/${name}`;
    Product.all.push(this);
}
Product.all = [];

for (var i=0;i<names.length;i++){ //loop for constructor function
   new Product(names[i]);
}

function random(x){ //function for the random number
    var rand = Math.floor((Math.random()* x)+ 1)
    return rand
}

function render(){ // declare the source and title for random 3 images 
    for (var i=0;i<3;i++){ 
        var img_left = document.getElementById('left');
        var img_right = document.getElementById('right');
        var img_middle = document.getElementById('middle');
        var first = random (names.length-1);
        var seconed = random (names.length-1);
        var third = random (names.length-1);
        while (first === seconed || first === third || third === seconed){
            first = random (names.length-1);
            seconed = random (names.length-1);
            third = random (names.length-1);
        }
        var left = Product.all[first]
        var right = Product.all[seconed]
        var middle = Product.all[third]
        img_left.setAttribute('src',left.imagePath);
        img_left.setAttribute('alt',left.name);
        img_right.setAttribute('src',right.imagePath);
        img_right.setAttribute('alt',right.name);
        img_middle.setAttribute('src',middle.imagePath);
        img_middle.setAttribute('alt',middle.name);
        }
    }
render();


function check(N,limits){ // check if voting cross the limit 
    if (N == limits ){
        space.removeEventListener('click',myFunction);
        alert('you ended the voting')
    }

}


var space = document.getElementById("bob");
var iterator = 0 ; //
var list_of_voted = []  
var myFunction = function(event){
    if (event.target.id !== 'bob'){
        render();
        iterator++;
        if (event.target.id === 'middle'){
            var mid = event.target.alt
            list_of_voted.push(mid);
        }else if (event.target.id === 'right'){
            list_of_voted.push(event.target.alt);
        }else if (event.target.id === 'left'){
            list_of_voted.push(event.target.alt);
        }
    } check(iterator,25)                        
}


console.log(list_of_voted)
space.addEventListener('click',myFunction);
for (var v=0;v<list_of_voted.length;v++){
    document.writeln(list_of_voted[v]);
}



  
   