canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_x=10;
car2_y=100;

road_img="https://i.postimg.cc/bv5d35nK/racing.jpg";
car1_img="car1.png";
car2_img="car2.png";
function Add(){
    add_backround=new Image();
    add_backround.onload=Load;
    add_backround.src=road_img;

    add_car1=new Image();
    add_car1.onload=Rover_Load;
    add_car1.src=car1_img;

    add_car2=new Image();
    add_car2.onload=Rover_Load2;
    add_car2.src=car2_img;



}
function Load(){
    ctx.drawImage( add_backround,0,0,canvas.width,canvas.height);

}
function Rover_Load(){
    ctx.drawImage(add_car1,car1_x,car1_y,car1_width,car1_height);
}

function Rover_Load2(){
    ctx.drawImage(add_car2,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",keydown);

function keydown(e){
    var Key=e.keyCode;
    console.log(Key);
    if( Key =='38'){
     up();
     console.log("up");
    }
    if(Key=='40'){
        down();
        console.log("down");
    }
    if(Key=='37'){
        left();
        console.log("left");
    }
    if(Key=='39'){
        right();
        console.log("right");
    }
    if( Key =='65'){
        A();
        console.log("Key A");
       }
       if( Key =='68'){
        D();
        console.log("Key D");
       }
       if( Key =='83'){
        S();
        console.log("Key S");
       }
       if( Key =='87'){
        W();
        console.log("Key W");
       }

}
function up(){
    if(car1_y>=0){
        car1_y=car1_y-7;
        console.log("x="+car1_x+"y="+car1_y);
        Load();
        Rover_Load();
        Rover_Load2();
    }
}
function down(){
    if(car1_y<=500){
        car1_y=car1_y+7;
        console.log("x="+car1_x+"y="+car1_y);
        Load();
        Rover_Load();
        Rover_Load2();

    }
}
function left(){
    if(car1_x>=0){
        car1_x=car1_x-7;
        console.log("x="+car1_x+"y="+car1_y);
        Load();
        Rover_Load();
        Rover_Load2();

    }
}
function right(){
    if(car1_x<=700){
        car1_x=car1_x+7;
        console.log("x="+car1_x+"y="+car1_y);
        Load();
        Rover_Load();
        Rover_Load2();
    }
}
function A(){
    if(car2_x>=0){
        car2_x=car2_x-7;
        console.log("x="+car2_x+"y="+car2_y);
        Load();
        Rover_Load2();
        Rover_Load();
    }
}
function S(){
    if(car2_y<=500){
        car2_x=car2_x+7;
        console.log("x="+car2_x+"y="+car2_y);
        Load();
        Rover_Load2();
        Rover_Load();
    }
}
function W(){
    if(car2_y>=0){
        car2_x=car2_x-7;
        console.log("x="+car2_x+"y="+car2_y);
        Load();
        Rover_Load2();
        Rover_Load();
    }
}
      
function D(){
    if(car2_x<=700){
        car2_x=car2_x+7;
        console.log("x="+car2_x+"y="+car2_y);
        Load();
        Rover_Load2();
        Rover_Load();
    }
}
    