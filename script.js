let nombreUsuario = prompt("Ingresa tu nombre");
let edad = prompt("Ingresa tu edad");
let ciudad = prompt("Ingresa tu ciudad");

let persona = {
  nombre: nombreUsuario,
  edad: edad,
  ciudad: ciudad,
  saludar: function() {
    return "¡Hola! " + this.nombre + " ahora te hare unas preguntas para calcular tu IMC ";
  }
};

alert(persona.saludar());

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
  }
  
  let peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
  let alturaEnMetros = parseFloat(prompt("Ingresa tu altura en metros:"));

  alert("ahora te hare una pregunta de cultura mientras la pagina calcula tu IMC")

  
  let cultura = prompt("elegi la mejor pelicula de Shrek: \n 1- Shrek 1 \n 2- Shrek 2 \n 3- Shrek tercero \n 4- Shrek para siempre")
  switch(cultura){

    case "1":
        alert("Elegiste una buena opción, pero no la mejor")
        break;
    case "2":
        alert("Definitivamente la mejor pelicula de DreamWorks")
        break;
    case "3":
        alert("No me lo puedo creer")
        break;
    case "4":
        alert("Ni cerca")
    default:
        alert("elegiste una opcion no valida")
        break;

  }

  let resultadoIMC = calcularIMC(peso, alturaEnMetros);
  alert("Gracias por la espera, tu índice de masa corporal es: " + resultadoIMC);
 
let imc = prompt("ingrese el IMC que correspondiente ");

// Función para determinar la rutina en base al IMC
function determinarRutina(imc) {
  if (imc < 18.5) {
    return "Rutina para aumentar masa muscular";
  } else if (imc >= 18.5 && imc < 25) {
    return "Rutina de mantenimiento";
  } else {
    return "Rutina para perder peso";
  }
}


let rutinaRecomendada = determinarRutina(imc);


alert("La rutina recomendada es: " + rutinaRecomendada);

let rutinasDeEjercicio = [
    {
      nombre: "Rutina para aumentar masa muscular",
      descripcion: "Esta rutina está diseñada para aquellos que desean aumentar su masa muscular.",
      ejercicios: ["Press de banca", "Sentadillas", "Dominadas", "Fondos en paralelas"]
    },
    {
      nombre: "Rutina de mantenimiento",
      descripcion: "Esta rutina es ideal para mantener tu condición física actual.",
      ejercicios: ["Caminata ligera", "Natación", "Yoga", "Ejercicios de estiramiento"]
    },
    {
      nombre: "Rutina para perder peso",
      descripcion: "Esta rutina está enfocada en la quema de grasa y la pérdida de peso.",
      ejercicios: ["Carrera continua", "Ciclismo", "Entrenamiento HIIT", "Ejercicios cardiovasculares"]
    }
  ];
  
  let rutina1 = prompt("Por favor, ingrese su IMC:");
  let rutinasFiltradas;
  
  if (imc < 18.5) {
    rutinasFiltradas = rutinasDeEjercicio.filter(function(rutina) {
      return rutina.nombre.toLowerCase().includes("aumentar");
    });
  } else if (imc >= 18.5 && imc < 25) {
    rutinasFiltradas = rutinasDeEjercicio.filter(function(rutina) {
      return rutina.nombre.toLowerCase().includes("mantenimiento");
    });
  } else {
    rutinasFiltradas = rutinasDeEjercicio.filter(function(rutina) {
      return rutina.nombre.toLowerCase().includes("perder peso");
    });
  }
  
  console.log(rutinasFiltradas);