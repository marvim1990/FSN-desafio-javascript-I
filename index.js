
const alunosDaEscola=[
    {
        nome:"Henrique",
        notas:[],
        cursos:[],
        faltas:5
    },{
        nome:"Edson",
        notas:[],
        cursos:[],
        faltas:2
    },{
        nome:"Bruno",
        notas:[10,9.8,9.6],
        cursos:[],
        faltas:0
    },{
        nome:"Guilherme",
        notas:[10,9.8,9.6],
        cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],
        faltas:0
    },{
        nome:"Carlos",
        notas:[],
        cursos:[],
        faltas:0
    },
    {
        nome:"Lucca",
        notas:[10,9.8,9.6],
        cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],
        faltas:0
}];


const adicionarAluno = (nome,nomeCurso)=>{   // Também foi adicionado o parâmetro nomeCurso(não descrito no escopo).
    alunosDaEscola.push(
        {
        nome: nome,
        notas:[],
        cursos:[{nomeDoCurso:nomeCurso,dataDaMatricula:new Date}]
        });
    console.log(`O aluno ${nome} foi adicinado com sucesso.`);
}


const listarAlunos = () =>{
    for (let aluno of alunosDaEscola)
        console.log(`
         Nome: ${aluno.nome}
         Notas: ${aluno.notas}
         Cursos: ${aluno.cursos}
         Faltas: ${aluno.faltas}
        ------------------------`);
};


const buscarAluno=(nome)=>{
    var alunos = alunosDaEscola.filter((aluno) => {
        return aluno.nome.toLocaleLowerCase() === nome.toLocaleLowerCase();
      });
    if ( alunos.length !== 0){
        console.log(`O aluno ${nome} foi encontrado !!`);
        for(let dado of alunos)
            console.log(`
            Nome: ${dado.nome}
            Notas: ${dado.notas}
            Curso: ${dado.cursos}
            Faltas: ${dado.faltas}`)
    } else {
        console.log(`O aluno ${nome} não foi encontrado :(`);
    }
};


const dataAtual = () =>{     // função criada para facilitar a manipulação de datas no programa.
    let minhaData =new Date(); 
    let dia = minhaData.getDate();
    let mes = minhaData.getMonth()+1;
    let ano = minhaData.getFullYear();
    let dataHoje = `${dia}/${mes}/${ano}`
        return dataHoje

};


const matricularAluno = (aluno, curso) =>{
    for (let i = 0; i < alunosDaEscola.length; i++) {
        if (alunosDaEscola[i].nome.toLowerCase()===aluno.toLowerCase()){
            var AlunoMatriculado = true;
            alunosDaEscola[i].cursos.push({nomeDoCurso:curso,dataMatricula:`${dataAtual()}`})
            console.log(`O aluno ${alunosDaEscola[i].nome} foi matriculado no curso de ${curso} em ${dataAtual()}`)
        };
    };
    if (!AlunoMatriculado){
        console.log('O aluno não foi encontrado :(')
    } ; 
};


const aplicarFalta =(aluno) => {
    for (let index = 0; index < alunosDaEscola.length; index++) {
        if(alunosDaEscola[index].nome.toLowerCase()=== aluno.toLowerCase() ) {
            var matriculado = true;
            alunosDaEscola[index].faltas+=1;
            console.log(`Foi adicionada uma falta ao aluno ${aluno}`)
        }
    }
    if(!matriculado) {
        console.log(`O aluno ${aluno} não foi encontrado :(`)
    }
};


const aplicarNota =(aluno,nota) => {     // Foi adicionado o parâmetro "nota"(fora do proposto) para dar mais sentido a função.
    for (let index = 0; index < alunosDaEscola.length; index++) {
        if(alunosDaEscola[index].nome.toLowerCase()=== aluno.toLowerCase() ) {
            var Ematriculado = true;
            alunosDaEscola[index].notas.push(nota)
            console.log(`Nota aplicada ao aluno ${aluno} com sucesso.`)
        }
    }
    if(!Ematriculado){
        console.log(`O aluno ${aluno} não foi encontrado :(`)
    }
};


const aprovarAluno = (aluno) => {
    for (let index = 0; index < alunosDaEscola.length; index++) {
        if(alunosDaEscola[index].nome.toLowerCase()=== aluno.toLowerCase() ) {
            var matricula = true;
            var numeroDeNotas = alunosDaEscola[index].notas.length
            var soma= alunosDaEscola[index].notas.reduce((pilha,numero) => pilha+numero)
            var numeroDeFaltas =alunosDaEscola[index].faltas
        }       
    }
    if (matricula){
        let media = soma / numeroDeNotas
        if(numeroDeFaltas<=3 && media>=7){
            console.log(`O aluno ${aluno}, foi aprovado`)
        }else{
            console.log(`aluno ${aluno}, foi reprovado`)
        }
    }else {
        console.log(`Aluno ${aluno} não foi encontrado :(`)
    }
   
};




  
 

