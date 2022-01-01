import React from 'react';
import '../styles/footer.scss';

export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="https://www.instagram.com/tomilin.dimon/" target="blank">
            <i className="icon ion-social-instagram"></i>
          </a>
          <a href="https://github.com/DimaTomilin" target="blank">
            <i className="icon ion-social-github"></i>
          </a>
          <a href="https://twitter.com/TomilinDima" target="blank">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="https://www.facebook.com/tomilin.dimon" target="blank">
            <i className="icon ion-social-facebook"></i>
          </a>
        </div>
        <p className="copyright">Dima Project © 2022</p>
      </footer>
    </div>
  );
}
