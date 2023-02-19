

let ButtonBlog = document.querySelector('.ButtonBlog');

function Redirect() {

  window.location = "question.html";

}

/****************************************************TRIANGLE***********************************************/
let triangleButton = document.querySelector('#TriangleCalculation');
let cnt = 0 ;
triangleButton.addEventListener('click',function(){
  let width = document.querySelector('.base1').value;
  let height = document.querySelector('.height1').value;

  if(height>0 && width>0){
    let name = "Triangle"
     cnt++;
     display(cnt,name,height,width)
    }
    else{
      alert("Please Give Positive Number for Width and Height");
    }
  

})

/*************************************************************Rectangle*****************************/

let RectangleButton = document.querySelector('#RectangleCalculation');

RectangleButton.addEventListener('click',function(){
  let width = document.querySelector('.base2').value;
  let height = document.querySelector('.height2').value;
  if(height>0 && width>0){

let name = "Rectangle"
let cnt2 = 0 
 cnt++;
 display1(cnt,name,height,width,cnt2)
  }
  else{
    alert("Please Give Positive Number for Width and Height");
  }
})


/*************************************************************Parallelogram*****************************/

let ParallelogramButton= document.querySelector('#ParallelogramCalculation');

ParallelogramButton.addEventListener('click',function(){
  let width = document.querySelector('.base3').value;
  let height = document.querySelector('.height3').value;
  if(height>0 && width>0){
    let cnt2 = 0
let name = "Parallelogram"
 cnt++;
 display1(cnt,name,height,width , cnt2)
  }
  else{
    alert("Please Give Positive Number for Width and Height");
  }
})

/****************************************************Rhombus***********************************************/

let RombusButton= document.querySelector('#RombusCalculation');

RombusButton.addEventListener('click',function(){
  let width = document.querySelector('.base4').value;
  let height = document.querySelector('.height4').value;
  if(height>0 && width>0){
let name = "Rhombus"
 cnt++;
 display(cnt,name,height,width)
}
else{
  alert("Please Give Positive Number for Width and Height");
}
})

/****************************************************Pentagoan***********************************************/

let PentagonButton= document.querySelector('#PentagonCalculation');

PentagonButton.addEventListener('click',function(){
  let width = document.querySelector('.base5').value;
  let height = document.querySelector('.height5').value;
 
  if(height>0 && width>0){

let name = "Pentagon"
 cnt++;
 display(cnt,name,height,width)
  }
  else{
    alert("Please Give Positive Number for Width and Height");
  }
})
/**************************************************************ELLIPSE*****************************/

let EllipseButton= document.querySelector('#EllipseCalculation');

EllipseButton.addEventListener('click',function(){
  let width = document.querySelector('.base6').value;
  let height = document.querySelector('.height6').value;
  let cnt2 = 1 ;
  if(height>0 && width>0){

let name = "Ellipse"
 cnt++;
 display1(cnt,name,height,width,cnt2)
  }
  else{
    alert("Please Give Positive Number for Width and Height");
  }
})

/**********************************************Function OF Rectangle , Ellipse Parallelogram******************/

function display1(cnt,name,height,width , cnt2){
  let tabledata = document.querySelector('.tableinfo');
  let tr = document.createElement("tr");
  let area ;
if(cnt2==0){
  area = (width*height).toFixed(2);
  
}
else{
   area = (3.14*(width*height)).toFixed(2);
}

  
tr.innerHTML=`
  <td> ${cnt}</td>
  <td> ${name} </td>
  <td> ${area}</td>
  <button class="convert">convert to m<sup>2</sup></button>
  `

  tabledata.appendChild(tr);

}
/************************************Function Of Triangle , Rhombus and Pentagoan*******************/
function display(cnt,name,height,width){
  let tabledata = document.querySelector('.tableinfo');
  let tr = document.createElement("tr");
  let area = (0.5*(width*height)).toFixed(2);
 
tr.innerHTML=`
  <td> ${cnt}</td>
  <td> ${name} </td>
  <td> ${area}</td>
  <button class="convert">convert to m<sup>2</sup></button>
  `
  tabledata.appendChild(tr);
 

}






/**************************************************************Random Color****************************/

/**********************************************************TRIANGLE RANDOM COLOR***************************/

let triangleColor = document.querySelector('.triangle');

triangleColor.addEventListener("mouseover", function(){
  triangleColor.style.backgroundColor = randomColor();
});
/**********************************************************Rectangle RANDOM COLOR***************************/

let RectangleColor = document.querySelector('.Rectangle');

RectangleColor.addEventListener("mouseover", function(){
  RectangleColor.style.backgroundColor = randomColor();
});

/**********************************************************Parallelogram RANDOM COLOR***************************/

let ParallelogramColor= document.querySelector('.Parallelogram');

ParallelogramColor.addEventListener("mouseover", function(){
  ParallelogramColor.style.backgroundColor = randomColor();
});

/**********************************************************Rhombus RANDOM COLOR***************************/

let RhombusColor= document.querySelector('.Rhombus');

RhombusColor.addEventListener("mouseover", function(){
  RhombusColor.style.backgroundColor = randomColor();
});

/**********************************************************Pentagon RANDOM COLOR***************************/

let PentagonColor= document.querySelector('.Pentagon');

PentagonColor.addEventListener("mouseover", function(){
  PentagonColor.style.backgroundColor = randomColor();
});
/**********************************************************Ellipse RANDOM COLOR***************************/

let EllipseColor= document.querySelector('.Ellipse');

EllipseColor.addEventListener("mouseover", function(){
  EllipseColor.style.backgroundColor = randomColor();
});

/*********************************************************Random color function**********************/

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 
