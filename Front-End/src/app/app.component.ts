import { identifierModuleUrl, sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

var serial =range(1,100000000)


 //container to hold all different shapes on it
var shapes:shape[] = []
//flag to activate buttons
var remove_flag :boolean = false;
var move_flag :boolean = false;
var resize_flag :boolean = false;
var fill_flag :boolean = false;
var copy_flag : boolean = false;

var create_line_flag : boolean = false;
var created_line : boolean = false;

var create_circle_flag : boolean = false;
var created_circle : boolean = false;

var create_rect_flag : boolean = false;
var created_rect : boolean = false;

var create_square_flag : boolean = false;
var created_square : boolean = false;

var create_ellipse_flag : boolean = false;
var created_ellipse : boolean = false;

var create_triangle_flag : boolean = false;
var created_triangle : boolean = false;

var circleButtonFlag : boolean = false;
var squareButtonFlag : boolean = false;
var rectButtonFlag : boolean = false;
var lineButtonFlag : boolean = false;
var triangleButtonFlag : boolean = false;
var ellipseButtonFlag : boolean = false;


var found : boolean = false;

var strokeColor:string = 'black';
var strokeWidth:number = 3;

//randomizer function :pick  a random value between two edges
function getRandomInt(min:number, max:number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//shape interface to cover all shapes under restricted contract
interface shape{
  x:number;
  y:number;
  width:number;
  height:number;
  fiCo:String;
  stCo:String;
  stWi:number;
  area:Path2D;
  type:String;
  is_filled:boolean;

  draw(canvasGlobal:CanvasRenderingContext2D,fillcolor:string):void;

}

//factory class to produce all kinds of shapes according to the given string
class factory{
  create(shape_name:String):shape{
    var shape:shape
    switch(shape_name.toLowerCase()){
      case "circle":
        shape = new circle();
        break;
      case "rect":
        shape = new rect();
        break;
      case "square":
        shape = new square();
        break;
      case "triangle":
        shape = new triangle();
        break;
      case "ellipse":
        shape = new ellipse();
        break;
      case "line":
        shape = new line();
        break;
      default:
        throw new Error;
    }
    return shape;
  }
}


//---------------------------------------------------------------------------//

class line implements shape{
  x = getRandomInt(124,1380);
	y = getRandomInt(70,580);
  width = 0;
	height = 0;
  type = "line";
  fiCo = "";
  stCo = strokeColor;
  stWi = strokeWidth;
  area: Path2D = new Path2D;
  is_filled = false

  draw(canvasGlobal:CanvasRenderingContext2D,fillcolor:string) {

      this.area = new Path2D
      this.area.moveTo(this.x, this.y);
      this.area.lineTo(this.width,  this.height);
      this.area.closePath;
      canvasGlobal.beginPath();
      canvasGlobal.strokeStyle = this.stCo;
      canvasGlobal.lineWidth = this.stWi;
      canvasGlobal.moveTo(this.x, this.y);
      canvasGlobal.lineTo(this.width, this.height);
      canvasGlobal.closePath();
      canvasGlobal.stroke();

  }
}

//---------------------------------------------------------------------------//

class circle implements shape{
	x = getRandomInt(124,1380);
	y = getRandomInt(70,580);
  width = 80;
	height = 80;
  type = "circle";
  fiCo = "";
  stCo = strokeColor;
  stWi = strokeWidth;
  area: Path2D = new Path2D;
  is_filled = false

	draw(canvasGlobal:CanvasRenderingContext2D,fillcolor:string) {
    if(this.is_filled){
      if(fillcolor != ""){
        this.fiCo = fillcolor

      }
      this.area = new Path2D
      this.area.arc(this.x, this.y, 0.5*this.width, 0, 2*Math.PI);
      canvasGlobal.beginPath();
      canvasGlobal.strokeStyle = this.stCo;
      canvasGlobal.lineWidth = this.stWi;
      canvasGlobal.fillStyle = this.fiCo;
      canvasGlobal.arc(this.x, this.y, 0.5*this.width, 0, 2*Math.PI);
      canvasGlobal.fill();
      canvasGlobal.stroke();
    }else{
      this.area = new Path2D
      this.area.arc(this.x, this.y, 0.5*this.width, 0, 2*Math.PI);
      canvasGlobal.beginPath();
      canvasGlobal.strokeStyle = this.stCo;
      canvasGlobal.lineWidth = this.stWi;
      canvasGlobal.arc(this.x, this.y, 0.5*this.width, 0, 2*Math.PI);
      canvasGlobal.stroke();
    }



	}
}

//---------------------------------------------------------------------------//

class rect implements shape{
  x = getRandomInt(124,1340);
  y = getRandomInt(70,580);
  width = 120;
  height = 60;
  fiCo = "";
  stCo = strokeColor;
  stWi = strokeWidth;
  type = "rect";
  area: Path2D = new Path2D;
  is_filled = false

  draw(canvasGlobal:CanvasRenderingContext2D,fillcolor:string) {
    if(this.is_filled){
      if(fillcolor != ""){
        this.fiCo = fillcolor

      }
      this.area = new Path2D
      this.area.rect(this.x, this.y,this.width, this.height);
      canvasGlobal.strokeStyle = this.stCo;
      canvasGlobal.lineWidth = this.stWi;
      canvasGlobal.fillStyle = this.fiCo;
      canvasGlobal.beginPath();
      canvasGlobal.rect(this.x, this.y,this.width, this.height);
      canvasGlobal.fill()
      canvasGlobal.stroke();
    }else{
      this.area = new Path2D
      this.area.rect(this.x, this.y,this.width, this.height);
      canvasGlobal.strokeStyle = this.stCo;
      canvasGlobal.lineWidth = this.stWi;
      canvasGlobal.beginPath();
      canvasGlobal.rect(this.x, this.y,this.width, this.height);
      canvasGlobal.stroke();
    }

	}
}

//---------------------------------------------------------------------------//

class square implements shape{
	x = getRandomInt(124,1340);
	y = getRandomInt(70,580);
	width = 60;
  height = 60;
  fiCo = "";
  stCo = strokeColor;
  stWi = strokeWidth;
  type = "square";
  area: Path2D = new Path2D;
  is_filled = false

	draw(canvasGlobal:CanvasRenderingContext2D,fillcolor:string) {
    if(this.is_filled){
      if(fillcolor != ""){
        this.fiCo = fillcolor

      }
      this.area = new Path2D
      this.area.rect(this.x, this.y,this.width, this.width);
      canvasGlobal.strokeStyle = this.stCo;
      canvasGlobal.lineWidth = this.stWi;
      canvasGlobal.fillStyle = this.fiCo;
      canvasGlobal.beginPath();
      canvasGlobal.rect(this.x, this.y,this.width, this.width);
      canvasGlobal.fill()
      canvasGlobal.stroke();
    }else{
      this.area = new Path2D
      this.area.rect(this.x, this.y,this.width, this.width);
      canvasGlobal.strokeStyle = this.stCo;
      canvasGlobal.lineWidth = this.stWi;
      canvasGlobal.beginPath();
      canvasGlobal.rect(this.x, this.y,this.width, this.width);
      canvasGlobal.stroke();
    }

	}
}

//---------------------------------------------------------------------------//

class ellipse implements shape{
	x = getRandomInt(124,1340);
	y = getRandomInt(70,580);
	width = 100;
  height = 70;
  fiCo = "";
  stCo = strokeColor;
  stWi = strokeWidth;
  type = "ellipse";
  area: Path2D = new Path2D;
  is_filled = false

	draw(canvasGlobal:CanvasRenderingContext2D,fillcolor:string) {
    if(this.is_filled){
      if(fillcolor != ""){
        this.fiCo = fillcolor

      }
      this.area = new Path2D
      this.area.ellipse(this.x, this.y,this.width/2, this.height/2, 0, 0, 2*Math.PI);
      canvasGlobal.strokeStyle = this.stCo;
      canvasGlobal.lineWidth = this.stWi;
      canvasGlobal.fillStyle = this.fiCo;
      canvasGlobal.beginPath();
      canvasGlobal.ellipse(this.x, this.y,this.width/2, this.height/2, 0, 0, 2*Math.PI);
      canvasGlobal.fill()
      canvasGlobal.stroke();
    }else{
      this.area = new Path2D
      this.area.ellipse(this.x, this.y,this.width/2, this.height/2, 0, 0, 2*Math.PI);
      canvasGlobal.strokeStyle = this.stCo;
      canvasGlobal.lineWidth = this.stWi;
      canvasGlobal.beginPath();
      canvasGlobal.ellipse(this.x, this.y,this.width/2, this.height/2, 0, 0, 2*Math.PI);
      canvasGlobal.stroke();
    }

	}
}

//---------------------------------------------------------------------------//

class triangle implements shape {
  x = getRandomInt(124,1340);
	y = getRandomInt(70,580);
  width = 60;
  height = (Math.sqrt(3)/2) * this.width;
  fiCo = "";
  stCo = strokeColor;
  stWi = strokeWidth;
  area: Path2D = new Path2D;
  type = "triangle";
  is_filled = false
  draw(canvasGlobal: CanvasRenderingContext2D, fillcolor: string): void {
    if(this.is_filled){
      if(fillcolor != ""){
        this.fiCo = fillcolor

      }
      this.area = new Path2D
      this.area.moveTo(this.x, this.y);
      this.area.lineTo(this.x - this.width/2, this.y + this.height);
      this.area.lineTo(this.x + this.width/2, this.y + this.height);
      this.area.lineTo(this.x,this.y);
      canvasGlobal.strokeStyle = this.stCo;
      canvasGlobal.lineWidth = this.stWi;
      canvasGlobal.fillStyle = this.fiCo;
      canvasGlobal.beginPath();
      canvasGlobal.moveTo(this.x, this.y);
      canvasGlobal.lineTo(this.x - this.width/2, this.y + this.height);
      canvasGlobal.lineTo(this.x + this.width/2, this.y + this.height);
      canvasGlobal.lineTo(this.x,this.y);
      canvasGlobal.fill()
      canvasGlobal.stroke();
    }else{
      this.area = new Path2D
      this.area.moveTo(this.x, this.y);
      this.area.lineTo(this.x - this.width/2, this.y + this.height);
      this.area.lineTo(this.x + this.width/2, this.y + this.height);
      this.area.lineTo(this.x,this.y);
      canvasGlobal.strokeStyle = this.stCo;
      canvasGlobal.lineWidth = this.stWi;
      canvasGlobal.beginPath();
      canvasGlobal.moveTo(this.x, this.y);
      canvasGlobal.lineTo(this.x - this.width/2, this.y + this.height);
      canvasGlobal.lineTo(this.x + this.width/2, this.y + this.height);
      canvasGlobal.lineTo(this.x,this.y);
      canvasGlobal.stroke();
    }


  }
}

//---------------------------------------------------------------------------//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  factory :factory = new factory();
  title = 'Front-End';

  confirm_stroke() {
    var sc = <HTMLInputElement>document.getElementById("stroke_color");
    strokeColor = sc.value;
    var sw = <HTMLInputElement>document.getElementById("stroke_width");
    var strwid : number = parseInt(sw.value);
    strokeWidth = strwid;
  }
  fill_color() {
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;

    var fc = <HTMLInputElement>document.getElementById("fill_color");
    var fillcolor = fc.value;

    fill_flag = !fill_flag;
    boardGlobal.addEventListener("mousedown",e =>{
      if(fill_flag){
        for (var shape of shapes){
          if(canvasGlobal.isPointInPath(shape.area, e.offsetX, e.offsetY)){

            shape.is_filled = true;
            shape.draw(canvasGlobal,fillcolor);


          }
        }
      }
    });
    if(fill_flag){
      document.getElementById("fill")!.style.backgroundColor = "rgba(47, 24, 10, 0.856)"

    }
    else{
      document.getElementById("fill")!.style.backgroundColor = "rgb(246, 129, 60)"

    }
  }

  

  create_line(){
    create_circle_flag = false;
    create_square_flag = false;
    create_rect_flag = false;
    create_triangle_flag = false;
    create_ellipse_flag = false;


    created_circle = false;
    created_square = false;
    created_rect = false;
    created_triangle = false;
    created_ellipse = false;
    
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    var line :any= this.factory.create("line");
    create_line_flag = true;
    created_line = false;
    var selectLine = false;
    boardGlobal.addEventListener("mousedown",e=>{

      if(!created_line && (line != null) && lineButtonFlag){

        line.x = e.offsetX;
        line.y = e.offsetY;
        selectLine = true;
        created_line = true;

      }


    });

    boardGlobal.addEventListener("mousemove", e => {
      if(create_line_flag && selectLine && (line != null) && lineButtonFlag){
        canvasGlobal.clearRect(line.x-line.stWi*2, line.y - line.stWi*2, line.width + line.stWi*3 - line.x, line.height + line.stWi*3 - line.y);
        canvasGlobal.clearRect(0,0,1380,675);

        line.width = e.offsetX;
        line.height = e.offsetY;
        line.draw(canvasGlobal,"");
        for(var i = 0; i < shapes.length; i++){
          shapes[i].draw(canvasGlobal,"");
        }
      }

    });
    boardGlobal.addEventListener("mouseup", e => {
      if(lineButtonFlag){
        create_line_flag =false;
        created_line = true;
        selectLine = false;
        if(line != null && (line.width != 0 && line.height != 0)){
          shapes.push(line);

<<<<<<< HEAD
      }
      line = null;
=======
        }
        console.log(shapes)
        line = null;
>>>>>>> e3f86d8a7d4d43f8df4133aa3758eeacde4aacc9

        document.getElementById("line")!.style.backgroundColor = "rgb(246, 129, 60)"
      }
      
    });

    if(create_line_flag){
      document.getElementById("line")!.style.backgroundColor = "rgba(47, 24, 10, 0.856)"

    }
    
    
  }
  create_triangle(){
   
    create_square_flag = false;
    create_line_flag = false;
    create_circle_flag = false;
    create_rect_flag = false;
    create_ellipse_flag = false;

    created_square = false;
    created_line = false;
    created_circle = false;
    created_rect = false;
    created_ellipse = false;
      var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
      var canvasGlobal = boardGlobal.getContext("2d")!;
      var triangle :any= this.factory.create("triangle");
      create_triangle_flag = true;
      created_triangle = false;
      boardGlobal.addEventListener("mousedown",e=>{
        if(!created_triangle && (triangle != null) && triangleButtonFlag){
          triangle.x = e.offsetX;
          triangle.y = e.offsetY;
          triangle.draw(canvasGlobal,"");
          shapes.push(triangle);
          triangle = null;
          created_triangle = true;
  
        }
      })
      boardGlobal.addEventListener("mouseup",e=>{
        if(triangleButtonFlag){
          create_triangle_flag =false;
          created_triangle = true;
  
  
          document.getElementById("triangle")!.style.backgroundColor = "rgb(246, 129, 60)"
        }
        
  
      })
      if(create_triangle_flag){
        document.getElementById("triangle")!.style.backgroundColor = "rgba(47, 24, 10, 0.856)"
  
      }
    
  }
  
  
  create_circle() {
     
    create_square_flag = false;
    create_line_flag = false;
    create_rect_flag = false;
    create_triangle_flag = false;
    create_ellipse_flag = false;

    created_square = false;
    created_line = false;
    created_rect = false;
    created_triangle = false;
    created_ellipse = false;
    
    
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    var circle :any= this.factory.create("circle");
    create_circle_flag = true;
    created_circle = false;
    boardGlobal.addEventListener("mousedown",e=>{
      if(!created_circle && (circle != null) && circleButtonFlag){
        circle.x = e.offsetX;
        circle.y = e.offsetY;
        circle.draw(canvasGlobal,"");
        shapes.push(circle);
        circle = null;
        created_circle = true;

      }
    });
    boardGlobal.addEventListener("mouseup",e=>{
      if(circleButtonFlag){
        create_circle_flag =false;
        created_circle = true;


        document.getElementById("circle")!.style.backgroundColor = "rgb(246, 129, 60)"
      }
      

    })
    if(create_circle_flag){
      document.getElementById("circle")!.style.backgroundColor = "rgba(47, 24, 10, 0.856)"

    }
    
  }
       
  

  create_rect(){
  
    create_square_flag = false;
    create_line_flag = false;
    create_circle_flag = false;
    create_triangle_flag = false;
    create_ellipse_flag = false;

    created_square = false;
    created_line = false;
    created_circle = false;
    created_triangle = false;
    created_ellipse = false;
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    var rect :any= this.factory.create("rect");
    create_rect_flag = true;
    created_rect = false;
    boardGlobal.addEventListener("mousedown",e=>{
      if(!created_rect && (rect != null) && rectButtonFlag){
        rect.x = e.offsetX;
        rect.y = e.offsetY;
        rect.draw(canvasGlobal,"");
        shapes.push(rect);
        rect = null;
        created_rect = true;

      }
    })
    boardGlobal.addEventListener("mouseup",e=>{
      if(rectButtonFlag){
        create_rect_flag =false;
        created_rect = true;


        document.getElementById("rect")!.style.backgroundColor = "rgb(246, 129, 60)"
      }
      

    })
    if(create_rect_flag){
      document.getElementById("rect")!.style.backgroundColor = "rgba(47, 24, 10, 0.856)"

    }
    console.log(shapes)
    
  }
  create_square(){
   
    create_circle_flag = false;
    create_line_flag = false;
    create_rect_flag = false;
    create_triangle_flag = false;
    create_ellipse_flag = false;

    created_circle = false;
    created_line = false;
    created_rect = false;
    created_triangle = false;
    created_ellipse = false;
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    var square :any= this.factory.create("square");
    create_square_flag = true;
    created_square = false;
    boardGlobal.addEventListener("mousedown",e=>{
      if(!created_square && (square != null) && squareButtonFlag){
        square.x = e.offsetX;
        square.y = e.offsetY;
        square.draw(canvasGlobal,"");
        shapes.push(square);
        square = null;
        created_square = true;

      }
    })
    boardGlobal.addEventListener("mouseup",e=>{
      if(squareButtonFlag){
        create_square_flag =false;
        created_square = true;


        document.getElementById("square")!.style.backgroundColor = "rgb(246, 129, 60)"
      }
      

    })
    if(create_square_flag){
      document.getElementById("square")!.style.backgroundColor = "rgba(47, 24, 10, 0.856)"

    }
    
    }
   
    
  create_ellipse(){
    create_square_flag = false;
    create_line_flag = false;
    create_circle_flag = false;
    create_rect_flag = false;
    create_triangle_flag = false;

    created_square = false;
    created_line = false;
    created_circle = false;
    created_rect = false;
    created_triangle = false;
   
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    var ellipse :any= this.factory.create("ellipse");
    create_ellipse_flag = true;
    created_ellipse = false;
    boardGlobal.addEventListener("mousedown",e=>{
      if(!created_ellipse && (ellipse != null) && ellipseButtonFlag){
        ellipse.x = e.offsetX;
        ellipse.y = e.offsetY;
        ellipse.draw(canvasGlobal,"");
        shapes.push(ellipse);
        ellipse = null;
        created_ellipse = true;

      }
    })
    boardGlobal.addEventListener("mouseup",e=>{
      if(ellipseButtonFlag){
        create_ellipse_flag =false;
        created_ellipse = true;


        document.getElementById("ellipse")!.style.backgroundColor = "rgb(246, 129, 60)"
      }
      

    })
    if(create_ellipse_flag){
      document.getElementById("ellipse")!.style.backgroundColor = "rgba(47, 24, 10, 0.856)"

    }
    
    
  }

  remove(){
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    remove_flag = !(remove_flag);
    boardGlobal.addEventListener("mousedown",event => {
      if(remove_flag){
        for (var shape of shapes){

          if(canvasGlobal.isPointInPath(shape.area, event.offsetX, event.offsetY) || canvasGlobal.isPointInStroke(shape.area, event.offsetX, event.offsetY)){
            shapes = shapes.filter(obj => obj !== shape);
            canvasGlobal.clearRect(0,0,1380,675);

            for(var i = 0; i < shapes.length; i++){
              shapes[i].draw(canvasGlobal,"");
            }
          }
        }
      }
      for(var i = 0; i < shapes.length; i++){
        shapes[i].draw(canvasGlobal,"");
      }
    });
    if(remove_flag){
      document.getElementById("remove")!.style.backgroundColor = "rgba(47, 24, 10, 0.856)"

    }
    else{
      document.getElementById("remove")!.style.backgroundColor = "rgb(246, 129, 60)"

    }
  }
  move(){
    var temp_shape : number = 0;
    var is_selected :boolean = false;
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    move_flag = !move_flag;

    boardGlobal.addEventListener("mousedown",  e => {
      if(move_flag){
        for (var i = 0; i < shapes.length; i++){
          if(canvasGlobal.isPointInPath(shapes[i].area, e.offsetX, e.offsetY) || canvasGlobal.isPointInStroke(shapes[i].area, e.offsetX, e.offsetY)){
            temp_shape = i;
            is_selected = true;
          }
        }
      }
    });

    boardGlobal.addEventListener("mousemove", e => {
      if(move_flag && is_selected){
        canvasGlobal.clearRect(0,0,1380,675);

        var oldRealWidth = shapes[temp_shape].width - shapes[temp_shape].x;;
        var oldRealHeight = shapes[temp_shape].height -  shapes[temp_shape].y;
        if(shapes[temp_shape].type == "line"){
          shapes[temp_shape].width = e.offsetX
          shapes[temp_shape].height = e.offsetY
          shapes[temp_shape].x = shapes[temp_shape].width - oldRealWidth;
          shapes[temp_shape].y = shapes[temp_shape].height - oldRealHeight;
        }
        else{
          shapes[temp_shape].x = e.offsetX;
          shapes[temp_shape].y = e.offsetY;
        }
        shapes[temp_shape].draw(canvasGlobal,"");
        for(var i = 0; i < shapes.length; i++){
          shapes[i].draw(canvasGlobal,"");
        }

      }
    });

    boardGlobal.addEventListener("mouseup", e => {
      is_selected = false;
      for(var i = 0; i < shapes.length; i++){
        shapes[i].draw(canvasGlobal,"");
      }
    });

    if(move_flag){
      document.getElementById("move")!.style.backgroundColor = "rgba(47, 24, 10, 0.856)"

    }
    else{
      document.getElementById("move")!.style.backgroundColor = "rgb(246, 129, 60)"

    }

  }
  copy(){
    var temp_shape : number = 0;
    var is_selected :boolean = false;
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    copy_flag = true;
    found = true;
    var copy_shape : shape;


    boardGlobal.addEventListener("mousedown",  e => {

      if(found){
        for (var i = 0; i < shapes.length; i++){
          if(canvasGlobal.isPointInPath(shapes[i].area, e.offsetX, e.offsetY) || canvasGlobal.isPointInStroke(shapes[i].area, e.offsetX, e.offsetY)){
            copy_shape = this.factory.create(shapes[i].type);
            copy_shape.x = shapes[i].x;
            copy_shape.y = shapes[i].y;
            copy_shape.width = shapes[i].width;
            copy_shape.height = shapes[i].height;
            copy_shape.fiCo = shapes[i].fiCo;
            copy_shape.stCo = shapes[i].stCo;
            copy_shape.stWi = shapes[i].stWi;
            copy_shape.is_filled = shapes[i].is_filled;

            shapes.push(copy_shape);
            is_selected = true;
            temp_shape = shapes.length - 1;
            found = false;
            break;
          }
        }
      }
    });

    boardGlobal.addEventListener("mousemove", e => {
      if(copy_flag && is_selected){
        canvasGlobal.clearRect(0,0,1380,675);

        var oldRealWidth = shapes[temp_shape].width - shapes[temp_shape].x;;
        var oldRealHeight = shapes[temp_shape].height -  shapes[temp_shape].y;
        if(shapes[temp_shape].type == "line"){
          shapes[temp_shape].width = e.offsetX
          shapes[temp_shape].height = e.offsetY
          shapes[temp_shape].x = shapes[temp_shape].width - oldRealWidth;
          shapes[temp_shape].y = shapes[temp_shape].height - oldRealHeight;
        }
        else{
          shapes[temp_shape].x = e.offsetX;
          shapes[temp_shape].y = e.offsetY;
        }
        shapes[temp_shape].draw(canvasGlobal,"");
        for(var i = 0; i < shapes.length; i++){
          shapes[i].draw(canvasGlobal,"");
        }
      }
    });


    boardGlobal.addEventListener("mouseup", e => {
      is_selected = false;
      found = false;
      for(var i = 0; i < shapes.length; i++){
        shapes[i].draw(canvasGlobal,"");
      }
      document.getElementById("copy")!.style.backgroundColor = "rgb(246, 129, 60)"
    });

    if(copy_flag){
      document.getElementById("copy")!.style.backgroundColor = "rgba(47, 24, 10, 0.856)"

    }

  }

  resize(){
    var oldx = 0;
    var oldy = 0;

    var temp_shape : number = 0;
    var is_selected :boolean = false;
    var boardGlobal = (<HTMLCanvasElement>document.getElementById("board"));
    var canvasGlobal = boardGlobal.getContext("2d")!;
    resize_flag = !resize_flag;

    boardGlobal.addEventListener("mousedown",  e => {
      if(resize_flag){
        for (var i = 0; i < shapes.length; i++){
          if(canvasGlobal.isPointInPath(shapes[i].area, e.offsetX, e.offsetY) || canvasGlobal.isPointInStroke(shapes[i].area, e.offsetX, e.offsetY)) {
            temp_shape = i;
            is_selected = true;
          }
        }
      }
      oldx = e.offsetX;
      oldy = e.offsetY;
    });


    boardGlobal.addEventListener("mousemove", e => {
      if(resize_flag && is_selected){
        canvasGlobal.clearRect(0,0,1380,675);

        if(shapes[temp_shape].type == 'line'){
          if(e.offsetX > oldx && e.offsetY > oldy){
            shapes[temp_shape].width +=2;
            shapes[temp_shape].height += 2;

          }
          else if(e.offsetX < oldx && e.offsetY < oldy){
            if(shapes[temp_shape].width > 2 || shapes[temp_shape].height > 2) {
              shapes[temp_shape].width -= 2;
              shapes[temp_shape].height -= 2;

            }
          }
          oldx = e.offsetX;
          oldy = e.offsetY;
          shapes[temp_shape].draw(canvasGlobal,"");
        }
        if(shapes[temp_shape].type == 'circle'){
          if(e.offsetX > oldx && e.offsetY > oldy){

            shapes[temp_shape].width += 2;
            shapes[temp_shape].height += 2;
          }
          else if(e.offsetX < oldx || e.offsetY < oldy){
            if(shapes[temp_shape].width > 2 && shapes[temp_shape].height > 2 ){
              shapes[temp_shape].width -= 2;
              shapes[temp_shape].height -= 2;
            }
          }
          oldx = e.offsetX;
          oldy = e.offsetY;
          shapes[temp_shape].draw(canvasGlobal,"");

        }
        if(shapes[temp_shape].type == 'square'){
          if(e.offsetX > oldx && e.offsetY > oldy){
            shapes[temp_shape].width += 2;
            shapes[temp_shape].height += 2;

          }
          else if(e.offsetX < oldx || e.offsetY < oldy){
            if(shapes[temp_shape].width > 2 && shapes[temp_shape].height > 2 ){
              shapes[temp_shape].width -= 2;
              shapes[temp_shape].height -= 2;
            }
          }
          oldx = e.offsetX;
          oldy = e.offsetY;
          shapes[temp_shape].draw(canvasGlobal,"");
        }
        if(shapes[temp_shape].type == 'rect'){
          if(e.offsetX > oldx && e.offsetY > oldy){
            shapes[temp_shape].width += 2;
            shapes[temp_shape].height += 2;
          }
          else if(e.offsetX < oldx && e.offsetY < oldy){
            if(shapes[temp_shape].width > 2 && shapes[temp_shape].height > 2 ){
              shapes[temp_shape].width -= 2;
              shapes[temp_shape].height -= 2;
            }
          }
          oldx = e.offsetX;
          oldy = e.offsetY;
          shapes[temp_shape].draw(canvasGlobal,"");
        }
        if(shapes[temp_shape].type == 'triangle'){
          if(e.offsetX > oldx && e.offsetY > oldy){

            shapes[temp_shape].width += 2;
            shapes[temp_shape].height += 2;
          }
          else if(e.offsetX < oldx && e.offsetY < oldy){
            if(shapes[temp_shape].width > 2 && shapes[temp_shape].height > 2 ){
              shapes[temp_shape].width -= 2;
              shapes[temp_shape].height -= 2;
            }


          }
          oldx = e.offsetX;
          oldy = e.offsetY;
          shapes[temp_shape].draw(canvasGlobal,"");
        }
        if(shapes[temp_shape].type == 'ellipse'){
          if(e.offsetX > oldx && e.offsetY > oldy){
            shapes[temp_shape].width +=2;
            shapes[temp_shape].height += 2;
          }
          else if(e.offsetX < oldx && e.offsetY < oldy){
            if(shapes[temp_shape].width > 2 && shapes[temp_shape].height > 2 ){
              shapes[temp_shape].width -= 2;
              shapes[temp_shape].height -= 2;
            }
          }
          oldx = e.offsetX;
          oldy = e.offsetY;
          shapes[temp_shape].draw(canvasGlobal,"");
        }
        canvasGlobal.clearRect(0,0,1380,675);

      }
      for(var i = 0; i < shapes.length; i++){
        shapes[i].draw(canvasGlobal,"");
      }
    });

    boardGlobal.addEventListener("mouseup", e => {
      is_selected = false;
      for(var i = 0; i < shapes.length; i++){
        shapes[i].draw(canvasGlobal,"");
      }

    });
    if(resize_flag){
      document.getElementById("resize")!.style.backgroundColor = "rgba(47, 24, 10, 0.856)"

    }
    else{
      document.getElementById("resize")!.style.backgroundColor = "rgb(246, 129, 60)"

    }


  }

<<<<<<< HEAD
=======
  disableButtons(){
    if(create_line_flag){  

      circleButtonFlag = false;
      squareButtonFlag  = false;
      rectButtonFlag  = false;
      triangleButtonFlag  = false;
      ellipseButtonFlag  = false;

      lineButtonFlag = true;

    }
    if(create_square_flag){
      
      circleButtonFlag = false;
      rectButtonFlag  = false;
      lineButtonFlag  = false;
      triangleButtonFlag  = false;
      ellipseButtonFlag  = false;

      squareButtonFlag = true;


    }
    if(create_circle_flag){
     
      

      squareButtonFlag = false;
      rectButtonFlag = false;
      lineButtonFlag = false;
      triangleButtonFlag = false;
      ellipseButtonFlag = false;

      circleButtonFlag = true;

    }
    if(create_rect_flag){

      circleButtonFlag  = false;
      squareButtonFlag = false;
      lineButtonFlag = false;
      triangleButtonFlag = false;
      ellipseButtonFlag = false;

      rectButtonFlag = true;

    }
    if(create_triangle_flag){
      
      circleButtonFlag = false;
      squareButtonFlag = false;
      rectButtonFlag  = false;
      lineButtonFlag = false;
      ellipseButtonFlag = false;

      triangleButtonFlag = true;

    }
    if(create_ellipse_flag){
      

      circleButtonFlag = false;
      squareButtonFlag = false;
      rectButtonFlag = false;
      lineButtonFlag = false;
      triangleButtonFlag = false;

      ellipseButtonFlag = true;

    }

    if(!create_square_flag){
      document.getElementById("square")!.style.backgroundColor = "rgb(246, 129, 60)"
      
    }
    if(!create_rect_flag){
      document.getElementById("rect")!.style.backgroundColor = "rgb(246, 129, 60)"

    }
    if(!create_circle_flag){
      document.getElementById("circle")!.style.backgroundColor = "rgb(246, 129, 60)"

    }
    if(!create_line_flag){
      document.getElementById("line")!.style.backgroundColor = "rgb(246, 129, 60)"

    }
    if(!create_ellipse_flag){
      document.getElementById("ellipse")!.style.backgroundColor = "rgb(246, 129, 60)"

    }
    if(!create_triangle_flag){
      document.getElementById("triangle")!.style.backgroundColor = "rgb(246, 129, 60)"

    }
    
  }
>>>>>>> e3f86d8a7d4d43f8df4133aa3758eeacde4aacc9



}



