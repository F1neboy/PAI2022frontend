import React from 'react'
import './FooterStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Kontakt</h4>
            <ui className="list-unstyled">
              <li>+48 999 999 999</li>
              <li>PAI-projekt@gmail.com</li>
              <li>Kaliskiego 7, 85-796 Bydgoszcz</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Lorem ipsum</h4>
            <ui className="list-unstyled">
              <li>Ipsum lorem</li>
              <li>Ipsum lorem</li>
              <li>Ipsum lorem</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Social media</h4>
            <ui className="list-unstyled">
              <li>FaceBook</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
              <FontAwesomeIcon icon={faCoffee} />
            </ui>
          </div>
        </div>
        <hr />
        <div className="row-down">
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