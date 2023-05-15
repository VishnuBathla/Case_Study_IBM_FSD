import "./styles/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <footer className="">
        <div className="footdiv">
          <section className="foot">
            <h2>Location</h2>
            <ul className="feet">
              <li>Bakery Pie Shop</li>
              <li>123 Bakery Street</li>
              <li>Brussels, Belgium</li>
            </ul>
          </section>

          <section className="foot">
            <h2>Company</h2>
            <ul className="feet">
              <li>Catering</li>
              <li>Delivery</li>
              <li>Swag Shop</li>
              <li>Support</li>
            </ul>
          </section>

          <section className="foot">
            <h2>Social</h2>
            <ul className="feet">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
