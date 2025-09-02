// Modal test seguridad
const modal = document.getElementById('myModal');
const abrirModal = document.getElementById('abrirModal');
const cerrarModal = document.getElementById('cerrarModal');
abrirModal.onclick = () => modal.style.display = 'block';
cerrarModal.onclick = () => modal.style.display = 'none';
window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; };

// Test de seguridad feedback
document.getElementById('enviarTest').onclick = function() {
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
      document.getElementById('feedback').innerHTML = feedback;
    };

// Validación simple de formulario de contacto
document.getElementById('contactForm').onsubmit = function(e) {
e.preventDefault();
document.getElementById('contactFeedback').innerHTML = '<span style="color:#27ae60;">¡Mensaje enviado correctamente!</span>';
this.reset();
};
