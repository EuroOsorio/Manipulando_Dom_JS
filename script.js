const btn = document.querySelector("[data-form-btn]");      //Me leé el texto html de la etiqueta con data-form-btn.

const creatTask = (evento) => {             //Arrow functions o funciones anonimas
    evento.preventDefault();                // Hace que no se actualice la pagina cada ves que se haga click en el boton.
    const input = document.querySelector("[data-form-input]");
    const value = input.value;              //Me extraé el texto ingreasado del objeto imput. 
    const task = document.querySelector("[data-task]");
    input.value = "";
    //backticks
    const content = `
        <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;           //Introduce el contenido de 'content' en la etiqueta con data-task de mi html.
    console.log(content);
}

console.log(btn);

//listener
btn.addEventListener("click", creatTask);





