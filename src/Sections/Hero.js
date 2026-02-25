import { Button } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="h-section bg-black p-4 d-flex  flex-sm-row flex-column align-items-center">
      <img
        className="profile-card rounded"
        src={`${process.env.PUBLIC_URL}/profile.jpg`}
        alt="Profile Card"
      />
      <div>
        <h1 className="p-3 text-white">
          Hi, I’m Anas — I Turn Ideas into Web Magic ✨
        </h1>
        <p className="p-3 text-white fs-3">
          MERN Stack Developer building apps that aren’t just functional —
          they’re fast, sleek, and unforgettable.
        </p>
        <div className="p-3 d-flex gap-3">
          <Button variant="secondary" href="#projects">
            See My Projects 🚀
          </Button>
          <Button variant="secondary" href="#contact-me">
            Let’s Talk 📩
          </Button>
        </div>
      </div>
    </div>
  );
}
