import '../style.css'
import { Question } from './question.ts'


const button=document.getElementById('next') as HTMLButtonElement;
const reload=document.getElementById('reload') as HTMLButtonElement;
let dropdown1 = document.getElementById('firstSelect') as HTMLSelectElement;
let dropdown2 = document.getElementById('secondSelect') as HTMLSelectElement;
let diagnostico=document.getElementById('diagnostic') as HTMLInputElement;
let imagen=document.getElementById('imagen') as HTMLInputElement;

let value1='Nada';
let value2='Nada';

let count=0;
let puntuacion=0;
let solucion='Nada';

let firstTime=true;

let question1=new Question(1,"1-2-grande.jpg","","1-2", false);
let question2=new Question(2,"8.jpg","","8",true);
let question3=new Question(3,"6-grande.jpg","","6",true);
let question4=new Question(4,"2-9.jpg","","2-9",false);
let question5=new Question(5,"5-7.jpg","", "5-7",false);
let question6=new Question(6,"5.jpg","","5",true);
let question7=new Question(7,"3.jpg","","3",true);
let question8=new Question(8,"1-5.jpg","","1-5",false);
let question9=new Question(9,"7-4.jpg","", "7-4",false);
let question10=new Question(10,"2.jpg","","2",true);
let question11=new Question(11,"6.jpg","","6",true);
let question12=new Question(12,"9-7.jpg","","9-7",false);
let question13=new Question(13,"4-5.jpg","", "4-5",false);
let question14=new Question(14,"5-amarillo.jpg","","5",true);
let question15=new Question(15,"7-amarillo.png","","7",true);
let question16=new Question(16,"1-6-amarillo.png","","1-6",false);
let question17=new Question(17,"7-3.jpg","", "7-3",false);
let question18=new Question(18,"carta18.jpg","","Nada",true);
let question19=new Question(19,"carta19.jpg","","Nada",true);
let question20=new Question(20,"carta20.jpg","","Nada-Nada",false);
let question21=new Question(21,"carta21.jpg","", "Nada-Nada",false);
let question22=new Question(22,"2-6.jpg","","2-6",false);
let question23=new Question(23,"4-2.jpg","", "4-2",false);
let question24=new Question(24,"3-5.png","","3-5",false);
let question25=new Question(25,"9-6.jpg","", "9-6",false);

let array:Question[];
array=[question1,question2,question3,question4,question5, question6,question7,
  question8,question9,question10,question11,question12,question13,question14,question15,
  question16,question17,question18,question19,question20,question21,question22,
  question23,question24,question25];

dropdown1.addEventListener("change", function() {
  value1=this.value;
  
});

dropdown2.addEventListener("change", function() {
  value2=this.value;
 
});


button.addEventListener('click', ()=>{

  if(firstTime){
    dropdown1.style.display="flex";
    dropdown2.style.display="flex";
    button.innerHTML='NEXT';
    firstTime=false;
  }
  if(count<25){
    count++;
      if( dropdown1.style.display=="flex"){
          solucion=value1+'-'+value2;
      }else{
          solucion=value2;
      } 
      console.log('entro');
      
      array.forEach((element: any) => {
          if(element.Id==count){
              imagen.src=`./public/${element.Image}`; 
              if(element.Deshabilitado==true){
                dropdown1.style.display="none"
              }else{
                dropdown1.disabled=false;
              }
              
          }
          if(element.Id==(count-1)){
            element.Respuesta=solucion;
              console.log(element)
          }
      });

  }else{
   CalcularResultats(array);
   button.style.display="none";
   reload.style.display="flex";
   diagnostico.style.display="flex";

   diagnostico.innerHTML=Diagnostic();
  }
});



function CalcularResultats(array:Object[])
{
  array.forEach((element: any) => {
    if(element.Id<=21){
      if(element.CorrectValue!=element.Respuesta){
        puntuacion+=10;
      }else{
        puntuacion+=0;
      }
    }else{
      let nombre=element.CorrectValue;
      let numero=element.Respuesta;
      let nombreSeparados = nombre.split('-');
      let numeroSeparados = numero.split('-');
      let posicio = 0;
      if (nombreSeparados[posicio] == numeroSeparados[posicio] && nombreSeparados[posicio + 1] == numeroSeparados[posicio + 1]) puntuacion += 0;
      else if (nombreSeparados[posicio] == numeroSeparados[posicio] && nombreSeparados[posicio + 1] != numeroSeparados[posicio + 1]) puntuacion += 10000;
      else if (nombreSeparados[posicio] != numeroSeparados[posicio] && nombreSeparados[posicio + 1] == numeroSeparados[posicio + 1]) puntuacion += 1000;
      else puntuacion += 100000;
    }
  });
}



function Diagnostic()
{
    let diagnostic:string;
    if (puntuacion >= 0 && puntuacion <= 20) diagnostic = "Bona visió";
    else if (puntuacion > 20 && puntuacion <= 80) diagnostic = "Visió lleument afectada, possible daltonisme";
    else if (puntuacion > 80 && puntuacion <= 140) diagnostic = "Visió moderadament afectada, possible daltonisme";
    else if (puntuacion > 140 && puntuacion <= 200) diagnostic = "Visió severament afectada, possible daltonisme";
    else if (puntuacion >= 1000 && puntuacion <= 1080 || puntuacion >= 2000 && puntuacion <= 2080 || puntuacion >= 3000 && puntuacion <= 3080 || puntuacion >= 4000 && puntuacion <= 4080) diagnostic = "Visió lleument afectada, possible daltonisme de tipus Protanopia";
    else if (puntuacion > 1080 && puntuacion <= 1140 || puntuacion > 2080 && puntuacion <= 2140 || puntuacion > 3080 && puntuacion <= 3140 || puntuacion > 4080 && puntuacion <= 4140) diagnostic = "Visió moderadament afectada, possible daltonisme de tipus Protanopia";
    else if (puntuacion > 1140 && puntuacion <= 1200 || puntuacion > 2140 && puntuacion <= 2200 || puntuacion > 3140 && puntuacion <= 3200 || puntuacion > 4140 && puntuacion <= 4200) diagnostic = "Visió severament afectada, possible daltonisme de tipus Protanopia";
    else if (puntuacion >= 10000 && puntuacion <= 10080 || puntuacion >= 20000 && puntuacion <= 20080 || puntuacion >= 30000 && puntuacion <= 30080 || puntuacion >= 40000 && puntuacion <= 40080) diagnostic = "Visió lleument afectada, possible daltonisme de tipus Deuteranopia";
    else if (puntuacion > 10080 && puntuacion <= 10140 || puntuacion > 20080 && puntuacion <= 20140 || puntuacion > 30080 && puntuacion <= 30140 || puntuacion > 40080 && puntuacion <= 40140) diagnostic = "Visió moderadament afectada, possible daltonisme de tipus Deuteranopia";
    else if (puntuacion > 10140 && puntuacion <= 10200 || puntuacion > 20140 && puntuacion <= 20200 || puntuacion > 30140 && puntuacion <= 30200 || puntuacion > 40140 && puntuacion <= 40200) diagnostic = "Visió severament afectada, possible daltonisme de tipus Deuteranopia";
    else diagnostic = "Visió severament afectada. Impossible diagnosticar tipus";

    return diagnostic;
}


reload.addEventListener('click', ()=>{
  window.location.reload();
});