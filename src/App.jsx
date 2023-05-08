import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ToDoList from "./components/ToDoList/ToDoList";
import Articulos from "./components/Articulos/Articulos";
// 05/04 - Workshop:
import Hooks from "./components/Hooks/Hooks";
// 10/04 - Routing y navega
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";


function App() {
  return (
  <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={ <ItemListContainer/> } />
      <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
      <Route path="/item/:idItem" element={<ItemDetail/>} />
    </Routes>
    </BrowserRouter>
 
  </>



  );
}

export default App;

/*
      <NavBar/>
      <ItemCount/>
      <ItemListContainer/>
      <ItemDetailContainer/>


      <ToDoList/>

  
     <>
      <h1>Blog sobre gatitos</h1>
      <h2>Noticias</h2>  
      <Articulos titulo="Alimentos nuevos" img="https://feliceslasvacas.com/wp-content/uploads/2022/04/22_03_21-Feliceslasvacas_1500x1500-Receta-4.png">
      <p>loremefw fewfewkfwekqwekwewefjw</p>
      <strong>Tiempo de lectura 10 minutos</strong>
      </Articulos>

      <h2>Recetas</h2>

      <Articulos titulo= "Recetas con cereal" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Ao9nJoxTZZwdOa6h68hpCumtheAMy9yvnEZHBGOWaePsQrbgCKQH0t10q4hPFxraPkE&usqp=CAU">
      <p>Recetas para gatos</p>
      </Articulos>
    
  </>
    <Hooks/>

*/