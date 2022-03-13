import ClientSlider from '../component/clientSlider'
import React, {useContext, useEffect} from 'react'
import LocaleContext from '../src/context/LocaleContext'
import useLocales from '../src/hooks/useLocales'
import IntlMessages from '../src/i18n/IntlMessages'

function Clients2() {
  const {route} = useLocales()
  return (
    <>
      <div className="content-inner-3">
        <div className="container">
          <div className="clients-carousel owl-none owl-carousel m-b30">
            {/* <IntlMessages id={'sidebar.calendar.selectable'} /> */}
            <ClientSlider />
          </div>
        </div>
      </div>
    </>
  )
}

export default Clients2
