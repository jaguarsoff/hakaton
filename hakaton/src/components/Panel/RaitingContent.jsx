import Apple from '../../img/apple.png';
import Samsung from '../../img/samsung.png';
import MTS from '../../img/mts.png';
import b8 from '../../img/b8.png';
import tinkoff from '../../img/tinkoff.png';
import VK from '../../img/vk.png';
const RaitingContent = () => {
    return (
        <div className="relative bg-[#EFEFEF] w-full h-screen rounded-tl-[80px] p-[50px]">
            <div className="flex flex-col items-center justify-center">
                <div className="rounded-[40px] mb-[30px] gap-[40px] bg-white p-[20px] flex justify-between items-center">
                    <div className="flex gap-[15px] items-center">
                        <span className="font-medium " style={{ writingMode:"vertical-rl" }}>МЕСТО</span>
                        <div className="bg-[#CE6096] text-white p-[30px] flex justify-centere items-center text-[64px] rounded-r-[100px]">
                            01
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <span>
                                <b>Полученный грант:</b> 200000 руб
                            </span>
                            <span>
                                <b>Общий доход:</b> 3000000 руб
                            </span>
                            <span>
                                <b>Участие в событиях:</b> Акселераторы
                            </span>
                        </div>
                    </div>
                    <img src={b8} alt="" className='max-w-[100px] max-h-[100px]'/>
                </div>
                <div className="rounded-[40px] mb-[30px] gap-[40px] bg-white p-[20px] flex justify-between items-center">
                    <div className="flex gap-[15px] items-center">
                        <span className="font-medium " style={{ writingMode:"vertical-rl" }}>МЕСТО</span>
                        <div className="bg-[#DE9ABD] text-white p-[30px] flex justify-centere items-center text-[64px] rounded-r-[100px]">
                            02
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <span>
                                <b>Полученный грант:</b> 100000 руб
                            </span>
                            <span>
                                <b>Общий доход:</b> 2000000 руб
                            </span>
                            <span>
                                <b>Участие в событиях:</b> 
                            </span>
                        </div>
                    </div>
                    <img src={VK} alt="" className='max-w-[100px] max-h-[100px]'/>
                </div>
                <div className="rounded-[40px] mb-[30px] gap-[40px] bg-white p-[20px] flex justify-between items-center">
                    <div className="flex gap-[15px] items-center">
                        <span className="font-medium " style={{ writingMode:"vertical-rl" }}>МЕСТО</span>
                        <div className="bg-[#DB959D] text-white p-[30px] flex justify-centere items-center text-[64px] rounded-r-[100px]">
                            03
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <span>
                                <b>Полученный грант:</b> 100000 руб
                            </span>
                            <span>
                                <b>Общий доход:</b> 1000000 руб
                            </span>
                            <span>
                                <b>Участие в событиях:</b> Выставки
                            </span>
                        </div>
                    </div>
                    <img src={MTS} alt="" className='max-w-[100px] max-h-[100px]'/>
                </div>
                <div className="rounded-[40px] mb-[30px] gap-[40px] bg-white p-[20px] flex justify-between items-center">
                    <div className="flex gap-[15px] items-center">
                        <span className="font-medium " style={{ writingMode:"vertical-rl" }}>МЕСТО</span>
                        <div className="bg-[#CE6096] text-white p-[30px] flex justify-centere items-center text-[64px] rounded-r-[100px]">
                            04
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <span>
                                <b>Полученный грант:</b> 900000 руб
                            </span>
                            <span>
                                <b>Общий доход:</b> 1000000 руб
                            </span>
                            <span>
                                <b>Участие в событиях:</b> 
                            </span>
                        </div>
                    </div>
                    <img src={tinkoff} alt="" className='max-w-[100px] max-h-[100px]'/>
                </div>
            </div>
        </div>
    )
}

export default RaitingContent