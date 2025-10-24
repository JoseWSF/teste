// masks.js - formata CPF, telefone e CEP no input conforme digitação
function setMask(id, maskFn) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('input', function(e){
    const pos = el.selectionStart;
    el.value = maskFn(el.value);
    el.setSelectionRange(pos, pos);
  });
}

function cpfMask(value) {
  return value
    .replace(/\D/g,'')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})(\d{1,2})$/,'$1-$2')
    .slice(0,14);
}

function telefoneMask(value) {
  return value
    .replace(/\D/g,'')
    .replace(/^(\d{2})(\d)/g,'($1) $2')
    .replace(/(\d{5})(\d)/,'$1-$2')
    .slice(0,15);
}

function cepMask(value) {
  return value
    .replace(/\D/g,'')
    .replace(/(\d{5})(\d)/,'$1-$2')
    .slice(0,9);
}

// inicializa as máscaras quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function(){
  setMask('cpf', cpfMask);
  setMask('telefone', telefoneMask);
  setMask('cep', cepMask);
});
