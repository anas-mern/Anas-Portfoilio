import {
  faSquareGithub,
  faSquareLinkedin,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFileArrowDown,
  faLaptop,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../Components/LinkButton";
import { Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactMe() {
  const platforms = [
    {
      icon: faSquareWhatsapp,
      msg: "Message Me On Whatsapp",
      link: "https://wa.me/201001542214",
    },
    {
      icon: faSquareGithub,
      msg: "Take A Look On My Github",
      link: "https://github.com/anas-mern",
    },
    {
      icon: faPhone,
      msg: "Call Me On My Mobile",
      link: "tel:+201001542214",
    },
    {
      icon: faMailBulk,
      msg: "Send Me An Email",
      link: "mailto:anasmern15@gmail.com",
    },
    {
      icon: faLaptop,
      msg: "Open My Freelancer Account",
      link: "https://www.freelancer.com/u/anas15mern",
    },
    {
      icon: faSquareLinkedin,
      msg: "Make A Connection On LinkedIn",
      link: "https://www.linkedin.com/in/anas-mostafa-84b40537a/",
    },
  ];
  const openCV =  () => {
    window.open("https://drive.google.com/file/d/1t4OR3qq-Cl5td8Xz-DETz5_95fMu5YIn/view?usp=sharing")
  }
  const downloadCV =  () => {
    window.open("https://drive.google.com/uc?export=download&id=1t4OR3qq-Cl5td8Xz-DETz5_95fMu5YIn","_blank")
  }
  return (
    <div className="h-section p-4 bg-secondary" id="contact-me">
      <h2 className="section-heading">Contact Me</h2>
      <p className="mt-4 mb-4 m-auto fs-3 text-center">
        Feel free to reach out through any of the following channels to discover
        more about me, my services, and how we can work together to bring your
        vision to life.
      </p>
      <div className="container">
        <div className="row">
          {platforms.map((p) => (
            <LinkButton platform={p} />
          ))}
        </div>
      <ButtonGroup className="m-auto">
        <Button variant="light" onClick={openCV}>Open My CV</Button>
        <Button variant="danger" onClick={downloadCV}>Download <FontAwesomeIcon icon={faFileArrowDown}/></Button>
      </ButtonGroup>
      </div>
    </div>
  );
}
