// props recebida como parâmetro: nome, background color
const Buttons = (iconImage, bcgColor) => {
    return (
        // home
        // className vira templateLiteral e qual classe quer receber de cor dinamicamente
        <div className={` defaultButton ${bcgColor}`}>
            {/* children - recebe de forma dinâmica, qual imagem deve colocar no botão */}
            <img src={iconImage} alt="Download" />
            <a href="./sources/curriculoAliceNava.pdf" download="curriculoAliceNava.pdf"> Baixar Currículo </a>
        </div>

    )
}

export default Buttons;


// btns tem o mesmo estilo: cor de fundo, imagem, texto, fontes e bordas arredondadas

// PROPS (propriedades): valores enviados de um componente pai para um componente filho. 
//CHILDREN: prop especial que representa o conteúdo entre as tags de um componente.