import "./reset.css";
import "./App.css";
import Section from "./components/Section";
import logo from "./img/logo-netflix.png";

const App = () => {
  return (
    <div className="homepage">
      <section className="logo">
        <img src={logo} alt="logo" />
      </section>
      <Section />
      {/* <Section />
      <Section />
      <Section />
      <Section />
      <Section /> */}
    </div>
  );
};

export default App;
