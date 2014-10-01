/**
 * Created by joaquincunanan on 10/1/14.
 */


  var variables=[];
  var fonts=[];
  var widths=[];
  var rstrings=[];
  var panel_title;
  var background_img;

  $("#prompt").hide();
  $("#b").hide();
  $("#post_submit").hide();

  // Make graphical elements draggable.
  $(function() {
    for (var j=1; j<7; j++){
    $("#draggable"+j).draggable();
    };
  });
  $(function() {
            $( "#tabs-1" ).tabs();
         });

// Load up variable names, make them draggable, and fade out data entry fields.
$("#sub").click(function(){
  // Fadeout the data entry block.
//  $("#a").fadeOut(2000);

  $("#prompt").show();
  $("#b").show();
    $("#post_submit").show();
  background_img=$("#background_url").val();
  panel_title=$("#panel_title").val();
  background_img="<img src=\""+background_img+"\">";
  $("#background").html(background_img);

  // Enter variable names and font sizes to javascript.
  var k=1;
  var test="ok";
  var default_size=$("#default_size").val();

  var temp;
  var temp2="";
  while (test!="" && k<7){

    variables[k]=$("#variable"+k).val();

    fonts[k]=$("#font"+k).val();
    temp=$("#width"+k).val();
    if (temp=="") {
      widths[k]="";
    } else {
      widths[k]=temp;
    };

    if (fonts[k]=="") {

      fonts[k]=default_size;

    }
      rstrings[k]=$("#rstring"+k).val();
      temp=parseInt(rstrings[k]);
      console.log("temp",temp);
      if (temp>=1000000) {
          temp=Math.round(temp/1000000);
          temp2=temp.toString()+" M";
          rstrings[k]=temp2;
      } else if (temp>=1000) {
          temp=Math.round(temp/1000);
//          temp3=temp.toString;
          temp2=temp.toString()+" K";
          console.log(temp, temp.toString, temp2);
          rstrings[k]=temp2;

      }

    k++;
    test=$("#variable"+k).val();

  }
var rw;
  // Append variable names and implement font sizing to HTML.
  for (i=1; i<variables.length; i++){
    $("#draggable"+i).html(rstrings[i]);
    $("#draggable"+i).css("font-size", fonts[i]+"px");
    $("#draggable"+i).width(widths[i]);

      rw=$("#draggable"+i).width();
  }

});

var relative_left=[];
var relative_top=[];
// Get and report the coordinates of the graphical elements
$( "#b", document.body ).click(function( event ) {
  $("#result").html("");

  // Get the absolute coordinates
  var offset=[];

  $("#result").append("absolute coordinates"+"<br>");
  for (var m=1; m<variables.length; m++){
    offset[m] = $( "#draggable"+m).position();
    $( "#result" ).append( variables[m] + " coords ( " + offset[m].left + ", " + offset[m].top + " )"+"<br>");
  };

  // Convert the absolute coordinates to relative ones per the VROI convention
  // Some manual correction so that the coordinates translate closely to the VROI panel
  relative_left[1]=Math.round(offset[1].left-28);
  relative_top[1]=Math.round(offset[1].top-60);


  $("#result").append("<br>"+"relative coordinates (per VROI convention)"+"<br>");

  // first variable is in absolute coordinates
  $( "#result" ).append( "1 "+variables[1] + " coords ( " + relative_left[1] + ", " + relative_top[1] + " )"+"<br>");

  // compute the relative coordinates
  for (m=2; m<variables.length; m++){
    relative_left[m]=Math.round(offset[m].left-offset[m-1].left);
    relative_top[m]=Math.round(offset[m].top-offset[m-1].top);
    $( "#result" ).append( m+" "+variables[m] + " coords ( " + relative_left[m] + ", " + relative_top[m] + " )"+"<br>");
  };


  var newstr;
  var strformat="\'html\': String.format(\'<div class=\"image-tab\"><div class=\"image-tab-numbers\">";
  var terminus="<div class=\"antenna-workflow{0}-publish antenna-workflow-number\"></div><div class=\"antenna-workflow{0}-run antenna-workflow-number\"></div><div class=\"antenna-workflow{0}-manage antenna-workflow-number\"></div><div class=\"antenna-workflow{0}-analyze antenna-workflow-number\"></div><div style=\"clear: both;\"></div></div></div></div></div>\', scenario.index)}));"
  strformat=strformat+"<div style=\"position: absolute;top: "+relative_top[1]+"px;left: "+relative_left[1]+"px;\">";
  // $('<li></li>').text(strformat).appendTo('#html_format');
  strformat=strformat+"<div class=\"image-tab{0}-1\" style=\""+widths[1]+"font-size:"+fonts[1]+"px\"></div>";
  $('<li></li>').text(strformat).appendTo('#html_format');

  for (var i=2;i<variables.length;i++){
    newstr="<div style=\"position: absolute;top: "+relative_top[i]+"px;left: "+relative_left[i]+"px;\">";
    $('<li></li>').text(newstr).appendTo('#html_format');
    // $("#html_format").append(newstr);
    strformat=strformat+newstr;
    newstr="<div class=\"image-tab{0}-"+i+"\" style=\""+widths[i]+"font-size:"+fonts[i]+"px\"></div>";
    $('<li></li>').text(newstr).appendTo('#html_format');
    // $("#html_format").append(newstr);
    strformat=strformat+newstr;

  };
  strformat=strformat+terminus;
  $('#panel').html("");
  $('#html').text(strformat);
  var temp="'title': '"+panel_title+"',";
  $('#panel').html(temp);

  // make update code
  $("#selector").html("");
  var line=[];
  var i;
  for (i=1; i<variables.length; i++){
    line[1]="$(selector + '"+i+"').html(Visualizer.view.variable.getFormattedValue(";
    line[2]="  vars[1]['"+variables[i]+"'].value,";
    line[3]="  vars[1]['"+variables[i]+"'].record.data.variable));";

    for (var j=1; j<4; j++) {
    $("#selector").append(line[j]+"<br>");

    };
    $("#selector").append("<br>");
  };

  var styles="  background: url("+background_img+")";
    $("#styles_url").text(styles);

});

