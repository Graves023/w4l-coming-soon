import Link from 'next/link'
import {useState} from 'react'
function Header2() {
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState('home')
  return (
    <>
      <header className="site-header mo-left header-transparent">
        <div className="container">
          <div className="top-bar">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="dlab-topbar-left">
                <ul>
                  <li>
                    <i className="la la-envelope"></i> info@example.com
                  </li>
                  <li>
                    <i className="la la-phone-volume"></i> +91 987-654-3210
                  </li>
                </ul>
              </div>
              <div className="dlab-topbar-right">
                <ul className="dlab-social-icon">
                  <li>
                    <a
                      className="fa fa-facebook"
                      href="https://en-gb.facebook.com/"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="fa fa-instagram"
                      href="https://www.instagram.com/"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="fa fa-twitter"
                      href="https://twitter.com/login?lang=en"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header --> */}
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              {/* <!-- Website Logo --> */}
              <div className="logo-header mostion logo-dark">
                <Link href="/">
                  <a className="logo-header__title">W4L</a>
                </Link>
              </div>
              {/* <!-- Nav Toggle Button --> */}
              <button
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  show ? 'open' : ''
                }`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Extra Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link href="contact-us-2">
                    <a className="btn btn-primary rounded-xl gradient shadow">
                      Зв'язатися з нами
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? 'show' : ''
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header">
                  <Link href="/">
                    <a className="logo-header__title logo-header__title--menu">
                      W4L
                    </a>
                  </Link>
                </div>

                <div className="dlab-social-icon">
                  <ul>
                    <Link href="https://en-gb.facebook.com/">
                      <a className="fa fa-facebook"></a>
                    </Link>
                    <Link href="https://twitter.com/login?lang=en">
                      <a className="fa fa-twitter"></a>
                    </Link>
                    <Link href="https://www.linkedin.com/login">
                      <a className="fa fa-linkedin"></a>
                    </Link>
                    <Link href="https://www.instagram.com/">
                      <a className="fa fa-instagram"></a>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
    </>
  )
}

export default Header2
