import Layout from "./layout/Layout";
import Greetings from "./components/Greetings/Greetings";
import Skills from "./components/Skills/Skills";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Greetings />
        <Skills />
      </Layout>
    </>
  );
}

export default App;
