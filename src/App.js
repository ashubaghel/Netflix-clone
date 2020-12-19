import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Main_content from "./Component/Main_content";
import './App.css';


function App() {



  return (
   <>
   <Header></Header>
   <Main_content column="2" id="976" type="Jason Statham"></Main_content>
   <Main_content column="2" id="3223" type="Robert Downey Jr."></Main_content>
  
   <Main_content type="Tom Cruise" id="500"></Main_content>
   <Main_content type="Arnold Schwarzenegger" id="1100"></Main_content>
   <Main_content type="Dwayne Johnson" id="18918"></Main_content>
   <Main_content type="Lisa Ann Walter" id="4494"></Main_content>
   <Main_content type="Keanu Reeves" id="6384"></Main_content>
   <Main_content type="Daniel Radcliffe" id="10980"></Main_content>
   <Main_content type="Ruby O. Fee" id="229396"></Main_content>
   <Footer></Footer>
   </>
  );
}

export default App;
