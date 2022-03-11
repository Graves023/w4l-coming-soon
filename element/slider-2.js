import { useEffect, useState } from 'react';
import moment from 'moment';

function Slider2() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showSemicolon, setShowSemicolon] = useState(false);
  
  useEffect(() => {
    setInterval(() => {
      const now = moment();
      const then = moment('2022-03-27 12:12:12', 'YYYY-MM-DD hh:mm:ss');
      const countdown = moment(then - now);
      setDays(countdown.format('D'));
      setHours(countdown.format('HH'));
      setMinutes(countdown.format('mm'));
      setSeconds(countdown.format('ss'));
    }, 1000);
  }, []);
  
  return (
    // <!-- Slider -->
    <div className="banner-two gradient">
      <div className="container">
        <div className="banner-inner">
          <img
            className="img1 move-2"
            src="images/main-slider/slider2/pic3.png"
            alt
          />
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="banner-content text-white">
                <h6
                  className="wow fadeInUp sub-title bgl-light text-white"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Про нас
                </h6>
                <h1
                  className="wow fadeInUp m-b20"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  World4life — це незалежна волонтерська платформа взаємодопомоги.
                </h1>
                <p
                  className="wow fadeInUp m-b30"
                  data-wow-delay="1.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Кожен із нас може опинитися в скрутній ситуації. Ми не можемо цього передбачити, але ми ніколи не опиняємось сам на сам із труднощами. Тому що кожен із нас — людина з великим серцем, що може допомогти добрим словом, дією, професійними знаннями, або поділитися тим, що має в достатку.
                </p>
                <div className="countdown">
                  <div className="date"><span className="time days">{days}</span>
                    <span>дн.</span>
                  </div>
                  <div className="date"><span className="time hours">{hours}</span>
                    <span>год.</span>
                  </div>
                  <div className="date"><span className="time mins">{minutes}</span>
                    <span>хв.</span>
                  </div>
                  <div className="date"><span className="time secs">{seconds}</span>
                    <span>сек.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="img2 move-1" src="images/pattern/pattern8.png" alt />
          <img className="img3 move-2" src="images/pattern/pattern9.png" alt />
        </div>
      </div>
      <div className="dz-media">
        <img src="images/main-slider/slider2/pic1.jpg" alt />
      </div>
    </div>
  );
}

export default Slider2;
