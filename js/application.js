//Define the Grids

 function defaultGrid(x){

  for (var row = 1; row <= x; row++){
    for (var col = 1; col <= x; col++){
      $("#pad").append("<div class='grid'></div>"); 
    }
  }
  $(".grid").width(600/x);
  $(".grid").height(600/x);

 } 

//Creates the grids as the user enter value

function createNewPad(){
     $('#pad').empty();
    var response = prompt('Enter new grid size from 1 to 64');
    var gridSize = parseInt(response);

  
    if( response<=0 || response>64 ){
        
        alert("you have to choose betwween 1 to 64");

      }else{
          defaultGrid(gridSize);  
   //change the background to add color on pad
          hoverChange();
      }

  }



//The hover effect
 function hoverChange(){

       $('.grid').hover(function(){

         $(this).addClass('divBack');   
  });
 }

 function createNewPadRandom(){
     $('#pad').empty();
    var response = prompt('Enter new grid size from 1 to 64');
    var gridSize = parseInt(response);

  
    if( response<=0 || response>64 ){
        
        alert("you have to choose betwween 1 to 64");

      }else{
          defaultGrid(gridSize);  
   //change the background to add color on pad
          hoverRandomChange();
      }

  } 

function hoverRandomChange(){
$(".grid").hover(function(){
  var randomColor= '#' + (Math.random()*0xFFFdce<<0).toString(16);
    $(this).css("background", randomColor);
  });

    
}

function createNewPadTail(){
     $('#pad').empty();
    var response = prompt('Enter new grid size from 1 to 64');
    var gridSize = parseInt(response);

  
    if( response<=0 || response>64 ){
        
        alert("you have to choose betwween 1 to 64");

      }else{
          defaultGrid(gridSize);  
   //change the background to add color on pad
          hoverTail();
      }

  } 


function hoverTail(){
$(".grid").mouseover(function(){
    $(this).css({

      "background": '#ccc',
      "box-shadow": " 3px 3px 5px 6px #ccc"
                });
  });
$(".grid").mouseout(function(){
    $(this).css({

      "background": 'none',
      "box-shadow": " 1px 1px 3px 4px #dfe"      
               });
  });
    
}



//Options for Borders
function toggleBorders(){

  $("#togg").click(function(){

        $('div').find('.grid').css('outline', 'none');
       });
 
}

function toggleBordersB(){

  $("#toggB").click(function(){

        $('div').find('.grid').css('outline', '1px solid #fff');
       });
 
}




//The function who clears the grids
function clearGrid(){
          
       $("#clear").click(function(){

        $('.grid').removeClass('divBack');
        $('.grid').css("background-color", "");
  


       });    

}



//Triggers all the Fun!!!

$(document).ready(function () {
//We say with how many blocks to start the grid
  defaultGrid(16);
//change the background to add color on pad
hoverChange();
//Calls the function to clear the pad
clearGrid();
});


