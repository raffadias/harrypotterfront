import Sidebar from "../components/Sidebar";
import logo from "../assets/gryffindor.png";
import godric from "../assets/godric.webp";

export default function Gryffindor() {
    const mainText = `Gryffindor was one of the four Houses of Hogwarts School of Witchcraft and Wizardry and was founded by Godric Gryffindor. 
    Gryffindor instructed the Sorting Hat to choose students possessing characteristics he most valued, such as courage, chivalry, 
    nerve and determination, to be sorted into his house. The emblematic animal was a lion, and its colours were scarlet and gold. 
    Sir Nicholas de Mimsy-Porpington, also known as "Nearly Headless Nick", was the House ghost.`
    return (
        <>
            <div className="bg-gray-700 h-screen w-auto">
                <div className="flex flex-col text-center font-aboreto">
                    <Sidebar />
                    <div className="border-2 border-solid bg-[#690120] border-amber-300 rounded-xl h-auto w-auto 
                        ml-[15rem] mr-[10rem] sm:ml-[8rem] sm:mr-5 sm:mt-[1rem] mt-[2rem] lg:mt-[1rem]">
                        <div className="flex flex-col justify-center">
                            <img src={logo} alt="" className="h-20 w-20 mt-5 self-center"/>
                            <h1 className="font-bold text-white self-center mt-[1rem] text-4xl lg:text-2xl sm:text-md shadow-sm">Gryffindor House</h1>
                        </div>
                        <div className="md:text-[0.9rem] sm:text-[0.8rem] text-white mt-[2rem] mx-[2rem]">
                            {mainText}
                        </div>
                        <div className="flex flex-col justify-center mx-auto my-auto md:hidden">
                            <img src={godric} className="h-[16rem] w-[10rem] lg:h-[6rem] lg:w-[4rem] xl:h-[14rem] xl:w-[8rem] self-center mt-5 rounded-xl border-2 border-amber-300 shadow-lg" alt="" />
                            <p className="text-white font-bold text-xl lg:text-lg">Godric Gryffindor</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}