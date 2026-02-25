import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

export default function LinkButton({platform}) {
  return (
    <a href={platform.link} target="blank" className="col-md-6 col-12 mb-3 text-decoration-none">
      <Button variant="dark" className="link-button p-3 w-100 d-flex justify-content-center align-items-center gap-2">
        <p className="no-m">{platform.msg} </p>
        <FontAwesomeIcon className="icon-animation" icon={platform.icon} />
      </Button>
    </a>
  );
}
