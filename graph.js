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
   cElem.setAttribute("id","graph-canvas");
   cElem.setAttribute("height",h);
   cElem.setAttribute("width",w);
   document.getElementById('mycanvas').appendChild(cElem);
   var c = cElem;
   var ctx = c.getContext("2d");
   drawPiCircle(ctx,w,h,arr,length,sum);
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


/* ----  Bar Graph Functions Start ---- */

function barGraph(arr,w,h,nLines,isHorizontalLines,xText,yText)
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
   setCanvasProperties(cElem,w,h);
   var ctx = cElem.getContext("2d");
   bargraphDrawingFunctions(ctx,w,h,arr,length,nLines,max,isHorizontalLines,xText,yText);
}

function bargraphDrawingFunctions(ctx,w,h,arr,length,nLines,max,isHorizontalLines,xText,yText){
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var gwStart = 0.2*w;
   var ghStart = 0.1*h;
   ctx.fillStyle = "#ffffff";
   ctx.fillRect(0,0,w,h);
   ctx.font = "7px Arial";
   ctx.strokeStyle="#cccccc";
   ctx.fillStyle = "#000000";
   ctx.lineWidth=1;      
   drawXBarGraphLines(ctx,w,h,arr,length,max,isHorizontalLines,ghStart,gwStart,gHeight,gWidth);
   drawYBarGraphLines(ctx,w,h,arr,length,max,nLines,ghStart,gwStart,gHeight,gWidth);
   drawBarGraph(ctx,w,h,arr,length,max,nLines,gHeight,gwStart);
   drawXandYaxis(ctx,xText,yText,h,w,gHeight,gWidth,gwStart,ghStart);
}

//Draw the lines parallel to X-axis. (Y constant and X changing)
function drawXBarGraphLines(ctx,w,h,arr,length,max,isHorizontalLines,ghStart,gwStart,gHeight,gWidth)
{
   var j=0;
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
      ctx.fillText(Object.keys(arr)[j],0.1*w,x*(i+1));
      j++;
   }      
}

//Draw the lines parallel to Y-axis. (X constant and Y changing)
function drawYBarGraphLines(ctx,w,h,arr,length,max,nLines,ghStart,gwStart,gHeight,gWidth)
{
   var j=0;var a2=0.1*w;
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

//Draw the bars. (Rectangles, start points: x-> gwStart, y->x*(i+0.75), lengths: x->value of arr[i], y->0.5*x
function drawBarGraph(ctx,w,h,arr,length,max,nLines,gHeight,gwStart)
{
   var x=gHeight/(length+1);
   for(var i=0;i<length;i++)
   {
      ctx.beginPath();
      ctx.fillStyle = getRandomColor();
      ctx.fillRect(gwStart,x*(i+0.75),arr[Object.keys(arr)[i]]*0.7*w/max,0.5*x);//(0.7 = number of vertical lines(8)*difference between each line(0.0875))
      ctx.fillText(arr[Object.keys(arr)[i]],arr[Object.keys(arr)[i]]*0.7*w/max+gwStart+5,x*(i+1));
      ctx.closePath();
   }
}
/* ----  Bar Graph Functions Ends ---- */

/* ----  HistoGram Functions Ends ---- */
function histoGram(arr,w,h,nLines,isVerticalLines,xText,yText)
{
   if(w<400)
      w=400;
   if(h<400)
      h=400;
   var max=0;
   var length= Object.keys(arr).length;
   for(var i=0;i<length;i++)
   {
      if(arr[Object.keys(arr)[i]]>max)
      max = arr[Object.keys(arr)[i]];
   }
   var cElem = document.createElement("canvas");
   setCanvasProperties(cElem,w,h);
   var ctx = cElem.getContext("2d");
   histogramDrawingFunctions(ctx,w,h,arr,length,nLines,max,isVerticalLines,xText,yText);
}


function histogramDrawingFunctions(ctx,w,h,arr,length,nLines,max,isVerticalLines,xText,yText)
{
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var gwStart = 0.2*w;
   var ghStart = 0.1*h;
   ctx.fillStyle = "#ffffff";
   ctx.fillRect(0,0,w,h);
   ctx.font = "7px Arial";
   ctx.strokeStyle="#cccccc";
   ctx.fillStyle = "#000000";
   ctx.lineWidth=1;      
   drawXGraphLines(ctx,w,h,arr,length,max,nLines,ghStart,gwStart,gHeight,gWidth);
   drawYGraphLines(ctx,w,h,arr,length,max,isVerticalLines,ghStart,gwStart,gHeight,gWidth);
   drawHistoGram(ctx,w,h,arr,length,max,ghStart,gwStart,gHeight,gWidth);
   drawXandYaxis(ctx,xText,yText,h,w,gHeight,gWidth,gwStart,ghStart);
}

//Draw Histo Gram(rectangle)
function drawHistoGram(ctx,w,h,arr,length,max,ghStart,gwStart,gHeight,gWidth)
{
   var j = 0;
   var x=gWidth/(length+1);
   for(var i=0;i<length;i++)
   {
      ctx.beginPath();
      ctx.fillStyle = getRandomColor();
      ctx.fillRect((gwStart+x*(i+0.75)),gHeight,0.5*x,-(arr[Object.keys(arr)[i]]*0.8*h/max));
      ctx.fillText(arr[Object.keys(arr)[i]],x*(i+0.75)+gwStart,gHeight-(arr[Object.keys(arr)[i]]*0.8*h/max)-5);
      ctx.closePath();
      j++;
   }
}
/* ----  Histogram Functions Ends ---- */

/* ----  Line Graph Functions Starts ---- */

function lineGraph(arr,w,h,nLines,isVerticalLines,xText,yText)
{
   if(w<400)
      w=400;
   if(h<400)
      h=400;
   var max=0;
   var length= Object.keys(arr).length;
   for(var i=0;i<length;i++)
   {
      if(arr[Object.keys(arr)[i]]>max)
      max = arr[Object.keys(arr)[i]];
   }
   var cElem = document.createElement("canvas");
   setCanvasProperties(cElem,w,h);
   var ctx = cElem.getContext("2d");
   linegraphDrawingFunctions(ctx,w,h,arr,length,nLines,max,isVerticalLines,xText,yText);   
}

function linegraphDrawingFunctions(ctx,w,h,arr,length,nLines,max,isVerticalLines,xText,yText){
   var gWidth = 0.8*w;
   var gHeight = 0.9*h;
   var gwStart = 0.2*w;
   var ghStart = 0.1*h;
   ctx.fillStyle = "#ffffff";
   ctx.fillRect(0,0,w,h);
   ctx.font = "7px Arial";
   ctx.strokeStyle="#cccccc";
   ctx.fillStyle = "#000000";
   ctx.lineWidth=1;      
   drawXGraphLines(ctx,w,h,arr,length,max,nLines,ghStart,gwStart,gHeight,gWidth);
   drawYGraphLines(ctx,w,h,arr,length,max,isVerticalLines,ghStart,gwStart,gHeight,gWidth);
   drawLineGraph(ctx,w,h,arr,length,max,ghStart,gwStart,gHeight,gWidth);
   drawXandYaxis(ctx,xText,yText,h,w,gHeight,gWidth,gwStart,ghStart);
}

//Draw Line Graph
function drawLineGraph(ctx,w,h,arr,length,max,ghStart,gwStart,gHeight,gWidth)
{
   ctx.strokeStyle = getRandomColor();
   ctx.fillStyle = getRandomColor();
   var j=0;
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
/* ----  Line Graph Functions Ends ---- */


/* ----  Common  Functions Starts ---- */

function setCanvasProperties(cElem,w,h)
{
   cElem.setAttribute("id","graph-canvas");
   cElem.setAttribute("height",h);
   cElem.setAttribute("width",w);
   document.getElementById('mycanvas').appendChild(cElem);
}

function drawXandYaxis(ctx,xText,yText,h,w,gHeight,gWidth,gwStart,ghStart){
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
   ctx.fillText(yText,gHeight/2,0.1*w-20);  //Draw the Y-axis text in vertical direction. 
   ctx.restore();                               //Restore the canvas to its saved state.
   ctx.fillText(xText,gWidth/2,gHeight+30); //Draw the X-axis text.
}

function drawXGraphLines(ctx,w,h,arr,length,max,nLines,ghStart,gwStart,gHeight,gWidth)
{
   var j=0;
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

//Drawing the graph lines
function drawYGraphLines(ctx,w,h,arr,length,max,isVerticalLines,ghStart,gwStart,gHeight,gWidth)
{
   var j=0;
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

//Get Random Color
function getRandomColor() {
    var colorArray = 'AB12345CDEf67890';
    var color='#';
    for (var i = 0; i < 6; i++ ) {
        color += colorArray[Math.floor(Math.random() * 16)];
    }
    return color;
}
