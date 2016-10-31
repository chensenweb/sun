var canvas=document.getElementById("canvas");
var cxt=canvas.getContext("2d");

function DrawTrack(){
	for(var i=0;i<8;i++){
		cxt.beginPath();
		cxt.arc(500,500,(i+1)*50,0,360,false);
		cxt.closePath();
		cxt.strokeStyle="#fff";
		cxt.stroke();
	}
}
function DrawStart(x,y,radius,cycle,sColor,eColor){
	//画出星球需要哪些属性
	
	//星球的坐标点
	this.x=x;
	this.y=y;
	//星球的半径
	this.radius=radius;
	//星球的颜色(开始色,结束色)
	this.sColor=sColor;
	this.eColor=eColor;
	//创建一个渐变色空对象
	this.color=null;
	this.time=0;
	//公共周期
	this.cycle=cycle;
	this.draw=function(){
	cxt.save();
	cxt.translate(500,500);
	//设置旋转角度
	cxt.rotate(this.time*360/this.cycle*Math.PI/180);
	cxt.beginPath();
	cxt.arc(this.x,this.y,this.radius,0,360,false);
	cxt.closePath();
	this.color=cxt.createRadialGradient(this.x,this.y,0,this.x,this.y,this.radius);
	this.color.addColorStop(0,this.sColor);
	this.color.addColorStop(1,this.eColor);
	cxt.fillStyle=this.color;
	cxt.fill();
	cxt.restore();
	this.time+=1;
	}
}
function Sun(){//太阳1
	DrawStart.call(this,0,0,20,0,"#f00","#f90");
}
function Mercury(){//水星2
	DrawStart.call(this,0,-50,10,87.70,"#A69697","#5c3e40");
}
function Venus(){//金星3
	DrawStart.call(this,0,-100,10,224.71,"#c4bbac","#1f1315");
}
function Earth(){//地球4
	DrawStart.call(this,0,-150,10,365.224,"#78b1e8","#050c12");
}
function Mars(){//火星5
	DrawStart.call(this,0,-200,10,686.98,"#cec9b6","#76422d");
}
function Jupiter(){//木星6
	DrawStart.call(this,0,-250,10,4332.589,"#c0a48e","#322");
}
function Saturn(){//土星7
	DrawStart.call(this,0,-300,10,10759.5,"#f7f9e3","#5c4533");
}
function Uranus(){//天王星8
	DrawStart.call(this,0,-350,10,30799.95,"#a7e1e5","#19243a");
}
function Neptune(){//海王星9
	DrawStart.call(this,0,-400,10,60152.95,"#0661b2","#1E3b73");
}

var s=new Sun();//1
var m=new Mercury();//2
var v=new Venus();//3
var e=new Earth();//4
var ma=new Mars();//5
var j=new Jupiter();//6
var sa=new Saturn();//7
var ur=new Uranus();//8
var ne=new Neptune();//9

setInterval(
	function(){
		cxt.clearRect(0,0,1000,1000);
		DrawTrack();
		s.draw();
		m.draw();
		v.draw();
		e.draw();
		ma.draw();
		j.draw();
		sa.draw();
		ur.draw();
		ne.draw();
},10);