import { useState } from "react";
import IntlMessages from "../src/i18n/IntlMessages";

function Service2() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Service --> */}
      <section
        className="content-inner-2"
        style={{
          backgroundImage: "url(images/background/bg2.png)",
          backgroundRepeat: "no-repeat",
          paddingTop: "20px",
        }}
      >
        <div className="container">
          <div className={"row m-b40"}>
            <div className="testimonial-4 quote-right">
              <div className="testimonial-text">
                <strong className="testimonial-name">
                  <IntlMessages id={"remark"} />
                </strong>
                <p>
                  <IntlMessages id={"remark.desk"} />
                  <br />
                  <IntlMessages id={"remark.desk2"} />
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
                  <IntlMessages id={"vacancies"} />
                </h6>
                <h2 className="title m-t10">
                  <IntlMessages id={"vacancies.search"} />
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p1")}
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
                    <IntlMessages id={"vacancies.front.middle"} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p2")}
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
                    <IntlMessages id={"vacancies.back.middle"} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-dollar"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">SMM-менеджер</h4>
                  <p>
                    <IntlMessages id={"vacancies.smm"} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p4"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p4")}
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
                    <IntlMessages id={"vacancies.seo"} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p5"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p5")}
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
                    <IntlMessages id={"vacancies.moderator"} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service2;
