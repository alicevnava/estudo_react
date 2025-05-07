
// PARTE JS
//function App() {
const App = () => {
  const x = 10

  const funcaoY = () => {
    console.log('Aperte o botão', x)
  }

  funcaoY()

//PARTE HTML
  return (
    //precisa de um elemento pai - fragment, pode ser vazio, uma div ou um componente
    <>
      <div>
        <h1>Olá Mundo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae eligendi odit eveniet aliquam reiciendis ut voluptates sit, odio quidem accusamus provident aperiam nobis quisquam. Voluptas in laudantium molestiae maxime?</p>
        <button>Aperte</button>
      </div>
    </>
  )
}

// default - exporta um componente padrão
export default App
//export {App} - exporta um componente nomeado, evitando erros de exportação 

// se tivesse um funtio App2 () {..}, teria ue exportar como:
// export {App, App2 }
