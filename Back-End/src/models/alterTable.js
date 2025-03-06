import { arCond } from './arcondicionado';

const alteTable = arCond.build();

alteTable.save()
    .then(() => {
        console.log('Usuário salvo com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao salvar o usuário:', error);
    });


export default alteTable;
