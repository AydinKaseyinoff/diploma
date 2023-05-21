import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div class="footer">
        <div class="row-first">
          <NavLink href="https://youtu.be/taaSYRW2Rg8">
            <img
              src="https://cdn.icon-icons.com/icons2/836/PNG/512/Youtube_icon-icons.com_66802.png"
              alt="youtube"
            />
          </NavLink>
          <NavLink href="https://www.linkedin.com/in/айдин-касейинов-8750b725b/">
            <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG39.png" alt="linkedin" />
          </NavLink>
        </div>

        <div class="row">
          <ul>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink href="#">Our Services</NavLink>
            </li>
            <li>
              <NavLink href="#">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink href="#">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink href="#">Career</NavLink>
            </li>
          </ul>
        </div>

        <div class="row">
          SMARTPHONE Copyright © 2021 SMARTPHONE - All rights reserved || Designed By:
          KASEINOV
        </div>
      </div>
    </footer>
  );
}
