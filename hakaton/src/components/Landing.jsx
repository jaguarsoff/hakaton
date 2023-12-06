import logo from '../img/logo.png';
import fond from '../img/fond.png'
import transition from '../img/transition.png'
import first_array from '../img/first_array.png'
import first_svg from '../img/first_svg.png'
import second_array from '../img/second_array.png'
import second_svg from '../img/second_svg.png'
import third_array from '../img/third_array.png'
import third_svg from '../img/third_svg.png'
import transitionEnd from '../img/transitionEnd.png'
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <>

      <div className="landing">
        <header>
          <img src={logo} alt="" />
        </header>
        <main>
          <section className="first">
            <div className="left">
              <h1>«Monorts»: <br />
                Инновации путь в будущее!</h1>
              <Link className='button-start' to='/development'>Начать работу </Link>
            </div>
            <div className="right"><img src={fond} alt="" width="1200" /></div>
          </section>
          <div className="transition_img">
            <img src={transition} alt="" />
          </div>
          <section className='second'>
            <h1> Monorts — это</h1>
            <img
              src={first_array}
              alt=""
              className='svg_custom'
              style={{
                width: '1000px',
                top: '-50px'
              }}
            />
            <div className="flex block_svg">
              <img src={first_svg} alt="" className='svg_custom' />
              <div className="flex flex-col">
                <h4>Мониторинг компаний</h4>
                <span>Возможность мониторинга финансовых <br /> состояний компаний</span>
              </div>
            </div>
            <img src={second_array} alt="" className='svg_custom' style={{
              position: "relative",
              width: '600px'
            }} />
            <div className="flex block_svg1" style={{
              position: "relative",
              top: '-200px'
            }}>
              <div className="flex flex-col" >
                <h4 style={{ textAlign: 'right' }}>Дорожная карта </h4>
                <span style={{ textAlign: 'right' }}>Отслеживание этапов реализации <br /> проектов компаний</span>
              </div>
              <img src={second_svg} alt="" className='svg_custom' />

            </div>

            <img src={third_array} alt="" className='svg_custom' style={{
              position: "relative",
              top: "-200px",
              width: "1000px"
            }} />
            <div className="flex block_svg" style={{
              position: "relative",
              top: "-200px",
            }}>
              <img src={third_svg} alt="" className='svg_custom' />
              <div className="flex flex-col">
                <h4>Квалифицированные
                  педагоги и специалисты</h4>
                <span style={{ maxWidth: "900px" }}>Педагоги «Смены» помогают каждому ребенку
                  развить творческий и интеллектуальный
                  потенциал, научиться командной работе</span>
              </div>
            </div>

          </section>
          <div className="transitionEnd_img">
            <img src={transitionEnd} alt="" />
          </div>
          <section className='last'>
          <Link className='button-start' to='/development'>Начать работу </Link>
          </section>
        </main>
      </div>
    </>

  );
}

export default Landing;