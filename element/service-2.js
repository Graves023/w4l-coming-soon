import {useState} from 'react'
import IntlMessages from '../src/i18n/IntlMessages'

function Service2() {
  const [open, setOpen] = useState('p2')
  return (
    <>
      {/* <!-- Service --> */}
      <section
        className="content-inner-2"
        style={{
          backgroundImage: 'url(images/background/bg2.png)',
          backgroundRepeat: 'no-repeat',
          paddingTop: '20px'
        }}
      >
        <div className="container">
          <div className={'row m-b40'}>
            <div className="testimonial-4 quote-right">
              <div className="testimonial-text">
                <strong className="testimonial-name">
                  <IntlMessages id={'main.quote.title'} />
                </strong>
                <p>
                  <IntlMessages id={'main.quote.description1'} />
                  <br />
                  <IntlMessages id={'main.quote.description2'} />
                </p>
              </div>
            </div>
          </div>
          <div className="row icon-wraper-1">
            <div className="col-lg-4 col-md-6">
              <div
                className="section-head style-3 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <h6 className="sub-title text-primary bgl-primary m-b15">
                  <IntlMessages id={'main.vacancies.section'} />
                </h6>
                <h2 className="title m-t10">
                  <IntlMessages id={'main.vacancies.title'} />
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === 'p1'
                    ? 'icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active'
                    : 'icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp'
                }`}
                onMouseOver={() => setOpen('p1')}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-office"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Front Middle/Senior JS</h4>
                  <p>
                    React/NextJS/Docker/Redux Thunk або Saga/Websocket/Material
                    UI/Docker
                  </p>
                  <p>
                    <IntlMessages id={'main.vacancies.article1'} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === 'p2'
                    ? 'icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active'
                    : 'icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp'
                }`}
                onMouseOver={() => setOpen('p2')}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-pie-charts"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Back Middle/Senior JS</h4>
                  <p>Nestjs/PostrgeSQL/Mongo/Redis/ Websocket/Docker</p>
                  <p>
                    <IntlMessages id={'main.vacancies.article2'} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === 'p3'
                    ? 'icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active'
                    : 'icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp'
                }`}
                onMouseOver={() => setOpen('p3')}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-dollar"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">SMM-manager</h4>
                  <p>
                    <IntlMessages id={'main.vacancies.article3'} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === 'p4'
                    ? 'icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active'
                    : 'icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp'
                }`}
                onMouseOver={() => setOpen('p4')}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-line-graph"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">SEO</h4>
                  <p>
                    <IntlMessages id={'main.vacancies.article4'} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === 'p5'
                    ? 'icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active'
                    : 'icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp'
                }`}
                onMouseOver={() => setOpen('p5')}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-help"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Administrator/Moderator</h4>
                  <p>
                    Vestibulum a efficitur ex. Ut iaculis dapibus iaculis.
                    Praesent lacus magna, rhoncus quis magna quis, pellentesque
                    luctus leoam iaculis venenatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service2
