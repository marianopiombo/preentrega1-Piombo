import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PreFooter from "./components/PreFooter";
import Carrousel from "./components/carrousel";
import ItemListContainer from "./components/itemListContainer";




const App = () =>{
  return(
    <div>
      <NavBar/>
      <Carrousel />
      <ItemListContainer greeting={"PAGINA EN MANTENIMIENTO"}/>
      <PreFooter/>
      <br />
      <Footer />
    </div>
  )
}

export default App;