var arr = {text1:100,text2:300,text3:200,text4:350,text5:400,text6:180,text7:200,text8:100, text9:250, text10:250 };
histoGram(arr,400,400);
lineGraph(arr,200,400);
pieChart(arr,400,400);

function histoGram(arr,w,h)
{
   if(w<400)
      w=400;
   if(h<400)
      h=400;
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var gwStart = 0.2*w;
   var ghStart = 0.1*h;
   var max=0,sum=0;
   var length= Object.keys(arr).length;
   for(var i=0;i<length;i++)
   {
      if(arr[Object.keys(arr)[i]]>max)
      max = arr[Object.keys(arr)[i]];
      sum+=arr[Object.keys(arr)[i]]; 
   }
   var cElem = document.createElement("canvas");
   cElem.setAttribute("id","barGraph");
   cElem.setAttribute("height",h);
   cElem.setAttribute("width",w);
   document.getElementById('mycanvas').appendChild(cElem);
   var c = cElem;
   var ctx = c.getContext("2d");
   ctx.font = "7px Arial";
   ctx.strokeStyle="#cccccc";
   ctx.lineWidth=1;      
   drawGraphLines(ctx,w,h,arr,length,max);
   drawHistoGram(ctx,w,h,arr,length,max);
   ctx.beginPath();
   ctx.strokeStyle="#000000";
   ctx.lineWidth=2;      
   ctx.moveTo(gwStart,0);
   ctx.lineTo(gwStart,gHeight);
   ctx.stroke();
   ctx.closePath();
   ctx.beginPath();
   ctx.moveTo(gwStart,gHeight);
   ctx.lineTo(w,gHeight);
   ctx.stroke();
   ctx.closePath();
   ctx.font = "12px Arial";
   ctx.fillStyle = "#000000";  
   ctx.save();
   ctx.translate(0,h);
   ctx.rotate(Math.PI/180*-90);
   ctx.fillText("Y-Axis Text",gWidth/2,0.1*w);
   ctx.restore();
   ctx.fillText("X-Axis Text",gWidth/2,h-10);
}


function lineGraph(arr,w,h)
{
   if(w<400)
      w=400;
   if(h<400)
      h=400;
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var gwStart = 0.2*w;
   var ghStart = 0.1*h;
   var max=0,sum=0;
   var length= Object.keys(arr).length;
   for(var i=0;i<length;i++)
   {
      if(arr[Object.keys(arr)[i]]>max)
      max = arr[Object.keys(arr)[i]];
      sum+=arr[Object.keys(arr)[i]]; 
   }
   //Create Canvas Elem
   var cElem = document.createElement("canvas");
   cElem.setAttribute("id","meli");
   cElem.setAttribute("height",h);
   cElem.setAttribute("width",w);
   document.getElementById('mycanvas').appendChild(cElem);
   var c = cElem;
   var ctx = c.getContext("2d");
   ctx.font = "7px Arial";
   ctx.strokeStyle="#cccccc";
   ctx.lineWidth=1;      
   drawGraphLines(ctx,w,h,arr,length,max);
   ctx.lineWidth=2;   
   drawLineGraph(ctx,w,h,arr,length,max);
   //Drawing the X and Y lines.
   ctx.strokeStyle="#000000";
   ctx.lineWidth=2;      
   ctx.beginPath();
   ctx.moveTo(gwStart,0);        //Draw the Y line starting with start coords (0.2*w,0)
   ctx.lineTo(gwStart,gHeight);  //and end coords (0.2*w,0.9*h) -- x is same since only Y cord changes
   ctx.stroke();
   ctx.closePath();
   ctx.beginPath();
   ctx.moveTo(gwStart,gHeight);  //Draw the Y line starting with start coords (0.2*w,0.9*h)
   ctx.lineTo(w,gHeight);        //and end coords (w,0.9*h) -- Y is same since only X coord changes
   ctx.stroke();
   ctx.closePath();
   ctx.font = "12px Arial";
   ctx.fillStyle = "#000000";  
   ctx.save();
   ctx.translate(0,h);           //To draw the text in vertical direction, first translate the canvas by its height
   ctx.rotate(Math.PI/180*-90);  //Now rotate the canvas by -90 deg.
   ctx.fillText("Y-Axis Text",gWidth/2,0.1*w);  //Draw the Y-axis text in vertical direction. 
   ctx.restore();                               //Restore the canvas to its saved state.
   ctx.fillText("X-Axis Text",gWidth/2,h-10); //Draw the X-axis text.
}

function pieChart(arr,w,h)
{
   if(w<400)
      w=400;
   if(h<400)
      h=400;
  var max=0,sum=0;
   var length= Object.keys(arr).length;
   for(var i=0;i<length;i++)
   {
      if(arr[Object.keys(arr)[i]]>max)
      max = arr[Object.keys(arr)[i]];
      sum+=arr[Object.keys(arr)[i]]; 
   }
   var cElem = document.createElement("canvas");
   cElem.setAttribute("id","mepi");
   cElem.setAttribute("height",h);
   cElem.setAttribute("width",w);
   document.getElementById('mycanvas').appendChild(cElem);
   var c = cElem;
   var ctx = c.getContext("2d");
   drawPiCircle(ctx,w,h,arr,length,sum);
}



/*
//Bar Graph         
//Pie Chart
var cElem = document.createElement("canvas");
cElem.setAttribute("id","mepi");
cElem.setAttribute("height",h);
cElem.setAttribute("width",w);
document.getElementById('mycanvas').appendChild(cElem);
var d = cElem;
var cntxt = d.getContext("2d");
drawPiCircle(cntxt);

//Line Graph
var cElem2 = document.createElement("canvas");
cElem2.setAttribute("id","meli");
cElem2.setAttribute("height",h);
cElem2.setAttribute("width",w);
document.getElementById('mycanvas').appendChild(cElem2);
var e = cElem2;
var c1 = e.getContext("2d");
c1.beginPath();
c1.strokeStyle="#000000";
c1.lineWidth=2;      
c1.moveTo(36,0);
c1.lineTo(36,360);
c1.stroke();
c1.closePath();
c1.rotate(Math.PI/2);

c1.rotate(-Math.PI/2);
c1.fillText("Heading",180,390);
c1.beginPath();
c1.strokeStyle="#000000";
c1.lineWidth=2;      
c1.moveTo(36,360);
c1.lineTo(400,360);
c1.stroke();
c1.closePath();
c1.font = "7px Arial";
c1.strokeStyle="#cccccc";
drawGraphLines(c1);
c1.lineWidth=1;  
c1.lineWidth=2;   
//console.log(arr[Object.keys(arr)[0]]);   
drawLineGraph(c1);
*/
//Draw Line Graph
function drawLineGraph(ctx,w,h,arr,length,max)
{
   ctx.strokeStyle = getRandomColor();
   ctx.fillStyle = getRandomColor();
   var j=0;
   var ghStart = 0.1*h;
   var gwStart = 0.2*w;
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var a1=0.8*w;var a2=0.1*w;
   var x=gWidth/length-0.01*w;
   ctx.fillText(arr[Object.keys(arr)[0]],x+gwStart,gHeight-(arr[Object.keys(arr)[0]]*0.8*h/max)-5);
   for(var i=1;i<length;i++)
   {
      ctx.beginPath();
      ctx.moveTo(x*i+gwStart,gHeight-(arr[Object.keys(arr)[i-1]]*0.8*h/max));
      ctx.lineTo(x*(i+1)+gwStart,gHeight-(arr[Object.keys(arr)[i]]*0.8*h/max));
      ctx.stroke();
      ctx.fillText(arr[Object.keys(arr)[i]],x*(i+1)+gwStart,gHeight-(arr[Object.keys(arr)[i]]*0.8*h/max)-5);
      ctx.closePath();
      j++;
   }

}

//Draw Pie Chart
function drawPiCircle(ctx,w,h,arr,length,sum)
{
   var tot=0,tot1=0;
   for(var i=0;i<length;i++){
      ctx.beginPath();
      ctx.moveTo(w/2,h/2);
      tot1=tot1+(2*arr[Object.keys(arr)[i]])/sum*Math.PI;
      if(w<=h)ctx.arc(w/2, h/2, 0.4*w,tot, tot1);
      else
         ctx.arc(w/2, h/2, 0.4*h,tot, tot1);
      tot=tot+(2*arr[Object.keys(arr)[i]])/sum*Math.PI;
      ctx.fillStyle = getRandomColor();
      ctx.lineTo(w/2,h/2);
      ctx.fill();
      ctx.closePath();
   }
}

//Drawing the graph lines
function drawGraphLines(ctx,w,h,arr,length,max)
{
   var j=0;
   var ghStart = 0.1*h;
   var gwStart = 0.2*w;
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var a1=0.8*w;var a2=0.1*w;
   var x=gWidth/length-0.01*w;
   for(var i=0;i<length;i++)
   {
      ctx.beginPath();
      ctx.moveTo(gwStart+x*(i+1),ghStart);
      ctx.lineTo(gwStart+x*(1+i),gHeight);
      ctx.stroke();
      ctx.fillText(Object.keys(arr)[j],gwStart+x*(i+1)-7.5,gHeight+10);
      ctx.closePath();
      j++;
   }
   j=0;
   for(var i=gHeight;i>=ghStart;i=i-ghStart)
   {
      ctx.beginPath();
      ctx.moveTo(gwStart,i);
      ctx.lineTo(w,i);
      ctx.stroke();
      if(max%8!=0)
         ctx.fillText(parseFloat(max/8*(j)).toFixed(1),0.15*w,i+2.5);
      else
         ctx.fillText(max/8*(j),0.15*w,i+2.5);
      ctx.closePath();
      j++;
   } 
}

//Draw Histo Gram(rectangle)
function drawHistoGram(ctx,w,h,arr,length,max)
{
   var l = length;
   var j = 0;
   var ghStart = 0.1*h;
   var gwStart = 0.2*w;
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var a1=0.8*w;
   var a2=0.1*w;
   var x=gWidth/length-0.01*w;
   for(var i=0;i<l;i++)
   {
      ctx.beginPath();
      ctx.fillStyle = getRandomColor();
      ctx.fillRect((gwStart+x*(i+0.75)),gHeight,0.5*x,-(arr[Object.keys(arr)[i]]*0.8*h/max));
      ctx.fillText(arr[Object.keys(arr)[i]],x*(i+0.75)+gwStart,gHeight-(arr[Object.keys(arr)[i]]*0.8*h/max)-5);
      ctx.closePath();
      j++;
   }
}
//Get Random Color
function getRandomColor() {
    var colorArray = 'AB12345CDEf67890';
    var color='#';
    for (var i = 0; i < 6; i++ ) {
        color += colorArray[Math.floor(Math.random() * 16)];
    }
    return color;
}
