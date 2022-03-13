import {useContext, useEffect, useState, Fragment} from 'react'
import {IntlProvider} from 'react-intl'
import 'react-rangeslider/lib/index.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import useScrollPosition from 'use-scroll-position'
import '../css/style.css'
import '../css/skin/skin-2.css'
import '../styles/globals.css'
import '../styles/switcher.css'
import LocaleContext from '../src/context/LocaleContext'
import AppLocale from '../src/i18n'
import {useRouter} from 'next/router'

function MyApp({Component, pageProps}) {
  const {locale} = useContext(LocaleContext)
  const router = useRouter()

  const [toggle1, setToggle1] = useState(false)
  const [body_, setbody_] = useState()
  const [layout, setLayout] = useState('wide')
  const [header, setHeader] = useState('fixed')
  const [header_, setHeader_] = useState()
  const [sliderValu, setSliderValu] = useState(20)

  useEffect(() => {
    setbody_(document.querySelector('body'))
    setHeader_(document.getElementsByClassName('main-bar-wraper'))
  }, [])

  let scrollPosition = useScrollPosition()
  function toggle() {
    setToggle1(!toggle1)
  }

  const backGroundImage = value => {
    body_.style.backgroundImage = `url(${value})`
    body_.style.backgroundSize = 'auto'
  }

  const chageHeader = value => {
    setHeader(value)
    if (value === 'fixed') {
      header_[0].classList.add('sticky-header')
      header_[0].classList.remove('sticky-no')
    } else {
      header_[0].classList.add('sticky-no')
      header_[0].classList.remove('sticky-header')
      header_[0].classList.remove('is-fixed')
    }
  }

  const onChange = value => {
    setSliderValu(value)
    body_.style.padding = value + 'px'
  }

  header === 'fixed' && scrollPosition > 10
    ? header_ && header_[0].classList.add('is-fixed')
    : header_ && header_[0].classList.remove('is-fixed')

  return (
    <IntlProvider
      locale={AppLocale[router.locale].locale}
      messages={AppLocale[router.locale].messages}
    >
      <div className="page-wraper">
        <Component {...pageProps} />
      </div>
      <a href="#top">
        <button
          className="scroltop icon-up"
          type="button"
          style={{display: 'inline-block'}}
        >
          <i className="fa fa-arrow-up" />
        </button>
      </a>
    </IntlProvider>
  )
}

export default MyApp
