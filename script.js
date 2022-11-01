// ( () => {           // Introduzco todo en una funcion anonima para que no sea acsesible desde el navegador.

import checkComplete from "./componentes/checkComplete.js";
import deleteIcon from "./componentes/deleteIcon.js";           // Importar los archivos.

const btn = document.querySelector("[data-form-btn]");      //Me leé el texto html de la etiqueta con data-form-btn.

const creatTask = (evento) => {             //Arrow functions o funciones anonimas
    evento.preventDefault();                // Hace que no se actualice la pagina cada ves que se haga click en el boton.
    const input = document.querySelector("[data-form-input]");
    const value = input.value;              //Me extraé el texto ingreasado del objeto imput. 
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");          //Crea un elemento tipo lista 'li'.
    task.classList.add("card");                 //Crea una clase 'card' en la etiqueta 'li' del elemento 'task'.
    input.value = "";
    const taskContent = document.createElement("div");
    
    const titleTask = document.createElement('span');
    titleTask.classList.add("task");
    titleTask.innerText = value;                // 'innerText' inserta 'value' como texto dentro de la etiqueta 'spam'.
    taskContent.appendChild(checkComplete());          
    taskContent.appendChild(titleTask);
    //backticks
    // task.innerHTML = content;           //Introduce el contenido de 'content' en la etiqueta 'li' del elemento 'task'.
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);                 //Agrega un hijo en la etiqueta 'ul' con 'data-list'. 
}

// Arrow funtions o funciones anonimas
btn.addEventListener('click', creatTask);       //listener





// }) ();