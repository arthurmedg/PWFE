import AlternadorTema from "./components/AlternadorTemas";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {

  return (
    <div className="app-wrapper">
      <Header/>
      <AlternadorTema/>
      <Footer/>
    </div>
  )
}