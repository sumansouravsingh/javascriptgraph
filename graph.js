var h =400;var w =400;
var arr = {text1:100,text2:300,text3:200,text4:350,text5:400,text6:180,text7:200,text8:100, text9:250, text10:250};
var obj = JSON.stringify(arr);
var max=0,sum=0;
console.log(obj+obj.length);
var length= Object.keys(arr).length;
console.log(length);
for(var i=0;i<length;i++)
{
   if(arr[Object.keys(arr)[i]]>max)
   max = arr[Object.keys(arr)[i]];
   sum+=arr[Object.keys(arr)[i]]; 
}
console.log(Object.keys(arr));
console.log(Object.keys(arr)[2]);
console.log(document.getElementById('mycanvas'));

//Bar Graph         
var cElem = document.createElement("canvas");
cElem.setAttribute("id","me");
cElem.setAttribute("height",h);
cElem.setAttribute("width",w);
document.getElementById('mycanvas').appendChild(cElem);
var c = cElem;
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="#000000";
ctx.lineWidth=2;      
ctx.moveTo(36,0);
ctx.lineTo(36,360);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.strokeStyle="#000000";
ctx.lineWidth=2;      
ctx.moveTo(36,360);
ctx.lineTo(400,360);
ctx.stroke();
ctx.closePath();
ctx.font = "7px Arial";
ctx.strokeStyle="#cccccc";
ctx.lineWidth=1;      
drawGraphLines(ctx);
drawRect(ctx);
//Pie Chart
var cElem1 = document.createElement("canvas");
cElem1.setAttribute("id","mepi");
cElem1.setAttribute("height",h);
cElem1.setAttribute("width",w);
document.getElementById('mycanvas').appendChild(cElem1);
var d = cElem1;
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

//Draw Line Graph
function drawLineGraph(cd)
{
   cd.strokeStyle = getRandomColor();
   cd.fillStyle = getRandomColor();
   var a1=0.9*w;var a2=0.09*w;
   var x=a1/length-5;
   var j=0;
   cd.fillText(arr[Object.keys(arr)[0]],x+a2,a1-(arr[Object.keys(arr)[0]]*a1/max)-5);
   for(var i=1;i<length;i++)
   {
      cd.beginPath();
      cd.moveTo(x*(i)+a2,a1-(arr[Object.keys(arr)[i-1]]*a1/max));
      cd.lineTo(x*(i+1)+a2,a1-(arr[Object.keys(arr)[i]]*a1/max));
      cd.stroke();
      cd.fillText(arr[Object.keys(arr)[i]],x*(i+1)+a2,a1-(arr[Object.keys(arr)[i]]*a1/max)-5);
      cd.closePath();
      j++;
   }

   /*
   for(var i=1;i<length;i++)
   {
      cd.beginPath();
      cd.moveTo(36*(j+2),360-(arr[i-1]*360/max));
      cd.lineTo(36*(j+3),360-(arr[i]*360/max));
      cd.stroke();
      cd.fillText(arr[i],36*(j+3)-5,360-(arr[i]*360/max)-5);
      cd.closePath();
      j++;
   }*/
}

//Draw Pie Chart
function drawPiCircle(cntxt)
{
   var tot=0,tot1=0;
   for(var i=0;i<length;i++){
      cntxt.beginPath();
      cntxt.moveTo(w/2,h/2);
      tot1=tot1+(2*arr[Object.keys(arr)[i]])/sum*Math.PI;
      cntxt.arc(w/2, h/2, w/2,tot, tot1);
      tot=tot+(2*arr[Object.keys(arr)[i]])/sum*Math.PI;
      cntxt.fillStyle = getRandomColor();
      ctx.lineTo(w/2,h/2);
      cntxt.fill();
      cntxt.closePath();
   }

   /*for(var i=0;i<length;i++){
      cntxt.beginPath();
      cntxt.moveTo(w/2,h/2);
      tot1=tot1+(2*arr[i])/sum*Math.PI;
      cntxt.arc(w/2, h/2, w/2,tot, tot1);
      tot=tot+(2*arr[i])/sum*Math.PI;
      cntxt.fillStyle = getRandomColor();
      ctx.lineTo(w/2,h/2);
      cntxt.fill();
      cntxt.closePath();
   }
   */
}

//Drawing the graph lines
function drawGraphLines(ctx)
{
   var j=0;
   var a1=0.9*w;var a2=0.09*w;
   var x=a1/length-5;
   for(var i=0;i<length;i++)
   {
      ctx.beginPath();
      ctx.moveTo(x*(i+1)+a2,0);
      ctx.lineTo(x*(1+i)+a2,a1);
      ctx.stroke();
      ctx.fillText(Object.keys(arr)[j],x*(i+1)+a2-7.5,a1+10);
      ctx.closePath();
      j++;
   }
   j=0;
   for(var i=a2;i<=a1;i=i+a2)
   {
      ctx.beginPath();
      ctx.moveTo(a2,i);
      ctx.lineTo(w,i);
      ctx.stroke();
      if(max%10!=0)
         ctx.fillText(parseFloat(max/10*(9-j)).toFixed(1),16,i);
      else
         ctx.fillText(max/10*(9-j),16,i);
      ctx.closePath();
      j++;
   } 
}

//Draw Bar Graph(rectangle)
function drawRect(ctx)
{
   var l = length;
   var j =0;
   var a1= 0.9*w;var a2=0.09*w;
   var x = a1/length-5;
   for(var i=0;i<l;i++)
   {
      ctx.beginPath();
      ctx.fillStyle = getRandomColor();
      ctx.fillRect((x*(i+0.75))+a2,a1,0.5*x,-(arr[Object.keys(arr)[i]]*a1/max));
      ctx.fillText(arr[Object.keys(arr)[i]],x*(i+0.75)+a2,a1-(arr[Object.keys(arr)[i]]*a1/max)-5);
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
