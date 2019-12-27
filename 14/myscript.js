var canvas = document.getElementById('canvas');
 if(canvas.getContext)
 {
     var ctx = canvas.getContext('2d');
     for(var i = 10;i<=130;i=i+20)
     {
     ctx.fillStyle = 'rgb(0,255,0)';
     ctx.fillRect(i,15,10,10);
     }
     ctx.fillStyle = 'rgb(255, 0, 0)';

     var colors = new Array('red','blue','green','yellow','black','grey','purple','orange');
     var j = 290;
     var pivot = 8;
     for(var i = 50;i<=j;i+=30)
     {
        ctx.beginPath();
     ctx.fillStyle = colors[pivot-1];
     ctx.arc(i, 100, 10, 0, 2 * Math.PI, true);
     ctx.fill();
     pivot-=1;
        ctx.closePath();
     }

     for(var i = 1;i<15;i++)
     {
        ctx.beginPath();
        ctx.arc(300, 300, i*12, 0, 2 * Math.PI, true);
        ctx.stroke();
        ctx.closePath();
     }

     var pivot1 = 8;
      var  count = 30;
      var  r=10;
     var   x=600;
     var y =300;
     for(var i = 0;i<8;i++)
     {
        ctx.beginPath();
        ctx.fillStyle = colors[pivot1-1];
        ctx.arc(x+count, y+count, r+(i*5), 0, 2 * Math.PI, true);
        ctx.fill();
        pivot1-=1;
        count+=30;
        
     }


 }
