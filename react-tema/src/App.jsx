import AlternadorTema from "./components/AlternadorTemas";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css"

export default function App() {

  return (
    <div className="app-wrapper">
      <Header/>
      <AlternadorTema/>
      <Footer/>
    </div>
  )
}