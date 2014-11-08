/**
 * Created by joaquincunanan on 10/1/14.
 */


  var variables=[];
  var fonts=[];
  var widths=[];
  var colors=[];
  var rstrings=[];
  var xstrings=[];
  var astrings=[];
  var panel_title;
  var background_img;
  var background_img_styles;
  var image_width;
  var image_height;
  var image;
    var num_elements;
    var var_val=[];
var width_val=[];
var astring_val=[];
var rstring_val=[];
var xstring_val=[];
var i;
var color_val=[];
var font_val=[];
var offset_x;
var offset_y;
var align_val=[];
var align=[];

  $("#prompt").hide();
  $("#b").hide();
  $("#post_submit").hide();
    $("#input").hide();

  // Make graphical elements draggable.
//  $(function() {
//    for (var j=1; j<7; j++){
//    $("#draggable"+j).draggable();
//    };
//  });
  $(function() {
            $( "#tabs-1" ).tabs();
         });
$(function() {
    $( "#offset_label" ).tooltip();
  });
  $("#offset_label").tooltip({content:"test"});

    $("#sub_number").click(function() {
        $("#element_rows").html("");

        num_elements=$("#elements").val();

        for (i=1; i<=num_elements; i++){
            var_val[i]="";
        rstring_val[i]="";
        width_val[i]="";
        color_val[i]="";
        astring_val[i]="";
        xstring_val[i]="";
        align_val[i]="left";


        }

        var_val[1]="web form submissions invis - 11mn";
        width_val[1]=50;
        xstring_val[1]="";
        rstring_val[1]="1,000";
        font_val[1]=13;
        color_val[1]="white";

        var_val[2]="Percent Increase in Form Conversions - 11mo";
        rstring_val[2]="42%";
        width_val[2]=35;
        astring_val[2]="";
        xstring_val[2]="";
        font_val[2]=13;
        color_val[2]="white";

        var_val[3]="Increased Inbound Leads Per Month - 11mp";
        rstring_val[3]="714 MORE INBOUND SALES PER MONTH";
        width_val[3]=250;
        color_val[3]="white";
        astring_val[3]="";
        xstring_val[3]=" MORE INBOUND SALES PER MONTH";
        font_val[3]=22;
        color_val[3]="white";
        align_val[3]="center";

        var_val[4]="Leads To Quality Per Month Per Rep - 11mr";
        rstring_val[4]="500";
        width_val[4]=35;
        astring_val[4]="";
        xstring_val[4]="";
        font_val[4]=13;
        color_val[4]="white";

        var_val[5]="improved lead qual rate invis - 11mt";
        rstring_val[5]="24%";
        width_val[5]=35;
        astring_val[5]="";
        xstring_val[5]="";
        font_val[5]=13;
        color_val[5]="white";

        var_val[6]="Increased Qualified Leads Per Year - 11mu";
        rstring_val[6]="1,140 MORE QUALIFIED LEADS PER YEAR";
        width_val[6]=250;
        color_val[6]="white";
        xstring_val[6]=" MORE QUALIFIED LEADS PER YEAR";
        font_val[6]=22;
        align_val[6]="center";
        
        var_val[7]="Yearly Opportunity Pipeline To Close - 11mw";
        rstring_val[7]="$3,333,333";
        width_val[7]=80;
        color_val[7]="white";
        xstring_val[7]="";
        font_val[7]=13;

        
        var_val[8]="improved deal win rate invis - 11mx";
        rstring_val[8]="44%";
        width_val[8]=35;
        color_val[8]="white";
        xstring_val[8]="";
        font_val[8]=13;

        
        var_val[9]="Increased Qualified Leads Per Year - 11mu";
        rstring_val[9]="$466,667 MORE CLOSED REVENUE";
        width_val[9]=250;
        color_val[9]="white";
        xstring_val[9]=" MORE CLOSED REVENUE";
        font_val[9]=22;
        align_val[9]="center";


        $("#element_rows").append("<tr><th>Number</th><th>Variable Name</th><th>Representative String</th><th>Font Size</th><th>Width</th><th>Color</th><th>text align</th><th>Introductory String</th><th>Concluding String</th></tr>");

        for (i=1;i<=num_elements;i++){
            $("#element_rows").append("<tr><td>"+i+"</td><td><input type=\"text\" id=\"variable"+i+"\" size=\"40\" value=\""+var_val[i]+"\"></td><td><input type=\"text\" id=\"rstring"+i+"\" size=\"30\" value=\""+rstring_val[i]+"\"></td><td><input type=\"integer\" id=\"font"+i+"\" size=\"3\" value=\""+font_val[i]+"\"></td><td><input type=\"integer\" id=\"width"+i+"\" size=\"9\" value=\""+width_val[i]+"\"></td><td><input type=\"text\" id=\"color"+i+"\"  value=\""+color_val[i]+"\" size=\"10\"></td><td><input type=\"text\" id=\"align"+i+"\" size=\"8\" value=\""+align_val[i]+"\"></td><td><input type=\"text\" id=\"astring"+i+"\" size=\"20\" value=\""+astring_val[i]+"\"></td><td><input type=\"text\" id=\"xstring"+i+"\" size=\"20\" value=\""+xstring_val[i]+"\"></td></tr>");

        }

        $("#input").show();
    });
// Load up variable names, make them draggable.
$("#sub").click(function(){


  $("#prompt").show();
  $("#b").show();
    $("#post_submit").show();
  background_img=$("#background_url").val();
  panel_title=$("#panel_title").val();
  offset_x=$("#offset_x");
  offset_y=$("#offset_y");
  background_img_styles=background_img;
  background_img="<img src=\""+background_img+"\""+ "id=pict>";
  $("#background").html(background_img);

  // Enter variable names, widths and font sizes to javascript.
  var k=1;
  var test="ok";
  var default_size=$("#default_size").val();

  var temp;
  var temp2="";
  while (test!="" && k<=num_elements){

    variables[k]=$("#variable"+k).val();
      align[k]=$("#align"+k).val();

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
      colors[k]=$("#color"+k).val();

      if (colors[k]=="") {
          colors[k]="black"
      }
      rstrings[k]=$("#rstring"+k).val();
      astrings[k]=$("#astring"+k).val();

      xstrings[k]=$("#xstring"+k).val();
      temp=parseInt(rstrings[k]);

      if (temp>=1000000) {
          temp=Math.round(temp/1000000);
          temp2=temp.toString()+" M";
          rstrings[k]=temp2;
      } else if (temp>=1000) {
          temp=Math.round(temp/1000);
//          temp3=temp.toString;
          temp2=temp.toString()+" K";

          rstrings[k]=temp2;

      }

    k++;
    test=$("#variable"+k).val();

  }
var rw;
  // Append variable names and implement font sizing to HTML.
    console.log("variables length ",variables.length);
  for (i=1; i<variables.length; i++){
      $("#draggables").append("<div id=\"v"+ i.toString()+"\" ></div>");
      $("#draggables").append("<div id=\"rs"+ i.toString()+"\" ></div>");
       $("#draggables").append("<div id=\"draggable"+ i.toString()+"\" class=\"ui-widget-content\" ></div><br>");
            $("#draggable"+i).draggable();

    $("#v"+i).html(variables[i]);
    $("#v"+i).css("font-style","italic");
    $("#rs"+i).html(rstrings[i]);
    $("#rs"+i).css("font-style","italic");
    $("#draggable"+i).html(rstrings[i]);
    $("#draggable"+i).css("font-size", fonts[i]+"px");
    $("#draggable"+i).css("text-align", align[i]);
      console.log("align",i,align[i]);
    $("#draggable"+i).width(widths[i]);
    $("#draggable"+i).css("color",colors[i]);

    if (colors[i]=="white") {
        $("#draggable"+i).css("background","rgba(0,0,0,.3)");
    }

      rw=$("#draggable"+i).width();
  }

});

var relative_left=[];
var relative_top=[];
// Get and report the coordinates of the graphical elements
$( "#b", document.body ).click(function( event ) {
//get background image's dimensions
    image=document.getElementById("pict");
    image_width=image.naturalWidth;
    image_height=$("#background").height();
//    add dimensions to styles code
    $("#image_height").append(image_height+"px;");
    $("#image_width").append(image_width+"px;");

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
  relative_left[1]=Math.round(offset[1].left-25);
  relative_top[1]=Math.round(offset[1].top-67);


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
  var terminus="<div class=\"antenna-workflow{0}-publish antenna-workflow-number\"></div><div class=\"antenna-workflow{0}-run antenna-workflow-number\"></div><div class=\"antenna-workflow{0}-manage antenna-workflow-number\"></div><div class=\"antenna-workflow{0}-analyze antenna-workflow-number\"></div><div style=\"clear: both;\"></div></div></div></div></div>\', scenario.index)}));";
  strformat=strformat+"<div style=\"position: absolute;top: "+relative_top[1]+"px;left: "+relative_left[1]+"px;\">";
  // $('<li></li>').text(strformat).appendTo('#html_format');
  strformat=strformat+"<div class=\"image-tab{0}-1\" style=\"width:"+widths[1]+"px; color: "+colors[1]+"; font-size:"+fonts[1]+"px; text-align:"+align[1]+"\"></div>";
  $('<li></li>').text(strformat).appendTo('#html_format');

  for (var i=2;i<variables.length;i++){
    newstr="<div style=\"position: absolute;top: "+relative_top[i]+"px;left: "+relative_left[i]+"px;\">";
    $('<li></li>').text(newstr).appendTo('#html_format');

    strformat=strformat+newstr;
      console.log("build format str align ",i,align[i]);
    newstr="<div class=\"image-tab{0}-"+i+"\" style=\"width:"+widths[i]+"px;color: "+colors[i]+"; font-size:"+fonts[i]+"px; text-align:"+align[i]+"\"></div>";

    $('<li></li>').text(newstr).appendTo('#html_format');

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
      if (astrings[i]!="") {
          line[1]="$(selector + '"+i+"').html(\""+astrings[i]+"\" + Visualizer.view.variable.getFormattedValue(";
//          line[1]=line[1]+"\""+astrings[i]+"\"+";
      }
    line[3]="  vars[1]['"+variables[i]+"'].record.data.variable));";
      if (xstrings[i]!="") {
//          line[3]=line[3]+"+\""+xstrings[i]+"\"";
           line[3]="  vars[1]['"+variables[i]+"'].record.data.variable)+\""+xstrings[i]+"\");";
      }

    for (var j=1; j<4; j++) {
    $("#selector").append(line[j]+"<br>");

    };
    $("#selector").append("<br>");
  };

  var styles="  background: url("+background_img_styles+")";
    $("#styles_url").text(styles);

});