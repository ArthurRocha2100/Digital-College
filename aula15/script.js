const usuarios = [
    { id: 1, nome: "Juliana Moraes", email: "juliana.moraes@example.com", ativo: true },
    { id: 2, nome: "Marta Rocha", email: "marta.rocha@example.com", ativo: true },
    { id: 3, nome: "Pedro Gomes", email: "pedro.gomes@example.com", ativo: false },
    { id: 4, nome: "Ana Silva", email: "ana.silva@example.com", ativo: true },
    { id: 5, nome: "Carlos Souza", email: "carlos.souza@example.com", ativo: false },
];


const produtos = [
    { id: 1, nome: "Fone de Ouvido Bluetooth", preco: 150.00, categoria: "Eletrônicos" },
    { id: 2, nome: "Cafeteira Elétrica", preco: 120.00, categoria: "Eletrodomésticos" },
    { id: 3, nome: "Smartphone 128GB", preco: 2000.00, categoria: "Eletrônicos" },
    { id: 4, nome: "Blender Portátil", preco: 80.00, categoria: "Eletrodomésticos" },
    { id: 5, nome: "Mouse Sem Fio", preco: 50.00, categoria: "Eletrônicos" }
];
7
// Exiba para o usuário os produtos de uma categoria específica, como "eletrônicos".


const alunos = [
    {
        nome: "João",
        notas: [
            { 
                materia: "Matemática",
                nota: 5
            },
            { 
                materia: "Português",
                nota: 6
            },
            { 
                materia: "Química",
                nota: 7
            }
        ],
        turma: "1A"
    },
    {
        nome: "Maria",
        notas: [
            { 
                materia: "Matemática",
                nota: 9
            },
            { 
                materia: "Português",
                nota: 8
            },
            { 
                materia: "Química",
                nota: 7
            }
        ],
        turma: "1A"
    },
    {
        nome: "José",
        notas: [
            { 
                materia: "Matemática",
                nota: 3
            },
            { 
                materia: "Português",
                nota: 2
            },
            { 
                materia: "Química",
                nota: 3
            }
        ],
        turma: "1B"
    },
    {
        nome: "Ana",
        notas: [
            { 
                materia: "Matemática",
                nota: 6
            },
            { 
                materia: "Português",
                nota: 5
            },
            { 
                materia: "Química",
                nota: 4
            }
        ],
        turma: "1B"
    }
]


//Faça uma função que recebe um aluno como argumento e retorna um novo objeto com nome, turma e média do aluno

function getStudantAvenge(studant) {

    const notas = studant.notas;
    const sumNote = notas.reduce((total, n) => total + n.nota, 0) 
    const avenge =  sumNote / notas.length;

    return {
        nome: studant.nome,
        turma: studant.turma,
        media: avenge
    }


}

// Retorne um novo array com nome, turma e média de todos os alunos.

const alunosResum = alunos.map((aluno) => getStudantAvenge(aluno));

// Retorne um novo array com média por turma.

function getTurmAvenge(){
    console.log(alunosResum);

}