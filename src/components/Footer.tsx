import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/n4en/n4en-portfolio" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
      
      <p>&copy; Naveen Thurimerla {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;