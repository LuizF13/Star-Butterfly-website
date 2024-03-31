// Função para remover o evento beforeunload
function removeBeforeUnload() {
    window.removeEventListener('beforeunload', handleBeforeUnload);
}

// Função de manipulação do evento beforeunload (não faz nada)
function handleBeforeUnload() {
    // Esta função não fará nada, então a página não será recarregada automaticamente
}

// Remover o evento beforeunload quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', removeBeforeUnload);
