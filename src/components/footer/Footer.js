import React from 'react'
import './FooterStyle.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row-footer">
          {/* Column1 */}
          <div className="col-footer">
            <h4>Kontakt</h4>
            <ui className="list-unstyled">
              <li>+48 999 999 999</li>
              <li>PAI-projekt@gmail.com</li>
              <li>Kaliskiego 7, 85-796 Bydgoszcz</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col-footer">
            <h4>Lorem ipsum</h4>
            <ui className="list-unstyled">
              <li>Ipsum lorem</li>
              <li>Ipsum lorem</li>
              <li>Ipsum lorem</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col-footer">
            <h4>Social media</h4>
            <ui className="list-unstyled">
              <a href='https://www.youtube.com'><FontAwesomeIcon icon={faYoutube} /> youtube</a><br />
              <a href='https://www.instagram.com'><FontAwesomeIcon icon={faInstagram} /> instagram</a><br />
              <a href='https://twitter.com'><FontAwesomeIcon icon={faTwitter} /> twitter</a><br />
            </ui>
          </div>
        </div>
        <hr />
        <div className="row-footer-down">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PAI-PROJEKT | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer