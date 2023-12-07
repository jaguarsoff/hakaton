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
      <header className="p-10">
        <img src={logo} alt="" />
      </header>
      <main className="mt-20">
        <section className="first flex p-10">
          <div className="left">
            <h1 className="text-5xl">
              «Monorts»: <br />
              Инновации путь в будущее!
            </h1>
            <Link to="/register" className='button-start mt-8'>Начать работу </Link>
          </div>
          <div className="right">
            <img src={fond} alt="" width="1200" />
          </div>
        </section>
        <div className="transition_img mt-10">
          <img src={transition} alt="" />
        </div>
        <section className='second flex flex-col p-10 bg-purple-700 justify-center items-center text-white'>
          <h1 className="text-5xl">Monorts — это</h1>
          <img
            src={first_array}
            alt=""
            className='svg_custom'
            style={{
              width: '1000px',
              top: '-50px'
            }}
          />
          <div className="flex block_svg gap-10 items-center">
            <img src={first_svg} alt="" className='svg_custom' />
            <div className="flex flex-col">
              <h4 className="text-2xl">Мониторинг компаний</h4>
              <span>Возможность мониторинга финансовых <br /> состояний компаний</span>
            </div>
          </div>
          <img src={second_array} alt="" className='svg_custom' style={{
            position: "relative",
            width: '600px'
          }} />
          <div className="flex block_svg1 items-center" style={{
            position: "relative",
            top: '-200px'
          }}>
            <div className="flex flex-col" >
              <h4 className="text-2xl" style={{ textAlign: 'right' }}>Дорожная карта </h4>
              <span style={{ textAlign: 'right' }}>Отслеживание этапов реализации <br /> проектов компаний</span>
            </div>
            <img src={second_svg} alt="" className='svg_custom' />
          </div>
          <img src={third_array} alt="" className='svg_custom' style={{
            position: "relative",
            top: "-200px",
            width: "1000px"
          }} />
          <div className="flex block_svg items-center" style={{
            position: "relative",
            top: "-200px",
          }}>
            <img src={third_svg} alt="" className='svg_custom' />
            <div className="flex flex-col">
              <h4 className="text-2xl">Квалифицированные педагоги и специалисты</h4>
              <span style={{ maxWidth: "900px" }}>Педагоги «Смены» помогают каждому ребенку
                развить творческий и интеллектуальный
                потенциал, научиться командной работе</span>
            </div>
          </div>
        </section>
        <div className="transitionEnd_img">
          <img src={transitionEnd} alt="" />
        </div>
        <section className='last flex justify-center items-center p-8'>
          <Link to='/register' className='button-start'>Начать работу </Link>
        </section>
      </main>
    </div>
    </>

  );
}

export default Landing;