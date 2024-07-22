const prompt = require('prompt-sync')();
const { adicionarAtividade, lerAtividades, atualizarAtividade, deletarAtividade } = require('./modules.js');

const main = () => {
    let opcao;

    do {
        console.log("\nGerenciador de Atividades de Férias");
        console.log("1. Adicionar Atividade");
        console.log("2. Ler Atividades");
        console.log("3. Atualizar Atividade");
        console.log("4. Deletar Atividade");
        console.log("5. Sair");
        opcao = prompt("Escolha uma opção: ");

        switch (opcao) {
            case '1':
                const dia = prompt("Digite o dia (formato DD/MM): ");
                const atividade = prompt("Digite a atividade: ");
                adicionarAtividade(dia, atividade);
                break;
            case '2':
                lerAtividades();
                break;
            case '3':
                const diaAtualizar = prompt("Digite o dia da atividade a ser atualizada (formato DD/MM): ");
                const indexAtualizar = prompt("Digite o número da atividade a ser atualizada: ");
                const novaAtividade = prompt("Digite a nova atividade: ");
                atualizarAtividade(diaAtualizar, indexAtualizar - 1, novaAtividade);
                break;
            case '4':
                const diaDeletar = prompt("Digite o dia da atividade a ser deletada (formato DD/MM): ");
                const indexDeletar = prompt("Digite o número da atividade a ser deletada: ");
                deletarAtividade(diaDeletar, indexDeletar - 1);
                break;
            case '5':
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '5');
};

main();
