$(document).ready(function() {  //Espera que el document esté listo para ejecutar el código

    //Función que muestra el mensaje si no hay tareas o lo oculta si hay tareas.
    function toggleEmptyMessage() {
      if ($('#task-list li').length === 0) {
        $('#empty-message').show();
      } else {
        $('#empty-message').hide();
      }
    }

    //Captura el evento de enviar el formulario
    $('#task-form').submit(function(e) {
      e.preventDefault(); //Evita que la página se recargue al hacer submit
  
      const taskText = $('#task-input').val().trim(); //Obtiene el texto que escribió el usuario y elimina espacios al principio y final
    
      if (taskText !== "") {
        $('#task-list').append(`<li class="list-group-item list-group-item-action">${taskText}</li>`); //Agrega la tarea a la lista
        $('#task-input').val(''); //Limpia el campo de texto
        toggleEmptyMessage(); //Llama a la función para mostrar u ocultar el mensaje de vacío
      }
    });
  
    $('#task-list').on('click', 'li', function() {
      $(this).remove(); //Elimina la tarea de la lista al hacer clic en ella
      toggleEmptyMessage(); //Llama a la función para mostrar u ocultar el mensaje de vacío
    });
  
    toggleEmptyMessage(); //Llama a la función al cargar la página para mostrar u ocultar el mensaje de vacío
  });
  