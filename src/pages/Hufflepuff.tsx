import Sidebar from "../components/Sidebar";
import logo from "../assets/hufflepuff.png";
import helga from "../assets/helga.webp";

export default function Hufflepuff() {
    const mainText = `Hufflepuff was one of the four Houses of Hogwarts School of Witchcraft and Wizardry. 
    Its founder was the medieval witch Helga Hufflepuff. Hufflepuff was the most inclusive among the four houses, 
    valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members.`
    return (
        <>
            <div className="bg-gray-700 h-screen w-auto">
                <div className="flex flex-col text-center font-aboreto">
                    <Sidebar />
                    <div className="border-2 border-solid bg-[#b48c1d] border-gray-900 rounded-xl h-auto w-auto 
                        ml-[15rem] mr-[10rem] sm:ml-[8rem] sm:mr-5 sm:mt-[1rem] mt-[2rem]">
                        <div className="flex flex-col justify-center">
                            <img src={logo} alt="" className="h-20 w-20 mt-5 self-center"/>
                            <h1 className="font-bold text-white self-center mt-[1rem] text-4xl md:text-2xl sm:text-md shadow-sm">Hufflepuff House</h1>
                        </div>
                        <div className="md:text-md sm:text-[0.8rem] text-white mt-[1.5rem] mx-[2rem]">
                            {mainText}
                        </div>
                        <div className="flex flex-col justify-center mx-auto my-auto md:hidden">
                            <img src={helga} className="h-[18rem] w-[10rem] lg:h-[16rem] lg:w-[8rem] self-center mt-5 rounded-xl border-2 border-gray-900 shadow-lg" alt="" />
                            <p className="text-white font-bold text-xl">Helga Hufflepuff</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}