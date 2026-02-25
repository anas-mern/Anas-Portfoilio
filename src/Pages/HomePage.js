import NavBar from "../Components/NavBar";
import Hero from "../Sections/Hero";
import Projects from "../Sections/Projects";
import AboutMe from "../Sections/AboutMe";
import UpButton from "../Components/UpButton";
import ContactMe from "../Sections/ContactMe";
import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <div>
      <NavBar links={["Projects","Contact Me","About Me"]}/>
      <Hero />
      <Projects dashboard={false}/>
      <AboutMe />
      <UpButton />
      <ContactMe />
      <Footer />
    </div>
  );
}
