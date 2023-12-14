import { Link } from "react-router-dom";
import "./Footer.css"


export default function Footer() {
  return (
    <div>
      <section>Footer Example 3</section>

      <footer className='footer-distributed'>
        <div className='footer-right'>
          <Link to='#'>
            <i classNameName='fa fa-facebook'></i>
          </Link>
          <Link to='#'>
            <i classNameName='fa fa-twitter'></i>
          </Link>
          <Link to='#'>
            <i classNameName='fa fa-linkedin'></i>
          </Link>
          <Link to='#'>
            <i classNameName='fa fa-github'></i>
          </Link>
        </div>

        <div className='footer-left'>
          <p className='footer-links'>
            <Link className='link-1' to='#'>
              Home
            </Link>

            <Link to='#'>Blog</Link>

            <Link to='#'>Pricing</Link>

            <Link to='#'>About</Link>

            <Link to='#'>Faq</Link>

            <Link to='#'>Contact</Link>
          </p>

          <p>Company Name &copy; 2015</p>
        </div>
      </footer>
    </div>
  );
}
