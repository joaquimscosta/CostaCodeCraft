import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="container">
      <Header />
      <Content content={AboutMe} />
      <Footer />
    </div>
  );
}
export default App;
