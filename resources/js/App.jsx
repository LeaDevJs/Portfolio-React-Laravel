import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from "./components/Header";
import Principal from "./components/Principal";
import SobreMi from "./components/SobreMi";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <Principal></Principal>
      <SobreMi></SobreMi>
      <Skills></Skills>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </>
  );
}

export default App;

if (document.getElementById('root')) {
  const Index = ReactDOM.createRoot(document.getElementById("root"));

  Index.render(
      <React.StrictMode>
          <App/>
      </React.StrictMode>
  )
}


