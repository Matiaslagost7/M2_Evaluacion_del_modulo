document.addEventListener('DOMContentLoaded', function() {
  // Modal test seguridad
  const modal = document.getElementById('myModal');
  const abrirModal = document.getElementById('abrirModal');
  const cerrarModal = document.getElementById('cerrarModal');

  if (modal && abrirModal && cerrarModal) {
    abrirModal.onclick = () => modal.style.display = 'block';
    cerrarModal.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; };
  }

  // Test de seguridad feedback
  const enviarTestBtn = document.getElementById('enviarTest');
  if (enviarTestBtn) {
    enviarTestBtn.onclick = function() {
      const q1 = document.querySelector('input[name="q1"]:checked');
      const q2 = document.querySelector('input[name="q2"]:checked');
      let feedback = '';
      if (!q1 || !q2) {
        feedback = '<span style="color:#e74c3c;">Por favor responde todas las preguntas.</span>';
      } else if (q1.value === 'b' && q2.value === 'b') {
        feedback = '<span style="color:#27ae60;">¡Excelente! Tienes buenos conocimientos de seguridad.</span>';
      } else {
        feedback = '<span style="color:#e67e22;">Revisa los conceptos de seguridad para mejorar tu protección.</span>';
      }
      const feedbackElement = document.getElementById('feedback');
      if (feedbackElement) {
        feedbackElement.innerHTML = feedback;
      }
    };
  }

  // Validación simple de formulario de contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.onsubmit = function(e) {
      e.preventDefault();
      const feedbackElement = document.getElementById('contactFeedback');
      if (feedbackElement) {
        feedbackElement.innerHTML = '<span style="color:#27ae60;">¡Mensaje enviado correctamente!</span>';
      }
      this.reset();
    };
  }
});
