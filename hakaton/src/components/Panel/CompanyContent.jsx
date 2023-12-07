import Apple from '../../img/apple.png';
import Samsung from '../../img/samsung.png';
import MTS from '../../img/mts.png';
import b8 from '../../img/b8.png';
import tinkoff from '../../img/tinkoff.png';
import VK from '../../img/vk.png';
import App from '../App';
import {Link} from 'react-router-dom'
const CompanyContent = () => {
    return (
        <div className="relative bg-[#EFEFEF] w-full h-screen rounded-tl-[80px] px-[50px] py-[150px]">
            <div className="grid grid-cols-3 gap-[100px] items-center justify-center">
                <Link to="/panel/company/b8" className="bg-white flex flex-col p-[15px]  h-[310px] rounded-[15px] justify-center items-center">
                    <div className='w-[100px] h-[100px] flex items-center justify-center rounded-full' style={{
                        position: "relative",
                        top: "-100px",
                        padding: "5px",
                        background: "white"
                    }} >
                        <img src={b8} alt="" />
                    </div>
                    <h3 className='font-medium text-[20px]'>Самый северный акселератор инновационных проектов B8</h3>
                </Link>
                <Link to="/panel/company/b8" className="bg-white flex flex-col p-[15px] h-[310px] rounded-[15px] justify-center items-center">
                    <div className='w-[100px] h-[100px] flex items-center justify-center h-[100px] rounded-full' style={{
                        position: "relative",
                        top: "-100px",
                        padding: "5px",
                        background: "white"
                    }} >
                        <img src={Apple} alt="" /></div>
                    <h3 className='font-medium text-[20px]'>AppleInc. - крупнейшая американская корпорация, производящая компьютеры, планшеты, телефоны, плееры и программное обеспечение</h3>
                </Link>
                <Link to="/panel/company/b8" className="bg-white flex flex-col p-[15px] h-[310px] rounded-[15px] justify-center items-center">
                    <div className='w-[100px] h-[100px] flex items-center justify-center rounded-full' style={{
                        position: "relative",
                        top: "-100px",
                        padding: "5px",
                        background: "white"
                    }} ><img src={Samsung} alt="" /></div>
                    <h3 className='font-medium text-[20px]'>Samsung Group — южнокорейская группа компаний, один из крупнейших чеболей, основанный в 1938 году.</h3>
                </Link>
                <Link to="/panel/company/b8" className="bg-white flex flex-col p-[15px] h-[310px] rounded-[15px] justify-center items-center">
                    <div className='w-[100px] h-[100px] flex items-center justify-center rounded-full' style={{
                        position: "relative",
                        top: "-80px",
                        padding: "5px",
                        background: "white"
                    }} ><img src={MTS} alt="" /></div>
                    <h3 className='font-medium text-[20px]'>Публичное акционерное общество «Мобильные ТелеСистемы» (ПАО «МТС») — ведущая компания в России и странах СНГ по предоставлению услуг мобильной и фиксированной связи и т.д.</h3>
                </Link>
                <Link to="/panel/company/b8" className="bg-white flex flex-col p-[15px] h-[310px] rounded-[15px] justify-center items-center">
                    <div className='w-[100px] h-[100px] flex items-center justify-center rounded-full' style={{
                        position: "relative",
                        top: "-100px",
                        padding: "5px",
                        background: "white"
                    }} ><img src={VK} alt="" /></div>
                    <h3 className='font-medium text-[20px]'>ВКонтакте — крупнейшая социальная сеть в России и странах СНГ.</h3>
                </Link>
                <Link to="/panel/company/b8" className="bg-white flex flex-col p-[15px] h-[310px] rounded-[15px] justify-center items-center">
                    <div className='w-[100px] h-[100px] flex items-center justify-center rounded-full' style={{
                        position: "relative",
                        top: "-80px",
                        padding: "5px",
                        background: "white"
                    }} ><img src={tinkoff} alt="" /></div>
                    <h3 className='font-medium text-[20px]'>«Тинько́фф Банк»  — российский коммерческий банк, сфокусированный полностью на дистанционном обслуживании, не имеющий розничных отделений.</h3>
                </Link>
            </div>
        </div>
    )
}

export default CompanyContent