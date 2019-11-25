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
    this.voters = 0
    this.views = 0
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
        left.views ++ // 
        var right = Product.all[seconed]
        right.views ++
        var middle = Product.all[third]
        middle.views ++
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
        writer();
    }

}


var space = document.getElementById("bob");
var iterator = 0 ; //
var list_of_voted = []  
var myFunction = function(event){
    if (event.target.id !== 'bob'){
        render();
        iterator++;
        for (var w=0;w<Product.all.length;w++){
            var q = Product.all[w]
            if (event.target.alt === q.name){
                q.voters ++ 

         }        
        }                
    } check(iterator,25)                        
}


space.addEventListener('click',myFunction);
console.log(Product.all)
function writer(){
    var body = document.getElementById('body')
    var unorder_list = document.createElement('ul')
    body.appendChild(unorder_list)
    for (var z=0 ; z<Product.all.length;z++){
        var li = document.createElement('li')
        unorder_list.appendChild(li)
        var text = Product.all[z]
        li.textContent = `${text.name} shown ${text.views} and have ${text.voters} `
    }
}


  
   