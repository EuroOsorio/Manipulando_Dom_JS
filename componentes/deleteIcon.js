const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);
    return i;
};

const deleteTask = (event) => {
    const parent = event.target.parentElement;  // Asigno el evento a él elemento padre.
    parent.remove();                            // Remuevo o quito el elemento padre.
};

export default deleteIcon;      // Exportar archivo.