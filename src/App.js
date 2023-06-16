
import { useContext } from 'react';
import './App.css';
import Intro from './Component/Intro/Intro';
import ProductList from './Component/ProductList/ProductList';
import About from './Component/about/About';
import Contack from './Component/contack/Contack';
import Toggle from './Component/toggle/Toggle';
import { ThemeContex, ThemeContext } from './Contex';
import Skills from './Component/Skill/Skill';
import Slide from 'react-reveal/Slide';
import Fade from "react-reveal/Fade";
import Flip from 'react-reveal/Flip';
function App() {

  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;
  return (
    <div

      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}


    >
      <Toggle />
      <Intro />

      <Flip left>
        <About />
      </Flip>

      <Slide left>
        <Skills />
      </Slide>

      <Slide right>
        <ProductList />
      </Slide>


      <Fade bottom duration={2000}>
        <hr />
        <Contack />
      </Fade>
    </div>
  );
}

export default App;
