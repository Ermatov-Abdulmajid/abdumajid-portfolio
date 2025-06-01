import { BrowserRouter } from "react-router-dom";

<<<<<<< HEAD
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
=======
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
>>>>>>> bcfd4ef (Commit all the changes)

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
<<<<<<< HEAD
        <Feedbacks />
=======
>>>>>>> bcfd4ef (Commit all the changes)
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
