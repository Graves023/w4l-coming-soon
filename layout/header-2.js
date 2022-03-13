import Link from 'next/link'
import {useState} from 'react'
import useLocales from '../src/hooks/useLocales'
import IntlMessages from '../src/i18n/IntlMessages'

function Header2() {
  const {handleLanguageSwitch} = useLocales()
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
                  <li style={{color: 'white'}}>
                    <Link href={'/en'} locale="en">
                      <a
                        style={{color: 'white'}}
                        onClick={() => handleLanguageSwitch('en')}
                      >
                        English
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/ua'} locale="ua">
                      <a
                        style={{color: 'white'}}
                        onClick={() => handleLanguageSwitch('ua')}
                      >
                        Українська
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dlab-topbar-right">
                <ul className="dlab-social-icon">
                  <li>
                    <a
                      className="fa fa-instagram"
                      target="_blank"
                      href="https://www.instagram.com/dkkasumov"
                    ></a>
                  </li>
                  <li>
                    <a
                      className="fa fa-telegram"
                      target="_blank"
                      href="https://t.me/anders_graves"
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
                <ul style={{display: show ? 'block' : 'none'}}>
                  <li style={{'text-align': 'center'}}>
                    <Link href={'/en'} locale="en">
                      <a
                        style={{color: 'black'}}
                        onClick={() => handleLanguageSwitch('en')}
                      >
                        English
                      </a>
                    </Link>
                  </li>
                  <li style={{'text-align': 'center'}}>
                    <Link href={'/ua'} locale="ua">
                      <a
                        style={{color: 'black'}}
                        onClick={() => handleLanguageSwitch('ua')}
                      >
                        Українська
                      </a>
                    </Link>
                  </li>
                </ul>

                <div className="dlab-social-icon">
                  <ul>
                    <ul>
                      <li>
                        <a
                          className="fa fa-instagram"
                          target="_blank"
                          href="https://www.instagram.com/dkkasumov"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-telegram"
                          target="_blank"
                          href="https://t.me/anders_graves"
                        ></a>
                      </li>
                    </ul>
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
