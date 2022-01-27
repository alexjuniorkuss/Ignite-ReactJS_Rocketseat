import { createGlobalStyle } from 'styled-components'; 

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f4; // tag root 
        --red: #E62E4D;
        --blue: #5429CC; 
        --green: #33CC95;

        --blue-light: #6933FF; 
        
        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F0F2F4;
        --shape: #FFFFFF;
    }
    *{
        margin: 0; // zera os estilos globais
        padding: 0;
        box-sizing: border-box;
    }
    html{
        // fonte padrao é 16px  16 * 93,75% = 15px 
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px (em dispositivos menores diminui a fonte)
        }
        @media (max-width: 720px) {
            font-size: 87.5%;  // 14px
        }
        // existe o REM 1rem é equivalente a 16px se eu diminuo o font size pela porcentagem toda a aplicação diminui de acordo com a tela do usuario
    }
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased; // fonte fica mais detalhadas mais nitidas
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-family: 400;// no html o normal é 500 entao volta pra 400
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor:  not-allowed;
    }
`