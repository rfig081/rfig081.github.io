import Layout from "./layout/Layout";
import Greetings from "./components/Greetings/Greetings";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import "./App.css";

function App() {
  return (
    <Layout>
      <Greetings />
      <Skills />
      <Experience />
      <Education />
    </Layout>
  );
}

export default App;
