import Link from "next/link";

function AboutUs_2() {
    return (
      <>
        {/* <!-- About us --> */}
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat", paddingBottom: '40px'}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/about/pic1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">Докладніше</h6>
							<h2 className="title m-b20">Які цілі ми ставимо перед World4life?</h2>
							<p>Ми — World4life. Волонтери, що прагнуть об’єднати своїх однодумців з усього світу. Щоби кожен міг у зручний спосіб звернутися по допомогу й отримати її. І щоби кожен, хто прагне покращити цей світ, міг зробити це в зручний та доступний спосіб. Тому що не буває великих потреб чи замалих можливостей і навпаки, чи не так?</p>
							<p>World4life — це платформа для розміщення оголошень про потреби наших користувачів та можливості наших волонтерів.
							   Для зручності ми розподіляємо всі оголошення за категоріями, перелік яких постійно доповнюватиметься.
							   Користувачі можуть повідомити про потребу в житлі, харчових продуктах, транспорті, професійній допомозі — медичній, фінансовій, інформаційній, юридичній та ін. або розмістити інформацію про те, що готовий прихистити, нагодувати, допомогти дістатися місця призначення, проконсультувати того, кому це потрібно.
							</p>
							<h2 className="title m-b20">Для кого ми створюємо World4life?</h2>
							<p>
								Ідея створення багатопрофільної волонтерської платформи з’явилася на початку безпрецедентної за розмахом жорстокості та неадекватності російсько-української війни. Вона поділила життя мільйонів українців на «до» та «після». Але всупереч сподіванням ворога ми згуртувалися настільки, що в новому «після» кожен був готовий віддати останнє і знав, що те ж саме для нього зробить хтось інший. Ми згуртували європейську та світову спільноту, і зробимо все, щоби платформа World4life працювала по всьому світу, і кожен у світі знав, що він ніколи не буде самотнім.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUs_2;