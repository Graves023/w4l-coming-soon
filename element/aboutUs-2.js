import Link from "next/link";
import IntlMessages from "../src/i18n/IntlMessages";

function AboutUs_2() {
  return (
    <>
      {/* <!-- About us --> */}
      <section
        className="content-inner about-wraper-1"
        style={{
          backgroundImage: "url(images/background/bg15.png)",
          backgroundSize: "contain",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          paddingBottom: "40px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media left">
                <img src="images/about/pic1.jpg" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-3">
                <h6 className="sub-title text-primary bgl-primary m-b15">
                  <IntlMessages id={"details"} />
                </h6>
                <h2 className="title m-b20">
                  <IntlMessages id={"details.title"} />
                </h2>
                <p>
                  <IntlMessages id={"details.desc"} />
                </p>
                <p>
                  <IntlMessages id={"details.desc2"} />
                </p>
                <h2 className="title m-b20">
                  <IntlMessages id={"details.why"} />
                </h2>
                <p>
                  <IntlMessages id={"details.why.desc"} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs_2;
