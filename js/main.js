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


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

var checker_last_time = []
function checker_last_trip(l,o,k){
    if (checker_last_time.includes(l)){
        return true
    }else if(checker_last_time.includes(o)){
        return true
    }else if (checker_last_time.includes(k)){
        return true
    }    
    return false

}
function render(){ // declare the source and title for random 3 images 
    
        var img_left = document.getElementById('left');
        var img_right = document.getElementById('right');
        var img_middle = document.getElementById('middle');
        var first = random (0,names.length-1);
        var seconed = random (0,names.length-1);
        var third = random (0,names.length-1);
        while (first === seconed || first === third || third === seconed || checker_last_trip(first,seconed,third) ){
            first = random (0,names.length-1);
            seconed = random (0,names.length-1);
            third = random (0,names.length-1);
        }
        checker_last_time = []
        checker_last_time.push(first)
        checker_last_time.push(seconed)
        checker_last_time.push(third)
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
var chartViews = [];
var chartVoters = []

space.addEventListener('click',myFunction);
//console.log(Product.all)
function writer(){
    var body = document.getElementById('body')
    var unorder_list = document.createElement('ul')
    body.appendChild(unorder_list)
    for (var z=0 ; z<Product.all.length;z++){
        var li = document.createElement('li')
        unorder_list.appendChild(li)
        var text = Product.all[z]
        chartViews.push(text.views);
        chartVoters.push(text.voters);
        li.textContent = `${text.name} shown ${text.views} and have ${text.voters} views`
    }
    mydrawer();
}
function mydrawer(){
    var ctx = document.getElementById('myChart');
    console.log(chartViews);
    console.log(chartVoters);
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: 'number of Views',
                label : 'number of Voters',
                data: chartViews,
                data:chartVoters,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(15,82,186,0.2)',
                    'rgba(160,120,90,0.2)',
                    'rgba(149,184,194,0.2)',
                    'rgba(27,1,127,0.2)',
                    'rgba(96,179,183,0.2)',
                    'rgba(161,60,58,0.2)',
                    'rgba(181,3,177,0.2)',
                    'rgba(109,41,197,0.2)',
                    'rgba(227,184,83,0.2)',
                    'rgba(243,82,38,0.2)',
                    'rgba(213,191,158,0.2)',
                    'rgba(122,150,91,0.2)',
                    'rgba(22,125,13,0.2)'

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(15,82,186,1)',
                    'rgba(160,120,90,1)',
                    'rgba(149,184,194,1)',
                    'rgba(27,1,127,1)',
                    'rgba(96,179,183,1)',
                    'rgba(161,60,58,1)',
                    'rgba(181,3,177,1)',
                    'rgba(109,41,197,1)',
                    'rgba(227,184,83,1)',
                    'rgba(243,82,38,1)',
                    'rgba(213,191,158,1)',
                    'rgba(122,150,91,1)',
                    'rgba(22,125,13,1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

   