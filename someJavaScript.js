$(document).ready(function(){
  var names = ['Ethan','Annie','Jennifer','Aleah','Roland'];
  var extraNames = ['The Ghost of Last-Minute-Christmas-Shopping','Two Chains','Bollard'];
  var glyphs = ['star','heart','film','tint','fire','leaf','globe','usd','send']
  console.log( 4- names.length % 4);

  switch(4 - names.length%4){
    case 1: names.push(extraNames[0]); break;
    case 2: names.push(extraNames[0],extraNames[1]); break;
    case 3: names.push(extraNames[0],extraNames[1],extraNames[2]); break;
  }

  console.log(names);

  var rows = names.length / 4;
  var paste = "";
  for( var i = 0; i < rows; i++){
    paste += "<div class='row'>";
    for( var j = 0; j < 4; j++){
      paste+="<div style='margin-top: 5px; margin-bottom: 5px;' class='col-sm-3'>";
      paste+="<span style='font-size: 4em;' class='glyphicon glyphicon-"
      paste+=glyphs[ Math.floor( Math.random() * glyphs.length ) ]
      paste+="'></span><br>";
      paste+=names[ ( i*4+j ) ];
      paste+="</div>"
    }
    paste +="</div>";
  }
  console.log(paste);
  $('#names-section').html(paste);
});
