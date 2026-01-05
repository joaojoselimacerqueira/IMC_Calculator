const btnCalc = document.getElementById("btnCalcular");

btnCalc.addEventListener ("click", () => {

    const aparecer_Resposta = document.querySelector(".btnResposta")
    aparecer_Resposta.style.display = "flex"

    const get_varPeso1 = document.querySelector('#idPeso').value;
    const get_varAltura1 = document.querySelector('#idAltura').value;
    const varPeso1 = parseFloat(get_varPeso1);
    const varAltura1 = parseFloat(get_varAltura1);
    console.log(`${varPeso1} e ${varAltura1}`);

    //erro 01
    if(get_varPeso1 === "" || get_varAltura1 === "") {
        const varRespostaerro2 = document.querySelector("#idResposta");
        varRespostaerro2.innerText = "Campo vazio, tente novamente!";
        varRespostaerro2.parentElement.style.backgroundColor = "rgba(246, 255, 0, 0.5)"; 
    } 
    //calcular IMC e dar respostas
    else if (get_varPeso1 >=2 && get_varPeso1<=700 && get_varAltura1 >=60 && get_varAltura1<=280) {
    
        //Conta matemática
        const imcCalcular = varPeso1 / ((varAltura1 / 100) ** 2);
        imcCalcular_Fixed = imcCalcular.toFixed(1);
        console.log(`${imcCalcular_Fixed}`);
        //Variavel para mostrar tabela após clique para calcular e da certo a conta.
        const tabela = document.querySelector('.classeDIVTabela');
        //Variavel para aumentar o tamanho do quadro do site e fazer caber a tabela.
        const varCresceTela = document.querySelector('.var_esqueletoGeral');
        //Variavel para colorir de verde a linha da tabela do resultado do usuário.
        const linhas = document.querySelectorAll('#idTabela tbody tr');
        console.log(linhas.length);
        
        //Respostas escritas e aparição de tabela
        if (imcCalcular <18.5){
            let varResposta = document.querySelector("#idResposta");
            varResposta.innerText = `O seu IMC é ${imcCalcular_Fixed}, (Abaixo do peso)`;
            varResposta.parentElement.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
            tabela.style.display = "block";
        }

        else if (imcCalcular >=18.5 && imcCalcular < 24.9){
            let varResposta = document.querySelector("#idResposta");
            varResposta.innerText = `O seu IMC é ${imcCalcular_Fixed}, (Saudável)`;
            varResposta.parentElement.style.backgroundColor = "rgba(0, 255, 0, 0.54)"; 
            tabela.style.display = "block";
        }

        else if (imcCalcular >=25 && imcCalcular < 29.9){
            let varResposta = document.querySelector("#idResposta");
            varResposta.innerText = `O seu IMC é ${imcCalcular_Fixed}, (Sobrepeso)`;
            varResposta.parentElement.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; 
            tabela.style.display = "block"; 
        }

        else if (imcCalcular >=30 && imcCalcular <34.9){
            let varResposta = document.querySelector("#idResposta");
            varResposta.innerText = `O seu IMC é ${imcCalcular_Fixed}, (Obesidade grau 1)`;
            varResposta.parentElement.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; 
            tabela.style.display = "block"; 
        }

        else if (imcCalcular >=35 && imcCalcular < 39.9){
            let varResposta = document.querySelector("#idResposta");
            varResposta.innerText = `O seu IMC é ${imcCalcular_Fixed}, (Obesidade grau 2)`;  
            varResposta.parentElement.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; 
            tabela.style.display = "block"; 
        }

        else if (imcCalcular >=40){
            let varResposta = document.querySelector("#idResposta");
            varResposta.innerText = `O seu IMC é ${imcCalcular_Fixed}, (Obesidade grau 3)`;
            varResposta.parentElement.style.backgroundColor = "rgba(255, 0, 0, 0.5)"; 
            tabela.style.display = "block"; 
        };

        //Pintar resultado na tela.
        if (imcCalcular < 18.5) {
            linhas[0].classList.add('linha-destaque'); // Abaixo do peso
        } else if (imcCalcular < 25) {
            linhas[1].classList.add('linha-destaque'); // Saudável
        } else if (imcCalcular < 30) {
            linhas[2].classList.add('linha-destaque'); // Sobrepeso
        } else if (imcCalcular < 35) {
            linhas[3].classList.add('linha-destaque'); // Obesidade 1
        } else if (imcCalcular < 40) {
            linhas[4].classList.add('linha-destaque'); // Obesidade 2
        } else {
            linhas[5].classList.add('linha-destaque'); // Obesidade 3
        };
    }

    //erro 02
    else {
        const varRespostaerro3 = document.querySelector("#idResposta");
        varRespostaerro3.innerText = "Valores impossíveis, tente novamente!";
        varRespostaerro3.parentElement.style.backgroundColor = "rgba(255, 255, 0, 0.5)"; 
    }


    });

