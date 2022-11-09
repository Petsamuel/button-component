import logo from "./logo.svg";
import "./App.css";
import Button from "./assets/components/button";
import Menu from "./assets/components/menu"
function App() {

  return (
   <>
    <div className="App">
      <section className="section-1">
        <Menu />
      </section>
      <section className="section-2">
        <Button/>
      </section>
    </div>
   </>
  );
}

export default App;
