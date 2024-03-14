let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/23",
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        matriculadoEm: "2024/04/23",
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        matriculadoEm: "2024/02/25",
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/29",
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        matriculadoEm: "2024/12/23",
        numeroChamada: 1225
    },
]

function listarAlunos(chamadaDeAlunos) {
    chamadaDeAlunos.forEach(aluno => { 
        console.log(aluno.nome)
        console.log(aluno.numeroChamada)
    })
}

function buscarAlunoPeloNumeroDaChamada(numeroChamada, listaDeAlunos) {
    for (let i = 0; i < listaDeAlunos.length; i++) {
        if (numeroChamada === listaDeAlunos[i].numeroChamada) {
            console.log(`Encontrei ${listaDeAlunos[i].nome}, ${listaDeAlunos[i].numeroChamada}`)
            return
        }
    }
    console.log("Não encontrei")
}

function listarAlunoPorMesMatricula(listaDeAlunos: aluno[], mes: string, ano: string) {
    //n sei
}

function listarAlunosAprovados(listaDeAlunos) {
    listaDeAlunos.forEach(aluno => {
        aluno.materias.forEach(materia => {
            if (materia.nota >= 6 && materia.presenca >= 75) {
                console.log("APROVADO")
                console.log("NOTA: " + materia.nota)
                console.log("PRESENCA: " + materia.presenca)
                console.log("ALUNO: " + aluno.nome)
            }
        })
    })
}

function listarAlunosReprovados(listaDeAlunos) {
    listaDeAlunos.forEach(aluno => {
        aluno.materias.forEach(materia => {
            if (materia.nota < 6 || materia.presenca < 75) {
                console.log("REPROVADO")
                console.log("NOTA: " + materia.nota)
                console.log("PRESENCA: " + materia.presenca)
                console.log("ALUNO: " + aluno.nome)
            }
        })
    })
}
