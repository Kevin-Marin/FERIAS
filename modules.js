const atividades = [];

const adicionarAtividade = (dia, atividade) => {
    const diaExistente = atividades.find(a => a.dia === dia);
    if (diaExistente) {
        diaExistente.atividades.push(atividade);
    } else {
        atividades.push({ dia, atividades: [atividade] });
    }
};

const lerAtividades = () => {
    if (atividades.length === 0) {
        console.log("Nenhuma atividade registrada.");
    } else {
        atividades.forEach(a => {
            console.log(`Dia: ${a.dia}`);
            a.atividades.forEach((atv, index) => {
                console.log(`  ${index + 1}. ${atv}`);
            });
        });
    }
};

const atualizarAtividade = (dia, index, novaAtividade) => {
    const diaExistente = atividades.find(a => a.dia === dia);
    if (diaExistente && diaExistente.atividades[index]) {
        diaExistente.atividades[index] = novaAtividade;
        console.log("Atividade atualizada com sucesso.");
    } else {
        console.log("Atividade não encontrada.");
    }
};

const deletarAtividade = (dia, index) => {
    const diaExistente = atividades.find(a => a.dia === dia);
    if (diaExistente && diaExistente.atividades[index]) {
        diaExistente.atividades.splice(index, 1);
        console.log("Atividade deletada com sucesso.");
    } else {
        console.log("Atividade não encontrada.");
    }
};

module.exports = {
    adicionarAtividade,
    lerAtividades,
    atualizarAtividade,
    deletarAtividade
};
