import b8 from '../../img/b8.png';
import image1 from '../../img/image 10.png';
import image2 from '../../img/image 11.png';
import image3 from '../../img/image 12.png';
import image4 from '../../img/image 13.png';
import image5 from '../../img/image 14.png';
import image6 from '../../img/image 15.png';
import image7 from '../../img/image 16.png';

const ProfileCompanyContent = () => {
    return (
        <div className="relative bg-[#EFEFEF] w-full h-screen rounded-tl-[80px] p-[50px]">
            <div className="flex flex-col bg-white p-[2em] rounded-[15px]" style={{
                maxHeight: "1000px",
                overflow: "auto"
            }}>
                <div className='flex gap-[20px] flex items-center'>
                    <img src={b8} alt="" className='max-w-[100px] max-h-[100px]' />
                    <span className='font-bold text-[40px]'>САМЫЙ СЕВЕРНЫЙ АКСЕЛЕРАТОР ИННОВАЦИОННЫХ ПРОЕКТОВ B8</span>
                </div>
                <div className='mt-[30px] ml-[100px] mr-[100px]'>
                    <span className='text-[30px] font-bold'>Что такое акселератор В8</span>
                </div>
                <div className='mt-[30px] ml-[100px] mr-[100px]'>
                    <span className='text-[30px] font-bold'>Акселератор В8 - это ускоренная программа развития стартапов,включающая в себя менторскую, финансовую и образовательную поддержку</span>
                </div>
                <div className='mt-[30px] ml-[100px] mr-[100px]'>
                    <img src={image1} alt="" />
                </div>
                <div className='mt-[30px] ml-[100px] mr-[100px]'>
                    <span className='text-[30px] font-bold'>Команда проекта</span>
                </div>
                <div className='mt-[50px] grid grid-cols-3 gap-[100px] ml-[100px] mr-[100px]'>
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                    <img src={image6} alt="" />
                    <img src={image7} alt="" />
                </div>
            </div>
        </div >
    )
}

export default ProfileCompanyContent