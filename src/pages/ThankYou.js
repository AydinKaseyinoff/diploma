import ModalWindow from "../components/ModalWindow/ModalWindow";
import "./ThankYou.css"
export default function ThankYou() {
    return (
      <div className="ThankYou">
        <h1>Thank you!</h1>
        <img loading="eager" src="https://cdn.dribbble.com/users/423514/screenshots/2770345/animated-check.gif" alt="thank you" />
        <p>Your order has been received. Our specialists will contact with you shortly to confirm it.</p>
        <div>
          to <ModalWindow />
        </div>
      </div>
    );
  }