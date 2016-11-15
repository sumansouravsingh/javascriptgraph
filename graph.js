//var arr = {text1:100,text2:300,text3:200,text4:350,text5:400,text6:180,text7:200,text8:600, text9:250, text10:250, text11:300, text12: 400, text13:370, text14:220 };
//histoGram(arr,400,1200,6,0);
//lineGraph(arr,200,400,6,1);
//pieChart(arr,400,400);
//barGraph(arr,400,400,2);
function histoGram(arr,w,h,nLines,isVerticalLines)
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
   drawXGraphLines(ctx,w,h,arr,length,max,nLines);
   drawYGraphLines(ctx,w,h,arr,length,max,isVerticalLines);
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
   ctx.fillText("Y-Axis Text",gHeight/2,0.1*w);
   ctx.restore();
   ctx.fillText("X-Axis Text",gWidth/2,gHeight+30);
}

function barGraph(arr,w,h,nLines,isHorizontalLines)
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
   drawXBarGraphLines(ctx,w,h,arr,length,max,isHorizontalLines);
   drawYBarGraphLines(ctx,w,h,arr,length,max,nLines);
   drawBarGraph(ctx,w,h,arr,length,max,nLines);
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
   ctx.fillText("Y-Axis Text",gHeight/2,0.1*w-10);
   ctx.restore();
   ctx.fillText("X-Axis Text",gWidth/2,0.9*h+30);
}


function lineGraph(arr,w,h,nLines,isVerticalLines)
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
   drawXGraphLines(ctx,w,h,arr,length,max,nLines);
   drawYGraphLines(ctx,w,h,arr,length,max,isVerticalLines);
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
   ctx.fillText("Y-Axis Text",gHeight/2,0.1*w);  //Draw the Y-axis text in vertical direction. 
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
   var x=gWidth/(length+1);
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

//Draw the lines parallel to Y-axis. (X constant and Y changing)
function drawYBarGraphLines(ctx,w,h,arr,length,max,nLines)
{
   var j=0;
   var ghStart = 0.1*h;
   var gwStart = 0.2*w;
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var a1=0.8*w;var a2=0.1*w;
   var x=gHeight/length-0.004*h;
   for(var i=w-a2;i>=gwStart;i=i-(0.7/nLines)*w)
   {
      ctx.beginPath();
      ctx.moveTo(i,0);
      ctx.lineTo(i,gHeight);
      ctx.stroke();
      if(max%nLines!=0)
         ctx.fillText(parseFloat(max/nLines*(nLines-j)).toFixed(1),i-7.5,gHeight+10);
      else
         ctx.fillText(max/nLines*(nLines-j),i-7.5,gHeight+10);
      ctx.closePath();
      j++;
   } 
}

//Draw the lines parallel to X-axis. (Y constant and X changing)
function drawXBarGraphLines(ctx,w,h,arr,length,max,isHorizontalLines)
{
   var j=0;
   var ghStart = 0.1*h;
   var gwStart = 0.2*w;
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var a1=0.8*w;var a2=0.1*w;
   var x=gHeight/(length+1);
   
   if(isHorizontalLines)
   {
      for(var i=0;i<length;i++)
      {
         ctx.beginPath();
         ctx.moveTo(gwStart,x*(i+1));
         ctx.lineTo(w,x*(i+1));
         ctx.stroke();
         ctx.closePath();
         j++;
      }
   }
   j=0;
   for(var i=0;i<length;i++)
   {
      ctx.fillText(Object.keys(arr)[j],a2,x*(i+1));
      j++;
   }      
}
//Draw the bars. (Rectangles, start points: x-> gwStart, y->x*(i+0.75), lengths: x->value of arr[i], y->0.5*x
function drawBarGraph(ctx,w,h,arr,length,max,nLines)
{
   var l = length;
   var ghStart = 0.1*h;
   var gwStart = 0.2*w;
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var x=gHeight/(length+1);

   for(var i=0;i<l;i++)
   {
      ctx.beginPath();
      ctx.fillStyle = getRandomColor();
      ctx.fillRect(gwStart,x*(i+0.75),arr[Object.keys(arr)[i]]*0.7*w/max,0.5*x);//(0.7 = number of vertical lines(8)*difference between each line(0.0875))
      ctx.fillText(arr[Object.keys(arr)[i]],arr[Object.keys(arr)[i]]*0.7*w/max+gwStart+5,x*(i+1));
      ctx.closePath();
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
function drawYGraphLines(ctx,w,h,arr,length,max,isVerticalLines)
{
   var j=0;
   var ghStart = 0.1*h;
   var gwStart = 0.2*w;
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var a1=0.8*w;var a2=0.1*w;
   var x=gWidth/(length+1);
   if(isVerticalLines){
      for(var i=0;i<length;i++)
      {
         ctx.beginPath();
         ctx.moveTo(gwStart+x*(i+1),ghStart);
         ctx.lineTo(gwStart+x*(i+1),gHeight);
         ctx.stroke();
         ctx.closePath();
         j++;
      }   
   }
   j=0;
   for(var i=0;i<length;i++)
   {
      ctx.fillText(Object.keys(arr)[j],gwStart+x*(i+1)-7.5,gHeight+10);
      j++;
   }
   
}
function drawXGraphLines(ctx,w,h,arr,length,max,nLines)
{
   var j=0;
   var ghStart = 0.1*h;
   var gwStart = 0.2*w;
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var a1=0.8*w;var a2=0.1*w;
   var x=gWidth/length-0.008*w;
   for(var i=gHeight;i>=ghStart;i=i-(8/nLines)*ghStart)
   {
      ctx.beginPath();
      ctx.moveTo(gwStart,i);
      ctx.lineTo(w,i);
      ctx.stroke();
      if(max%nLines!=0)
         ctx.fillText(parseFloat(max/nLines*(j)).toFixed(1),0.15*w,i+2.5);
      else
         ctx.fillText(max/nLines*(j),0.15*w,i+2.5);
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
   var x=gWidth/(length+1);
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
