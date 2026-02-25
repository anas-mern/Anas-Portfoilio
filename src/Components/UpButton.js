import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from "react-bootstrap";

export default function UpButton() {
  const upscroll = () => {
    window.scrollBy(0,-10000)
  }
  return (
      <Button  onClick={upscroll} variant='warning' className="up-button position-fixed rounded-circle"><FontAwesomeIcon icon={faArrowUp} /></Button>
  )
}
