// Este array contém todos os dados dos seus produtos.
const catalogoProdutos = [
    {
        id: '1',
        nome: 'MOSQUETÃO ARGOLA',
        codigo: '3379',
        unidade: 'un',
        descricao: 'Mosquetão em formato de circulo',
        precoComprado: 0.00,
        precoAtacado: 5.50,
        precoVarejo: 0.00
    },
    {
        id: '2',
        nome: 'MOTOR 100N',
        codigo: '3594',
        unidade: 'un',
        descricao:'Motor de 100N 110V pega controle e recomendado para toldos maiores que 6m',
        precoComprado: 0.00,
        precoAtacado: 1543.00,
        precoVarejo: 1800.00
    },
    {
        id: '3',
        nome: 'BATENTE AL VERTICAL',
        codigo: '3011',
        unidade: 'un',
        descricao: 'olhando com ela deitada o pino tem que estar em pé',
        precoComprado: 0.00,
        precoAtacado: 8.00,
        precoVarejo: 0.00
    },
    {
        id: '4',
        nome: 'BATENTE AL HORIZONTAL',
        codigo: '3012',
        unidade: 'un',
        descricao: 'olhando com ela deitada o pino tem que estar em deitado',
        precoComprado: 0.00,
        precoAtacado: 8.00,
        precoVarejo: 0.00
    },
    {
        id: '5',
        nome: 'MOTOR 50N (PLUG)',
        codigo: '3593',
        unidade: 'un',
        descricao: 'Motor de 50N 110V não pega controle (interruptor)',
        precoComprado: 0.00,
        precoAtacado: 550.00,
        precoVarejo: 650.00
    },
    {
        id: '6',
        nome: 'MOTOR 50N (S/SOCORRO)',
        codigo: '3592',
        unidade: 'un',
        descricao: 'Motor de 50N 110V pega controle (sem socorro)',
        precoComprado: 0.00,
        precoAtacado: 0.00,
        precoVarejo: 850.00
    },
    {
        id: '7',
        nome: 'MOTOR 50N (C/SOCORRO)',
        codigo: '3591',
        unidade: 'un',
        descricao: 'Motor de 50N 110V pega controle (com socorro)',
        precoComprado: 0.00,
        precoAtacado: 1077.00,
        precoVarejo: 1292.00
    },
    {
        id: '8',
        nome: 'ADESIVO COLA VINIL 75G',
        codigo: '3355',
        unidade: 'un',
        descricao:'cola vinil 75g',
        precoComprado: 0.00,
        precoAtacado: 16.40,
        precoVarejo: 0.00
    },
    {
        id: '9',
        nome: 'ARANHA QUAD 20/20',
        codigo: '3007',
        unidade: 'par',
        descricao: 'Aranha quadrada tem 4 pinos 20x20 e são para capota',
        precoComprado: 26.00,
        precoAtacado: 38.00,
        precoVarejo: 45.00
    },
    {
        id: '10',
        nome: 'ARANHA RED 3/4',
        codigo: '3080',
        unidade: 'par',
        descricao: 'Aranha quadrada tem 4 pinos 3/4 e são para capota',
        precoComprado: 26.00,
        precoAtacado: 38.00,
        precoVarejo: 45.00
    },
    {
        id: '11',
        nome: 'ARGOLA TOMBADORA',
        codigo: '3252',
        unidade: 'un',
        descricao: 'Uma argola para o tambador',
        precoComprado: 0.00,
        precoAtacado: 4.50,
        precoVarejo: 0.00
    },
    {
        id: '12',
        nome: 'ARRUELA 1/4',
        codigo: '3485',
        unidade: 'caixa',
        descricao: 'Arruela F lisa 1/4 ZI Ref: 06733 (i)',
        precoComprado: 0.00,
        precoAtacado: 34.19,
        precoVarejo: 0.00
    },
    {
        id: '13',
        nome: 'ARRUELA 3/16',
        codigo: '3484',
        unidade: 'caixa',
        descricao: 'ARRUELA F LISA 3/16 ZI Ref: 07623 (i)',
        precoComprado: 0.00,
        precoAtacado: 49.62,
        precoVarejo: 0.00
    },
    {
        id: '14',
        nome: 'ARRUELA ZINCADA 3/16',
        codigo: '3213',
        unidade: 'un',
        descricao: 'ARRUELA ZINCADA 3/16 UN',
        precoComprado: 0.00,
        precoAtacado: 0.15,
        precoVarejo: 0.00
    },
    {
        id: '15',
        nome: 'BASE CORREDIÇA (MACHO)',
        codigo: '3228',
        unidade: 'un',
        descricao: 'BASE CORREDIÇA (MACHO)',
        precoComprado: 0.00,
        precoAtacado: 10.00,
        precoVarejo: 0.00
    },
    {
        id: '16',
        nome: 'BOCA DE LOBO 3/4',
        codigo: '3191',
        unidade: 'un',
        descricao: 'Boca de lobo é igual o jacaré, porém é redondo',
        precoComprado: 0.00,
        precoAtacado: 5.00,
        precoVarejo: 0.00
    },
    {
        id: '17',
        nome: 'BAGUETE PVC',
        codigo: '3584',
        unidade: 'm',
        descricao: 'Baguete é utilizado para encaixar bambinela ou lona, muito usado no articulado',
        precoComprado: 0.00,
        precoAtacado: 2.00,
        precoVarejo: 0.00
    },
    {
        id: '18',
        nome: 'BOCA DE LOBO 1"',
        codigo: '3307	',
        unidade: 'un',
        descricao: 'Igual ao jacaré, porém redondo e mais grosso',
        precoComprado: 0.00,
        precoAtacado: 5.50,
        precoVarejo: 0.00
    },
    {
        id: '19',
        nome: 'BRAÇO FERRO GALV',
        codigo: '3286',
        unidade: 'm',
        descricao: 'Braço para toldo cortina de 2,50 pra cima',
        precoComprado: 0.00,
        precoAtacado: 28.00,
        precoVarejo: 0.00
    },
    {
        id: '20',
        nome: 'BLOCO DESLIZANTE I',
        codigo: '3569',
        unidade: 'un',
        descricao: 'Usado para braço articulado',
        precoComprado: 0.00,
        precoAtacado: 30.00,
        precoVarejo: 0.00
    },
    {
        id: '21',
        nome: 'BUCHA 08',
        codigo: '3365',
        unidade: 'un',
        descricao: 'Bucha pra parafuso tamanho 8 da WORKER',
        precoComprado: 0.00,
        precoAtacado: 0.10,
        precoVarejo: 0.00
    },
    {
        id: '22',
        nome: 'BUCHA 10',
        codigo: '3366',
        unidade: 'un',
        descricao: 'Bucha pra parafuso tamanho 10 da WORKER',
        precoComprado: 0.00,
        precoAtacado: 0.18,
        precoVarejo: 0.00
    },
    {
        id: '23',
        nome: 'BUCHA C/PINO 2" DE AL',
        codigo: '3023',
        unidade: 'un',
        descricao: 'bucha 2" com pino de aluminio para maquina',
        precoComprado: 0.00,
        precoAtacado: 10.00,
        precoVarejo: 0.00
    },
    {
        id: '24',
        nome: 'BUCHA C/PINO 2.1/2" de AL',
        codigo: '3001',
        unidade: 'un',
        descricao: 'bucha 2.1/2" com pino de aluminio para maquina',
        precoComprado: 0.00,
        precoAtacado: 16.96,
        precoVarejo: 0.00
    },
    {
        id: '25',
        nome: 'BUCHA C/PINO 3" DE AL',
        codigo: '3006',
        unidade: 'un',
        descricao: 'bucha 3" com pino de aluminio para maquina',
        precoComprado: 0.00,
        precoAtacado: 21.67,
        precoVarejo: 0.00
    },
    {
        id: '26',
        nome: 'BUCHA LISA 2.1/2"',
        codigo: '3187',
        unidade: 'un',
        descricao: 'bucha 2.1/2" lisa de nylon para maquina',
        precoComprado: 0.00,
        precoAtacado: 8.50,
        precoVarejo: 0.00
    },
    {
        id: '27',
        nome: 'BUCHA LISA 2"',
        codigo: '3189',
        unidade: 'un',
        descricao: 'bucha 2" lisa de nylon para maquina',
        precoComprado: 0.00,
        precoAtacado: 1.50,
        precoVarejo: 0.00
    },
    {
        id: '28',
        nome: 'BUCHA LISA 3"',
        codigo: '3188',
        unidade: 'un',
        descricao: 'bucha 3" lisa de nylon para maquina',
        precoComprado: 0.00,
        precoAtacado: 10.00,
        precoVarejo: 0.00
    },
    // Adicione mais produtos aqui
];

// Opcional: Adicionar uma função de busca para facilitar o uso.
function encontrarProdutoPorId(id) {
    return catalogoProdutos.find(produto => produto.id === id);
}

function encontrarProdutoPorNome(nome) {
    return catalogoProdutos.find(produto => produto.nome === nome);
}

function encontrarProdutoPorCodigo(codigo) {
    return catalogoProdutos.find(produto => produto.codigo === codigo);
}

function encontrarProdutoPorUnidade(unidade) {
    return catalogoProdutos.find(produto => produto.unidade === unidade);
}
