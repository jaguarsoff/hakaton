import b8 from '../../img/b8.png';
const ProfileContent = () => {
    return (
        <div className="relative bg-[#EFEFEF] w-full h-screen rounded-tl-[80px]">
            <div className="p-[30px] bg-white rounded-[20px] w-100 h-100">
                <div className="">
                    <div className="w-[100px] h-[100px] flex items-center justify-center">
                        <img src={b8} alt="" className="max-w-[100px] max-h-[100px]" />
                    </div>
                    <h4 className="text-2xl font-semibold">Самый северный акселератор инновационных проектов B8</h4>
                </div>

            </div>
        </div>
    )
}

export default ProfileContent