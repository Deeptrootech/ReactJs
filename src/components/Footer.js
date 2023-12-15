import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  return (
    <footer className='footer-distributed'>
      <div className='footer-right'>
        <Link to='/facebook'>
          <FacebookIcon style={{ padding: "15%" }} />
        </Link>
        <Link to='/twitter'>
          <TwitterIcon style={{ padding: "15%" }} />
        </Link>
        <Link to='/linkedin'>
          <LinkedInIcon style={{ padding: "15%" }} />
        </Link>
        <Link to='/github'>
          <GitHubIcon style={{ padding: "15%" }} />
        </Link>
      </div>

      <div className='footer-left'>
        <p className='footer-links'>
          <Link className='links' to='/'>
            Home
          </Link>

          <Link className='links' to='/prizing'>Pricing</Link>

          <Link className='links' to='/about'>About</Link>

          <Link className='links' to='/contact'>Contact</Link>
        </p>

        <p>Hotello &copy; 2023</p>
      </div>
    </footer>
  );
}
