import Knex from 'knex';

export async function seed(Knex: Knex) {
    await Knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas e baterias', image: 'baterias.svg' },
        { title: 'Papeis e papelão', image: 'papeis-papelao.svg' },
        { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
        { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
        { title: 'Óleo de Cozinha', image: 'oleo.svg' },
    ]);
}