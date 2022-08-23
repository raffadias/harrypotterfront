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
                    <div className="border-2 border-solid bg-[#690120] border-amber-300 rounded-xl h-[45rem] ml-[15rem] mr-[10rem] mt-[2rem]">
                        <div className="flex flex-col justify-center">
                            <img src={logo} alt="" className="h-20 w-20 mt-5 self-center"/>
                            <h1 className="font-bold text-white self-center mt-[1rem] text-4xl shadow-sm">Gryffindor House</h1>
                        </div>
                        <div className="text-xl text-white mt-[2rem] mx-[2rem]">
                            {mainText}
                        </div>
                        <div className="flex flex-col justify-center">
                            <img src={godric} className="h-[18rem] w-[10rem] self-center mt-5 rounded-xl border-2 border-amber-300 shadow-lg" alt="" />
                            <p className="text-white font-bold text-xl">Godric Gryffindor</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}