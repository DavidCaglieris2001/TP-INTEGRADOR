// JS FORM
  const form = document.getElementById('contactForm');
  const descripcion = document.getElementById('descripcion');
  const contador = document.getElementById('contador');

  // CONTADOR
  descripcion.addEventListener('input', () => {
    const longitud = descripcion.value.length;
    contador.textContent = `${longitud} / 500`;

    // Cambiar color si se acerca al límite
    if(longitud > 450){
      contador.style.color = 'red';
    } else {
      contador.style.color = '#555';
    }
  });

  // FORMULARIO
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const apellido = form.apellido.value.trim();
    const email = form.email.value.trim();
    const descripcionVal = form.descripcion.value.trim();

      // NOMBRE
    if(nombre === ''){
      alert('Por favor, ingresá tu nombre');
      return;
    }

      // APELLIDO
    if(apellido === ''){
      alert('Por favor, ingresá tu apellido');
      return;
    }

      // EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      alert('Por favor, ingresá un email válido');
      return;
    }

      // DESCRIPCION
    if(descripcionVal.length < 5){
      alert('La descripción debe tener al menos 5 caracteres');
      return;
    }

      // FORMULARIO VALIDADO
    alert('Formulario enviado correctamente ✅');
    form.reset();
    contador.textContent = '0 / 500';
    contador.style.color = '#555';
  });