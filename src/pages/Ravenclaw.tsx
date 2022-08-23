import Sidebar from "../components/Sidebar";
import logo from "../assets/ravenclaw.png";
import rowena from "../assets/rowena.webp";

export default function Ravenclaw() {
    const mainText = `Ravenclaw was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. 
    Its founder was the medieval witch Rowena Ravenclaw. Members of this house were characterised by their wit, learning, and wisdom. 
    The emblematic animal symbol was an eagle, and blue and bronze were its colours.
    The Head of Ravenclaw was Filius Flitwick, and the House ghost was the Grey Lady, real name Helena Ravenclaw, daughter of Rowena.`
    return (
        <>
            <div className="bg-gray-700 h-screen w-auto">
                <div className="flex flex-col text-center font-aboreto">
                    <Sidebar />
                    <div 
                        className="border-2 border-solid bg-[#0E1A40] border-[#B08D57] rounded-xl h-[45rem] 
                        ml-[15rem] mr-[10rem] mt-[2rem]">
                        <div className="flex flex-col justify-center">
                            <img src={logo} alt="" className="h-20 w-20 mt-5 self-center"/>
                            <h1 className="font-bold text-white self-center mt-[0.5rem] text-4xl shadow-sm">Ravenclaw House</h1>
                        </div>
                        <div className="text-xl text-white mt-[1.5rem] mx-[2rem]">
                            {mainText}
                        </div>
                        <div className="flex flex-col justify-center">
                            <img src={rowena} className="h-[18rem] w-[10rem] self-center mt-5 rounded-xl border-2 border-[#B08D57] shadow-lg" alt="" />
                            <p className="text-white font-bold text-xl">Rowena Ravenclaw</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}