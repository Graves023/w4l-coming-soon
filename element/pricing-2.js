import PricingTable2 from '../component/pricingTable-2'
import Toggle from '../component/pricingToggle'
import IntlMessages from '../src/i18n/IntlMessages'
function Pricing2() {
  return (
    <>
      {/* <!-- Our Pricing --> */}
      <section
        className="content-inner-2"
        style={{
          backgroundImage: 'url(images/background/bg16.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <div className="section-head style-3 text-center">
            <h6 className="sub-title bgl-primary m-b15 text-primary">
              <IntlMessages id={'main.support.section'} />
            </h6>
            <h2 className="title">
              <IntlMessages id={'main.support.title'} />
            </h2>
          </div>

          <PricingTable2 />
        </div>
      </section>
    </>
  )
}

export default Pricing2
