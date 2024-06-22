import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import '../assets/styles/Main.scss'

function Main() {
  const socialLinks = [
    { href: 'https://github.com/n4en', icon: <GitHubIcon /> },
    {
      href: 'https://www.linkedin.com/in/naveenthurimerla/',
      icon: <LinkedInIcon />,
    },
  ]

  const isMobile = () => window.innerWidth <= 768 // Adjust breakpoint as needed

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="photo.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <h1>Naveen Thurimerla</h1>
          <p>Senior Data & MLOps Engineer</p>

          {isMobile() && (
            <div className="mobile_social_icons">
              {/* Render social links only on mobile */}
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Main
